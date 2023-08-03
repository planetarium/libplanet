using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IBlockState"/> interface.
    /// </summary>
    public class BlockState : IBlockState
    {
        private BlockHash? _blockHash;
        private ITrie _stateRoot;
        private BlockStateCache _cache;

        public BlockState(BlockHash? blockHash, ITrie stateRoot)
        {
            _blockHash = blockHash;
            _stateRoot = stateRoot;
            _cache = new BlockStateCache();
        }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; }

        /// <inheritdoc cref="IBlockState.BlockHash"/>
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
            KeyBytes[] uncachedKeys = uncachedAddresses.Select(ToStateKey).ToArray();
            IReadOnlyList<IValue?> fetched = _stateRoot.Get(uncachedKeys).ToArray();
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

        /// <inheritdoc cref="IWorldState.GetAccount"/>
        public IAccount GetAccount(Address address)
        {
            throw new System.NotImplementedException();
        }

        /// <inheritdoc cref="IAccountState.GetBalance"/>
        public FungibleAssetValue GetBalance(Address address, Currency currency)
        {
            KeyBytes[] keys = new[] { ToFungibleAssetKey(address, currency) };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(keys);
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

            KeyBytes[] keys = new[] { ToTotalSupplyKey(currency) };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(keys);
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <inheritdoc cref="IAccountState.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet()
        {
            KeyBytes[] keys = new[] { ValidatorSetKey };
            IReadOnlyList<IValue?> rawValues = _stateRoot.Get(keys);
            return rawValues.Count > 0 && rawValues[0] is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();
        }
    }
}
