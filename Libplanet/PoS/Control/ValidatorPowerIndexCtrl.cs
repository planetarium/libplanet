using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class ValidatorPowerIndexCtrl
    {
        internal static (IAccountStateDelta, ValidatorPowerIndex) GetValidatorPowerIndex(
            IAccountStateDelta states)
        {
            IValue? serialized = states.GetState(ReservedAddress.ValidatorPowerIndex);
            ValidatorPowerIndex validatorPowerIndex
                = (serialized == null)
                ? new ValidatorPowerIndex()
                : new ValidatorPowerIndex(serialized);
            states = states.SetState(
                validatorPowerIndex.Address, validatorPowerIndex.Serialize());
            return (states, validatorPowerIndex);
        }

        internal static IAccountStateDelta Update(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            ValidatorPowerIndex validatorPowerIndex;
            (states, validatorPowerIndex) = GetValidatorPowerIndex(states);
            validatorPowerIndex.Index.RemoveWhere(
                key => key.ValidatorAddress.Equals(validatorAddress));
            IValue serializedValidator = states.GetState(validatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator(serializedValidator);
            if (validator.Jailed)
            {
                return states;
            }

            FungibleAssetValue consensusToken = states.GetBalance(
                validatorAddress, Asset.ConsensusToken);
            ValidatorPower consensusPowerKey
                = new ValidatorPower(validatorAddress, consensusToken);
            validatorPowerIndex.Index.Add(consensusPowerKey);
            states = states.SetState(validatorPowerIndex.Address, validatorPowerIndex.Serialize());
            return states;
        }

        internal static IAccountStateDelta Update(
            IAccountStateDelta states,
            IEnumerable<Address> validatorAddresses)
        {
            foreach (Address validatorAddress in validatorAddresses)
            {
                states = Update(states, validatorAddress);
            }

            return states;
        }
    }
}
