using System;
using System.Linq;
using System.Threading;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Policies;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class VolatileStagePolicyTest : StagePolicyTest
    {
        private readonly VolatileStagePolicy _stagePolicy =
            new VolatileStagePolicy();

        protected override IStagePolicy StagePolicy => _stagePolicy;

        [Fact]
        public void Lifetime()
        {
            TimeSpan timeBuffer = TimeSpan.FromSeconds(1);
            Transaction tx = Transaction.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>().ToPlainValues(),
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
            var stagePolicy = new VolatileStagePolicy(TimeSpan.MaxValue);
            Transaction tx = Transaction.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>().ToPlainValues(),
                timestamp: DateTimeOffset.UtcNow);
            Assert.True(stagePolicy.Stage(_chain, tx));
        }

        [Fact]
        public void StageUnstage()
        {
            TimeSpan timeBuffer = TimeSpan.FromSeconds(1);
            Transaction validTx = Transaction.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>().ToPlainValues(),
                timestamp: (DateTimeOffset.UtcNow - _stagePolicy.Lifetime) + timeBuffer
            );
            Transaction staleTx = Transaction.Create(
                0,
                _key,
                _fx.GenesisBlock.Hash,
                Enumerable.Empty<DumbAction>().ToPlainValues(),
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
