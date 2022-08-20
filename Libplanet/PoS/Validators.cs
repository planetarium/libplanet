using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    internal class Validators : ValidatorsInfo
    {
        internal Validators()
            : base()
        {
        }

        internal Validators(IValue serialized)
            : base(serialized)
        {
        }

        internal IAccountStateDelta Update(IAccountStateDelta states, long blockHeight)
        {
            states = UpdateSets(states);
            states = UpdateValidatorSetElements(states);
            states = UpdateLatentSetElements(states, blockHeight);
            IValue? serializedUnbondingSet = states.GetState(ReservedAddress.UnbondingSet);
            UnbondingSet unbondingSet = (serializedUnbondingSet == null)
                ? new UnbondingSet()
                : new UnbondingSet(serializedUnbondingSet);
            states = unbondingSet.CompleteUnbondingValidatorSet(states, blockHeight);
            states = unbondingSet.CompleteUndelegationSet(states, blockHeight);
            states = unbondingSet.CompleteRedelegationSet(states, blockHeight);
            states = states.SetState(ReservedAddress.Validators, Serialize());
            return states;
        }

        internal IAccountStateDelta UpdateSets(IAccountStateDelta states)
        {
            PreviousValidatorAddressSet = ValidatorAddressSet.ToList();
            ValidatorAddressSet.Clear();
            LatentAddressSet.Clear();
            IValue serializedConsensusPowerIndex
                = states.GetState(ReservedAddress.ConsensusPowerIndex)
                ?? throw new InvalidOperationException();
            ConsensusPowerIndex consensusPowerIndex
                = new ConsensusPowerIndex(serializedConsensusPowerIndex);
            List<Address> validatorAddresses = consensusPowerIndex.ValidatorAddresses;

            foreach (var item in validatorAddresses.Select((value, index) => (value, index)))
            {
                IValue serializedValidator = states.GetState(item.value)
                    ?? throw new InvalidOperationException();
                Validator validator = new Validator(serializedValidator);
                if (validator.Jailed)
                {
                    throw new InvalidOperationException();
                }

                if (item.index >= MaxValidatorSetSize ||
                    states.GetBalance(item.value, Asset.ConsensusToken)
                    <= Asset.ConsensusToken * 0)
                {
                    LatentAddressSet.Add(item.value);
                }
                else
                {
                    ValidatorAddressSet.Add(item.value);
                }
            }

            states = states.SetState(ReservedAddress.Validators, Serialize());

            return states;
        }

        internal IAccountStateDelta UpdateValidatorSetElements(IAccountStateDelta states)
        {
            foreach (Address validatorAddress in ValidatorAddressSet)
            {
                IValue serializedValidator = states.GetState(validatorAddress)
                    ?? throw new InvalidOperationException();
                Validator validator = new Validator(serializedValidator);
                states = validator.Bond(states);
            }

            return states;
        }

        internal IAccountStateDelta UpdateLatentSetElements(
            IAccountStateDelta states, long blockHeight)
        {
            foreach (Address latentAddress in LatentAddressSet)
            {
                IValue serializedLatent = states.GetState(latentAddress)
                    ?? throw new InvalidOperationException();
                Validator latent = new Validator(serializedLatent);
                states = latent.Unbond(states, blockHeight);
            }

            states = states.SetState(ReservedAddress.Validators, Serialize());

            return states;
        }
    }
}
