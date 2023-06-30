using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.State;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.State.KeyConverters;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A default implementation of <see cref="IBlockStates"/> interface.
    /// </summary>
    public class BlockStates : IBlockStates
    {
        private BlockHash? _blockHash;
        private ITrie _stateRoot;
        private BlockStatesCache _cache;

        internal BlockStates(BlockHash? blockHash, ITrie stateRoot)
        {
            _blockHash = blockHash;
            _stateRoot = stateRoot;
            _cache = new BlockStatesCache();
        }

        /// <inheritdoc cref="IBlockStates.BlockHash"/>
        public BlockHash? BlockHash => _blockHash;

        /// <inheritdoc cref="IAccountState.GetState"/>
        public IValue? GetState(Address address) => GetStates(new[] { address }).First();

        /// <inheritdoc cref="IAccountState.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses)
        {
            // Try using cache first
            int length = addresses.Count;
            List<int> uncachedIndices = new List<int>(length);
            IValue?[] result = new IValue?[length];

            for (int i = 0; i < length; i++)
            {
                if (_cache.TryGetValue(addresses[i], out IValue? cachedValue) &&
                    cachedValue is { } cv)
                {
                    result[i] = cv;
                }
                else
                {
                    uncachedIndices.Add(i);
                }
            }

            if (uncachedIndices.Count == 0)
            {
                return result;
            }

            // Fetched uncached and update cache
            IReadOnlyList<Address> uncachedAddresses =
                uncachedIndices.Select(index => addresses[index]).ToArray();
            string[] uncachedStringKeys = uncachedAddresses.Select(ToStateKey).ToArray();
            IReadOnlyList<IValue?> fetched = _stateRoot.Get(
                uncachedStringKeys.Select(StateStoreExtensions.EncodeKey).ToList()).ToArray();
            foreach ((var v, var i) in uncachedIndices.Select((v, i) => (v, i)))
            {
                result[v] = fetched[i];
                if (fetched[i] is { } f)
                {
                    _cache.AddOrUpdate(addresses[v], fetched[i]);
                }
            }

            return result;
        }

        /// <inheritdoc cref="IAccountState.GetBalance"/>
        public FungibleAssetValue GetBalance(Address address, Currency currency)
        {
            string[] stringKeys = new[] { ToFungibleAssetKey(address, currency) };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <inheritdoc cref="IAccountState.GetTotalSupply"/>
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

        /// <inheritdoc cref="IAccountState.GetValidatorSet"/>
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
