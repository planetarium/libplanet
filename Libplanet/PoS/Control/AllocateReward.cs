using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class AllocateReward
    {
        public static BigInteger BaseProposerRewardNumer => 1;

        public static BigInteger BaseProposerRewardDenom => 100;

        public static BigInteger BonusProposerRewardNumer => 4;

        public static BigInteger BonusProposerRewardDenom => 100;

        public static Address RewardAddress(Address holderAddress)
        {
            return holderAddress.Derive("RewardAddress");
        }

        internal static IAccountStateDelta Execute(
            IAccountStateDelta states,
            IImmutableSet<Currency> nativeTokens,
            IEnumerable<Vote>? votes,
            Address miner,
            long blockIndex)
        {
            ValidatorSet bondedValidatorSet;
            (states, bondedValidatorSet) = ValidatorSetCtrl.FetchBondedValidatorSet(states);

            if (votes is null)
            {
                return states;
            }

            foreach (Currency nativeToken in nativeTokens)
            {
                states = DistributeProposerReward(
                    states, nativeToken, miner, bondedValidatorSet, votes);
                states = DistributeValidatorReward(
                    states, nativeToken, bondedValidatorSet, votes, blockIndex);

                FungibleAssetValue communityFund = states.GetBalance(
                    ReservedAddress.RewardPool, nativeToken);

                if (communityFund.Sign > 0)
                {
                    states = states.TransferAsset(
                        ReservedAddress.RewardPool,
                        ReservedAddress.CommunityPool,
                        states.GetBalance(ReservedAddress.RewardPool, nativeToken));
                }
            }

            return states;
        }

        internal static IAccountStateDelta DistributeProposerReward(
            IAccountStateDelta states,
            Currency nativeToken,
            Address proposer,
            ValidatorSet bondedValidatorSet,
            IEnumerable<Vote> votes)
        {
            FungibleAssetValue blockReward = states.GetBalance(
                ReservedAddress.RewardPool, nativeToken);

            if (blockReward.Sign <= 0)
            {
                return states;
            }

            ImmutableDictionary<PublicKey, ValidatorPower> bondedValidatorDict
                = bondedValidatorSet.Set.ToImmutableDictionary(
                    bondedValidator => bondedValidator.OperatorPublicKey);

            FungibleAssetValue votePowerNumer
                = votes.Aggregate(
                    Asset.ConsensusToken * 0, (total, next)
                    => total + bondedValidatorDict[next.Validator].ConsensusToken);

            FungibleAssetValue votePowerDenom
                = bondedValidatorSet.TotalConsensusToken;

            var (baseProposerReward, _)
                = (blockReward * BaseProposerRewardNumer).DivRem(BaseProposerRewardDenom);
            var (bonusProposerReward, _)
                = (blockReward * votePowerNumer.RawValue * BonusProposerRewardNumer)
                .DivRem(votePowerDenom.RawValue * BonusProposerRewardDenom);
            FungibleAssetValue proposerReward = baseProposerReward + bonusProposerReward;

            states = states.TransferAsset(
                ReservedAddress.RewardPool, RewardAddress(proposer), proposerReward);

            return states;
        }

        internal static IAccountStateDelta DistributeValidatorReward(
            IAccountStateDelta states,
            Currency nativeToken,
            ValidatorSet bondedValidatorSet,
            IEnumerable<Vote> votes,
            long blockHeight)
        {
            FungibleAssetValue validatorRewardSum = states.GetBalance(
                ReservedAddress.RewardPool, nativeToken);

            if (validatorRewardSum.Sign <= 0)
            {
                return states;
            }

            ImmutableDictionary<PublicKey, ValidatorPower> bondedValidatorDict
                = bondedValidatorSet.Set.ToImmutableDictionary(
                    bondedValidator => bondedValidator.OperatorPublicKey);

            foreach (Vote vote in votes)
            {
                if (vote.Flag == VoteFlag.Null || vote.Flag == VoteFlag.Unknown)
                {
                    continue;
                }

                ValidatorPower bondedValidator = bondedValidatorDict[vote.Validator];

                FungibleAssetValue powerNumer
                    = bondedValidator.ConsensusToken;

                FungibleAssetValue powerDenom
                    = bondedValidatorSet.TotalConsensusToken;

                var (validatorReward, _)
                    = (validatorRewardSum * powerNumer.RawValue)
                    .DivRem(powerDenom.RawValue);
                var (commission, _)
                    = (validatorReward * Validator.CommissionNumer)
                    .DivRem(Validator.CommissionDenom);

                FungibleAssetValue delegationRewardSum = validatorReward - commission;

                states = states.TransferAsset(
                    ReservedAddress.RewardPool,
                    RewardAddress(vote.Validator.ToAddress()),
                    commission);

                states = states.TransferAsset(
                    ReservedAddress.RewardPool,
                    ValidatorRewards.DeriveAddress(bondedValidator.ValidatorAddress, nativeToken),
                    delegationRewardSum);

                states = ValidatorRewardsCtrl.Add(
                    states,
                    bondedValidator.ValidatorAddress,
                    nativeToken,
                    blockHeight,
                    delegationRewardSum);
            }

            return states;
        }
    }
}
