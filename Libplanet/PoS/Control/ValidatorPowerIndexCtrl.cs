using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS.Control
{
    internal static class ValidatorPowerIndexCtrl
    {
        internal static (IAccountStateDelta, ValidatorPowerIndex) FetchValidatorPowerIndex(
            IAccountStateDelta states)
        {
            ValidatorPowerIndex validatorPowerIndex;
            if (states.GetState(ReservedAddress.ValidatorPowerIndex) is { } value)
            {
                validatorPowerIndex = new ValidatorPowerIndex(value);
            }
            else
            {
                validatorPowerIndex = new ValidatorPowerIndex();
                states = states.SetState(
                    validatorPowerIndex.Address, validatorPowerIndex.Serialize());
            }

            return (states, validatorPowerIndex);
        }

        internal static IAccountStateDelta Update(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            ValidatorPowerIndex validatorPowerIndex;
            (states, validatorPowerIndex) = FetchValidatorPowerIndex(states);
            validatorPowerIndex.Index.RemoveWhere(
                key => key.ValidatorAddress.Equals(validatorAddress));
            if (!(ValidatorCtrl.GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

            if (validator.Jailed)
            {
                return states;
            }

            FungibleAssetValue consensusToken = states.GetBalance(
                validatorAddress, Asset.ConsensusToken);
            ValidatorPower consensusPowerKey
                = new ValidatorPower(validatorAddress, validator.OperatorPublicKey, consensusToken);
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
