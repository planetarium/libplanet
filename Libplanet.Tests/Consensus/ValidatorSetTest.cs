using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ValidatorSetTest
    {
        [Fact]
        public void ValidatorsAreOrderedByAddress()
        {
            List<PublicKey> publicKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey().PublicKey)
                .ToList();
            ValidatorSet validatorSet = new ValidatorSet(publicKeys.Select(
                publicKey => new Validator(publicKey, BigInteger.One)).ToList());
            TestUtils.AssertSorted(validatorSet.Validators.Select(
                validator => validator.OperatorAddress));
        }

        [Fact]
        public void ValidatorCount()
        {
            List<PublicKey> publicKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey().PublicKey)
                .ToList();
            ValidatorSet validatorSet = new ValidatorSet(publicKeys.Select(
                publicKey => new Validator(publicKey, BigInteger.One)).ToList());
            Assert.Equal(10, validatorSet.TotalCount);
            Assert.Equal(6, validatorSet.TwoThirdsCount);
            Assert.Equal(3, validatorSet.OneThirdCount);
        }

        [Fact]
        public void ValidatorTotalPower()
        {
            List<PublicKey> publicKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey().PublicKey)
                .ToList();
            ValidatorSet validatorSet = new ValidatorSet(publicKeys.Select(
                publicKey => new Validator(publicKey, BigInteger.One)).ToList());
            Assert.Equal(10, validatorSet.TotalPower);
            Assert.Equal(6, validatorSet.TwoThirdsPower);
            Assert.Equal(3, validatorSet.OneThirdPower);
        }
    }
}
