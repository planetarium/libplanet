using System;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class RedelegationTest : PoSTest
    {
        private readonly Address _srcOperatorAddress;
        private readonly Address _dstOperatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _srcValidatorAddress;
        private readonly Address _dstValidatorAddress;
        private readonly Address _delegationAddress;
        private readonly Address _redelegationAddress;
        private IAccountStateDelta _states;

        public RedelegationTest()
        {
            _srcOperatorAddress = CreateAddress();
            _dstOperatorAddress = CreateAddress();
            _delegatorAddress = CreateAddress();
            _srcValidatorAddress = Validator.DeriveAddress(_srcOperatorAddress);
            _dstValidatorAddress = Validator.DeriveAddress(_dstOperatorAddress);
            _delegationAddress = Delegation.DeriveAddress(_delegatorAddress, _srcValidatorAddress);
            _redelegationAddress = Redelegation.DeriveAddress(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            _states = InitializeStates();
        }

        private Validator SrcValidatorInstance
        {
            get
            {
                var serializedValidator = _states.GetState(_srcValidatorAddress);
                Validator validator = (serializedValidator == null)
                    ? new Validator(_srcOperatorAddress)
                    : new Validator(serializedValidator);
                return validator;
            }
        }

        private Validator DstValidatorInstance
        {
            get
            {
                var serializedValidator = _states.GetState(_dstValidatorAddress);
                Validator validator = (serializedValidator == null)
                    ? new Validator(_dstOperatorAddress)
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
                    ? new Delegation(_delegatorAddress, _srcValidatorAddress)
                    : new Delegation(serializedDelegation);
                return delegation;
            }
        }

        private Redelegation RedelegationInstance
        {
            get
            {
                var serializedRedelegation = _states.GetState(_redelegationAddress);
                Redelegation redelegation = (serializedRedelegation == null)
                    ? new Redelegation(
                        _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress)
                    : new Redelegation(serializedRedelegation);
                return redelegation;
            }
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            Initialize(500, 500, 100, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            Assert.Throws<ArgumentException>(
                    () => _states = redelegation.Redelegate(
                        _states, Asset.ConsensusToken * 30, 1));
            Assert.Throws<ArgumentException>(
                    () => _states = redelegation.Redelegate(
                        _states, Asset.GovernanceToken * 30, 1));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100, 100);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, CreateAddress(), CreateAddress());
            Assert.Throws<ArgumentException>(
                    () => _states = redelegation.Redelegate(
                        _states, Asset.GovernanceToken * 10, 1));
        }

        [Fact]
        public void MaxEntriesTest()
        {
            Initialize(500, 500, 100, 100);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            for (long i = 0; i < 10; i++)
            {
                _states = redelegation.Redelegate(_states, Asset.Share * 1, i);
            }

            Assert.Throws<InvalidOperationException>(
                    () => _states = redelegation.Redelegate(
                        _states, Asset.Share * 1, 1));
        }

        [Fact]
        public void ExceedRedelegateTest()
        {
            Initialize(500, 500, 100, 100);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            Assert.Throws<ArgumentException>(
                    () => _states = redelegation.Redelegate(
                        _states, Asset.Share * 101, 1));
        }

        [Theory]
        [InlineData(500, 500, 100, 100, 100)]
        [InlineData(500, 500, 100, 100, 50)]
        public void CompleteRedelegationTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount,
            int redelegateAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount, delegateAmount);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            _states = redelegation.Redelegate(_states, Asset.Share * redelegateAmount, 1);
            Assert.Single(RedelegationInstance.RedelegationEntryAddresses);
            _states = redelegation.CompleteRedelegation(_states, 1000);
            Assert.Single(RedelegationInstance.RedelegationEntryAddresses);
            _states = redelegation.CompleteRedelegation(_states, 50400 * 5);
            Assert.Empty(RedelegationInstance.RedelegationEntryAddresses);
        }

        [Theory]
        [InlineData(500, 500, 100, 100, 100)]
        [InlineData(500, 500, 100, 100, 50)]
        public void BalanceTest(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount,
            int redelegateAmount)
        {
            Initialize(operatorMintAmount, delegatorMintAmount, selfDelegateAmount, delegateAmount);
            Redelegation redelegation = new Redelegation(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            _states = redelegation.Redelegate(_states, Asset.Share * redelegateAmount, 1);
            Assert.Equal(
                Asset.GovernanceToken * 0,
                _states.GetBalance(_srcValidatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * 0,
                _states.GetBalance(_dstValidatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(_srcOperatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(_dstOperatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(_delegatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(_srcOperatorAddress, Asset.Share));
            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(_dstOperatorAddress, Asset.Share));
            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(_delegatorAddress, Asset.Share));
            Assert.Equal(
                Asset.GovernanceToken * (operatorMintAmount - selfDelegateAmount),
                _states.GetBalance(_srcOperatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (operatorMintAmount - selfDelegateAmount),
                _states.GetBalance(_dstOperatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (2 * selfDelegateAmount + delegateAmount),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            RedelegationEntry entry = new RedelegationEntry(
                _states.GetState(RedelegationInstance.RedelegationEntryAddresses[0]));
            Assert.Equal(
                SrcValidatorInstance.DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        _srcOperatorAddress, _srcValidatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(
                        _delegatorAddress, _srcValidatorAddress), Asset.Share)
                - entry.RedelegatingShare);
            Assert.Equal(
                DstValidatorInstance.DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        _dstOperatorAddress, _dstValidatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(
                        _delegatorAddress, _dstValidatorAddress), Asset.Share)
                + entry.IssuedShare);
            Assert.Equal(
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount)
                - entry.UnbondingConsensusToken,
                _states.GetBalance(_srcValidatorAddress, Asset.ConsensusToken));
            Assert.Equal(
                Asset.ConsensusToken * selfDelegateAmount
                + entry.UnbondingConsensusToken,
                _states.GetBalance(_dstValidatorAddress, Asset.ConsensusToken));
        }

        private void Initialize(
            int operatorMintAmount,
            int delegatorMintAmount,
            int selfDelegateAmount,
            int delegateAmount)
        {
            _states = InitializeStates();
            _states = _states.MintAsset(
                _srcOperatorAddress, Asset.GovernanceToken * operatorMintAmount);
            _states = _states.MintAsset(
                _dstOperatorAddress, Asset.GovernanceToken * operatorMintAmount);
            _states = _states.MintAsset(
                _delegatorAddress, Asset.GovernanceToken * delegatorMintAmount);
            _states = SrcValidatorInstance.Apply(
                _states, Asset.GovernanceToken * selfDelegateAmount);
            _states = DstValidatorInstance.Apply(
                _states, Asset.GovernanceToken * selfDelegateAmount);
            _states = DelegationInstance.Delegate(
                _states, Asset.GovernanceToken * delegateAmount);
        }
    }
}
