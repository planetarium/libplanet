using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    internal static class ValidatorPowerSetCtrl
    {
        internal static (IAccountStateDelta, ValidatorPowerSet) GetValidatorPowerSet(
            IAccountStateDelta states)
        {
            IValue? serialized = states.GetState(ReservedAddress.ValidatorPowerSet);
            ValidatorPowerSet validatorPowerSet
                = (serialized == null)
                ? new ValidatorPowerSet()
                : new ValidatorPowerSet(serialized);
            states = states.SetState(
                validatorPowerSet.Address, validatorPowerSet.Serialize());
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
            (states, validatorPowerSet) = GetValidatorPowerSet(states);
            validatorPowerSet.PreviousBondedSet
                = new SortedSet<ValidatorPower>(
                    validatorPowerSet.BondedSet, new ValidatorPowerComparer());
            validatorPowerSet.BondedSet.Clear();
            validatorPowerSet.UnbondedSet.Clear();
            ValidatorPowerIndex validatorPowerIndex;
            (states, validatorPowerIndex) = ValidatorPowerIndexCtrl.GetValidatorPowerIndex(states);

            foreach (var item in validatorPowerIndex.Index.Select((value, index) => (value, index)))
            {
                Validator validator = ValidatorCtrl.GetValidatorByAddr(
                    states, item.value.ValidatorAddress);
                if (validator.Jailed)
                {
                    throw new InvalidOperationException();
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
            (states, validatorPowerSet) = GetValidatorPowerSet(states);
            foreach (ValidatorPower validatorPower in validatorPowerSet.BondedSet)
            {
                Validator validator = ValidatorCtrl.GetValidatorByAddr(
                    states, validatorPower.ValidatorAddress);
                states = ValidatorCtrl.Bond(states, validatorPower.ValidatorAddress);
            }

            return states;
        }

        internal static IAccountStateDelta UpdateUnbondedSetElements(
            IAccountStateDelta states, long blockHeight)
        {
            ValidatorPowerSet validatorPowerSet;
            (states, validatorPowerSet) = GetValidatorPowerSet(states);
            foreach (ValidatorPower validatorPower in validatorPowerSet.UnbondedSet)
            {
                Validator validator = ValidatorCtrl.GetValidatorByAddr(
                    states, validatorPower.ValidatorAddress);
                states = ValidatorCtrl.Unbond(states, validatorPower.ValidatorAddress, blockHeight);
            }

            return states;
        }
    }
}
