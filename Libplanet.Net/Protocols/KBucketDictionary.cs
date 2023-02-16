using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Serilog;

namespace Libplanet.Net.Protocols
{
    /// <summary>
    /// <para>
    /// An internal dictionary with a size limit used for <see cref="KBucket"/>s.
    /// </para>
    /// <para>
    /// Purposely designed with the following features:
    /// <list type="bullet">
    ///     <item><description>
    ///         Fixed maximum size.
    ///     </description></item>
    ///     <item><description>
    ///         Exception free.
    ///     </description></item>
    ///     <item><description>
    ///         Enforced concurrency.
    ///     </description></item>
    /// </list>
    /// </para>
    /// </summary>
    internal class KBucketDictionary
    {
        private readonly ReaderWriterLockSlim _lock;
        private readonly int _size;
        private readonly bool _replace;
        private readonly ILogger _logger;
        private Dictionary<Address, PeerState> _dictionary;

        /// <summary>
        /// Creates an instance with a size limit given by <paramref name="size"/>.
        /// </summary>
        /// <param name="size">The maximum number of elements the dictionary can hold.</param>
        /// <param name="replace">Whether to replace the oldest <see cref="PeerState"/>,
        /// i.e. <see cref="Tail"/>, if the dictionary is already full.</param>
        /// <param name="logger">The <see cref="ILogger"/> to write log messages to.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when <paramref name="size"/>
        /// is not positive..</exception>
        public KBucketDictionary(int size, bool replace, ILogger logger)
        {
            if (size <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The value of {nameof(size)} must be positive.");
            }

            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _size = size;
            _replace = replace;
            _dictionary = new Dictionary<Address, PeerState>();
            _logger = logger;
        }

        public List<BoundPeer> Peers
        {
            get
            {
                return PeerStates.Select(peerState => peerState.Peer).ToList();
            }
        }

        public List<PeerState> PeerStates
        {
            get
            {
                _lock.EnterReadLock();
                try
                {
                    return _dictionary.Values.ToList();
                }
                finally
                {
                    _lock.ExitReadLock();
                }
            }
        }

