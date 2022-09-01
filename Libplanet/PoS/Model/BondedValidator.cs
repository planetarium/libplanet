using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class BondedValidator
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

        public IValue Serialize() => List.Empty
            .Add(ValidatorAddress.Serialize())
            .Add(OperatorPublicKey.Serialize())
            .Add(PowerFrac.Serialize());
    }
}
