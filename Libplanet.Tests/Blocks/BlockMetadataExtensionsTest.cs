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
        public void ValidateTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            DateTimeOffset future = now + TimeSpan.FromSeconds(17);
            PublicKey publicKey = new PrivateKey().PublicKey;
            IBlockMetadata metadata = new BlockMetadata(
                index: 0,
                timestamp: future,
                publicKey: publicKey,
                difficulty: 0,
                totalDifficulty: 0,
                previousHash: null,
                txHash: null);
            Assert.Throws<InvalidBlockTimestampException>(() => metadata.ValidateTimestamp(now));

            // It's okay because 3 seconds later.
            metadata.ValidateTimestamp(now + TimeSpan.FromSeconds(3));
        }
    }
}
