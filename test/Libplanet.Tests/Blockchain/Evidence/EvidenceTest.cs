using System;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Evidence;
using Xunit;

namespace Libplanet.Tests.Blockchain.Evidence
{
    public class EvidenceTest
    {
        [Fact]
        public void Create_WithNegativeHeight_FailTest()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                paramName: "height",
                testCode: () => new TestEvidence(-1, default, DateTimeOffset.UtcNow));
        }

        [Fact]
        public void Create_WithNotDictionary_FailTest()
        {
            Assert.Throws<ArgumentException>(
                paramName: "bencoded",
                testCode: () => new TestEvidence(new Bencodex.Types.Integer(0)));
        }

        [Fact]
        public void Decode_WithInvalidEvidenceWithoutConstructor_FailTest()
        {
            var height = 0L;
            var address = new PrivateKey().Address;
            var timestamp = DateTimeOffset.UtcNow;
            var evidence = new TestEvidence(height, address, timestamp);

            var bencoded = EvidenceBase.Bencode(evidence);
            if (bencoded is Dictionary dictionary)
            {
                var typeName = typeof(InvalidEvidence).AssemblyQualifiedName;
                bencoded = dictionary.SetItem("type", new Text(typeName));
            }

            Assert.Throws<NotSupportedException>(
                testCode: () => EvidenceBase.Decode(bencoded));
        }

        private sealed class InvalidEvidence : EvidenceBase
        {
            public InvalidEvidence(long height, Address targetAddress, DateTimeOffset timestamp)
                : base(height, targetAddress, timestamp)
            {
            }

            protected override Dictionary OnBencoded(Dictionary dictionary)
            {
                return dictionary;
            }

            protected override void OnVerify(IEvidenceContext evidenceContext)
            {
            }
        }
    }
}
