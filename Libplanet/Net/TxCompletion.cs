#nullable enable
using System;
using System.Collections.Generic;
using System.Diagnostics;
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
            _cancellationTokenSource = new CancellationTokenSource();
            _blockChain = blockChain;
            _txFetcher = txFetcher;
            _txBroadcaster = txBroadcaster;
            TxReceived = new AsyncAutoResetEvent();

            _logger = Log
                .ForContext<TxCompletion<TPeer, TAction>>()
                .ForContext("Source", nameof(TxCompletion<TPeer, TAction>));
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
                _logger.Debug(
                    "No unaware transactions to receive.");
                return;
            }

            _logger.Debug(
                "Unaware transactions to receive: {TxIdCount}.",
                required.Count
            );

            // spawn task.
            _ = RequestTxsFromPeerAsync(peer, required, _cancellationTokenSource.Token);
        }

        private HashSet<TxId> GetRequiredTxIds(IEnumerable<TxId> ids)
        {
            return new HashSet<TxId>(ids
                .Where(txId =>
                    !_blockChain.StagePolicy.Ignores(_blockChain, txId)
                        && _blockChain.StagePolicy.Get(_blockChain, txId, filtered: false) is null
                        && _blockChain.Store.GetTransaction<TAction>(txId) is null));
        }

        private async Task RequestTxsFromPeerAsync(
            TPeer peer,
            HashSet<TxId> txIds,
            CancellationToken cancellationToken)
        {
            try
            {
                const string log =
                    "Starting RequestTxsFromPeerAsync from {Peer}. " +
                    "(_requiredTxIds count: {Count})";
                _logger.Debug(log, peer, txIds.Count);

                if (cancellationToken.IsCancellationRequested)
                {
                    throw new TaskCanceledException();
                }

                _logger.Debug(
                    "Start to run _txFetcher from {Peer}. (count: {Count})",
                    peer,
                    txIds.Count);
                var stopWatch = new Stopwatch();
                stopWatch.Start();
                var txs = new HashSet<Transaction<TAction>>(
                    await _txFetcher(
                            peer,
                            txIds,
                            cancellationToken)
                        .ToListAsync(cancellationToken)
                        .AsTask());
                _logger.Debug(
                    "End of _txFetcher from {Peer}. (received: {Count}); " +
                    "Time taken: {Elapsed}",
                    peer,
                    txs.Count,
                    stopWatch.Elapsed);

                txs = new HashSet<Transaction<TAction>>(
                    txs.Where(
                        tx =>
                        {
                            if (_blockChain.Policy.ValidateNextBlockTx(
                                    _blockChain,
                                    tx) is { } tpve)
                            {
                                const string message =
                                    "Received transaction {TxId} from {Peer} will not be " +
                                    "staged since it does not follow policy.";
                                _logger.Debug(
                                    tpve,
                                    message,
                                    tx.Id,
                                    peer);
                                _blockChain.StagePolicy.Ignore(_blockChain, tx.Id);
                                return false;
                            }
                            else
                            {
                                return true;
                            }
                        }));

                var stagedTxs = new List<Transaction<TAction>>();
                foreach (var tx in txs)
                {
                    try
                    {
                        if (_blockChain.StageTransaction(tx))
                        {
                            stagedTxs.Add(tx);
                        }
                    }
                    catch (InvalidTxException ite)
                    {
                        const string msg = "Received transaction from {Peer} with id {TxId} " +
                                  "will not be staged since it is invalid.";
                        _logger.Error(ite, msg, peer, tx.Id);
                    }
                }

                // To maintain the consistency of the unit tests.
                if (txs.Any())
                {
                    TxReceived.Set();
                }

                if (stagedTxs.Any())
                {
                    _logger.Debug(
                        "{StagedTxCount} out of {TxCount} txs from {Peer} staged successfully",
                        stagedTxs.Count,
                        txs.Count,
                        peer);

                    _txBroadcaster(peer, stagedTxs);
                }
                else
                {
                    _logger.Information(
                        "Failed to get {TxIdCount} transactions from {Peer}.",
                        txIds.Count,
                        peer);
                }
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An error occurred during {FName} from {Peer}.",
                    nameof(RequestTxsFromPeerAsync),
                    peer);
                throw;
            }
            finally
            {
                _logger.Debug(
                    "End of {FName} from {Peer}.",
                    nameof(RequestTxsFromPeerAsync),
                    peer);
            }
        }
    }
}
