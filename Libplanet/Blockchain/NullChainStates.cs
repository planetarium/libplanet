using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.State;

namespace Libplanet.Blockchain
{
    internal class NullChainStates : IBlockChainStates
    {
        public static readonly NullChainStates Instance = new NullChainStates();

        private NullChainStates()
        {
        }

        public IValue? GetState(
            Address address, BlockHash? offset) =>
            GetBlockStates(offset).GetState(address);

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, BlockHash? offset) =>
            GetBlockStates(offset).GetStates(addresses);

        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetBlockStates(offset).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetBlockStates(offset).GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetBlockStates(offset).GetValidatorSet();

        public IBlockStates GetBlockStates(BlockHash? offset) => new NullBlockStates(offset);
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class NullBlockStates : IBlockStates
#pragma warning restore SA1402
    {
        public NullBlockStates(BlockHash? blockHash)
        {
            BlockHash = blockHash;
        }

        public BlockHash? BlockHash { get; }

        public IValue? GetState(Address address) => null;

        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses) =>
            new IValue?[addresses.Count];

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            currency * 0;

        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return currency * 0;
        }

        public ValidatorSet GetValidatorSet() =>
            new ValidatorSet();
    }
}
