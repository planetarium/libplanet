using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.Blockchain
{
    internal class NullChainStates : IBlockChainStates
    {
        public static readonly NullChainStates Instance = new NullChainStates();

        private NullChainStates()
        {
        }

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset
        ) =>
            new IValue?[addresses.Count];

        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset
        ) =>
            currency * 0;

        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash offset
        )
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return currency * 0;
        }

        public ValidatorSet GetValidatorSet(BlockHash offset)
        {
            return new ValidatorSet();
        }
    }
}
