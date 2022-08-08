using System;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegationTest : PoSTest
    {
        private readonly Address _operatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _validatorAddress;
        private readonly Address _delegationAddress;
        private readonly Address _undelegationAddress;
        private IAccountStateDelta _states;

        public UndelegationTest()
        {
            _operatorAddress = CreateAddress();
            _delegatorAddress = CreateAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _delegationAddress = Delegation.DeriveAddress(_delegatorAddress, _validatorAddress);
            _undelegationAddress = Undelegation.DeriveAddress(_delegatorAddress, _validatorAddress);
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

        private Delegation DelegationInstance
        {
            get
            {
                var serializedDelegation = _states.GetState(_delegationAddress);
                Delegation delegation = (serializedDelegation == null)
                    ? new Delegation(_delegatorAddress, _validatorAddress)
                    : new Delegation(serializedDelegation);
                return delegation;
            }
        }

        private Undelegation UndelegationInstance
        {
            get
            {
                var serializedUndelegation = _states.GetState(_undelegationAddress);
                Undelegation undelegation = (serializedUndelegation == null)
                    ? new Undelegation(_delegatorAddress, _validatorAddress)
                    : new Undelegation(serializedUndelegation);
                return undelegation;
            }
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            Initialize(500, 500, 100, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Undelegation undelegation = new Undelegation(_delegatorAddress, _validatorAddress);
            Assert.Throws<ArgumentException>(
                    () => _states = undelegation.Undelegate(
                        _states, Asset.ConsensusToken * 30, 1));
            Assert.Throws<ArgumentException>(
                    () => _states = undelegation.Undelegate(
                        _states, Asset.GovernanceToken * 30, 1));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100, 100);
            Undelegation undelegation = new Undelegation(_delegatorAddress, CreateAddress());
            Assert.Throws<ArgumentException>(
                    () => _states = undelegation.Undelegate(
                        _states, Asset.GovernanceToken * 10, 1));
        }

        [Fact]
        public void MaxEntriesTest()
        {
            Initialize(500, 500, 100, 100);
            Undelegation undelegation = new Undelegation(_delegatorAddress, _validatorAddress);
            for (long i = 0; i < 10; i++)
            {
                _states = undelegation.Undelegate(_states, Asset.Share * 1, i);
            }

            Assert.Throws<InvalidOperationException>(
                    () => _states = undelegation.Undelegate(
                        _states, Asset.Share * 1, 1));
        }

        [Fact]
        public void ExceedUndelegateTest()
        {
            Initialize(500, 500, 100, 100);
            Undelegation undelegation = new Undelegation(_delegatorAddress, _validatorAddress);
            Assert.Throws<ArgumentException>(
                    () => _states = undelegation.Undelegate(
                        _states, Asset.Share * 101, 1));
        }

        [Theory]
        [InlineData(500, 500, 100, 100, 100)]
        [InlineData(500, 500, 100, 100, 50)]
        public void CompleteUnbondingTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount,
            int undelegateAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount, delegateAmount);
            Undelegation undelegation = new Undelegation(_delegatorAddress, _validatorAddress);
            _states = undelegation.Undelegate(_states, Asset.Share * undelegateAmount, 1);
            Assert.Single(UndelegationInstance.UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(Pool.UnbondedPool, Asset.GovernanceToken));
            _states = undelegation.CompleteUnbonding(_states, 1000);
            Assert.Single(UndelegationInstance.UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(Pool.UnbondedPool, Asset.GovernanceToken));
            _states = undelegation.CompleteUnbonding(_states, 50400 * 5);
            Assert.Empty(UndelegationInstance.UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount + undelegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount - undelegateAmount),
                _states.GetBalance(Pool.UnbondedPool, Asset.GovernanceToken));
        }

        [Theory]
        [InlineData(500, 500, 100, 100, 100, 30)]
        [InlineData(500, 500, 100, 100, 50, 30)]
        public void CancelUndelegateTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount,
            int undelegateAmount,
            int cancelAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount, delegateAmount);
            Undelegation undelegation = new Undelegation(_delegatorAddress, _validatorAddress);
            _states = undelegation.Undelegate(_states, Asset.Share * undelegateAmount, 1);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount - undelegateAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = undelegation.CancelUndelegation(
                _states, Asset.ConsensusToken * cancelAmount, 2);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken
                * (selfDelegateAmount + delegateAmount - undelegateAmount + cancelAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = undelegation.CompleteUnbonding(_states, 1000);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken
                * (selfDelegateAmount + delegateAmount - undelegateAmount + cancelAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = undelegation.CompleteUnbonding(_states, 50400 * 5);
            Assert.Equal(
                Asset.GovernanceToken
                * (delegatorMintAmount - delegateAmount + undelegateAmount - cancelAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken
                * (selfDelegateAmount + delegateAmount - undelegateAmount + cancelAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
        }

        [Theory]
        [InlineData(500, 500, 100, 100, 100)]
        [InlineData(500, 500, 100, 100, 50)]
        public void BalanceTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount,
            int undelegateAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount, delegateAmount);
            Undelegation undelegation = new Undelegation(
                _delegatorAddress, _validatorAddress);
            _states = undelegation.Undelegate(_states, Asset.Share * undelegateAmount, 1);
            Assert.Equal(
                Asset.GovernanceToken * 0,
                _states.GetBalance(_validatorAddress, Asset.GovernanceToken));
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
                Asset.GovernanceToken * (operatorMintAmount - selfDelegateAmount),
                _states.GetBalance(_operatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(Pool.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                ValidatorInstance.DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(_operatorAddress, _validatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(_delegatorAddress, _validatorAddress), Asset.Share));
            Assert.Equal(
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount - undelegateAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
        }

        private void Initialize(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount)
        {
            _states = InitializeStates();
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * operatorMintAmount);
            _states = _states.MintAsset(
                _delegatorAddress, Asset.GovernanceToken * delegatorMintAmount);
            _states = ValidatorInstance.Apply(_states, Asset.GovernanceToken * selfDelegateAmount);
            _states = DelegationInstance.Delegate(_states, Asset.GovernanceToken * delegateAmount);
        }
    }
}
