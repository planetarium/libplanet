using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
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
            var emptySet = new List<(Block, BlockCommit)>();
            Assert.Throws<ArgumentException>(() => new Branch(emptySet));

            // Cannot create with duplicates
            var duplicateSet = new List<(Block, BlockCommit)>
            {
                (_fx.Block1, CreateBlockCommit(_fx.Block1)),
                (_fx.Block1, CreateBlockCommit(_fx.Block1)),
                (_fx.Block2, CreateBlockCommit(_fx.Block2)),
            };
            Assert.Throws<ArgumentException>(() => new Branch(duplicateSet));

            // Cannot create with non-consecutive indices
            var nonConsecutiveIndexSet = new List<(Block, BlockCommit)>
            {
                (_fx.Block1, CreateBlockCommit(_fx.Block1)),
                (_fx.Block2, CreateBlockCommit(_fx.Block2)),
                (_fx.Block4, CreateBlockCommit(_fx.Block4)),
            };
            Assert.Throws<ArgumentException>(() => new Branch(nonConsecutiveIndexSet));

            // Cannot create with non-consecutive blocks
            var nonConsecutiveHashSet = new List<(Block, BlockCommit)>
            {
                (_fx.Block2, CreateBlockCommit(_fx.Block2)),
                (_fx.Block3Alt, CreateBlockCommit(_fx.Block3Alt)),
                (_fx.Block4, CreateBlockCommit(_fx.Block4)),
            };
            Assert.Throws<ArgumentException>(() => new Branch(nonConsecutiveHashSet));

            var shuffledSet = new List<(Block, BlockCommit)>
            {
                (_fx.Block4, CreateBlockCommit(_fx.Block4)),
                (_fx.Block2, CreateBlockCommit(_fx.Block2)),
                (_fx.Block3, CreateBlockCommit(_fx.Block3)),
                (_fx.Block1, CreateBlockCommit(_fx.Block1)),
            };
            var branch = new Branch(shuffledSet);
            AssertSorted(branch.Blocks.Select(block => block.Item1.Index));
        }
    }
}
