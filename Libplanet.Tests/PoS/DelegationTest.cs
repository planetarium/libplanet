using System;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class DelegationTest : PoSTest
    {
        private readonly Address _operatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _validatorAddress;
        private IAccountStateDelta _states;

        public DelegationTest()
        {
            _operatorAddress = CreateAddress();
            _delegatorAddress = CreateAddress();
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
            Initialize(500, 500, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Delegation delegation = new Delegation(_delegatorAddress, ValidatorInstance.Address);
            Assert.Throws<ArgumentException>(
                    () => _states = delegation.Delegate(
                        _states, Asset.ConsensusToken * 30));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100);
            Delegation delegation = new Delegation(_delegatorAddress, CreateAddress());
            Assert.Throws<InvalidOperationException>(
                    () => _states = delegation.Delegate(
                        _states, Asset.GovernanceToken * 10));
        }

        [Fact]
        public void InvalidShareTest()
        {
            Initialize(500, 500, 100);
            _states = _states.BurnAsset(ValidatorInstance.Address, Asset.ConsensusToken * 100);
            Delegation delegation = new Delegation(_delegatorAddress, _validatorAddress);
            Assert.Throws<InvalidOperationException>(
                    () => _states = delegation.Delegate(_states, Asset.GovernanceToken * 10));
        }

        [Theory]
        [InlineData(500, 500, 100, 10)]
        [InlineData(500, 500, 100, 20)]
        public void BalanceTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount);
            Delegation delegation = new Delegation(_delegatorAddress, ValidatorInstance.Address);
            _states = delegation.Delegate(_states, Asset.GovernanceToken * delegateAmount);
            Assert.Equal(
                Asset.GovernanceToken * 0,
                _states.GetBalance(ValidatorInstance.Address, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(_operatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(_delegatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(_operatorAddress, Asset.Share));
            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(_delegatorAddress, Asset.Share));
            Assert.Equal(
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(ValidatorInstance.Address, Asset.ConsensusToken));
            Assert.Equal(
                Asset.GovernanceToken * (operatorMintAmount - selfDelegateAmount),
                _states.GetBalance(_operatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                ValidatorInstance.DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(_operatorAddress, _validatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(_delegatorAddress, _validatorAddress), Asset.Share));
        }

        private void Initialize(
            int operatorMintAmount, int delegatorMintAmount, int selfDelegateAmount)
        {
            _states = InitializeStates();
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * operatorMintAmount);
            _states = _states.MintAsset(
                _delegatorAddress, Asset.GovernanceToken * delegatorMintAmount);
            _states = ValidatorInstance.Apply(_states, Asset.GovernanceToken * selfDelegateAmount);
        }
    }
}
