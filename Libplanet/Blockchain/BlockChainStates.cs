using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Store;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A default implementation of <see cref="IBlockChainStates{T}" /> interface.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.</typeparam>
    public class BlockChainStates<T> : IBlockChainStates<T>
        where T : IAction, new()
    {
        private readonly IStore _store;
        private readonly IStateStore _stateStore;
        private readonly ChainStateCache _stateCache;

        // Temporary fields for backward compatibility.
        // FIXME This field and related codes should be deleted
        // if we make a decision about StateCompleter deprecation.
        private BlockChain<T>? _blockChain;

        public BlockChainStates(IStore store, IStateStore stateStore)
        {
            _store = store;
            _stateStore = stateStore;
            _stateCache = new ChainStateCache();
        }

        /// <inheritdoc cref="IBlockChainStates{T}.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
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
            if (_store.GetStateRootHash(offset) is { } h && _stateStore.ContainsStateRoot(h))
            {
                string[] rawKeys = uncachedAddresses.Select(ToStateKey).ToArray();
                IReadOnlyList<IValue?> fetched = _stateStore.GetStates(h, rawKeys);
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

            if (_blockChain is { } chain)
            {
                IReadOnlyList<IValue?> fetched = stateCompleter(chain, offset, uncachedAddresses);
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

            throw new IncompleteBlockStatesException(offset);
        }

        /// <inheritdoc cref="IBlockChainStates{T}.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset,
            FungibleAssetStateCompleter<T> stateCompleter)
        {
            HashDigest<SHA256>? stateRootHash = _store.GetStateRootHash(offset);
            if (stateRootHash is { } h && _stateStore.ContainsStateRoot(h))
            {
                string rawKey = ToFungibleAssetKey(address, currency);
                IReadOnlyList<IValue?> values =
                    _stateStore.GetStates(stateRootHash, new[] { rawKey });
                return values.Count > 0 && values[0] is Bencodex.Types.Integer i
                    ? FungibleAssetValue.FromRawValue(currency, i)
                    : currency * 0;
            }

            if (!(_blockChain is null))
            {
                return stateCompleter(_blockChain, offset, address, currency);
            }

            throw new IncompleteBlockStatesException(offset);
        }

        /// <inheritdoc cref="IBlockChainStates{T}.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash offset,
            TotalSupplyStateCompleter<T> stateCompleter)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            HashDigest<SHA256>? stateRootHash = _store.GetStateRootHash(offset);
            if (stateRootHash is { } h && _stateStore.ContainsStateRoot(h))
            {
                string rawKey = ToTotalSupplyKey(currency);
                IReadOnlyList<IValue?> values =
                    _stateStore.GetStates(stateRootHash, new[] { rawKey });
                return values.Count > 0 && values[0] is Bencodex.Types.Integer i
                    ? FungibleAssetValue.FromRawValue(currency, i)
                    : currency * 0;
            }

            if (!(_blockChain is null))
            {
                return stateCompleter(_blockChain, offset, currency);
            }

            throw new IncompleteBlockStatesException(offset);
        }

        /// <inheritdoc cref="IBlockChainStates{T}.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(
            BlockHash offset,
            ValidatorSetStateCompleter<T> stateCompleter)
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

            if (!(_blockChain is null))
            {
                return stateCompleter(_blockChain, offset);
            }

            throw new IncompleteBlockStatesException(offset);
        }

        internal void Bind(BlockChain<T> blockChain)
        {
            _blockChain = blockChain;
        }
    }
}
