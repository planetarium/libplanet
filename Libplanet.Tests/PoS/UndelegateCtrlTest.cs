using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegateCtrlTest : PoSTest
    {
        private readonly PublicKey _operatorPublicKey;
        private readonly Address _operatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _validatorAddress;
        private readonly Address _undelegationAddress;
        private IAccountStateDelta _states;

        public UndelegateCtrlTest()
        {
            _operatorPublicKey = new PrivateKey().PublicKey;
            _operatorAddress = _operatorPublicKey.ToAddress();
            _delegatorAddress = CreateAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _undelegationAddress = Undelegation.DeriveAddress(_delegatorAddress, _validatorAddress);
            _states = InitializeStates();
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            Initialize(500, 500, 100, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<InvalidCurrencyException>(
                () => _states = UndelegateCtrl.Execute(
                    _states, _delegatorAddress, _validatorAddress, Asset.ConsensusToken * 30, 1));
            Assert.Throws<InvalidCurrencyException>(
                () => _states = UndelegateCtrl.Execute(
                    _states, _delegatorAddress, _validatorAddress, Asset.GovernanceToken * 30, 1));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100, 100);
            Assert.Throws<NullValidatorException>(
                () => _states = UndelegateCtrl.Execute(
                    _states, _delegatorAddress, CreateAddress(), Asset.Share * 10, 1));
        }

        [Fact]
        public void MaxEntriesTest()
        {
            Initialize(500, 500, 100, 100);
            for (long i = 0; i < 10; i++)
            {
                _states = UndelegateCtrl.Execute(
                    _states, _delegatorAddress, _validatorAddress, Asset.Share * 1, i);
            }

            Assert.Throws<MaximumUndelegationEntriesException>(
                () => _states = UndelegateCtrl.Execute(
                    _states, _delegatorAddress, _validatorAddress, Asset.Share * 1, 1));
        }

        [Fact]
        public void ExceedUndelegateTest()
        {
            Initialize(500, 500, 100, 100);
            Assert.Throws<InsufficientFungibleAssetValueException>(
                () => _states = UndelegateCtrl.Execute(
                    _states,
                    _delegatorAddress,
                    _validatorAddress,
                    Asset.Share * 101,
                    1));
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
            _states = UndelegateCtrl.Execute(
                _states, _delegatorAddress, _validatorAddress, Asset.Share * undelegateAmount, 1);
            Assert.Single(
                UndelegateCtrl.GetUndelegation(_states, _undelegationAddress)
                .UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            _states = UndelegateCtrl.Complete(_states, _undelegationAddress, 1000);
            Assert.Single(UndelegateCtrl.GetUndelegation(_states, _undelegationAddress)
                .UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            _states = UndelegateCtrl.Complete(_states, _undelegationAddress, 50400 * 5);
            Assert.Empty(UndelegateCtrl.GetUndelegation(_states, _undelegationAddress)
                .UndelegationEntryAddresses);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount + undelegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken * (selfDelegateAmount + delegateAmount - undelegateAmount),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
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
            _states = UndelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _validatorAddress,
                Asset.Share * undelegateAmount,
                1);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount - undelegateAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = UndelegateCtrl.Cancel(
                _states, _undelegationAddress, Asset.ConsensusToken * cancelAmount, 2);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken
                * (selfDelegateAmount + delegateAmount - undelegateAmount + cancelAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = UndelegateCtrl.Complete(_states, _undelegationAddress, 1000);
            Assert.Equal(
                Asset.GovernanceToken * (delegatorMintAmount - delegateAmount),
                _states.GetBalance(_delegatorAddress, Asset.GovernanceToken));
            Assert.Equal(
                Asset.ConsensusToken
                * (selfDelegateAmount + delegateAmount - undelegateAmount + cancelAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
            _states = UndelegateCtrl.Complete(_states, _undelegationAddress, 50400 * 5);
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
            _states = UndelegateCtrl.Execute(
                _states, _delegatorAddress, _validatorAddress, Asset.Share * undelegateAmount, 1);
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
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                ValidatorCtrl.GetValidator(_states, _validatorAddress).DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        _operatorAddress, _validatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(
                        _delegatorAddress, _validatorAddress), Asset.Share));
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
            _states = ValidatorCtrl.Create(
                _states,
                _operatorAddress,
                _operatorPublicKey,
                Asset.GovernanceToken * selfDelegateAmount,
                1);
            _states = DelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _validatorAddress,
                Asset.GovernanceToken * delegateAmount,
                1);
        }
    }
}
