#nullable disable
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private async Task ConsensusWatchAsync(
            TimeSpan dialTimeout,
            TimeSpan tipLifeSpan,
            long maxToleranceTipGap,
            CancellationToken cancellationToken)
        {
            IBlockExcerpt lastTip = BlockChain.Tip;
            DateTimeOffset lastUpdated = DateTimeOffset.UtcNow;
            _ = _consensusReactor.StartAsync(_cancellationToken);

            async Task<long> GetNeighborTipIndex()
            {
                try
                {
                    return (await GetPeerChainStateAsync(dialTimeout, cancellationToken))
                        .Max(x => x.TipIndex);
                }
                catch (InvalidOperationException)
                {
                    _logger.Debug(
                        "{FName}: Failed to dial neighbors.",
                        nameof(ConsensusWatchAsync));
                }

                return -1;
            }

            while (!cancellationToken.IsCancellationRequested)
            {
                if (!lastTip.Hash.Equals(BlockChain.Tip.Hash))
                {
                    lastUpdated = DateTimeOffset.UtcNow;
                    lastTip = BlockChain.Tip;

                    if (!ConsensusRunning)
                    {
                        long maxNeighborIndex = await GetNeighborTipIndex();

                        if (maxNeighborIndex <= BlockChain.Tip.Index)
                        {
                            _logger.Debug(
                                "{FName}: Tip #{TipIndex} {TipHash} is same or ahead " +
                                "of neighbor; starting consensus...",
                                nameof(ConsensusWatchAsync),
                                BlockChain.Tip.Index,
                                BlockChain.Tip.Hash);

                            _ = _consensusReactor.StartAsync(_cancellationToken);
                        }
                    }
                }
                else if (lastUpdated + tipLifeSpan < DateTimeOffset.UtcNow && ConsensusRunning)
                {
                    _logger.Debug(
                        "{FName}: Tip #{TipIndex} {TipHash} is stale while in consensus; " +
                        "trying to find index from neighbors...",
                        nameof(ConsensusWatchAsync),
                        BlockChain.Tip.Index,
                        BlockChain.Tip.Hash);

                    long maxNeighborIndex = await GetNeighborTipIndex();

                    if (BlockChain.Tip.Index + maxToleranceTipGap < maxNeighborIndex)
                    {
                        _logger.Debug(
                            "{FName}: Tip is behind the neighbor's tip; " +
                                        "turning off consensus for synchronization.",
                            nameof(ConsensusWatchAsync));
                        await _consensusReactor.StopAsync(_cancellationToken);

                        ConsensusStaled.Set();
                    }
                }

                await Task.Delay(1000, cancellationToken);
            }
        }
    }
}
