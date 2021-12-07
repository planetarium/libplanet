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
        private readonly ConcurrentDictionary<TxId, Transaction<T>> _staged;
        private readonly ConcurrentBag<TxId> _ignored;
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
            _staged = new ConcurrentDictionary<TxId, Transaction<T>>();
            _ignored = new ConcurrentBag<TxId>();
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
        }

        /// <summary>
        /// Lifespan for <see cref="Transaction{T}"/>s.  Any <see cref="Transaction{T}"/> older
        /// than this <see cref="TimeSpan"/> will be considered expired.
        /// </summary>
        /// <remarks>
        /// Expired <see cref="Transaction{T}"/>s cannot be staged.
        /// </remarks>
        public TimeSpan Lifetime { get; }

        /// <inheritdoc/>
        public void Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (Exipred(transaction))
            {
                return;
            }

            _lock.EnterUpgradeableReadLock();
            try
            {
                if (_ignored.Contains(transaction.Id))
                {
                    return;
                }
                else
                {
                    _lock.EnterWriteLock();
                    try
                    {
                        if (_staged.TryAdd(transaction.Id, transaction))
                        {
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
                    }
                    finally
                    {
                        _lock.ExitWriteLock();
                    }
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }
        }

        /// <inheritdoc/>
        public void Unstage(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterWriteLock();
            try
            {
                _staged.TryRemove(id, out _);
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }

        /// <inheritdoc/>
        public void Ignore(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterUpgradeableReadLock();
            try
            {
                if (_ignored.Contains(id))
                {
                    return;
                }

                _lock.EnterWriteLock();
                try
                {
                    _ignored.Add(id);
                }
                finally
                {
                    _lock.ExitWriteLock();
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }
        }

        /// <inheritdoc/>
        public bool Ignores(BlockChain<T> blockChain, TxId id)
        {
            _lock.EnterReadLock();
            try
            {
                return _ignored.Contains(id);
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <inheritdoc/>
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool includeUnstaged)
        {
            Transaction<T>? transaction = null;

            _lock.EnterWriteLock();
            try
            {
                _staged.TryGetValue(id, out transaction);

                if (transaction is Transaction<T> tx && (Exipred(tx) || _ignored.Contains(tx.Id)))
                {
                    _staged.TryRemove(id, out _);
                    transaction = null;
                }
            }
            finally
            {
                _lock.ExitWriteLock();
            }

            return transaction;
        }

        /// <inheritdoc/>
        public IEnumerable<Transaction<T>> Iterate()
        {
            Transaction<T>? transaction = null;
            List<Transaction<T>> transactions = new List<Transaction<T>>();

            _lock.EnterUpgradeableReadLock();
            try
            {
                List<TxId> txIds = _staged.Keys.ToList();
                foreach (TxId txId in txIds)
                {
                    // FIXME: Should use Get() method with an API update.
                    _lock.EnterWriteLock();
                    try
                    {
                        _staged.TryGetValue(txId, out transaction);

                        if (transaction is Transaction<T> tx)
                        {
                            if (Exipred(tx) || _ignored.Contains(tx.Id))
                            {
                                _staged.TryRemove(txId, out _);
                            }
                            else
                            {
                                transactions.Add(tx);
                            }
                        }
                    }
                    finally
                    {
                        _lock.ExitWriteLock();
                    }
                }
            }
            finally
            {
                _lock.ExitUpgradeableReadLock();
            }

            return transactions;
        }

        /// <inheritdoc/>
        public long GetNextTxNonce(Address address, long minedTxs)
        {
            long nonce = minedTxs;
            IEnumerable<long> stagedTxNonces = Iterate()
                .Where(tx => tx.Signer.Equals(address) && tx.Nonce >= minedTxs)
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

        private bool Exipred(Transaction<T> transaction) =>
            transaction.Timestamp + Lifetime < DateTimeOffset.UtcNow;
    }
}
