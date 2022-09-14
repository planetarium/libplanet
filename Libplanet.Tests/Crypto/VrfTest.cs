using System;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Crypto
{
    public class VrfTest
    {
        [Fact]
        public void ChecksumEqualTest()
        {
            PrivateKey privateKey = new PrivateKey();
            PublicKey publicKey = privateKey.PublicKey;
            Random random = new Random();
            byte[] message = new byte[1024];
            random.NextBytes(message);

            Proof proof = new Proof(privateKey, message);
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

            Proof proofA = new Proof(privateKeyA, message);
            Assert.False(proofA.Verify(publicKeyB, message));

            Proof proofB = new Proof(privateKeyB, message);
            Assert.False(proofB.Verify(publicKeyA, message));
        }
    }
}
