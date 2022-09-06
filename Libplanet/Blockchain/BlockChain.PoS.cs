using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.PoS;
using Libplanet.PoS.Model;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        public BondedValidatorSet GetBondedValidators(BlockHash? hash = null)
        {
            IValue value = GetState(ReservedAddress.BondedValidatorSet, hash);
            return new BondedValidatorSet(value);
        }

        public Validator Proposer(long height, int round)
        {
            IValue value = GetState(ReservedAddress.BondedValidatorSet);
            BondedValidatorSet bondedValidatorSet = new BondedValidatorSet(value);
            BondedValidator bondedValidator =
                bondedValidatorSet[(int)(height + round) % bondedValidatorSet.Count];
            return new Validator(
                bondedValidator.OperatorPublicKey.ToAddress(),
                bondedValidator.OperatorPublicKey);
        }
    }
}
