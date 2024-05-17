using System;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Evidences;
using Xunit;

namespace Libplanet.Tests.Blockchain.Evidences
{
    public class UnknownEvidenceTest
    {
        [Fact]
        public void Decode_Test()
        {
            var height = 0L;
            var address = new PrivateKey().Address;
            var timestamp = DateTimeOffset.UtcNow;
            var expectedEvidence = new TestEvidence(height, address, timestamp);

            var bencoded = Evidence.Bencode(expectedEvidence);
            if (bencoded is Dictionary dictionary)
            {
                bencoded = dictionary.SetItem("type", new Text("invalid type"));
            }

            var actualEvidence = Evidence.Decode(bencoded);

            Assert.Equal(expectedEvidence.Height, actualEvidence.Height);
            Assert.Equal(expectedEvidence.TargetAddress, actualEvidence.TargetAddress);
            Assert.Equal(expectedEvidence.Timestamp, actualEvidence.Timestamp);
            Assert.Equal(expectedEvidence, actualEvidence);
        }
    }
}
