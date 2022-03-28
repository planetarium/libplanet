using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly object _lock;
        private readonly int _size;
        private readonly ILogger _logger;
        private Dictionary<Address, PeerState> _dictionary;

        /// <summary>
        /// Creates an instance with a size limit given by <paramref name="size"/>.
        /// </summary>
        /// <param name="size">The maximum number of elements the dictionary can hold.</param>
        /// <param name="logger">The <see cref="ILogger"/> to write log messages to.</param>
        public KBucketDictionary(int size, ILogger logger)
        {
            _lock = new object();
            _size = size;
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
                lock (_lock)
                {
                    return _dictionary.Values.ToList();
                }
            }
        }

        public int Count
        {
            get
            {
                lock (_lock)
                {
                    return _dictionary.Count;
                }
            }
        }

        /// <summary>
        /// The <see cref="PeerState"/> updated most recently. <c>null</c> if the dictionary
        /// is empty.
        /// </summary>
        public PeerState? Head
        {
            get
            {
                lock (_lock)
                {
                    return _dictionary.Values
                        .OrderBy(peerState => peerState.LastUpdated)
                        .LastOrDefault();
                }
            }
        }

        /// <summary>
        /// The <see cref="PeerState"/> updated least recently. <c>null</c> if the dictionary
        /// is empty.
        /// </summary>
        public PeerState? Tail
        {
            get
            {
                lock (_lock)
                {
                    return _dictionary.Values
                        .OrderBy(peerState => peerState.LastUpdated)
                        .FirstOrDefault();
                }
            }
        }

        /// <summary>
        /// Retrievees the <see cref="BoundPeer"/> associated with <paramref name="peer"/>'s
        /// <see cref="Address"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns>The <see cref="BoundPeer"/> with its address equal to
        /// that of the <paramref name="peer"/>'s. <c>null</c> if not found.</returns>
        public PeerState? Get(BoundPeer peer)
        {
            return Get(peer.Address);
        }

        /// <summary>
        /// Retrievees the <see cref="BoundPeer"/> associated with <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to check.</param>
        /// <returns>The <see cref="BoundPeer"/> with its address equal to
        /// that of <paramref name="address"/>. <c>null</c> if not found.</returns>
        public PeerState? Get(Address address)
        {
            lock (_lock)
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
        }

        /// <summary>
        /// Checks if the dictionary contains <paramref name="peer"/>'s <see cref="Address"/>
        /// as a key.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to check.</param>
        /// <returns><c>true</c> if the <paramref name="peer"/>'s <see cref="Address"/> exists,
        /// <c>false</c> otherwise.</returns>
        public bool Contains(BoundPeer peer)
        {
            return Contains(peer.Address);
        }

        /// <summary>
        /// Checks if the dictionary contains <paramref name="address"/> as a key.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to check.</param>
        /// <returns><c>true</c> if <paramref name="address"/> exists,
        /// <c>false</c> otherwise.</returns>
        public bool Contains(Address address)
        {
            lock (_lock)
            {
                return _dictionary.ContainsKey(address);
            }
        }

        /// <summary>
        /// Adds or updates the dictionary with <paramref name="peer"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to add or update.</param>
        /// <returns><c>true</c> if <paramref name="peer"/> was either added or updated,
        /// <c>false</c> otherwise.</returns>
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
        /// <returns><c>true</c> if <paramref name="peer"/> was either added or updated,
        /// <c>false</c> otherwise.</returns>
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
        /// Internal logic is as the following:
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
        ///         Otherwise, ignore.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to use as a key.</param>
        /// <param name="peerState">The <see cref="PeerState"/> to use as a value.</param>
        /// <returns><c>true</c> if the key/value pair was either added or updated,
        /// <c>false</c> otherwise.</returns>
        /// <remarks>
        /// The only way this returns <c>false</c> is for the dictionary to be full already
        /// <em>and</em> not contain <paramref name="address"/> as a key.
        /// </remarks>
        public bool AddOrUpdate(Address address, PeerState peerState)
        {
            lock (_lock)
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
                    if (_dictionary.Count >= _size)
                    {
                        _logger.Verbose(
                            "Cannot add {Address}; " +
                            "the dictionary size is already at its limit of {Size}.",
                            address,
                            _size);
                        return false;
                    }
                    else
                    {
                        _dictionary[address] = peerState;
                        _logger.Verbose(
                            "Added {Address} to the dictionary.", address);
                        return true;
                    }
                }
            }
        }

        /// <summary>
        /// Removes <paramref name="peer"/> from the dictionary.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to remove.</param>
        /// <returns><c>true</c> if <paramref name="peer"/> was successfully removed,
        /// <c>false</c> otherwise.</returns>
        public bool Remove(BoundPeer peer)
        {
            return Remove(peer.Address);
        }

        /// <summary>
        /// Removes <paramref name="address"/> from the dictionary.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> to remove.</param>
        /// <returns><c>true</c> if <paramref name="address"/> was successfully removed,
        /// <c>false</c> otherwise.</returns>
        public bool Remove(Address address)
        {
            lock (_lock)
            {
                return _dictionary.Remove(address);
            }
        }

        /// <summary>
        /// Empties the dictionary.
        /// </summary>
        public void Clear()
        {
            lock (_lock)
            {
                _dictionary = new Dictionary<Address, PeerState>();
            }

            return;
        }
    }
}
