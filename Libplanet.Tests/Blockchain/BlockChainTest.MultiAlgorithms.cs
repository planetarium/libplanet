using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public async Task MineBlockWithMultipleAlgorithms()
        {
            using (var fx = new DefaultStoreFixture())
            {
                IBlockPolicy<DumbAction> policy = new MultiAlgoPolicy<DumbAction>();
                BlockChain<DumbAction> chain = TestUtils.MakeBlockChain(
                    policy,
                    fx.Store,
                    fx.StateStore,
                    new DumbAction[0]
                );
                Block<DumbAction> block1 = await chain.MineBlock(default);
                Assert.Equal(16, block1.PreEvaluationHash.Length);
                Block<DumbAction> block2 = await chain.MineBlock(default);
                Assert.Equal(20, block2.PreEvaluationHash.Length);
            }
        }

        [Fact]
        public void ValidateWithMultipleAlgorithms()
        {
            using (var fx = new DefaultStoreFixture())
            {
                IBlockPolicy<DumbAction> policy = new MultiAlgoPolicy<DumbAction>();
                BlockChain<DumbAction> chain = TestUtils.MakeBlockChain(
                    policy,
                    fx.Store,
                    fx.StateStore,
                    new DumbAction[0]
                );
                HashAlgorithmGetter invalidAlgoGetter = _ => HashAlgorithmType.Of<SHA1>();
                Block<DumbAction> invalid1 = TestUtils.MineNext(chain.Genesis, invalidAlgoGetter)
                    .AttachStateRootHash(invalidAlgoGetter, fx.StateStore, policy.BlockAction);
                Assert.Throws<InvalidBlockPreEvaluationHashException>(() => chain.Append(invalid1));
                HashAlgorithmGetter validAlgoGetter = _ => HashAlgorithmType.Of<MD5>();
                Block<DumbAction> valid1 = TestUtils.MineNext(chain.Genesis, validAlgoGetter)
                    .AttachStateRootHash(validAlgoGetter, fx.StateStore, policy.BlockAction);
                chain.Append(valid1);
            }
        }

        private class MultiAlgoPolicy<T> : NullPolicy<T>
            where T : IAction, new()
        {
            public override HashAlgorithmType GetHashAlgorithm(long index) =>
                index % 2 == 1 ? HashAlgorithmType.Of<MD5>() : HashAlgorithmType.Of<SHA1>();
        }
    }
}
