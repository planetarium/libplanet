using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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
            BlockHash offset)
        {
            int length = addresses.Count;
            List<int> uncachedIndices = new List<int>(length);
            IValue?[] result = new IValue?[length];

            for (int i = 0; i < length; i++)
            {
                if (_stateCache.TryGetValue(offset, addresses[i], out IValue? cachedValue) &&
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
                    _stateCache.AddOrUpdate(offset, addresses[v], fetched[i]);
                }
            }

            return result;
        }

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset)
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
            BlockHash offset)
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
        public ValidatorSet GetValidatorSet(BlockHash offset)
        {
            HashDigest<SHA256>? stateRootHash = _store.GetStateRootHash(offset);
            if (stateRootHash is { } h && _stateStore.ContainsStateRoot(h))
            {
                IReadOnlyList<IValue?> values =
                    _stateStore.GetStates(stateRootHash, new[] { ValidatorSetKey });
                return values.Count > 0 && values[0] is List l
                    ? new ValidatorSet(l)
                    : new ValidatorSet();
            }

            throw new IncompleteBlockStatesException(offset);
        }

        /// <inheritdoc cref="IBlockChainStates.GetStateRoot"/>
        public ITrie GetStateRoot(BlockHash? offset)
        {
            if (!(offset is { } hash))
            {
                return _stateStore.GetStateRoot(null);
            }
            else
            {
                if (_store.GetStateRootHash(hash) is { } stateRootHash)
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
}
