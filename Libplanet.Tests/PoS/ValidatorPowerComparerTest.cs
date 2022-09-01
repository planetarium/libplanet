using System.Numerics;
using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerComparerTest : PoSTest
    {
        private readonly ValidatorPowerComparer _validatorPowerComparer;

        public ValidatorPowerComparerTest()
        {
            _validatorPowerComparer = new ValidatorPowerComparer();
        }

        [Fact]
        public void CompareDifferentTokenTest()
        {
            PublicKey publicKeyA = new PrivateKey().PublicKey;
            PublicKey publicKeyB = new PrivateKey().PublicKey;
            ValidatorPower validatorPowerA = new ValidatorPower(
                publicKeyA.ToAddress(), publicKeyA, Asset.ConsensusToken * 10);
            ValidatorPower validatorPowerB = new ValidatorPower(
                publicKeyB.ToAddress(), publicKeyB, Asset.ConsensusToken * 11);
            Assert.True(_validatorPowerComparer.Compare(
                validatorPowerA, validatorPowerB) > 0);
        }

        [Fact]
        public void CompareSameTokenTest()
        {
            PublicKey publicKeyA = new PrivateKey().PublicKey;
            PublicKey publicKeyB = new PrivateKey().PublicKey;
            ValidatorPower validatorPowerA = new ValidatorPower(
                publicKeyA.ToAddress(), publicKeyA, Asset.ConsensusToken * 10);
            ValidatorPower validatorPowerB = new ValidatorPower(
                publicKeyB.ToAddress(), publicKeyB, Asset.ConsensusToken * 10);
            int sign = -(new BigInteger(publicKeyA.ToAddress().ToByteArray())
                - new BigInteger(publicKeyB.ToAddress().ToByteArray())).Sign;
            Assert.True(_validatorPowerComparer.Compare(
                validatorPowerA, validatorPowerB) == sign);
        }
    }
}
