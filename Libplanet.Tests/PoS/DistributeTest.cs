using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class DistributeTest : PoSTest
    {
        private IAccountStateDelta _states;

        public DistributeTest()
            : base()
        {
            _states = InitializeStates();
            OperatorPrivateKeys = new List<PrivateKey>();
            OperatorPublicKeys = new List<PublicKey>();
            OperatorAddresses = new List<Address>();
            ValidatorAddresses = new List<Address>();
            DelegatorAddress = CreateAddress();
            _states = _states.MintAsset(DelegatorAddress, Asset.GovernanceToken * 100000);
            for (int i = 0; i < 200; i++)
            {
                PrivateKey operatorPrivateKey = new PrivateKey();
                PublicKey operatorPublicKey = operatorPrivateKey.PublicKey;
                Address operatorAddress = operatorPublicKey.ToAddress();
                _states = _states.MintAsset(operatorAddress, Asset.GovernanceToken * 1000);

                OperatorPrivateKeys.Add(operatorPrivateKey);
                OperatorPublicKeys.Add(operatorPublicKey);
                OperatorAddresses.Add(operatorAddress);
                _states = ValidatorCtrl.Create(
                    _states,
                    operatorAddress,
                    operatorPublicKey,
                    Asset.GovernanceToken * 1,
                    1);
                ValidatorAddresses.Add(Validator.DeriveAddress(operatorAddress));
            }
        }

        private List<PrivateKey> OperatorPrivateKeys { get; set; }

        private List<PublicKey> OperatorPublicKeys { get; set; }

        private List<Address> OperatorAddresses { get; set; }

        private List<Address> ValidatorAddresses { get; set; }

        private Address DelegatorAddress { get; set; }

        [Fact]
        public void ValidatorSetTest()
        {
            for (int i = 0; i < 200; i++)
            {
                _states = DelegateCtrl.Execute(
                    _states,
                    DelegatorAddress,
                    ValidatorAddresses[i],
                    Asset.GovernanceToken * (i + 1),
                    1);
            }

            Address validatorAddressA = ValidatorAddresses[3];
            Address validatorAddressB = ValidatorAddresses[5];

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressA, Asset.GovernanceToken * 200, 1);

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressB, Asset.GovernanceToken * 300, 1);

            _states = ValidatorSetCtrl.Update(_states, 1);

            (_states, _) = ValidatorSetCtrl.FetchBondedValidatorSet(_states);

            List<Vote> votes = new List<Vote>()
            {
                new Vote(
                    default,
                    default,
                    default,
                    default,
                    OperatorPrivateKeys[3].PublicKey,
                    VoteFlag.Commit,
                    null).Sign(OperatorPrivateKeys[3]),
                new Vote(
                    default,
                    default,
                    default,
                    default,
                    OperatorPrivateKeys[5].PublicKey,
                    VoteFlag.Commit,
                    null).Sign(OperatorPrivateKeys[5]),
            };
            FungibleAssetValue blockReward = Asset.ConsensusToken * 50;
            _states = AllocateReward.Execute(_states, blockReward, votes, OperatorAddresses[3], 1);

            var (baseProposerReward, _)
                = (blockReward * AllocateReward.BaseProposerRewardNumer)
                .DivRem(AllocateReward.BaseProposerRewardDenom);
            var (bonusProposerReward, _)
                = (blockReward * (205 + 307)
                * AllocateReward.BonusProposerRewardNumer)
                .DivRem((100 + (101 + 200) * 50 - 101 - 102 + 204 + 306)
                * AllocateReward.BonusProposerRewardDenom);
            FungibleAssetValue proposerReward = baseProposerReward + bonusProposerReward;
            FungibleAssetValue validatorRewardSum = blockReward - proposerReward;

            var (validatorRewardA, _)
                    = (validatorRewardSum * 205)
                    .DivRem(100 + (101 + 200) * 50 - 101 - 102 + 204 + 306);
            var (commissionA, _)
                    = (validatorRewardA * Validator.CommissionNumer)
                    .DivRem(Validator.CommissionDenom);
            var (validatorRewardB, _)
                    = (validatorRewardSum * 307)
                    .DivRem(100 + (101 + 200) * 50 - 101 - 102 + 204 + 306);
            var (commissionB, _)
                    = (validatorRewardB * Validator.CommissionNumer)
                    .DivRem(Validator.CommissionDenom);

            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(ReservedAddress.RewardPool, Asset.ConsensusToken));

            Assert.Equal(
                Asset.GovernanceToken * (100 + (101 + 200) * 50 - 101 - 102 + 204 + 306),
                _states.GetBalance(ReservedAddress.BondedPool, Asset.GovernanceToken));

            Assert.Equal(
                Asset.ConsensusToken * 205,
                _states.GetBalance(validatorAddressA, Asset.ConsensusToken));

            Assert.Equal(
                Asset.ConsensusToken * 307,
                _states.GetBalance(validatorAddressB, Asset.ConsensusToken));

            Assert.Equal(
                proposerReward + commissionA,
                _states.GetBalance(OperatorAddresses[3], Asset.ConsensusToken));

            Assert.Equal(
                commissionB,
                _states.GetBalance(OperatorAddresses[5], Asset.ConsensusToken));

            Address delegationAddressA
                = Delegation.DeriveAddress(DelegatorAddress, validatorAddressA);

            Assert.Equal(
                Asset.ConsensusToken * 0,
                _states.GetBalance(DelegatorAddress, Asset.ConsensusToken));

            var (delegatorToken, _)
                = (_states.GetBalance(
                    ValidatorRewards.DeriveAddress(validatorAddressA), Asset.ConsensusToken)
                * _states.GetBalance(
                    Delegation.DeriveAddress(DelegatorAddress, validatorAddressA), Asset.Share)
                .RawValue)
                .DivRem(ValidatorCtrl.GetValidator(_states, validatorAddressA)
                .DelegatorShares.RawValue);

            _states = DelegateCtrl.Distribute(_states, delegationAddressA, 5);

            Assert.Equal(
                delegatorToken,
                _states.GetBalance(DelegatorAddress, Asset.ConsensusToken));
        }
    }
}
