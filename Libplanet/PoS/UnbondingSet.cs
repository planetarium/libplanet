using System;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    internal class UnbondingSet : UnbondingSetInfo
    {
        internal UnbondingSet()
            : base()
        {
        }

        internal UnbondingSet(IValue serialized)
            : base(serialized)
        {
        }

        internal IAccountStateDelta CompleteUnbondingValidatorSet(
            IAccountStateDelta states, long blockHeight)
        {
            foreach (Address address in UnbondingValidatorAddressSet)
            {
                IValue serializedValidator
                    = states.GetState(address)
                    ?? throw new InvalidOperationException();
                Validator unbonding = new Validator(serializedValidator);
                states = unbonding.CompleteUnbonding(states, blockHeight);
            }

            return states;
        }

        internal IAccountStateDelta CompleteUndelegationSet(
            IAccountStateDelta states, long blockHeight)
        {
            foreach (Address address in UndelegationAddressSet)
            {
                IValue serializedUndegation
                    = states.GetState(address)
                    ?? throw new InvalidOperationException();
                Undelegation unbonding = new Undelegation(serializedUndegation);
                states = unbonding.CompleteUndelegation(states, blockHeight);
            }

            return states;
        }

        internal IAccountStateDelta CompleteRedelegationSet(
            IAccountStateDelta states, long blockHeight)
        {
            foreach (Address address in RedelegationAddressSet)
            {
                IValue serializedRedelegation
                    = states.GetState(address)
                    ?? throw new InvalidOperationException();
                Redelegation unbonding = new Redelegation(serializedRedelegation);
                states = unbonding.CompleteRedelegation(states, blockHeight);
            }

            return states;
        }

        internal IAccountStateDelta AddUnbondingValidatorAddressSet(
            IAccountStateDelta states, Address unbondingValidatorAddress)
        {
            UnbondingValidatorAddressSet.Add(unbondingValidatorAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta AddUndelegationAddressSet(
            IAccountStateDelta states, Address undelegationEntryAddress)
        {
            UndelegationAddressSet.Add(undelegationEntryAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta AddRedelegationAddressSet(
            IAccountStateDelta states, Address redelegationEntryAddress)
        {
            RedelegationAddressSet.Add(redelegationEntryAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta DelUnbondingValidatorAddressSet(
            IAccountStateDelta states, Address unbondingValidatorAddress)
        {
            UnbondingValidatorAddressSet.Remove(unbondingValidatorAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta DelUndelegationAddressSet(
            IAccountStateDelta states, Address undelegationEntryAddress)
        {
            UndelegationAddressSet.Remove(undelegationEntryAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta DelRedelegationAddressSet(
            IAccountStateDelta states, Address redelegationEntryAddress)
        {
            RedelegationAddressSet.Remove(redelegationEntryAddress);
            states = states.SetState(Address, Serialize());
            return states;
        }
    }
}
