using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class ConsensusPowerIndex : ConsensusPowerIndexInfo
    {
        internal ConsensusPowerIndex()
            : base()
        {
        }

        internal ConsensusPowerIndex(IValue serialized)
            : base(serialized)
        {
        }

        internal IAccountStateDelta Update(IAccountStateDelta states, Address validatorAddress)
        {
            Index.RemoveWhere(key => key.ValidatorAddress.Equals(validatorAddress));
            IValue serializedValidator = states.GetState(validatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator(serializedValidator);
            if (validator.Jailed)
            {
                return states;
            }

            FungibleAssetValue consensusToken = states.GetBalance(
                validatorAddress, Asset.ConsensusToken);
            ConsensusPowerKey consensusPowerKey
                = new ConsensusPowerKey(validatorAddress, consensusToken);
            Index.Add(consensusPowerKey);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta Update(
            IAccountStateDelta states, IEnumerable<Address> validatorAddresses)
        {
            foreach (Address validatorAddress in validatorAddresses)
            {
                states = Update(states, validatorAddress);
            }

            return states;
        }

        internal List<ConsensusPowerKey> TopNKeys(int n)
        {
            return Index.Take(n).ToList();
        }

        internal List<ConsensusPowerKey> BelowNKeys(int n)
        {
            return Index.Skip(n).ToList();
        }

        internal List<Address> TopNValidatorAddresses(int n)
        {
            List<Address> validatorAddresses =
                TopNKeys(n).Select(key => key.ValidatorAddress).ToList();

            return validatorAddresses;
        }

        internal List<Address> BelowNValidatorAddresses(int n)
        {
            List<Address> validatorAddresses =
                BelowNKeys(n).Select(key => key.ValidatorAddress).ToList();

            return validatorAddresses;
        }
    }
}
