using System;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockProofTest
    {
        private readonly ITestOutputHelper _output;

        public BlockProofTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Marshalling()
        {
            var blockProof = new BlockProof(new PrivateKey(), 0, 0);

            byte[] marshaled = blockProof.ToByteArray();
            var unMarshaled = new BlockProof(marshaled);

            Assert.Equal(blockProof, unMarshaled);
        }

        [Fact]
        public void ChecksumEqualTest()
        {
            PrivateKey privateKey = new PrivateKey();
            PublicKey publicKey = privateKey.PublicKey;
            Random random = new Random();
            byte[] message = new byte[1024];
            random.NextBytes(message);

            BlockProof proof = new BlockProof(privateKey, message);
            Assert.True(proof.Verify(publicKey, message));
        }

        [Fact]
        public void ChecksumInequalTest()
        {
            PrivateKey privateKeyA = new PrivateKey();
            PublicKey publicKeyA = privateKeyA.PublicKey;
            PrivateKey privateKeyB = new PrivateKey();
            PublicKey publicKeyB = privateKeyB.PublicKey;
            Random random = new Random();
            byte[] message = new byte[1024];
            random.NextBytes(message);

            BlockProof proofA = new BlockProof(privateKeyA, message);
            Assert.False(proofA.Verify(publicKeyB, message));

            BlockProof proofB = new BlockProof(privateKeyB, message);
            Assert.False(proofB.Verify(publicKeyA, message));
        }
    }
}
