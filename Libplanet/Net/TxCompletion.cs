#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net
{
    public class TxCompletion<TPeer, TAction> : IDisposable
    where TPeer : notnull
    where TAction : IAction, new()
    {
        private readonly ConcurrentDictionary<TPeer, Task> _txSyncTasks;
        private readonly ConcurrentDictionary<TPeer, ConcurrentBag<TxId>> _requiredTxIds;
        private readonly CancellationTokenSource _cancellationTokenSource;
        private readonly BlockChain<TAction> _blockChain;
        private readonly TxFetcher _txFetcher;
        private readonly TxBroadcaster _txBroadcaster;
        private readonly ILogger _logger;

        private bool _disposed;

        public TxCompletion(
            BlockChain<TAction> blockChain,
            TxFetcher txFetcher,
            TxBroadcaster txBroadcaster)
        {
            _txSyncTasks = new ConcurrentDictionary<TPeer, Task>();
            _requiredTxIds = new ConcurrentDictionary<TPeer, ConcurrentBag<TxId>>();
            _cancellationTokenSource = new CancellationTokenSource();
            _blockChain = blockChain;
            _txFetcher = txFetcher;
            _txBroadcaster = txBroadcaster;
            TxReceived = new AsyncAutoResetEvent();

            _logger = Log.ForContext<TxCompletion<TPeer, TAction>>();
        }

        public delegate IAsyncEnumerable<Transaction<TAction>> TxFetcher(
            TPeer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken
        );

        public delegate void TxBroadcaster(TPeer except, IEnumerable<Transaction<TAction>> txs);

        internal AsyncAutoResetEvent TxReceived { get; }

        public void Dispose()
        {
            if (!_disposed)
            {
                _cancellationTokenSource.Cancel();
                var tasks = _txSyncTasks.Values.ToArray();
                Task.WaitAll(tasks);
                _disposed = true;
            }
        }

        public void Demand(TPeer peer, TxId txId) => Demand(peer, new[] { txId });

        public void Demand(TPeer peer, IEnumerable<TxId> txIds)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TxCompletion<TPeer, TAction>));
            }

            HashSet<TxId> required = GetRequiredTxIds(txIds);

            if (!required.Any())
            {
                _logger.Debug("No unaware transactions to receive.");
                return;
            }

            _logger.Debug(
                "Unaware transactions to receive: {TxIdCount}.",
                required.Count
            );

            if (_txSyncTasks.ContainsKey(peer))
            {
                _requiredTxIds[peer] =
                    new ConcurrentBag<TxId>(_requiredTxIds[peer].Union(required));
            }
            else
            {
                // spawn task.
                _requiredTxIds[peer] = new ConcurrentBag<TxId>(required);
                _txSyncTasks[peer] = RequestTxsFromPeerAsync(peer, _cancellationTokenSource.Token);
            }
        }

        private HashSet<TxId> GetRequiredTxIds(IEnumerable<TxId> ids)
        {
            return new HashSet<TxId>(ids
                .Where(txId =>
                    !_blockChain.StagePolicy.Ignores(_blockChain, txId)
                        && _blockChain.StagePolicy.Get(_blockChain, txId, true) is null
                        && _blockChain.Store.GetTransaction<TAction>(txId) is null));
        }

        private async Task RequestTxsFromPeerAsync(
            TPeer peer,
            CancellationToken cancellationToken)
        {
            while (_requiredTxIds[peer].Any())
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    _txSyncTasks.TryRemove(peer, out _);
                    throw new TaskCanceledException();
                }

                try
                {
                    HashSet<TxId> txIds = GetRequiredTxIds(_requiredTxIds[peer]);
                    _requiredTxIds[peer] = new ConcurrentBag<TxId>();
                    var txs = new HashSet<Transaction<TAction>>(
                        await _txFetcher(
                                peer,
                                txIds,
                                cancellationToken)
                            .ToListAsync(cancellationToken)
                            .AsTask());

                    txs = new HashSet<Transaction<TAction>>(
                        txs.Where(
                            tx =>
                            {
                                if (_blockChain.Policy.ValidateNextBlockTx(_blockChain, tx) is null)
                                {
                                    return true;
                                }

                                _logger.Debug(
                                    "Received transaction {TxId} will not be staged " +
                                    "since it does not follow policy.",
                                    tx.Id);
                                _blockChain.StagePolicy.Ignore(_blockChain, tx.Id);
                                return false;
                            }));

                    foreach (var tx in txs)
                    {
                        try
                        {
                            _blockChain.StageTransaction(tx);
                        }
                        catch (InvalidTxException ite)
                        {
                            _logger.Error(
                                ite,
                                "Transaction {TxId} will not be staged since it is invalid.",
                                tx.Id);
                        }
                    }

                    if (txs.Any())
                    {
                        TxReceived.Set();
                        _logger.Debug(
                            "{TxCount} txs staged successfully.",
                            txs.Count);

                        // TODO: txs includes transaction which were ignored due to its nonce,
                        // which should not be re-broadcasted.
                        _txBroadcaster(peer, txs);
                    }
                    else
                    {
                        _logger.Information(
                            "Failed to get {TxIdCount} transactions to stage.",
                            _requiredTxIds[peer].Count);
                    }
                }
                catch (Exception)
                {
                    // Just ignore the exception.
                }
            }

            _txSyncTasks.TryRemove(peer, out _);
        }
    }
}
