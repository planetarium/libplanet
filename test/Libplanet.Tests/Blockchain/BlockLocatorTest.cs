using System;
using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public class BlockLocatorTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(() =>
                new BlockLocator(new List<BlockHash>()));
        }
    }
}
