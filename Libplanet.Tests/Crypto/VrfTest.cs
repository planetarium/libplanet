using System;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Crypto
{
    public class VrfTest
    {
        private readonly ITestOutputHelper _output;

        public VrfTest(ITestOutputHelper output)
        {
            _output = output;
        }

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
    }
}
