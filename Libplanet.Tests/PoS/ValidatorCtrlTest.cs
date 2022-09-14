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
    public class ValidatorCtrlTest : PoSTest
    {
        private readonly PublicKey _operatorPublicKey;
        private readonly Address _operatorAddress;
        private readonly Address _validatorAddress;
        private readonly ImmutableHashSet<Currency> _nativeTokens;
        private IAccountStateDelta _states;

        public ValidatorCtrlTest()
            : base()
        {
            _operatorPublicKey = new PrivateKey().PublicKey;
            _operatorAddress = _operatorPublicKey.ToAddress();
            _validatorAddress = Validator.DeriveAddress(_operatorAddress);
            _nativeTokens = ImmutableHashSet.Create(
                Asset.GovernanceToken, Asset.ConsensusToken, Asset.Share);
            _states = InitializeStates();
        }

        [Fact]
        public void InvalidCurrencyTest()
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.ConsensusToken * 50);
            Assert.Throws<InvalidCurrencyException>(
                () => _states = ValidatorCtrl.Create(
                    _states,
                    _operatorAddress,
                    _operatorPublicKey,
                    Asset.ConsensusToken * 30,
                    _nativeTokens,
                    1));
        }

        [Theory]
        [InlineData(500, 0)]
        [InlineData(500, 1000)]
        public void InvalidSelfDelegateTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * mintAmount);
            Assert.Throws<InsufficientFungibleAssetValueException>(
                () => _states = ValidatorCtrl.Create(
                    _states,
                    _operatorAddress,
                    _operatorPublicKey,
                    Asset.GovernanceToken * selfDelegateAmount,
                    _nativeTokens,
                    1));
        }

        [Theory]
        [InlineData(500, 10)]
        [InlineData(500, 100)]
        public void BalanceTest(int mintAmount, int selfDelegateAmount)
        {
            _states = _states.MintAsset(
                _operatorAddress, Asset.GovernanceToken * mintAmount);
            _states = ValidatorCtrl.Create(
                _states,
                _operatorAddress,
                _operatorPublicKey,
                Asset.GovernanceToken * selfDelegateAmount,
                _nativeTokens,
                1);
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
                ValidatorCtrl.GetValidator(_states, _validatorAddress).DelegatorShares);
        }
    }
}
