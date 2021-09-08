using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Libplanet.Tx;
using Nito.AsyncEx;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private readonly ConcurrentDictionary<BoundPeer, HashSet<TxId>> _txSyncTaskQueue;

        private readonly FixedSizedQueue<TxId> _txIgnoreQueue;

        internal AsyncAutoResetEvent TxReceived { get; }

        internal async IAsyncEnumerable<Transaction<T>> GetTxsAsync(
            BoundPeer peer,
            IEnumerable<TxId> txIds,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            var txIdsAsArray = txIds as TxId[] ?? txIds.ToArray();
            var request = new GetTxs(txIdsAsArray);
            int txCount = txIdsAsArray.Count();

            _logger.Debug("Required tx count: {Count}.", txCount);

            var txRecvTimeout = Options.TxRecvTimeout + TimeSpan.FromSeconds(txCount);
            if (txRecvTimeout > Options.MaxTimeout)
            {
                txRecvTimeout = Options.MaxTimeout;
            }

            IEnumerable<Message> replies = await Transport.SendMessageWithReplyAsync(
                peer,
                request,
                txRecvTimeout,
                txCount,
                true,
                cancellationToken
            );

            foreach (Message message in replies)
            {
                if (message is Messages.Tx parsed)
                {
                    Transaction<T> tx = Transaction<T>.Deserialize(parsed.Payload);
                    yield return tx;
                }
                else
                {
                    string errorMessage =
                        $"Expected {nameof(Tx)} messages as response of " +
                        $"the {nameof(GetTxs)} message, but got a {message.GetType().Name} " +
                        $"message instead: {message}";
                    throw new InvalidMessageException(errorMessage, message);
                }
            }
        }

        private HashSet<TxId> GetRequiredTxIds(IEnumerable<TxId> ids)
        {
            return new HashSet<TxId>(ids.Where(IsTxIdRequired));
        }

        private bool IsTxIdRequired(TxId id) =>
            !BlockChain.StagePolicy.Ignores(BlockChain, id) && !_txIgnoreQueue.Contains(id);

        private async Task RequestTxsFromPeerAsync(
            BoundPeer peer,
            CancellationToken cancellationToken)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                _txSyncTaskQueue.TryRemove(peer, out _);
                throw new TaskCanceledException();
            }

            try
            {
                HashSet<TxId> txIds = GetRequiredTxIds(_txSyncTaskQueue[peer]);
                _txSyncTaskQueue[peer] = new HashSet<TxId>();
                var txs = new HashSet<Transaction<T>>(
                    await GetTxsAsync(
                            peer,
                            txIds,
                            cancellationToken)
                        .ToListAsync(cancellationToken)
                        .AsTask());

                txs = new HashSet<Transaction<T>>(txs.Where(
                    tx =>
                    {
                        if (BlockChain.Policy.ValidateNextBlockTx(BlockChain, tx) is null)
                        {
                            return true;
                        }

                        _logger.Debug(
                            "Received transaction {TxId} will not be staged " +
                            "since it does not follows policy.",
                            tx.Id);
                        _txIgnoreQueue.Enqueue(tx.Id);
                        return false;
                    }));

                foreach (var tx in txs)
                {
                    try
                    {
                        BlockChain.StageTransaction(tx);
                    }
                    catch (InvalidTxException ite)
                    {
                        _logger.Error(
                            ite,
                            "{TxId} will not be staged since it is invalid.",
                            tx.Id);
                    }
                }

                if (txs.Any())
                {
                    TxReceived.Set();
                    _logger.Debug(
                        "Txs staged successfully: {@TxIds}",
                        txs.Select(tx => tx.Id.ToString()));

                    // TODO: txs includes transaction which were ignored due to its nonce,
                    // which should not be re-broadcasted.
                    BroadcastTxs(peer.Address, txs);
                }
                else
                {
                    _logger.Information(
                        "Failed to get transactions to stage: {@TxIds}",
                        _txSyncTaskQueue[peer].Select(txId => txId.ToString()));
                }
            }
            finally
            {
                if (_txSyncTaskQueue[peer].Any())
                {
                    // Received new transaction ids during syncing transaction
                    _ = RequestTxsFromPeerAsync(peer, cancellationToken);
                }
                else
                {
                    _txSyncTaskQueue.TryRemove(peer, out _);
                }
            }
        }
    }
}
