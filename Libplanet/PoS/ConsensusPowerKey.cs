using System;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class ConsensusPowerKey
    {
        private FungibleAssetValue _consensusToken;

        public ConsensusPowerKey(Address validatorAddress, FungibleAssetValue consensusToken)
        {
            ValidatorAddress = validatorAddress;
            ConsensusToken = consensusToken;
        }

        public ConsensusPowerKey(IValue serialized)
        {
            List serializedList = (List)serialized;
            ValidatorAddress = serializedList[0].ToAddress();
            ConsensusToken = serializedList[1].ToFungibleAssetValue();
        }

        public Address ValidatorAddress { get; set; }

        public FungibleAssetValue ConsensusToken
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
