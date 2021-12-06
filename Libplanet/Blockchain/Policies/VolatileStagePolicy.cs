#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using Libplanet.Action;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// In-memory staged transactions.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class VolatileStagePolicy<T> : IStagePolicy<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<TxId, Transaction<T>?> _set;
        private readonly List<TxId> _queue;
        private readonly ReaderWriterLockSlim _lock;
        private readonly ILogger _logger;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// By default, <see cref="Lifetime"/> is configured to 3 hours.
        /// </summary>
        public VolatileStagePolicy()
            : this(TimeSpan.FromHours(3))
        {
        }

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// </summary>
        /// <param name="lifetime">Volatilizes staged transactions older than this
        /// <see cref="TimeSpan"/>.  See also <see cref="Lifetime"/>.</param>
        public VolatileStagePolicy(TimeSpan lifetime)
        {
            _logger = Log.ForContext<VolatileStagePolicy<T>>();
            Lifetime = lifetime;
            _set = new ConcurrentDictionary<TxId, Transaction<T>?>();
            _queue = new List<TxId>();
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        /// <summary>
        /// Lifespan for <see cref="Transaction{T}"/>s.  Any <see cref="Transaction{T}"/> older
        /// than this <see cref="TimeSpan"/> will be considered stale.
        /// </summary>
        /// <remarks>
        /// Stale <see cref="Transaction{T}"/>s cannot be staged.
        /// </remarks>
        public TimeSpan Lifetime { get; }

        /// <inheritdoc/>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (DateTimeOffset.UtcNow - Lifetime > transaction.Timestamp)
            {
                // The transaction is already expired; don't stage it at all.
                return;
            }

            try
            {
                if (!_set.TryAdd(transaction.Id, transaction))
                {
                    _lock.EnterUpgradeableReadLock();
                    if (_queue.Contains(transaction.Id))
                    {
                        return;
                    }
                }

                _lock.EnterWriteLock();
                try
                {
                    _queue.Add(transaction.Id);
                    const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
                    _logger
                        .ForContext("Tag", "Metric")
                        .Debug(
                            "Transaction {TxId} by {Signer} " +
                            "with timestamp {TxTimestamp} staged at {StagedTimestamp}.",
                            transaction.Id,
                            transaction.Signer,
                            transaction.Timestamp.ToString(
                                TimestampFormat, CultureInfo.InvariantCulture),
                            DateTimeOffset.UtcNow.ToString(
                                TimestampFormat, CultureInfo.InvariantCulture));
                }
                finally
                {
                    _lock.ExitWriteLock();
                }
            }
            finally
            {
                if (_lock.IsUpgradeableReadLockHeld)
                {
                    _lock.ExitUpgradeableReadLock();
                }
            }
        }

        /// <inheritdoc/>
        public void Unstage(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterWriteLock();
            _queue.Remove(id);
            _lock.ExitWriteLock();
        }

        /// <inheritdoc/>
        public void Ignore(BlockChain<T> blockChain, TxId id) =>
            _set.TryAdd(id, null);

        /// <inheritdoc/>
        public bool Ignores(BlockChain<T> blockChain, TxId id) =>
            (_set.TryGetValue(id, out Transaction<T>? tx) && tx is null)
            || Get(blockChain, id, includeUnstaged: true) is { };

        /// <inheritdoc/>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            if (!_set.TryGetValue(id, out Transaction<T>? tx) || tx is null)
            {
                return null;
            }
            else if (tx.Timestamp >= DateTimeOffset.UtcNow - Lifetime)
            {
                _lock.EnterReadLock();
                try
                {
                    return includeUnstaged || _queue.Contains(id) ? tx : null;
                }
                finally
                {
                    _lock.ExitReadLock();
                }
            }

            _lock.EnterWriteLock();
            try
            {
                _queue.Remove(id);
                _set.TryRemove(id, out _);
            }
            finally
            {
                _lock.ExitWriteLock();
            }

            return null;
        }

        /// <inheritdoc/>
        public IEnumerable<Transaction<T>> Iterate()
        {
            _lock.EnterReadLock();
            TxId[] queue;
            try
            {
                queue = _queue.ToArray();
            }
            finally
            {
                _lock.ExitReadLock();
            }

            DateTimeOffset exp = DateTimeOffset.UtcNow - Lifetime;
            var expired = new List<TxId>();
            foreach (TxId txid in queue)
            {
                if (_set.TryGetValue(txid, out Transaction<T>? tx) && !(tx is null))
                {
                    if (tx.Timestamp > exp)
                    {
                        yield return tx;
                    }
                    else
                    {
                        expired.Add(tx.Id);
                    }
                }
            }

            if (!expired.Any())
            {
                yield break;
            }

            // Clean up expired transactions (if any exist).
            _lock.EnterWriteLock();
            try
            {
                foreach (TxId txid in expired)
                {
                    _queue.Remove(txid);
                    _set.TryRemove(txid, out _);
                }
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }

        /// <inheritdoc/>
        public long GetNextTxNonce(Address address, long minedTxs)
        {
            long nonce = minedTxs;
            long prevNonce = nonce - 1;
            IOrderedEnumerable<long> stagedTxNonces = Iterate()
                .Where(tx => tx.Signer.Equals(address) && tx.Nonce > prevNonce)
                .Select(tx => tx.Nonce)
                .OrderBy(n => n);

            foreach (long n in stagedTxNonces)
            {
                if (n < nonce)
                {
                    continue;
                }

                if (n != nonce)
                {
                    break;
                }

                nonce++;
            }

            return nonce;
        }
    }
}
