using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class RedelegateCtrlTest : PoSTest
    {
        private readonly PublicKey _srcOperatorPublicKey;
        private readonly PublicKey _dstOperatorPublicKey;
        private readonly Address _srcOperatorAddress;
        private readonly Address _dstOperatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _srcValidatorAddress;
        private readonly Address _dstValidatorAddress;
        private readonly Address _redelegationAddress;
        private IAccountStateDelta _states;

        public RedelegateCtrlTest()
        {
            _srcOperatorPublicKey = new PrivateKey().PublicKey;
            _dstOperatorPublicKey = new PrivateKey().PublicKey;
            _srcOperatorAddress = _srcOperatorPublicKey.ToAddress();
            _dstOperatorAddress = _dstOperatorPublicKey.ToAddress();
            _delegatorAddress = CreateAddress();
            _srcValidatorAddress = Validator.DeriveAddress(_srcOperatorAddress);
            _dstValidatorAddress = Validator.DeriveAddress(_dstOperatorAddress);
            _redelegationAddress = Redelegation.DeriveAddress(
                _delegatorAddress, _srcValidatorAddress, _dstValidatorAddress);
            _states = InitializeStates();
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            Initialize(500, 500, 100, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<InvalidCurrencyException>(
                    () => _states = RedelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        _srcValidatorAddress,
                        _dstValidatorAddress,
                        Asset.ConsensusToken * 30,
                        1));
            Assert.Throws<InvalidCurrencyException>(
                    () => _states = RedelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        _srcValidatorAddress,
                        _dstValidatorAddress,
                        Asset.GovernanceToken * 30,
                        1));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100, 100);
            Assert.Throws<NullValidatorException>(
                () => _states = RedelegateCtrl.Execute(
                    _states,
                    _delegatorAddress,
                    CreateAddress(),
                    _dstValidatorAddress,
                    Asset.Share * 10,
                    1));
            Assert.Throws<NullValidatorException>(
                () => _states = RedelegateCtrl.Execute(
                    _states,
                    _delegatorAddress,
                    _srcValidatorAddress,
                    CreateAddress(),
                    Asset.Share * 10,
                    1));
        }

        [Fact]
        public void MaxEntriesTest()
        {
            Initialize(500, 500, 100, 100);
            for (long i = 0; i < 10; i++)
            {
                _states = RedelegateCtrl.Execute(
                    _states,
                    _delegatorAddress,
                    _srcValidatorAddress,
                    _dstValidatorAddress,
                    Asset.Share * 1,
                    i);
            }

            Assert.Throws<MaximumRedelegationEntriesException>(
                    () => _states = RedelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        _srcValidatorAddress,
                        _dstValidatorAddress,
                        Asset.Share * 1,
                        1));
        }

        [Fact]
        public void ExceedRedelegateTest()
        {
            Initialize(500, 500, 100, 100);
            Assert.Throws<InsufficientFungibleAssetValueException>(
                    () => _states = RedelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        _srcValidatorAddress,
                        _dstValidatorAddress,
                        Asset.Share * 101,
                        1));
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
            _states = RedelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _srcValidatorAddress,
                _dstValidatorAddress,
                Asset.Share * redelegateAmount,
                1);
            Assert.Single(
                RedelegateCtrl.GetRedelegation(_states, _redelegationAddress)
                .RedelegationEntryAddresses);
            _states = RedelegateCtrl.Complete(_states, _redelegationAddress, 1000);
            Assert.Single(
                RedelegateCtrl.GetRedelegation(_states, _redelegationAddress)
                .RedelegationEntryAddresses);
            _states = RedelegateCtrl.Complete(_states, _redelegationAddress, 50400 * 5);
            Assert.Empty(
                RedelegateCtrl.GetRedelegation(_states, _redelegationAddress)
                .RedelegationEntryAddresses);
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
            _states = RedelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _srcValidatorAddress,
                _dstValidatorAddress,
                Asset.Share * redelegateAmount,
                1);
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
            Assert.Equal(
                ValidatorCtrl.GetValidator(_states, _srcValidatorAddress).DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        _srcOperatorAddress, _srcValidatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(
                        _delegatorAddress, _srcValidatorAddress), Asset.Share));
            Assert.Equal(
                ValidatorCtrl.GetValidator(_states, _dstValidatorAddress).DelegatorShares,
                _states.GetBalance(
                    Delegation.DeriveAddress(
                        _dstOperatorAddress, _dstValidatorAddress), Asset.Share)
                + _states.GetBalance(
                    Delegation.DeriveAddress(
                        _delegatorAddress, _dstValidatorAddress), Asset.Share));
            RedelegationEntry entry = new RedelegationEntry(
                _states.GetState(
                    RedelegateCtrl.GetRedelegation(_states, _redelegationAddress)
                    .RedelegationEntryAddresses[0]));
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
            _states = ValidatorCtrl.Create(
                _states,
                _srcOperatorAddress,
                _srcOperatorPublicKey,
                Asset.GovernanceToken * selfDelegateAmount);
            _states = ValidatorCtrl.Create(
                _states,
                _dstOperatorAddress,
                _dstOperatorPublicKey,
                Asset.GovernanceToken * selfDelegateAmount);
            _states = DelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _srcValidatorAddress,
                Asset.GovernanceToken * delegateAmount);
        }
    }
}
