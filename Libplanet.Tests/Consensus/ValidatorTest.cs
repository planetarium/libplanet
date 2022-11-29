using System.Numerics;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ValidatorTest
    {
        [Fact]
        public void Marshalling()
        {
            PublicKey publicKey = new PrivateKey().PublicKey;
            Validator validator = new Validator(publicKey, BigInteger.One);
            Validator unmarshalledValidator = new Validator(validator.ByteArray);
            Assert.Equal(validator, unmarshalledValidator);
            Assert.Equal(validator.PublicKey, unmarshalledValidator.PublicKey);
            Assert.Equal(validator.Power, unmarshalledValidator.Power);
        }
    }
}
