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

        internal ConsensusPowerKey[] TopN(int n)
        {
            return Index.Take(n).ToArray();
        }
    }
}
