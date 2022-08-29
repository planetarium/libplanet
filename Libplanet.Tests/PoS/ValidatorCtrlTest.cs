using System;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorCtrlTest : PoSTest
    {
        private readonly Address _operatorAddress;
        private readonly Address _validatorAddress;
        private IAccountStateDelta _states;

        public ValidatorCtrlTest()
            : base()
        {
            _operatorAddress = CreateAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _states = InitializeStates();
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<ArgumentException>(
                () => _states = ValidatorCtrl.Create(
                    _states, _operatorAddress, Asset.ConsensusToken * 30));
        }

        [Theory]
        [InlineData(500, 0)]
        [InlineData(500, 1000)]
        public void InvalidSelfDelegateTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * mintAmount);
            Assert.Throws<ArgumentException>(
                () => _states = ValidatorCtrl.Create(
                    _states, _operatorAddress, Asset.GovernanceToken * selfDelegateAmount));
        }

        [Theory]
        [InlineData(500, 10)]
        [InlineData(500, 100)]
        public void BalanceTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * mintAmount);
            _states = ValidatorCtrl.Create(
                _states, _operatorAddress, Asset.GovernanceToken * selfDelegateAmount);
            Assert.Equal(
                Asset.ConsensusToken * selfDelegateAmount,
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.GovernanceToken * (mintAmount - selfDelegateAmount),
                _states.GetBalance(_operatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.Share * selfDelegateAmount,
                _states.GetBalance(
                    Delegation.DeriveAddress(_operatorAddress, _validatorAddress), Asset.Share));
            Assert.Equal(
                Asset.Share * selfDelegateAmount,
                ValidatorCtrl.GetValidatorByAddr(_states, _validatorAddress).DelegatorShares);
        }
    }
}
