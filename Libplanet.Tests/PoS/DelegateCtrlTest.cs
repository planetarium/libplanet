using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class DelegateCtrlTest : PoSTest
    {
        private readonly PublicKey _operatorPublicKey;
        private readonly Address _operatorAddress;
        private readonly Address _delegatorAddress;
        private readonly Address _validatorAddress;
        private ImmutableHashSet<Currency> _nativeTokens;
        private IAccountStateDelta _states;

        public DelegateCtrlTest()
        {
            _operatorPublicKey = new PrivateKey().PublicKey;
            _operatorAddress = _operatorPublicKey.ToAddress();
            _delegatorAddress = CreateAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _nativeTokens = ImmutableHashSet.Create(
                Asset.GovernanceToken, Asset.ConsensusToken, Asset.Share);
            _states = InitializeStates();
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            Initialize(500, 500, 100);
            _states = _states.MintAsset(_delegatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<InvalidCurrencyException>(
                    () => _states = DelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        _validatorAddress,
                        Asset.ConsensusToken * 30,
                        _nativeTokens,
                        1));
        }

        [Fact]
        public void InvalidValidatorTest()
        {
            Initialize(500, 500, 100);
            Assert.Throws<NullValidatorException>(
                    () => _states = DelegateCtrl.Execute(
                        _states,
                        _delegatorAddress,
                        CreateAddress(),
                        Asset.GovernanceToken * 10,
                        _nativeTokens,
                        1));
        }

        [Fact]
        public void InvalidShareTest()
        {
            Initialize(500, 500, 100);
            _states = _states.BurnAsset(_validatorAddress, Asset.ConsensusToken * 100);
            Assert.Throws<InvalidExchangeRateException>(
                () => _states = DelegateCtrl.Execute(
                    _states,
                    _delegatorAddress,
                    _validatorAddress,
                    Asset.GovernanceToken * 10,
                    _nativeTokens,
                    1));
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
            _states = DelegateCtrl.Execute(
                _states,
                _delegatorAddress,
                _validatorAddress,
                Asset.GovernanceToken * delegateAmount,
                _nativeTokens,
                1);
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
                Asset.ConsensusToken * (selfDelegateAmount + delegateAmount),
                _states.GetBalance(_validatorAddress, Asset.ConsensusToken));
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
            _states = ValidatorCtrl.Create(
                _states,
                _operatorAddress,
                _operatorPublicKey,
                Asset.GovernanceToken * selfDelegateAmount,
                _nativeTokens,
                1);
        }
    }
}
