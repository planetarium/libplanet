using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class ValidatorRewardsCtrl
    {
        internal static ValidatorRewards? GetValidatorRewards(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            if (states.GetState(validatorAddress) is { } value)
            {
                return new ValidatorRewards(value);
            }

            return null;
        }

        internal static (IAccountStateDelta, ValidatorRewards) FetchValidatorRewards(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            Address validatorRewardsAddress = ValidatorRewards.DeriveAddress(validatorAddress);
            ValidatorRewards validatorRewards;
            if (states.GetState(validatorRewardsAddress) is { } value)
            {
                validatorRewards = new ValidatorRewards(value);
            }
            else
            {
                validatorRewards = new ValidatorRewards(validatorAddress);
                states = states.SetState(validatorRewards.Address, validatorRewards.Serialize());
            }

            return (states, validatorRewards);
        }

        internal static ImmutableSortedDictionary<long, FungibleAssetValue> RewardsBetween(
            IAccountStateDelta states,
            Address validatorAddress,
            long minBlockHeight,
            long maxBlockHeight)
        {
            ValidatorRewards validatorRewards;
            (_, validatorRewards) = FetchValidatorRewards(states, validatorAddress);
            return validatorRewards.Rewards.Where(
                kv => minBlockHeight <= kv.Key && kv.Key < maxBlockHeight)
                .ToImmutableSortedDictionary();
        }

        internal static FungibleAssetValue RewardSumBetween(
            IAccountStateDelta states,
            Address validatorAddress,
            long minBlockHeight,
            long maxBlockHeight)
        {
            return RewardsBetween(states, validatorAddress, minBlockHeight, maxBlockHeight)
                .Aggregate(Asset.ConsensusToken * 0, (total, next) => total + next.Value);
        }

        internal static IAccountStateDelta Add(
            IAccountStateDelta states,
            Address validatorAddress,
            long blockHeight,
            FungibleAssetValue reward)
        {
            ValidatorRewards validatorRewards;
            (states, validatorRewards) = FetchValidatorRewards(states, validatorAddress);
            validatorRewards.Add(blockHeight, reward);
            states = states.SetState(validatorRewards.Address, validatorRewards.Serialize());
            return states;
        }
    }
}
