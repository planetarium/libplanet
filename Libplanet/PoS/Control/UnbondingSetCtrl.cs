using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    internal static class UnbondingSetCtrl
    {
        internal static (IAccountStateDelta, UnbondingSet) GetUnbondingSet(
            IAccountStateDelta states)
        {
            IValue? serialized = states.GetState(ReservedAddress.UnbondingSet);
            UnbondingSet unbondingSet
                = (serialized == null)
                ? new UnbondingSet()
                : new UnbondingSet(serialized);
            states = states.SetState(
                unbondingSet.Address, unbondingSet.Serialize());
            return (states, unbondingSet);
        }

        internal static IAccountStateDelta CompleteValidatorSet(
            IAccountStateDelta states, long blockHeight)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            foreach (Address address in unbondingSet.ValidatorAddressSet)
            {
                states = ValidatorCtrl.Complete(states, address, blockHeight);
            }

            return states;
        }

        internal static IAccountStateDelta CompleteUndelegationSet(
            IAccountStateDelta states, long blockHeight)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            foreach (Address address in unbondingSet.UndelegationAddressSet)
            {
                states = UndelegateCtrl.Complete(states, address, blockHeight);
            }

            return states;
        }

        internal static IAccountStateDelta CompleteRedelegationSet(
            IAccountStateDelta states, long blockHeight)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            foreach (Address address in unbondingSet.RedelegationAddressSet)
            {
                states = RedelegateCtrl.Complete(states, address, blockHeight);
            }

            return states;
        }

        internal static IAccountStateDelta Complete(
            IAccountStateDelta states, long blockHeight)
        {
            states = CompleteValidatorSet(states, blockHeight);
            states = CompleteUndelegationSet(states, blockHeight);
            states = CompleteRedelegationSet(states, blockHeight);

            return states;
        }

        internal static IAccountStateDelta AddValidatorAddressSet(
            IAccountStateDelta states, Address validatorAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.ValidatorAddressSet.Add(validatorAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta AddUndelegationAddressSet(
            IAccountStateDelta states, Address undelegationAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.UndelegationAddressSet.Add(undelegationAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta AddRedelegationAddressSet(
            IAccountStateDelta states, Address redelegationAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.RedelegationAddressSet.Add(redelegationAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta RemoveValidatorAddressSet(
            IAccountStateDelta states, Address validatorAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.ValidatorAddressSet.Remove(validatorAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta RemoveUndelegationAddressSet(
            IAccountStateDelta states, Address undelegationAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.UndelegationAddressSet.Remove(undelegationAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }

        internal static IAccountStateDelta RemoveRedelegationAddressSet(
            IAccountStateDelta states, Address redelegationAddress)
        {
            UnbondingSet unbondingSet;
            (states, unbondingSet) = GetUnbondingSet(states);
            unbondingSet.RedelegationAddressSet.Remove(redelegationAddress);
            states = states.SetState(unbondingSet.Address, unbondingSet.Serialize());
            return states;
        }
    }
}
