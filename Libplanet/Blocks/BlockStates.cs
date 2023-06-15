using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.State;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A default implementation of <see cref="IBlockStates"/> interface.
    /// </summary>
    public class BlockStates : IBlockStates
    {
        private BlockHash? _blockHash;
        private ITrie _stateRoot;

        internal BlockStates(BlockHash? blockHash, ITrie stateRoot)
        {
            _blockHash = blockHash;
            _stateRoot = stateRoot;
        }

        /// <inheritdoc cref="IBlockStates.BlockHash"/>
        public BlockHash? BlockHash => _blockHash;

        /// <inheritdoc cref="IBlockStates.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses)
        {
            string[] stringKeys = addresses.Select(ToStateKey).ToArray();
            IReadOnlyList<IValue?> fetched = _stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return fetched;
        }

        /// <inheritdoc cref="IBlockStates.GetBalance"/>
        public FungibleAssetValue GetBalance(Address address, Currency currency)
        {
            string[] stringKeys = new[] { ToFungibleAssetKey(address, currency) };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <inheritdoc cref="IBlockStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            string[] stringKeys = new[] { ToTotalSupplyKey(currency) };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }


        /// <inheritdoc cref="IBlockStates.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet()
        {
            string[] stringKeys = new[] { ValidatorSetKey };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();
        }
    }
}
