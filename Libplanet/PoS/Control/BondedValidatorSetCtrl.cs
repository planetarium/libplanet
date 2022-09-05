using Libplanet.Action;

namespace Libplanet.PoS
{
    internal static class BondedValidatorSetCtrl
    {
        internal static (IAccountStateDelta, BondedValidatorSet) FetchBondedValidatorSet(
            IAccountStateDelta states)
        {
            BondedValidatorSet bondedValidatorSet;
            if (states.GetState(ReservedAddress.BondedValidatorSet) is { } value)
            {
                bondedValidatorSet = new BondedValidatorSet(value);
            }
            else
            {
                ValidatorPowerSet validatorPowerSet;
                (states, validatorPowerSet) = ValidatorPowerSetCtrl.FetchValidatorPowerSet(states);
                bondedValidatorSet = new BondedValidatorSet(validatorPowerSet.BondedSet);
                states = states.SetState(
                    bondedValidatorSet.Address, bondedValidatorSet.Serialize());
            }

            return (states, bondedValidatorSet);
        }
    }
}
