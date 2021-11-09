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
            using (var fx = new MemoryStoreFixture())
            {
                IBlockPolicy<DumbAction> policy = new MultiAlgoPolicy<DumbAction>();
                BlockChain<DumbAction> chain = TestUtils.MakeBlockChain(
                    policy,
                    fx.Store,
                    fx.StateStore,
                    new DumbAction[0]
                );
                var key = new PrivateKey();
                Block<DumbAction> block1 = await chain.MineBlock(key);
                Assert.Equal(16, block1.PreEvaluationHash.Length);
                Block<DumbAction> block2 = await chain.MineBlock(key);
                Assert.Equal(20, block2.PreEvaluationHash.Length);
            }
        }

        [Fact]
        public void ValidateWithMultipleAlgorithms()
        {
            using (var fx = new MemoryStoreFixture())
            {
                IBlockPolicy<DumbAction> policy = new MultiAlgoPolicy<DumbAction>();
                BlockChain<DumbAction> chain = TestUtils.MakeBlockChain(
                    policy,
                    fx.Store,
                    fx.StateStore,
                    new DumbAction[0]
                );
                HashAlgorithmType invalidAlgo = HashAlgorithmType.Of<SHA1>();
                Block<DumbAction> invalidBlock = TestUtils.MineNext(
                    chain.Genesis,
                    _ => invalidAlgo,
                    miner: TestUtils.ChainPrivateKey.PublicKey,
                    difficulty: policy.GetNextBlockDifficulty(chain)
                ).Evaluate(TestUtils.ChainPrivateKey, chain);
                Assert.Throws<BlockPolicyViolationException>(() => chain.Append(invalidBlock));
                HashAlgorithmType validAlgo = HashAlgorithmType.Of<MD5>();
                Block<DumbAction> validBlock = TestUtils.MineNext(
                    chain.Genesis,
                    _ => validAlgo,
                    miner: TestUtils.ChainPrivateKey.PublicKey,
                    difficulty: policy.GetNextBlockDifficulty(chain)
                ).Evaluate(TestUtils.ChainPrivateKey, chain);
                chain.Append(validBlock);
            }
        }

        private class MultiAlgoPolicy<T> : BlockPolicy<T>
            where T : IAction, new()
        {
            public MultiAlgoPolicy()
                : base(hashAlgorithmGetter: index => index % 2 == 1
                    ? HashAlgorithmType.Of<MD5>()
                    : HashAlgorithmType.Of<SHA1>())
            {
            }
        }
    }
}
