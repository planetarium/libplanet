using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blockchain
{
    public class BranchTest
    {
        private StoreFixture _fx;

        public BranchTest()
        {
            _fx = new MemoryStoreFixture();
        }

        [Fact]
        public void Constructor()
        {
            // Cannot create empty
            var emptySet = new List<Block<DumbAction>>();
            Assert.Throws<ArgumentException>(() => new Branch<DumbAction>(emptySet));

            // Cannot create with duplicates
            var duplicateSet = new List<Block<DumbAction>>() { _fx.Block1, _fx.Block1, _fx.Block2 };
            Assert.Throws<ArgumentException>(() => new Branch<DumbAction>(duplicateSet));

            // Cannot create with non-consecutive indices
            var nonConsecutiveIndexSet = new List<Block<DumbAction>>()
                { _fx.Block1, _fx.Block2, _fx.Block4 };
            Assert.Throws<ArgumentException>(() => new Branch<DumbAction>(nonConsecutiveIndexSet));

            // Cannot create with non-consecutive blocks
            var nonConsecutiveHashSet = new List<Block<DumbAction>>()
                { _fx.Block2, _fx.Block3Alt, _fx.Block4 };
            Assert.Throws<ArgumentException>(() => new Branch<DumbAction>(nonConsecutiveHashSet));

            var shuffledSet = new List<Block<DumbAction>>()
                { _fx.Block4, _fx.Block2, _fx.Block3, _fx.Block1 };
            var branch = new Branch<DumbAction>(shuffledSet);
            AssertSorted(branch.Blocks.Select(block => block.Index));
        }
    }
}
