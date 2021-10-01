using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
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
                var key = new PrivateKey().PublicKey;
                Block<DumbAction> block1 = await chain.MineBlock(key);
                Assert.Equal(16, block1.PreEvaluationHash.Length);
                Block<DumbAction> block2 = await chain.MineBlock(key);
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
                HashAlgorithmType invalidAlgo = HashAlgorithmType.Of<SHA1>();
                Block<DumbAction> invalid1 = TestUtils.MineNext(chain.Genesis, _ => invalidAlgo)
                    .Evaluate(chain);
                Assert.Throws<InvalidBlockPreEvaluationHashException>(() => chain.Append(invalid1));
                HashAlgorithmType validAlgo = HashAlgorithmType.Of<MD5>();
                Block<DumbAction> valid1 = TestUtils.MineNext(chain.Genesis, _ => validAlgo)
                    .Evaluate(chain);
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
