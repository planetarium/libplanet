using System;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class ConsensusPowerKey
    {
        private FungibleAssetValue _consensusToken;

        internal ConsensusPowerKey(Address validatorAddress, FungibleAssetValue consensusToken)
        {
            ValidatorAddress = validatorAddress;
            ConsensusToken = consensusToken;
        }

        internal ConsensusPowerKey(IValue serialized)
        {
            List serializedList = (List)serialized;
            ValidatorAddress = serializedList[0].ToAddress();
            ConsensusToken = serializedList[1].ToFungibleAssetValue();
        }

        internal Address ValidatorAddress { get; set; }

        internal FungibleAssetValue ConsensusToken
        {
            get => _consensusToken;
            set
            {
                if (!value.Currency.Equals(Asset.ConsensusToken))
                {
                    throw new ArgumentException();
                }

                _consensusToken = value;
            }
        }

        public IValue Serialize() => List.Empty
            .Add(ValidatorAddress.Serialize())
            .Add(ConsensusToken.Serialize());
    }
}
