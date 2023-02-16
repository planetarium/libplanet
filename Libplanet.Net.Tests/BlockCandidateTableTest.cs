using System;
using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class BlockCandidateTableTest
    {
        private StoreFixture _fx;

        public BlockCandidateTableTest()
        {
            _fx = new MemoryStoreFixture();
        }

        [Fact]
        public void Add()
        {
            var table = new BlockCandidateTable<DumbAction>();
            var header = _fx.GenesisBlock.Header;

            // Ignore existing key
            var firstBranch = new Branch<DumbAction>(
                new List<Block<DumbAction>>() { _fx.Block2, _fx.Block3, _fx.Block4 });
            var secondBranch = new Branch<DumbAction>(
                new List<Block<DumbAction>>() { _fx.Block3, _fx.Block4 });
            table.Add(header, firstBranch);
            Assert.Equal(1, table.Count);
            table.Add(header, secondBranch);
            Assert.Equal(1, table.Count);
            var branch = table.GetCurrentRoundCandidate(header)
                ?? throw new NullReferenceException();
            Assert.Equal(branch.Blocks, firstBranch.Blocks);
        }
    }
}
