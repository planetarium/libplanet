using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Net
{
    public class BlockDemandTable<T>
        where T : IAction, new()
    {
        private readonly TimeSpan _blockDemandLifespan;
        private readonly ConcurrentDictionary<BoundPeer, BlockDemand> _blockDemands;

        public BlockDemandTable(TimeSpan blockDemandLifespan)
        {
            _blockDemandLifespan = blockDemandLifespan;
            _blockDemands = new ConcurrentDictionary<BoundPeer, BlockDemand>();
        }

        public IDictionary<BoundPeer, BlockDemand> Demands =>
            _blockDemands.ToDictionary(pair => pair.Key, pair => pair.Value);

        public bool Any() => _blockDemands.Any();

        public void Add(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate,
            BlockDemand demand)
        {
            if (IsDemandNeeded(blockChain, predicate, demand))
            {
                _blockDemands[demand.Peer] = demand;
                Log.Debug(
                    "BlockDemand #{Index} {BlockHash} from peer {Peer} added",
                    demand.Index,
                    demand.Hash,
                    demand.Peer);
            }
            else
            {
                Log.Debug(
                    "BlockDemand #{Index} {BlockHash} from peer {Peer} ignored",
                    demand.Index,
                    demand.Hash,
                    demand.Peer);
            }
        }

        public void Remove(BoundPeer peer)
        {
            _blockDemands.TryRemove(peer, out _);
        }

        public void Cleanup(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate)
        {
            foreach (var demand in _blockDemands.Values)
            {
                if (!predicate(demand) || IsDemandStale(demand))
                {
                    _blockDemands.TryRemove(demand.Peer, out _);
                }
            }

            Log.Verbose("Successfully cleaned up demands");
        }

        private bool IsDemandNeeded(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate,
            BlockDemand demand)
        {
            IComparer<IBlockExcerpt> canonComparer = blockChain.Policy.CanonicalChainComparer;
            BlockDemand? oldDemand = _blockDemands.ContainsKey(demand.Peer)
                ? _blockDemands[demand.Peer]
                : (BlockDemand?)null;

            bool needed;
            if (IsDemandStale(demand))
            {
                needed = false;
            }
            else if (predicate(demand))
            {
                if (oldDemand is { } old)
                {
                    needed = IsDemandStale(old) || canonComparer.Compare(old, demand) < 0;
                }
                else
                {
                    needed = true;
                }
            }
            else
            {
                needed = false;
            }

            Log.Verbose(
                "Determining if a demand is actually needed: {Need}\n" +
                "Peer: {Peer}\n" +
                "Demand: {Demand}\n" +
                "Tip: {Tip}\n" +
                "Old Demand: {OldDemand}\n" +
                "CanonicalChainComparer: {Comparer}",
                needed,
                demand.Peer,
                demand.ToExcerptString(),
                blockChain.Tip.ToExcerptString(),
                oldDemand?.ToExcerptString(),
                canonComparer);
            return needed;
        }

        private bool IsDemandStale(BlockDemand demand)
        {
            return demand.Timestamp + _blockDemandLifespan < DateTimeOffset.UtcNow;
        }
    }
}
