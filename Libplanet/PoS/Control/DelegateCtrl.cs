using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class DelegateCtrl
    {
        internal static Delegation? GetDelegation(
            IAccountStateDelta states,
            Address delegationAddress)
        {
            if (states.GetState(delegationAddress) is { } value)
            {
                return new Delegation(value);
            }

            return null;
        }

        internal static (IAccountStateDelta, Delegation) FetchDelegation(
            IAccountStateDelta states,
            Address delegatorAddress,
            Address validatorAddress)
        {
            Address delegationAddress = Delegation.DeriveAddress(
                delegatorAddress, validatorAddress);
            Delegation delegation;
            if (states.GetState(delegationAddress) is { } value)
            {
                delegation = new Delegation(value);
            }
            else
            {
                delegation = new Delegation(delegatorAddress, validatorAddress);
                states = states.SetState(delegation.Address, delegation.Serialize());
            }

            return (states, delegation);
        }

        internal static IAccountStateDelta Execute(
           IAccountStateDelta states,
           Address delegatorAddress,
           Address validatorAddress,
           FungibleAssetValue governanceToken,
           long blockHeight)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new InvalidCurrencyException(Asset.GovernanceToken, governanceToken.Currency);
            }

            FungibleAssetValue delegatorGovernanceTokenBalance = states.GetBalance(
                delegatorAddress, Asset.GovernanceToken);
            if (governanceToken > delegatorGovernanceTokenBalance)
            {
                throw new InsufficientFungibleAssetValueException(
                    governanceToken,
                    delegatorGovernanceTokenBalance,
                    $"Delegator {delegatorAddress} has insufficient governanceToken");
            }

            if (!(ValidatorCtrl.GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

            Delegation? delegation;
            (states, delegation) = FetchDelegation(states, delegatorAddress, validatorAddress);

            FungibleAssetValue consensusToken = Asset.ConsensusFromGovernance(governanceToken);
            Address poolAddress = validator.Status == BondingStatus.Bonded
                ? ReservedAddress.BondedPool
                : ReservedAddress.UnbondedPool;

            states = states.TransferAsset(
                delegatorAddress, poolAddress, governanceToken);
            (states, _) = Bond.Execute(
                states,
                consensusToken,
                delegation.ValidatorAddress,
                delegation.Address,
                blockHeight);

            states = states.SetState(delegation.Address, delegation.Serialize());

            return states;
        }

        internal static IAccountStateDelta Distribute(
           IAccountStateDelta states,
           Address delegationAddress,
           long blockHeight)
        {
            if (!(GetDelegation(states, delegationAddress) is { } delegation))
            {
                throw new NullDelegationException(delegationAddress);
            }

            if (!(ValidatorCtrl.GetValidator(states, delegation.ValidatorAddress) is { } validator))
            {
                throw new NullValidatorException(delegation.ValidatorAddress);
            }

            FungibleAssetValue delegationRewardSum = ValidatorRewardsCtrl.RewardSumBetween(
                states,
                delegation.ValidatorAddress,
                delegation.LatestDistributeHeight,
                blockHeight);

            if (!(ValidatorCtrl.TokenPortionByShare(
                states,
                delegation.ValidatorAddress,
                delegationRewardSum,
                states.GetBalance(delegationAddress, Asset.Share)) is { } reward))
            {
                throw new InvalidExchangeRateException(validator.Address);
            }

            Address validatorRewardAddress
                = ValidatorRewards.DeriveAddress(delegation.ValidatorAddress);

            states = states.TransferAsset(
                validatorRewardAddress,
                delegation.DelegatorAddress,
                reward);

            delegation.LatestDistributeHeight = blockHeight;

            states = states.SetState(delegation.Address, delegation.Serialize());

            return states;
        }
    }
}
