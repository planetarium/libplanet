using System;
using System.Linq;
using System.Threading;
using Libplanet.Blockchain.Policies;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class VolatileStagePolicyTest : StagePolicyTest
    {
        private readonly VolatileStagePolicy<DumbAction> _stagePolicy =
            new VolatileStagePolicy<DumbAction>();

        protected override IStagePolicy<DumbAction> StagePolicy => _stagePolicy;

        [Fact]
        public void Lifetime()
        {
            TimeSpan timeBuffer = TimeSpan.FromSeconds(1);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>(),
                timestamp: (DateTimeOffset.UtcNow - _stagePolicy.Lifetime) + timeBuffer
            );
            Assert.True(_stagePolicy.Stage(_chain, tx));
            Assert.Equal(tx, _stagePolicy.Get(_chain, tx.Id));
            Assert.Contains(tx, _stagePolicy.Iterate(_chain));

            // On some targets TimeSpan * int does not exist.
            Thread.Sleep(timeBuffer);
            Thread.Sleep(timeBuffer);
            Assert.Null(_stagePolicy.Get(_chain, tx.Id));
            Assert.DoesNotContain(tx, _stagePolicy.Iterate(_chain));
        }

        [Fact]
        public void MaxLifetime()
        {
            var stagePolicy = new VolatileStagePolicy<DumbAction>(TimeSpan.MaxValue);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>(),
                timestamp: DateTimeOffset.UtcNow);
            Assert.True(stagePolicy.Stage(_chain, tx));
        }

        [Fact]
        public void StageUnstage()
        {
            TimeSpan timeBuffer = TimeSpan.FromSeconds(1);
            Transaction<DumbAction> validTx = Transaction<DumbAction>.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>(),
                timestamp: (DateTimeOffset.UtcNow - _stagePolicy.Lifetime) + timeBuffer
            );
            Transaction<DumbAction> staleTx = Transaction<DumbAction>.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>(),
                timestamp: (DateTimeOffset.UtcNow - _stagePolicy.Lifetime) - timeBuffer
            );

            Assert.False(_stagePolicy.Stage(_chain, staleTx));
            Assert.True(_stagePolicy.Stage(_chain, validTx));
            Assert.False(_stagePolicy.Stage(_chain, validTx));
            Assert.True(_stagePolicy.Unstage(_chain, validTx.Id));
            Assert.False(_stagePolicy.Unstage(_chain, validTx.Id));
        }
    }
}
