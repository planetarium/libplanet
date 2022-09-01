using System;
using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerComparerTest : PoSTest
    {
        [Fact]
        public void CompareDifferentTokenTest()
        {
            PublicKey publicKeyA = new PrivateKey().PublicKey;
            PublicKey publicKeyB = new PrivateKey().PublicKey;
            ValidatorPower validatorPowerA = new ValidatorPower(
                publicKeyA.ToAddress(), publicKeyA, Asset.ConsensusToken * 10);
            ValidatorPower validatorPowerB = new ValidatorPower(
                publicKeyB.ToAddress(), publicKeyB, Asset.ConsensusToken * 11);
            Assert.True(((IComparable<ValidatorPower>)validatorPowerA)
                .CompareTo(validatorPowerB) > 0);
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
            int sign = -((IComparable<Address>)publicKeyA.ToAddress())
                .CompareTo(publicKeyB.ToAddress());
            Assert.True(((IComparable<ValidatorPower>)validatorPowerA)
                .CompareTo(validatorPowerB) == sign);
        }
    }
}
