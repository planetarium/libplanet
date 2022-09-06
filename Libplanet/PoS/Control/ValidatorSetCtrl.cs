using System.Linq;
using Libplanet.Action;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class ValidatorSetCtrl
    {
        internal static (IAccountStateDelta, ValidatorSet) FetchValidatorSet(
            IAccountStateDelta states, Address address)
        {
            ValidatorSet validatorSet;
            if (states.GetState(address) is { } value)
            {
                validatorSet = new ValidatorSet(value);
            }
            else
            {
                validatorSet = new ValidatorSet();
                states = states.SetState(
                    address, validatorSet.Serialize());
            }

            return (states, validatorSet);
        }

        internal static (IAccountStateDelta, ValidatorSet) FetchBondedValidatorSet(
            IAccountStateDelta states)
            => FetchValidatorSet(states, ReservedAddress.BondedValidatorSet);

        // Have to be called on tip changed
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
            ValidatorSet previousBondedSet;
            (states, previousBondedSet) = FetchValidatorSet(
                states, ReservedAddress.BondedValidatorSet);
            ValidatorSet bondedSet = new ValidatorSet();
            ValidatorSet unbondedSet = new ValidatorSet();
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

                if (item.index >= ValidatorSet.MaxBondedSetSize ||
                    states.GetBalance(item.value.ValidatorAddress, Asset.ConsensusToken)
                    <= Asset.ConsensusToken * 0)
                {
                    unbondedSet.Add(item.value);
                }
                else
                {
                    bondedSet.Add(item.value);
                }
            }

            states = states.SetState(
                ReservedAddress.PreviousBondedValidatorSet, previousBondedSet.Serialize());
            states = states.SetState(
                ReservedAddress.BondedValidatorSet, bondedSet.Serialize());
            states = states.SetState(
                ReservedAddress.UnbondedValidatorSet, unbondedSet.Serialize());

            return states;
        }

        internal static IAccountStateDelta UpdateBondedSetElements(IAccountStateDelta states)
        {
            ValidatorSet bondedSet;
            (states, bondedSet) = FetchBondedValidatorSet(states);
            foreach (ValidatorPower validatorPower in bondedSet.Set)
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
            ValidatorSet unbondedSet;
            (states, unbondedSet) = FetchValidatorSet(states, ReservedAddress.UnbondedValidatorSet);
            foreach (ValidatorPower validatorPower in unbondedSet.Set)
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
