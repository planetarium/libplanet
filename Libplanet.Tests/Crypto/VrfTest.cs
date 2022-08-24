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

            (byte[] index1, byte[] proof) = VerifiableRandomFunction.Evaluate(message, privateKey);
            byte[] index2 = VerifiableRandomFunction.ProofToHash(message, proof, publicKey);
            Assert.Equal(index1, index2);
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

            (byte[] index1, byte[] proof) = VerifiableRandomFunction.Evaluate(message, privateKeyA);
            Assert.Throws<ArgumentException>(
                () => VerifiableRandomFunction.ProofToHash(message, proof, publicKeyB));
        }
    }
}
