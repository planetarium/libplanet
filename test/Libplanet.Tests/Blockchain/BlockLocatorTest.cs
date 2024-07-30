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

        [Fact]
        public void Create()
        {
            BlockHash genesisHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            BlockHash tipHash = genesisHash;
            BlockLocator locator = BlockLocator.Create(genesisHash, tipHash);
            Assert.Equal(genesisHash, Assert.Single(locator));

            tipHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            locator = BlockLocator.Create(genesisHash, tipHash);
            Assert.Equal(
                new BlockHash[] { tipHash, genesisHash },
                locator);
        }
    }
}
