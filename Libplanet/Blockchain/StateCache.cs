using System;
using Bencodex.Types;
using Libplanet.Blocks;
using LruCacheNet;
using Serilog;

namespace Libplanet.Blockchain
{
    internal class StateCache
    {
        /// <summary>
        /// Determines how deep the cache can be formed.
        /// </summary>
        private const int CacheDepth = 4;

        private BlockStateCache? _tip;

        private object _newTipLock;

        public StateCache()
        {
            _newTipLock = new object();
        }

        public bool TryGetValue(BlockHash blockHash, Address address, out IValue? value)
        {
            if (_tip is { } tip && tip.BlockHash.Equals(blockHash))
            {
                return tip.TryGetValue(address, out value);
            }
            else
            {
                value = null;
                return false;
            }
        }

        public void AddOrUpdate(BlockHash blockHash, Address address, IValue? value)
        {
            if (_tip is { } tip && tip.BlockHash.Equals(blockHash))
            {
                tip.AddOrUpdate(address, value);
            }
        }

        /// <summary>
        /// Creates a new tip and replaces the old tip.
        /// This is done in the following way:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="blockHash"/> is equal to the <see cref="BlockHash"/> of
        ///         the old tip, nothing is changed.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="previousHash"/> is equal to the <see cref="BlockHash"/> of
        ///         the old tip, the old tip is attached to the new tip as its previous.
        ///     </description></item>
        ///     <item><description>
        ///         If neither of the above is true, the old tip is discarded.
        ///     </description></item>
        /// </list>
        /// </summary>
        /// <param name="blockHash">The <see cref="BlockHash"/> of the new tip.</param>
        /// <param name="previousHash">The <see cref="Block{T}.PreviousHash"/> of
        /// the <see cref="Block{T}"/> associated with <paramref name="blockHash"/>.</param>
        public void NewTip(
            BlockHash blockHash,
            BlockHash? previousHash)
        {
            lock (_newTipLock)
            {
                BlockStateCache? previous = null;
                if (_tip is { } tip)
                {
                    if (tip.BlockHash.Equals(blockHash))
                    {
                        Log.Debug(
                            "Given BlockHash {Hash} is the same as the existing " +
                            "tip's BlockHash; no changes will be made");
                        return;
                    }
                    else if (tip.BlockHash.Equals(previousHash))
                    {
                        Log.Debug(
                            "Given previous BlockHash {Hash} is the same as the existing " +
                            "tip's BlockHash; appending to the existing tip");
                        previous = tip;
                    }
                    else
                    {
                        Log.Debug(
                            "No relation could be found with the existing tip; " +
                            "discarding the old tip");
                    }
                }

                _tip = new BlockStateCache(blockHash, CacheDepth, previous);
                _tip.PushDown();
            }
        }

        public void Report()
        {
            if (_tip is { } tip)
            {
                tip.Report();
            }
        }
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class BlockStateCache
#pragma warning restore SA1402
    {
        private const int CacheSize = 1_000;

        private int _height;
        private int _getAttemptCount;
        private int _getSuccessCount;
        private int _addCount;

        private BlockStateCache? _previous;
        private LruCache<Address, IValue?> _cache;

        public BlockStateCache(BlockHash blockHash, int height, BlockStateCache? previous = null)
        {
            if (height <= 0)
            {
                throw new ArgumentException($"Given {nameof(height)} must be positive: {height}");
            }

            BlockHash = blockHash;
            _height = height;
            _previous = previous;
            _cache = new LruCache<Address, IValue?>(CacheSize);
            _getAttemptCount = 0;
            _getSuccessCount = 0;
            _addCount = 0;
        }

        public BlockHash BlockHash { get; }

        public bool TryGetValue(Address address, out IValue? value)
        {
            _getAttemptCount++;
            if (_cache.TryGetValue(address, out value))
            {
                _getSuccessCount++;
                return true;
            }
            else if (_previous is { } previous)
            {
                return previous.TryGetValue(address, out value);
            }
            else
            {
                value = null;
                return false;
            }
        }

        public void AddOrUpdate(Address address, IValue? value)
        {
            _cache.AddOrUpdate(address, value);
            _addCount++;
        }

        /// <summary>
        /// Pushes down by decreasing the height of the <see cref="BlockStateCache"/>.
        /// Once the height reaches zero, its previous is removed by setting it to
        /// <see langword="null"/>.
        /// </summary>
        public void PushDown()
        {
            _height -= 1;
            if (_height == 0)
            {
                _previous = null;
            }
            else if (_previous is { } previous)
            {
                previous.PushDown();
            }
        }

        public void Report()
        {
            Log
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "BlockStateCacheReport")
                .Debug(
                    "BlockHash: {BlockHash}, GetAttempts: {GetAttemptCount}, " +
                    "GetSuccesses: {GetSuccessCount}, Adds: {AddCount}, Cached: {CacheCount}",
                    BlockHash,
                    _getAttemptCount,
                    _getSuccessCount,
                    _addCount,
                    _cache.Count);
            if (_previous is { } previous)
            {
                previous.Report();
            }
        }
    }
}
