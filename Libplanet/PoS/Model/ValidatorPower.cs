using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class ValidatorPower
    {
        private FungibleAssetValue _consensusToken;

        public ValidatorPower(
            Address validatorAddress,
            PublicKey operatorPublicKey,
            FungibleAssetValue consensusToken)
        {
            ValidatorAddress = validatorAddress;
            OperatorPublicKey = operatorPublicKey;
            ConsensusToken = consensusToken;
        }

        public ValidatorPower(IValue serialized)
        {
            List serializedList = (List)serialized;
            ValidatorAddress = serializedList[0].ToAddress();
            OperatorPublicKey = serializedList[1].ToPublicKey();
            ConsensusToken = serializedList[2].ToFungibleAssetValue();
        }

        public Address ValidatorAddress { get; set; }

        public PublicKey OperatorPublicKey { get; set; }

        public FungibleAssetValue ConsensusToken
        {
            get => _consensusToken;
            set
            {
                if (!value.Currency.Equals(Asset.ConsensusToken))
                {
                    throw new InvalidCurrencyException(Asset.ConsensusToken, value.Currency);
                }

                _consensusToken = value;
            }
        }

        public IValue Serialize() => List.Empty
            .Add(ValidatorAddress.Serialize())
            .Add(OperatorPublicKey.Serialize())
            .Add(ConsensusToken.Serialize());
    }
}
