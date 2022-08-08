using System;
using Bencodex.Types;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorInfoTest : PoSTest
    {
        private readonly ValidatorInfo _validatorInfo;

        public ValidatorInfoTest()
        {
            _validatorInfo = new ValidatorInfo(CreateAddress());
        }

        [Fact]
        public void InvalidShareTypeTest()
        {
            Assert.Throws<ArgumentException>(
                () => _validatorInfo.DelegatorShares = Asset.ConsensusToken * 1);
            Assert.Throws<ArgumentException>(
                () => _validatorInfo.DelegatorShares = Asset.GovernanceToken * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorInfo newValidatorInfo = new ValidatorInfo((List)_validatorInfo.Serialize());
            Assert.Equal(_validatorInfo.Address, newValidatorInfo.Address);
            Assert.Equal(_validatorInfo.OperatorAddress, newValidatorInfo.OperatorAddress);
            Assert.Equal(_validatorInfo.Jailed, newValidatorInfo.Jailed);
            Assert.Equal(_validatorInfo.Status, newValidatorInfo.Status);
            Assert.Equal(_validatorInfo.DelegatorShares, newValidatorInfo.DelegatorShares);
        }
    }
}
