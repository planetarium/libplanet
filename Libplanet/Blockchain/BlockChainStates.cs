using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.State;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A default implementation of <see cref="IBlockChainStates" /> interface.
    /// </summary>
    public class BlockChainStates : IBlockChainStates
    {
        private readonly IStore _store;
        private readonly IStateStore _stateStore;
        private readonly ChainStateCache _stateCache;

        public BlockChainStates(IStore store, IStateStore stateStore)
        {
            _store = store;
            _stateStore = stateStore;
            _stateCache = new ChainStateCache();
        }

        /// <inheritdoc cref="IBlockChainStates.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset)
        {
            if (!(offset is { } hash))
            {
                return Enumerable.Range(0, addresses.Count).Select(_ => (IValue?)null).ToList();
            }

            int length = addresses.Count;
            List<int> uncachedIndices = new List<int>(length);
            IValue?[] result = new IValue?[length];

            for (int i = 0; i < length; i++)
            {
                if (_stateCache.TryGetValue(hash, addresses[i], out IValue? cachedValue) &&
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

            IReadOnlyList<Address> uncachedAddresses =
                uncachedIndices.Select(index => addresses[index]).ToArray();
            ITrie stateRoot = GetStateRoot(offset);
            string[] stringKeys = uncachedAddresses.Select(ToStateKey).ToArray();
            IReadOnlyList<IValue?> fetched = stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            foreach ((var v, var i) in uncachedIndices.Select((v, i) => (v, i)))
            {
                result[v] = fetched[i];
                if (fetched[i] is { } f)
                {
                    _stateCache.AddOrUpdate(hash, addresses[v], fetched[i]);
                }
            }

            return result;
        }

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset)
        {
            ITrie stateRoot = GetStateRoot(offset);
            string[] stringKeys = new[] { ToFungibleAssetKey(address, currency) };
            IReadOnlyList<IValue?> rawValues = stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            ITrie stateRoot = GetStateRoot(offset);
            string[] stringKeys = new[] { ToTotalSupplyKey(currency) };
            IReadOnlyList<IValue?> rawValues = stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is Bencodex.Types.Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(BlockHash? offset)
        {
            ITrie stateRoot = GetStateRoot(offset);
            string[] stringKeys = new[] { ValidatorSetKey };
            IReadOnlyList<IValue?> rawValues = stateRoot.Get(
                stringKeys.Select(StateStoreExtensions.EncodeKey).ToList());
            return rawValues.Count > 0 && rawValues[0] is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();
        }

        /// <summary>
        /// Returns the state root associated with <see cref="BlockHash"/>
        /// <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> to look up in
        /// the internally held <see cref="IStore"/>.</param>
        /// <returns>An <see cref="ITrie"/> representing the state root associated with
        /// <paramref name="offset"/>.</returns>
        /// <exception cref="ArgumentException">Thrown for one of the following reasons.
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="offset"/> is not <see langword="null"/> and
        ///         <paramref name="offset"/> cannot be found in <see cref="IStore"/>.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="offset"/> is not <see langword="null"/> and
        ///         the state root hash associated with <paramref name="offset"/>
        ///         cannot be found in <see cref="IStateStore"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        internal ITrie GetStateRoot(BlockHash? offset)
        {
            if (!(offset is { } hash))
            {
                return _stateStore.GetStateRoot(null);
            }
            else if (_store.GetStateRootHash(hash) is { } stateRootHash)
            {
                if (_stateStore.ContainsStateRoot(stateRootHash))
                {
                    return _stateStore.GetStateRoot(stateRootHash);
                }
                else
                {
                    throw new ArgumentException(
                        $"Could not find state root {stateRootHash} in {nameof(IStateStore)}.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Could not find block hash {hash} in {nameof(IStore)}.");
            }
        }
    }
}
