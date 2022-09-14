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
            Address validatorAddress,
            Currency currency)
        {
            Address validatorRewardsAddress
                = ValidatorRewards.DeriveAddress(validatorAddress, currency);
            ValidatorRewards validatorRewards;
            if (states.GetState(validatorRewardsAddress) is { } value)
            {
                validatorRewards = new ValidatorRewards(value);
            }
            else
            {
                validatorRewards = new ValidatorRewards(validatorAddress, currency);
                states = states.SetState(validatorRewards.Address, validatorRewards.Serialize());
            }

            return (states, validatorRewards);
        }

        internal static ImmutableSortedDictionary<long, FungibleAssetValue> RewardsBetween(
            IAccountStateDelta states,
            Address validatorAddress,
            Currency currency,
            long minBlockHeight,
            long maxBlockHeight)
        {
            ValidatorRewards validatorRewards;
            (_, validatorRewards) = FetchValidatorRewards(states, validatorAddress, currency);
            return validatorRewards.Rewards.Where(
                kv => minBlockHeight <= kv.Key && kv.Key < maxBlockHeight)
                .ToImmutableSortedDictionary();
        }

        internal static FungibleAssetValue RewardSumBetween(
            IAccountStateDelta states,
            Address validatorAddress,
            Currency currency,
            long minBlockHeight,
            long maxBlockHeight)
        {
            return RewardsBetween(
                states, validatorAddress, currency, minBlockHeight, maxBlockHeight)
                .Aggregate(currency * 0, (total, next) => total + next.Value);
        }

        internal static IAccountStateDelta Add(
            IAccountStateDelta states,
            Address validatorAddress,
            Currency currency,
            long blockHeight,
            FungibleAssetValue reward)
        {
            ValidatorRewards validatorRewards;
            (states, validatorRewards) = FetchValidatorRewards(states, validatorAddress, currency);
            validatorRewards.Add(blockHeight, reward);
            states = states.SetState(validatorRewards.Address, validatorRewards.Serialize());
            return states;
        }
    }
}