        public int Count
        {
            get
            {
                _lock.EnterReadLock();
                try
                {
                    return _dictionary.Count;
                }
                finally
                {
                    _lock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// The <see cref="PeerState"/> updated most recently. <see langword="null"/>
        /// if the dictionary is empty.
        /// </summary>
        public PeerState? Head
        {
            get
            {
                _lock.EnterReadLock();
                try
                {
#pragma warning disable S3358   // Extract this nested ternary operation.
                    return _dictionary.Values.Count > 0
                        ? _dictionary.Values.Aggregate((candidate, ps) =>
                            candidate.LastUpdated < ps.LastUpdated ? ps : candidate)
                        : null;
#pragma warning restore S3358
                }
                finally
                {
                    _lock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// The <see cref="PeerState"/> updated least recently. <see langword="null"/>
        /// if the dictionary is empty.
        /// </summary>
        public PeerState? Tail
        {
            get
            {
                _lock.EnterReadLock();
                try
                {
#pragma warning disable S3358   // Extract this nested ternary operation.
                    return _dictionary.Values.Count > 0
                        ? _dictionary.Values.Aggregate((candidate, ps) =>
                            candidate.LastUpdated > ps.LastUpdated ? ps : candidate)
                        : null;
#pragma warning restore S3358
                }
                finally
                {
                    _lock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// Retrieves the <see cref="BoundPeer"/> associated with <paramref name="peer"/>'s
        /// <see cref="Address"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns>The <see cref="BoundPeer"/> with its address equal to
        /// that of the <paramref name="peer"/>'s. <see langword="null"/> if not found.</returns>
        public PeerState? Get(BoundPeer peer)
        {
            return Get(peer.Address);
        }

        /// <summary>
        /// Retrievees the <see cref="BoundPeer"/> associated with <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to check.</param>
        /// <returns>The <see cref="BoundPeer"/> with its address equal to
        /// that of <paramref name="address"/>. <see langword="null"/> if not found.</returns>
        public PeerState? Get(Address address)
        {
            _lock.EnterReadLock();
            try
            {
                if (_dictionary.ContainsKey(address))
                {
                    return _dictionary[address];
                }
                else
                {
                    return null;
                }
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <summary>
        /// Checks if the dictionary contains <paramref name="peer"/>'s <see cref="Address"/>
        /// as a key.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns><see langword="true"/> if the <paramref name="peer"/>'s
        /// <see cref="Address"/> exists, <see langword="false"/> otherwise.</returns>
        public bool Contains(BoundPeer peer)
        {
            return Contains(peer.Address);
        }

        /// <summary>
        /// Checks if the dictionary contains <paramref name="address"/> as a key.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to check.</param>
        /// <returns><see langword="true"/> if <paramref name="address"/> exists,
        /// <see langword="false"/> otherwise.</returns>
        public bool Contains(Address address)
        {
            _lock.EnterReadLock();
            try
            {
                return _dictionary.ContainsKey(address);
            }
            finally
            {
                _lock.ExitReadLock();
            }
        }

        /// <summary>
        /// Adds or updates the dictionary with <paramref name="peer"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to add or update.</param>
        /// <returns><see langword="true"/> if <paramref name="peer"/> was either added or updated,
        /// <see langword="false"/> otherwise.</returns>
        /// <seealso cref="AddOrUpdate(BoundPeer, PeerState)"/>.
        public bool AddOrUpdate(BoundPeer peer)
        {
            return AddOrUpdate(peer, new PeerState(peer, DateTimeOffset.UtcNow));
        }

        /// <summary>
        /// Adds or updates the dictionary with a key/value pair.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to add or update.</param>
        /// <param name="peerState">The <see cref="PeerState"/> to use as a value.</param>
        /// <returns><see langword="true"/> if <paramref name="peer"/> was either added or updated,
        /// <see langword="false"/> otherwise.</returns>
        /// <seealso cref="AddOrUpdate(Address, PeerState)"/>.
        public bool AddOrUpdate(BoundPeer peer, PeerState peerState)
        {
            return AddOrUpdate(peer.Address, peerState);
        }

        /// <summary>
        /// <para>
        /// Adds or updates the dictionary with a key/value pair.
        /// </para>
        /// <para>
        /// Internal logic is as follows:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="address"/> is found, update its value
        ///         with <paramref name="peerState"/>.
        ///     </description></item>
        ///     <item><description>
        ///         Else, if the dictionary is not full, i.e. has not reached its limit in size,
        ///         add <paramref name="address"/> and <paramref name="peerState"/> as
        ///         a key/value pair.
        ///     </description></item>
        ///     <item><description>
        ///         Else, if the dictionary is full and replace option is set to
        ///         <see langword="true"/>, replace the oldest <see cref="PeerState"/>, i.e.
        ///         <see cref="Tail"/>, with <paramref name="peerState"/>.
        ///     </description></item>
        ///     <item><description>
        ///         Else, ignore.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to use as a key.</param>
        /// <param name="peerState">The <see cref="PeerState"/> to use as a value.</param>
        /// <returns><see langword="true"/> if the key/value pair was either added or updated,
        /// <see langword="false"/> otherwise.</returns>
        /// <remarks>
        /// This returns <see langword="false"/> only if all following conditions are met:
        /// <list type="bullet">
        ///     <item><description>
        ///         The dictionary does not contain <paramref name="address"/> as a key.
        ///     </description></item>
        ///     <item><description>
        ///         The dictionary is already full.
        ///     </description></item>
        ///     <item><description>
        ///         The replacement option is set to <see langword="false"/> for
        ///         this <see cref="KBucketDictionary"/> instance.
        ///     </description></item>
        /// </list>
        /// </remarks>
        public bool AddOrUpdate(Address address, PeerState peerState)
        {
            _lock.EnterWriteLock();
            try
            {
                if (_dictionary.ContainsKey(address))
                {
                    _dictionary[address] = peerState;
                    _logger.Verbose(
                        "{Address} found in the dictionary; updating its state...",
                        address);
                    return true;
                }
                else
                {
                    if (_dictionary.Count < _size)
                    {
                        _dictionary[address] = peerState;
                        _logger.Verbose(
                            "Added {Address} to the dictionary", address);
                        return true;
                    }
                    else
                    {
                        if (_replace)
                        {
                            // Tail is never null since the dictionary size is always positive.
                            _dictionary.Remove(Tail!.Peer.Address);
                            _dictionary[address] = peerState;
                            return true;
                        }
                        else
                        {
                            _logger.Verbose(
                                "Cannot add {Address}; " +
                                "the dictionary size is already at its limit of {Size}",
                                address,
                                _size);
                            return false;
                        }
                    }
                }
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Removes <paramref name="peer"/> from the dictionary.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to remove.</param>
        /// <returns><see langword="true"/> if <paramref name="peer"/> was successfully removed,
        /// <see langword="false"/> otherwise.</returns>
        public bool Remove(BoundPeer peer)
        {
            return Remove(peer.Address);
        }

        /// <summary>
        /// Removes <paramref name="address"/> from the dictionary.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to remove.</param>
        /// <returns><see langword="true"/> if <paramref name="address"/> was successfully removed,
        /// <see langword="false"/> otherwise.</returns>
        public bool Remove(Address address)
        {
            _lock.EnterWriteLock();
            try
            {
                return _dictionary.Remove(address);
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Empties the dictionary.
        /// </summary>
        public void Clear()
        {
            _lock.EnterWriteLock();
            try
            {
                _dictionary = new Dictionary<Address, PeerState>();
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }
    }
}
