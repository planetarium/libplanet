#nullable enable
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

        public bool Add(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate,
            BlockDemand demand)
        {
            if (IsDemandNeeded(blockChain, predicate, demand))
            {
                Log.Debug(
                    "BlockDemand #{index} {blockHash} from {peer}.",
                    demand.Header.Index,
                    ByteUtil.Hex(demand.Header.Hash),
                    demand.Peer);
                _blockDemands[demand.Peer] = demand;
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Cleanup(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate)
        {
            foreach (var demand in _blockDemands.Values)
            {
                if (!IsDemandNeeded(blockChain, predicate, demand))
                {
                    _blockDemands.TryRemove(demand.Peer, out _);
                }
            }

            Log.Verbose("Successfully cleaned up demands.");
        }

        private bool IsDemandNeeded(
            BlockChain<T> blockChain,
            Func<IBlockExcerpt, bool> predicate,
            BlockDemand target)
        {
            IComparer<BlockPerception> canonComparer = blockChain.Policy.CanonicalChainComparer;
            BoundPeer peer = target.Peer;
            var perception = blockChain.PerceiveBlock(target);
            bool needed =
                predicate(target) &&
                (!_blockDemands.ContainsKey(target.Peer) ||
                 (!(_blockDemands[peer] is var demand)
                  || (demand.Timestamp + _blockDemandLifespan <
                      DateTimeOffset.UtcNow && !peer.Equals(target.Peer))
                  || canonComparer.Compare(
                      blockChain.PerceiveBlock(demand.Header, demand.Timestamp),
                      perception
                  ) < 0));
            Log.Verbose(
                "Determining if a demand is actually needed: {Need}\nDemand: {Demand}" +
                "\nTip: {Tip}\nBlockDemand: {BlockDemand}\nCanonicalChainComparer: {Comparer}",
                needed ? "Need" : "Not need",
                target.ToExcerptString(),
                blockChain.Tip.ToExcerptString(),
                _blockDemands.ContainsKey(peer) ? _blockDemands[peer].ToExcerptString() : null,
                canonComparer
            );
            return needed;
        }
    }
}
