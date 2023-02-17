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
    /// <para>
    /// An in memory implementation of the <see cref="IStagePolicy{T}"/>.
    /// </para>
    /// <para>
    /// This implementation holds on to every unconfirmed <see cref="Transaction{T}"/> except
    /// for the following reasons:
    /// <list type="bullet">
    ///     <item>
    ///         <description>A <see cref="Transaction{T}"/> has been specifically marked to
    ///         be ignored due to <see cref="Transaction{T}"/> not being valid.</description>
    ///     </item>
    ///     <item>
    ///         <description>A <see cref="Transaction{T}"/> has expired due to its staleness.
    ///         </description>
    ///     </item>
    /// </list>
    /// </para>
    /// <para>
    /// Additionally, any <see cref="Transaction{T}"/> with a lower nonce than that of returned by
    /// the <see cref="BlockChain{T}"/> is masked and filtered by default.
    /// </para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class VolatileStagePolicy<T> : IStagePolicy<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<TxId, Transaction<T>> _staged;
        private readonly HashSet<TxId> _ignored;
        private readonly ReaderWriterLockSlim _lock;
        private readonly ILogger _logger;

        /// <summary>
        /// Creates a new <see cref="VolatileStagePolicy{T}"/> instance.
        /// By default, <see cref="Lifetime"/> is set to 10 minutes.
        /// </summary>
        public VolatileStagePolicy()
            : this(TimeSpan.FromSeconds(10 * 60))
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
            _ignored = new HashSet<TxId>();
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
        public bool Stage(BlockChain<T> blockChain, Transaction<T> transaction)
        {
            if (Expired(transaction))
            {
                return false;
            }

            bool result;
            _lock.EnterUpgradeableReadLock();
            try
            {
                if (_ignored.Contains(transaction.Id))
                {
                    return false;
                }
                else
                {
                    _lock.EnterWriteLock();
                    try
                    {
                        result = _staged.TryAdd(transaction.Id, transaction);
                        if (result)
                        {
                            const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
                            _logger
                                .ForContext("Tag", "Metric")
                                .ForContext("Subtag", "TxStageTimestamp")
                                .Information(
                                    "Transaction {TxId} by {Signer} " +
                                    "with timestamp {TxTimestamp} staged at {StagedTimestamp}",
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

            return result;
        }

        /// <inheritdoc/>
        public bool Unstage(BlockChain<T> blockChain, TxId id)
        {
            bool result;
            _lock.EnterWriteLock();
            try
            {
                result = _staged.TryRemove(id, out _);
            }
            finally
            {
                _lock.ExitWriteLock();
            }

            return result;
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
        public Transaction<T>? Get(BlockChain<T> blockChain, TxId id, bool filtered = true)
        {
            _lock.EnterReadLock();
            try
            {
                return GetInner(blockChain, id, filtered);
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <inheritdoc/>
        public IEnumerable<Transaction<T>> Iterate(BlockChain<T> blockChain, bool filtered = true)
        {
            List<Transaction<T>> transactions = new List<Transaction<T>>();

            _lock.EnterReadLock();
            try
            {
                List<TxId> txIds = _staged.Keys.ToList();
                foreach (TxId txId in txIds)
                {
                    if (GetInner(blockChain, txId, filtered) is Transaction<T> tx)
                    {
                        transactions.Add(tx);
                    }
                }
            }
            finally
            {
                _lock.ExitReadLock();
            }

            return transactions;
        }

        /// <inheritdoc/>
        public long GetNextTxNonce(BlockChain<T> blockChain, Address address)
        {
            long nonce = blockChain.Store.GetTxNonce(blockChain.Id, address);
            IEnumerable<Transaction<T>> orderedTxs = Iterate(blockChain, filtered: true)
                .Where(tx => tx.Signer.Equals(address))
                .OrderBy(tx => tx.Nonce);

            foreach (Transaction<T> tx in orderedTxs)
            {
                if (nonce < tx.Nonce)
                {
                    break;
                }
                else if (nonce == tx.Nonce)
                {
                    nonce++;
                }
            }

            return nonce;
        }

        private bool Expired(Transaction<T> transaction) =>
            Lifetime < DateTimeOffset.UtcNow - transaction.Timestamp;

        /// <remarks>
        /// It has been intended to avoid recursive lock, hence doesn't hold any synchronous scope.
        /// Therefore, we should manage the lock from its caller side.
        /// </remarks>
        private Transaction<T>? GetInner(BlockChain<T> blockChain, TxId id, bool filtered)
        {
            if (_staged.TryGetValue(id, out Transaction<T>? tx) && tx is { })
            {
                if (Expired(tx) || _ignored.Contains(tx.Id))
                {
                    _staged.TryRemove(id, out _);
                    return null;
                }
                else if (filtered)
                {
                    return blockChain.Store.GetTxNonce(blockChain.Id, tx.Signer) <= tx.Nonce
                        ? tx
                        : null;
                }
                else
                {
                    return tx;
                }
            }
            else
            {
                return null;
            }
        }
    }
}
