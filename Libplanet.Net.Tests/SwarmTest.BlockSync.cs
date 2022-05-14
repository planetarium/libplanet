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

            var branchBetweenA = new CandidateBranch<DumbAction>(branchBlocksBetweenA);

            var branchBetweenB = new CandidateBranch<DumbAction>(branchBlocksBetweenB);

            var table = new BlockCandidateTable<DumbAction>(chainA.Policy.CanonicalChainComparer);
            table.Add(branchBetweenA);
            table.Add(branchBetweenB);
            CandidateBranch<DumbAction> bestBranch = table.BestBranch;
            Assert.Equal(branchBetweenA, bestBranch);
        }

        [Fact(Timeout = Timeout)]
        public async Task UpdateAllBranches()
        {
            var minerKey = new PrivateKey();
            var policy = new NullBlockPolicy<DumbAction>();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var miner = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var blocksForBranch = new List<Block<DumbAction>>();
            var blocksForPath = new List<Block<DumbAction>>();

            foreach (int i in Enumerable.Range(0, 10))
            {
                await miner.MineBlock(minerKey);
            }

            BlockChain<DumbAction> chainB = miner.Fork(miner.Tip.Hash);

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await miner.MineBlock(minerKey);
                if (i < 5)
                {
                    chainB.Append(block);
                    blocksForPath.Add(block);
                }

                blocksForBranch.Add(block);
            }

            var path = new UpdatePath<DumbAction>(blocksForPath, blocksForPath.First());

            var branch = new CandidateBranch<DumbAction>(blocksForBranch);

            var table = new BlockCandidateTable<DumbAction>(chainB.Policy.CanonicalChainComparer);
            table.Add(branch);

            CandidateBranch<DumbAction> bestBranch = table.BestBranch;
            Assert.Equal(branch.Root.Hash, bestBranch?.Root.Hash);
            Assert.Equal(branch.Tip.Hash, bestBranch?.Tip.Hash);
            Assert.NotEqual(chainB.Tip.Hash, bestBranch?.Root.PreviousHash);

            table.Update(path);
            bestBranch = table.BestBranch;

            Assert.NotEqual(branch.Root.Hash, bestBranch?.Root.Hash);
            Assert.Equal(branch.Tip.Hash, bestBranch?.Tip.Hash);
            Assert.Equal(chainB.Tip.Hash, bestBranch?.Root.PreviousHash);
        }

        [Fact(Timeout = Timeout)]
        public async Task PruneOutdatedBranchWhenUpdate()
        {
            var minerKey = new PrivateKey();
            var policy = new NullBlockPolicy<DumbAction>();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var miner = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var branchBlocksBetweenA = new List<Block<DumbAction>>();
            var branchBlocksBetweenB = new List<Block<DumbAction>>();
            var blocksForPath = new List<Block<DumbAction>>();

            foreach (int i in Enumerable.Range(0, 10))
            {
                await miner.MineBlock(minerKey);
            }

            BlockChain<DumbAction> chainA = miner.Fork(miner.Tip.Hash);
            BlockChain<DumbAction> chainB = miner.Fork(miner.Tip.Hash);

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await miner.MineBlock(minerKey);
                if (i < 5)
                {
                    if (i < 4)
                    {
                        blocksForPath.Add(block);
                        chainB.Append(block);
                    }

                    branchBlocksBetweenB.Add(block);
                }

                chainA.Append(block);
                branchBlocksBetweenA.Add(block);
            }

            var path = new UpdatePath<DumbAction>(blocksForPath, blocksForPath.First());

            var branchA = new CandidateBranch<DumbAction>(branchBlocksBetweenA);

            var branchB = new CandidateBranch<DumbAction>(branchBlocksBetweenB);

            var table = new BlockCandidateTable<DumbAction>(chainA.Policy.CanonicalChainComparer);
            table.Add(branchA);
            table.Add(branchB);

            CandidateBranch<DumbAction> bestBranch = table.BestBranch;
            Assert.Equal(branchA.Root.Hash, bestBranch?.Root.Hash);
            Assert.Equal(branchA.Tip.Hash, bestBranch?.Tip.Hash);
            Assert.Equal(2, table.Count);

            table.Update(path);
            bestBranch = table.BestBranch;

            Assert.Equal(chainB.Tip.Hash, bestBranch?.Root.PreviousHash);
            Assert.Equal(branchA.Tip.Hash, bestBranch?.Tip.Hash);
            Assert.Equal(1, table.Count);
        }

        [Fact(Timeout = Timeout)]
        public async Task FillUpPreviousBlocksWhenItsReorg()
        {
            var minerKey = new PrivateKey();
            var policy = new NullBlockPolicy<DumbAction>();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var miner = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var branchBlocksBetweenB = new List<Block<DumbAction>>();
            var blocksForPath = new List<Block<DumbAction>>();
            var table = new BlockCandidateTable<DumbAction>(miner.Policy.CanonicalChainComparer);

            Block<DumbAction> branchpoint = null;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await miner.MineBlock(minerKey);
                if (i == 5)
                {
                    branchpoint = block;
                }
            }

            BlockChain<DumbAction> chainA = miner.Fork(branchpoint.Hash);
            BlockChain<DumbAction> chainB = miner.Fork(miner.Tip.Hash);
            Block<DumbAction> oldTip = miner.Tip;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await chainA.MineBlock(minerKey);
                blocksForPath.Add(block);
            }

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block<DumbAction> block = await chainB.MineBlock(minerKey);
                branchBlocksBetweenB.Add(block);
            }

            // Finding branchpoint without branchpoint
            Block<DumbAction> index = chainB[branchBlocksBetweenB.First().PreviousHash.Value];
            while (index.PreviousHash != null &&
                   !index.Hash.Equals(branchpoint.Hash))
            {
                branchBlocksBetweenB.Insert(0, index);
                if (index.PreviousHash != null)
                {
                    index = chainB[index.PreviousHash.Value];
                }
            }

            // Path building for chainA
            index = miner.Tip;
            while (branchpoint.PreviousHash != null &&
                   !index.Hash.Equals(branchpoint.PreviousHash.Value))
            {
                blocksForPath.Insert(0, index);
                if (index.PreviousHash is { })
                {
                    index = miner[index.PreviousHash.Value];
                }
                else
                {
                    break;
                }
            }

            var mergedAPath = new UpdatePath<DumbAction>(blocksForPath, oldTip);

            var branchBtoA = new CandidateBranch<DumbAction>(branchBlocksBetweenB);

            table.Add(branchBtoA);
            table.Update(mergedAPath);
            CandidateBranch<DumbAction> bestBranch = table.BestBranch;

            Assert.Equal(chainB.Tip.Hash, bestBranch.Tip.Hash);
            Assert.Equal(branchpoint.Hash, bestBranch.Root.Hash);
        }
    }
}
