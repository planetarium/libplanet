using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.PoS.Model;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        public ValidatorSet GetBondedValidators(BlockHash? hash = null)
        {
            IValue value = GetState(ValidatorSet.BondedAddress, hash);
            return new ValidatorSet(value);
        }

        public ImmutableArray<Consensus.Validator> ConsensusValidators(BlockHash? hash = null)
        {
            ValidatorSet validatorSet = GetBondedValidators(hash);
            return validatorSet.ConsensusValidators;
        }
    }
}
