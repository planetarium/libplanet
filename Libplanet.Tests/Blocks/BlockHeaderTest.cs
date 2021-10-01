using Libplanet.Blocks;
using Xunit;
using static Libplanet.Tests.TestUtils;
using FxAction = Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.BaseAction>;

namespace Libplanet.Tests.Blocks
{
    public class BlockHeaderTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockHeaderTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void Constructors()
        {
            Block<FxAction>[] fixtures = { _fx.Genesis, _fx.Next, _fx.HasTx };
            foreach (Block<FxAction> fx in fixtures)
            {
                var preEval = new PreEvaluationBlockHeader(fx);
                var header = new BlockHeader(preEval, fx.StateRootHash, fx.Signature);
                AssertBytesEqual(header.Hash, fx.Hash);
                AssertPreEvaluationBlockHeadersEqual(fx, header);
                AssertBytesEqual(fx.StateRootHash, header.StateRootHash);

                header = new BlockHeader(preEval, fx.StateRootHash, fx.Signature, fx.Hash);
                AssertBytesEqual(header.Hash, fx.Hash);
                AssertPreEvaluationBlockHeadersEqual(fx, header);
                AssertBytesEqual(fx.StateRootHash, header.StateRootHash);

                Assert.Throws<InvalidBlockHashException>(() =>
                    new BlockHeader(preEval, fx.StateRootHash, fx.Signature, default)
                );
            }
        }

        [Fact]
        public void String()
        {
            var header = new BlockHeader(
                new PreEvaluationBlockHeader(_fx.HasTx),
                _fx.HasTx.StateRootHash,
                _fx.HasTx.Signature
            );
            Assert.Equal($"#{_fx.HasTx.Index} {_fx.HasTx.Hash}", header.ToString());
        }
    }
}
