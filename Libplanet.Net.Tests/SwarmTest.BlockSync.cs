#nullable disable
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task CanGetCorrectBestBranch()
        {
            var minerA = new PrivateKey();
            var policy = new NullBlockPolicy<DumbAction>();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var chainA = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var branchBlocksBetweenA = new List<Block<DumbAction>>();
            var branchBlocksBetweenB = new List<Block<DumbAction>>();

            foreach (int i in Enumerable.Range(0, 10))
            {
                await chainA.MineBlock(minerA);
            }

            BlockChain<DumbAction> chainB = chainA.Fork(chainA.Tip.Hash);

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await chainA.MineBlock(minerA);
                chainB.Append(block);
                branchBlocksBetweenA.Add(block);
                branchBlocksBetweenB.Add(block);
            }

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await chainA.MineBlock(minerA);
                branchBlocksBetweenA.Add(block);
            }

            var branchBetweenA = new CandidateBranch<DumbAction>(
                branchBlocksBetweenA,
                branchBlocksBetweenA.First(),
                branchBlocksBetweenA.Last()
            );

            var branchBetweenB = new CandidateBranch<DumbAction>(
                branchBlocksBetweenB,
                branchBlocksBetweenB.First(),
                branchBlocksBetweenB.Last()
            );

            var table = new BlockCandidateTable<DumbAction>();
            table.Add(branchBetweenA);
            table.Add(branchBetweenB);
            CandidateBranch<DumbAction> bestBranch = table.BestBranch;
            Assert.Equal(branchBetweenA, bestBranch);
        }
    }
}
