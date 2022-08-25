using System;
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

            (byte[] proof, byte[] result1) = privateKey.VrfEvaluate(message);
            (bool verified, byte[] result2) = publicKey.VrfVerify(message, proof);
            Assert.True(verified);
            Assert.Equal(result1, result2);
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

            (byte[] proof1, _) = privateKeyA.VrfEvaluate(message);
            (bool verified1, _) = publicKeyB.VrfVerify(message, proof1);
            Assert.False(verified1);

            (byte[] proof2, _) = privateKeyB.VrfEvaluate(message);
            (bool verified2, _) = publicKeyA.VrfVerify(message, proof2);
            Assert.False(verified2);
        }
    }
}
