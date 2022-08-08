using System;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorTest : PoSTest
    {
        private readonly Address _operatorAddress;
        private readonly Address _validatorAddress;
        private IAccountStateDelta _states;

        public ValidatorTest()
            : base()
        {
            _operatorAddress = CreateAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _states = InitializeStates();
        }

        private Validator ValidatorInstance
        {
            get
            {
                var serializedValidator = _states.GetState(_validatorAddress);
                Validator validator = (serializedValidator == null)
                    ? new Validator(_operatorAddress)
                    : new Validator(serializedValidator);
                return validator;
            }
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            _states = _states.MintAsset(
                ValidatorInstance.OperatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<ArgumentException>(
                    () => _states = ValidatorInstance.Apply(
                        _states, Asset.ConsensusToken * 30));
        }

        [Theory]
        [InlineData(500, 0)]
        [InlineData(500, 1000)]
        public void InvalidSelfDelegateTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                ValidatorInstance.OperatorAddress, Asset.GovernanceToken * mintAmount);
            Assert.Throws<ArgumentException>(
                    () => _states = ValidatorInstance.Apply(
                        _states, Asset.GovernanceToken * selfDelegateAmount));
        }

        [Theory]
        [InlineData(500, 10)]
        [InlineData(500, 100)]
        public void BalanceTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                ValidatorInstance.OperatorAddress, Asset.GovernanceToken * mintAmount);
            _states = ValidatorInstance.Apply(_states, Asset.GovernanceToken * selfDelegateAmount);
            Assert.Equal(
                Asset.ConsensusToken * selfDelegateAmount,
                _states.GetBalance(ValidatorInstance.Address, Asset.ConsensusToken));
            Assert.Equal(
                Asset.GovernanceToken * (mintAmount - selfDelegateAmount),
                _states.GetBalance(ValidatorInstance.OperatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.Share * selfDelegateAmount,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        ValidatorInstance.OperatorAddress, ValidatorInstance.Address),
                    Asset.Share));
            Assert.Equal(
                Asset.Share * selfDelegateAmount,
                ValidatorInstance.DelegatorShares);
        }
    }
}
