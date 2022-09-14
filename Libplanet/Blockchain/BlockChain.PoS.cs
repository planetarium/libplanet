using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.PoS;
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

        public Validator Proposer(long height, int round)
        {
            IValue value = GetState(ReservedAddress.BondedValidatorSet);
            ValidatorSet bondedValidatorSet = new ValidatorSet(value);
            ValidatorPower bondedValidator =
                bondedValidatorSet[(int)((int)(height + round) % bondedValidatorSet.Count)];
            return new Validator(
                bondedValidator.OperatorPublicKey.ToAddress(),
                bondedValidator.OperatorPublicKey);
        }

        public List<PublicKey> BondedValidatorPubKey(BlockHash? hash = null)
        {
            ValidatorSet validatorSet = GetBondedValidators(hash);
            return validatorSet.Set.Select(x => x.OperatorPublicKey).ToList();
        }
    }
}
