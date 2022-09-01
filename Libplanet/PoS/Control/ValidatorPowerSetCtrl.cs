using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;

namespace Libplanet.PoS
{
    internal static class ValidatorPowerSetCtrl
    {
        internal static (IAccountStateDelta, ValidatorPowerSet) FetchValidatorPowerSet(
            IAccountStateDelta states)
        {
            ValidatorPowerSet validatorPowerSet;
            if (states.GetState(ReservedAddress.ValidatorPowerSet) is { } value)
            {
                validatorPowerSet = new ValidatorPowerSet(value);
            }
            else
            {
                validatorPowerSet = new ValidatorPowerSet();
                states = states.SetState(
                    validatorPowerSet.Address, validatorPowerSet.Serialize());
            }

            return (states, validatorPowerSet);
        }

        internal static IAccountStateDelta Update(
            IAccountStateDelta states,
            long blockHeight)
        {
            states = UpdateSets(states);
            states = UpdateBondedSetElements(states);
            states = UpdateUnbondedSetElements(states, blockHeight);
            states = UnbondingSetCtrl.Complete(states, blockHeight);

            return states;
        }

        internal static IAccountStateDelta UpdateSets(IAccountStateDelta states)
        {
            ValidatorPowerSet validatorPowerSet;
            (states, validatorPowerSet) = FetchValidatorPowerSet(states);
            validatorPowerSet.PreviousBondedSet
                = new SortedSet<ValidatorPower>(
                    validatorPowerSet.BondedSet, new ValidatorPowerComparer());
            validatorPowerSet.BondedSet.Clear();
            validatorPowerSet.UnbondedSet.Clear();
            ValidatorPowerIndex validatorPowerIndex;
            (states, validatorPowerIndex)
                = ValidatorPowerIndexCtrl.FetchValidatorPowerIndex(states);

            foreach (var item in validatorPowerIndex.Index.Select((value, index) => (value, index)))
            {
                if (!(ValidatorCtrl.GetValidator(
                    states, item.value.ValidatorAddress) is { } validator))
                {
                    throw new NullValidatorException(item.value.ValidatorAddress);
                }

                if (validator.Jailed)
                {
                    throw new JailedValidatorException(validator.Address);
                }

                if (item.index >= ValidatorPowerSet.MaxBondedSetSize ||
                    states.GetBalance(item.value.ValidatorAddress, Asset.ConsensusToken)
                    <= Asset.ConsensusToken * 0)
                {
                    validatorPowerSet.UnbondedSet.Add(item.value);
                }
                else
                {
                    validatorPowerSet.BondedSet.Add(item.value);
                }
            }

            states = states.SetState(
                ReservedAddress.ValidatorPowerSet, validatorPowerSet.Serialize());

            return states;
        }

        internal static IAccountStateDelta UpdateBondedSetElements(IAccountStateDelta states)
        {
            ValidatorPowerSet validatorPowerSet;
            (states, validatorPowerSet) = FetchValidatorPowerSet(states);
            foreach (ValidatorPower validatorPower in validatorPowerSet.BondedSet)
            {
                if (!(ValidatorCtrl.GetValidator(
                    states, validatorPower.ValidatorAddress) is { } validator))
                {
                    throw new NullValidatorException(validatorPower.ValidatorAddress);
                }

                states = ValidatorCtrl.Bond(states, validatorPower.ValidatorAddress);
            }

            return states;
        }

        internal static IAccountStateDelta UpdateUnbondedSetElements(
            IAccountStateDelta states, long blockHeight)
        {
            ValidatorPowerSet validatorPowerSet;
            (states, validatorPowerSet) = FetchValidatorPowerSet(states);
            foreach (ValidatorPower validatorPower in validatorPowerSet.UnbondedSet)
            {
                if (!(ValidatorCtrl.GetValidator(
                    states, validatorPower.ValidatorAddress) is { } validator))
                {
                    throw new NullValidatorException(validatorPower.ValidatorAddress);
                }

                states = ValidatorCtrl.Unbond(states, validatorPower.ValidatorAddress, blockHeight);
            }

            return states;
        }
    }
}
