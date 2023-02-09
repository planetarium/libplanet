using System;
using System.Collections.Generic;
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

            // Ignore empty
            table.Add(header, new List<Block<DumbAction>>());
            Assert.Equal(0, table.Count);

            // Ignore duplicate
            var duplicateSet = new List<Block<DumbAction>>() { _fx.Block1, _fx.Block1, _fx.Block2 };
            table.Add(header, duplicateSet);
            Assert.Equal(0, table.Count);

            // Ignore non-consecutive indices
            var nonConsecutiveIndexSet = new List<Block<DumbAction>>()
                { _fx.Block1, _fx.Block2, _fx.Block4 };
            table.Add(header, nonConsecutiveIndexSet);
            Assert.Equal(0, table.Count);

            // Ignore non-consecutive blocks
            var nonConsecutiveHashSet = new List<Block<DumbAction>>()
                { _fx.Block2, _fx.Block3Alt, _fx.Block4 };
            table.Add(header, nonConsecutiveHashSet);
            Assert.Equal(0, table.Count);

            // Ignore existing key
            var firstSet = new List<Block<DumbAction>>() { _fx.Block2, _fx.Block3, _fx.Block4 };
            var secondSet = new List<Block<DumbAction>>() { _fx.Block3, _fx.Block4 };
            table.Add(header, firstSet);
            Assert.Equal(1, table.Count);
            table.Add(header, secondSet);
            Assert.Equal(1, table.Count);
            var stored = table.GetCurrentRoundCandidate(header)
                ?? throw new NullReferenceException();
            Assert.Equal(stored, firstSet);
        }
    }
}
