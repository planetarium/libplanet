using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        [Theory(Timeout = Timeout)]
        [InlineData(0)]
        [InlineData(1)]
        public async Task DetermineCanonicalChain(short canonComparerType)
        {
            IComparer<IBlockExcerpt> canonComparer;
            switch (canonComparerType)
            {
                default:
                    canonComparer = new TotalDifficultyComparer();
                    break;

                case 1:
                    canonComparer = new AnonymousComparer<IBlockExcerpt>((a, b) =>
                        string.Compare(
                            a.Hash.ToString(),
                            b.Hash.ToString(),
                            StringComparison.Ordinal
                        )
                    );
                    break;
            }

            var policy = new BlockPolicy<DumbAction>(
                new MinerReward(1),
                canonicalChainComparer: canonComparer
            );
            BlockChain<DumbAction> chain1 = TestUtils.MakeBlockChain(
                policy,
                new DefaultStore(null),
                new TrieStateStore(new MemoryKeyValueStore())
            );
            BlockChain<DumbAction> chain2 = TestUtils.MakeBlockChain(
                policy,
                new DefaultStore(null),
                new TrieStateStore(new MemoryKeyValueStore())
            );

            var key1 = new PrivateKey();
            var key2 = new PrivateKey();

            Swarm<DumbAction> miner1 = CreateSwarm(chain1, key1);
            Swarm<DumbAction> miner2 = CreateSwarm(chain2, key2);

            await chain1.MineBlock(key1);
            await chain1.MineBlock(key2);

            Block<DumbAction> bestBlock;
            switch (canonComparerType)
            {
                default:
                    long nextDifficulty =
                        (long)chain1.Tip.TotalDifficulty + policy.GetNextBlockDifficulty(chain2);
                    bestBlock = TestUtils.MineNext(
                        chain2.Tip,
                        policy.GetHashAlgorithm,
                        difficulty: nextDifficulty,
                        blockInterval: TimeSpan.FromMilliseconds(1),
                        miner: TestUtils.ChainPrivateKey.PublicKey
                    ).Evaluate(TestUtils.ChainPrivateKey, chain2);
                    _output.WriteLine("chain1's total difficulty: {0}", chain1.Tip.TotalDifficulty);
                    _output.WriteLine("chain2's total difficulty: {0}", bestBlock.TotalDifficulty);
                    break;

                case 1:
                    string chain1TipHash = chain1.Tip.Hash.ToString();
                    string hashStr;
                    do
                    {
                        bestBlock = TestUtils.MineNext(
                            chain2.Tip,
                            policy.GetHashAlgorithm,
                            difficulty: policy.GetNextBlockDifficulty(chain2),
                            blockInterval: TimeSpan.FromMilliseconds(1),
                            miner: TestUtils.ChainPrivateKey.PublicKey
                        ).Evaluate(TestUtils.ChainPrivateKey, chain2);
                        hashStr = bestBlock.Hash.ToString();
                        _output.WriteLine("chain1's tip hash: {0}", chain1.Tip.Hash);
                        _output.WriteLine("chain2's tip hash: {0}", bestBlock.Hash);
                        _output.WriteLine(string.Empty);
                    }
                    while (string.Compare(chain1TipHash, hashStr, StringComparison.Ordinal) >= 0);
                    break;
            }

            Assert.True(
                canonComparer.Compare(
                    new BlockPerception(bestBlock),
                    chain1.PerceiveBlock(chain1.Tip)
                ) > 0
            );
            chain2.Append(bestBlock);

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);

                miner2.BroadcastBlock(bestBlock);
                _output.WriteLine("miner1 is waiting for a new block...");
                await miner1.BlockReceived.WaitAsync();

                Assert.Equal(miner1.BlockChain.Tip, bestBlock);
                Assert.Equal(miner2.BlockChain.Tip, bestBlock);
            }
            finally
            {
                await StopAsync(miner1);
                await StopAsync(miner2);
                miner1.Dispose();
                miner2.Dispose();
            }
        }
    }
}
