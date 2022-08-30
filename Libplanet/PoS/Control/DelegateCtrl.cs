using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class DelegateCtrl
    {
        internal static Delegation GetDelegationByAddr(
            IAccountStateDelta states,
            Address delegationAddress)
        {
            IValue? serializedDelegation = states.GetState(delegationAddress);
            if (serializedDelegation == null)
            {
                throw new InvalidOperationException();
            }

            Delegation delegation = new Delegation(serializedDelegation);
            return delegation;
        }

        internal static (IAccountStateDelta, Delegation) GetDelegation(
            IAccountStateDelta states,
            Address delegatorAddress,
            Address validatorAddress,
            bool create = true)
        {
            Address delegationAddress = Delegation.DeriveAddress(
                delegatorAddress, validatorAddress);
            Delegation delegation;
            if (states.GetState(delegationAddress) is { } value)
            {
                delegation = new Delegation(value);
            }
            else if(create)
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
           FungibleAssetValue governanceToken)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            if (governanceToken > states.GetBalance(delegatorAddress, Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            Validator validator = ValidatorCtrl.GetValidatorByAddr(states, validatorAddress);

            Delegation delegation;
            (states, delegation) = GetDelegation(states, delegatorAddress, validatorAddress);

            FungibleAssetValue consensusToken = Asset.ConsensusFromGovernance(governanceToken);
            Address poolAddress = validator.Status == BondingStatus.Bonded
                ? ReservedAddress.BondedPool
                : ReservedAddress.UnbondedPool;

            states = states.TransferAsset(
                delegatorAddress, poolAddress, governanceToken);
            (states, _) = Bond.Execute(
                states, consensusToken, delegation.ValidatorAddress, delegation.Address);

            states = states.SetState(delegation.Address, delegation.Serialize());

            return states;
        }
    }
}
