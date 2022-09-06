using Libplanet.Action;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class ValidatorDelegationSetCtrl
    {
        internal static (IAccountStateDelta, ValidatorDelegationSet) FetchValidatorDelegationSet(
            IAccountStateDelta states, Address validatorAddress)
        {
            Address validatorDelegationSetAddress = ValidatorDelegationSet.DeriveAddress(
                validatorAddress);

            ValidatorDelegationSet validatorDelegationSet;
            if (states.GetState(validatorDelegationSetAddress) is { } value)
            {
                validatorDelegationSet = new ValidatorDelegationSet(value);
            }
            else
            {
                validatorDelegationSet = new ValidatorDelegationSet(validatorAddress);
                states = states.SetState(
                    validatorDelegationSetAddress, validatorDelegationSet.Serialize());
            }

            return (states, validatorDelegationSet);
        }

        internal static IAccountStateDelta Add(
            IAccountStateDelta states,
            Address validatorAddress,
            Address delegationAddress)
        {
            ValidatorDelegationSet validatorDelegationSet;
            (states, validatorDelegationSet)
                = FetchValidatorDelegationSet(states, validatorAddress);
            validatorDelegationSet.Add(delegationAddress);
            states = states.SetState(
                validatorDelegationSet.Address, validatorDelegationSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta Remove(
            IAccountStateDelta states,
            Address validatorAddress,
            Address delegationAddress)
        {
            ValidatorDelegationSet validatorDelegationSet;
            (states, validatorDelegationSet)
                = FetchValidatorDelegationSet(states, validatorAddress);
            validatorDelegationSet.Remove(delegationAddress);
            states = states.SetState(
                validatorDelegationSet.Address, validatorDelegationSet.Serialize());
            return states;
        }
    }
}
