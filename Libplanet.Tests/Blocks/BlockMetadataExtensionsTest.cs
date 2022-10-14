using System;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockMetadataExtensionsTest : BlockContentFixture
    {
        [Fact]
        public void Copy()
        {
            AssertBlockMetadataEqual(GenesisMetadata, GenesisMetadata.Copy());
            AssertBlockMetadataEqual(Block1Metadata, Block1Metadata.Copy());
            AssertBlockMetadataEqual(GenesisMetadataPv0, GenesisMetadataPv0.Copy());
        }

        [Fact]
        public void ValidateTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            DateTimeOffset future = now + TimeSpan.FromSeconds(17);
            IBlockMetadata metadata = new BlockMetadata(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: 0,
                timestamp: future,
                miner: null,
                publicKey: new PrivateKey().PublicKey,
                previousHash: null,
                txHash: null,
                lastCommit: null);
            Assert.Throws<InvalidBlockTimestampException>(() => metadata.ValidateTimestamp(now));

            // It's okay because 3 seconds later.
            metadata.ValidateTimestamp(now + TimeSpan.FromSeconds(3));
        }
    }
}
