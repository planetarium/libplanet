using System;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class ValidatorPower
        : IEquatable<ValidatorPower>, IComparable<ValidatorPower>, IComparable
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

        public static bool operator ==(ValidatorPower obj, ValidatorPower other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(ValidatorPower obj, ValidatorPower other)
        {
            return !(obj == other);
        }

        public IValue Serialize() => List.Empty
            .Add(ValidatorAddress.Serialize())
            .Add(OperatorPublicKey.Serialize())
            .Add(ConsensusToken.Serialize());

        public override bool Equals(object? obj)
        {
            return Equals(obj as ValidatorPower);
        }

        public bool Equals(ValidatorPower? other)
        {
            return !(other is null) &&
                   _consensusToken.Equals(other._consensusToken) &&
                   ValidatorAddress.Equals(other.ValidatorAddress) &&
                   OperatorPublicKey.Equals(other.OperatorPublicKey) &&
                   ConsensusToken.Equals(other.ConsensusToken);
        }

        public override int GetHashCode()
        {
            int code = 0;
            unchecked
            {
                foreach (byte b in ValidatorAddress.ToByteArray())
                {
                    code = (code * 401) ^ b.GetHashCode();
                }
            }

            return code;
        }

        int IComparable<ValidatorPower>.CompareTo(ValidatorPower? other)
        {
            int result
                = ConsensusToken.Equals(other?.ConsensusToken)
                ? ((IComparable<Address>)ValidatorAddress).CompareTo(other.ValidatorAddress)
                : ConsensusToken.CompareTo(other?.ConsensusToken);

            return -result;
        }

        int IComparable.CompareTo(object? obj)
        {
            if (obj is ValidatorPower other)
            {
                return ((IComparable<ValidatorPower>)this).CompareTo(other);
            }

            if (obj is null)
            {
                throw new ArgumentNullException(nameof(obj));
            }

            throw new ArgumentException(nameof(obj));
        }
    }
}
