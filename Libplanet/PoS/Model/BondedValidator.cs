using System;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class BondedValidator : IEquatable<BondedValidator>
    {
        public BondedValidator(
            Address validatorAddress,
            PublicKey operatorPublicKey,
            double powerFrac)
        {
            ValidatorAddress = validatorAddress;
            OperatorPublicKey = operatorPublicKey;
            PowerFrac = powerFrac;
        }

        public BondedValidator(IValue serialized)
            : this(
                  ((List)serialized)[0].ToAddress(),
                  ((List)serialized)[1].ToPublicKey(),
                  ((List)serialized)[2].ToDouble())
        {
        }

        public Address ValidatorAddress { get; }

        public PublicKey OperatorPublicKey { get; }

        public double PowerFrac { get; }

        public static bool operator ==(BondedValidator obj, BondedValidator other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(BondedValidator obj, BondedValidator other)
        {
            return !(obj == other);
        }

        public IValue Serialize() => List.Empty
            .Add(ValidatorAddress.Serialize())
            .Add(OperatorPublicKey.Serialize())
            .Add(PowerFrac.Serialize());

        public override bool Equals(object? obj)
        {
            return Equals(obj as BondedValidator);
        }

        public bool Equals(BondedValidator? other)
        {
            return !(other is null) &&
                   ValidatorAddress.Equals(other.ValidatorAddress) &&
                   OperatorPublicKey.Equals(other.OperatorPublicKey) &&
                   PowerFrac == other.PowerFrac;
        }

        public override int GetHashCode()
        {
            int code = 0;
            unchecked
            {
                foreach (byte b in ValidatorAddress.ToByteArray())
                {
                    code = (code * 409) ^ b.GetHashCode();
                }
            }

            return code;
        }
    }
}
