using System.Collections.Generic;
using System.Collections.Immutable;
using System.Collections.ObjectModel;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class BondedValidatorSet : Collection<BondedValidator>
    {
        public BondedValidatorSet(SortedSet<ValidatorPower> bondedSet)
        {
            FungibleAssetValue totalConsensusToken
                = bondedSet.Aggregate(
                    Asset.ConsensusToken * 0, (total, next) => total + next.ConsensusToken);

            foreach (var validatorPower in bondedSet)
            {
                var (quo, rem) = totalConsensusToken.DivRem(validatorPower.ConsensusToken);
                double powerFrac = 1 / (double)quo;
                Add(new BondedValidator(
                    validatorPower.ValidatorAddress, validatorPower.OperatorPublicKey, powerFrac));
            }
        }

        public BondedValidatorSet(IValue serialized)
        {
            foreach (var serializedBondedValidator in (List)serialized)
            {
                Add(new BondedValidator(serializedBondedValidator));
            }
        }

        public IImmutableList<PublicKey> BondedValidatorsPublicKey =>
            this.Select(x => x.OperatorPublicKey).ToImmutableList();

        public bool Contains(PublicKey publicKey) =>
            this.Select(x => x.OperatorPublicKey).Contains(publicKey);

        public IValue Serialize()
            => new List(this.Select(x => x.Serialize()));
    }
}
