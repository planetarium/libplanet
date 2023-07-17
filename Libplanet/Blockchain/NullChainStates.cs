using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Assets;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Consensus;

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
            GetBlockState(offset).GetState(address);

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, BlockHash? offset) =>
            GetBlockState(offset).GetStates(addresses);

        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetBlockState(offset).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetBlockState(offset).GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetBlockState(offset).GetValidatorSet();

        public IBlockState GetBlockState(BlockHash? offset) => new NullBlockState(offset);
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class NullBlockState : IBlockState
#pragma warning restore SA1402
    {
        public NullBlockState(BlockHash? blockHash)
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
