using System;
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
using LruCacheNet;
using Serilog;
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
        private const int CacheSize = 1_000;
        private readonly IStore _store;
        private readonly IStateStore _stateStore;
        private readonly LruCache<CacheKey, IReadOnlyList<IValue?>> _stateCache;

        // Temporary fields for backward compatibility.
        // FIXME This field and related codes should be deleted
        // if we make a decision about StateCompleter deprecation.
        private BlockChain<T>? _blockChain;

        public BlockChainStates(IStore store, IStateStore stateStore)
        {
            _store = store;
            _stateStore = stateStore;
            _stateCache = new LruCache<CacheKey, IReadOnlyList<IValue?>>(CacheSize);
        }

        /// <inheritdoc cref="IBlockChainStates{T}.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            var cacheKey = new CacheKey(offset, addresses);
            if (_stateCache.TryGetValue(
                    cacheKey,
                    out IReadOnlyList<IValue?> value))
            {
                Log
                    .ForContext("Source", nameof(BlockChainStates<T>))
                    .Debug(
                        "Cached values found for {MethodName}() in {DurationMs} ms for " +
                        "{Count} addresses; returning cahced values",
                        nameof(GetStates),
                        stopwatch.ElapsedMilliseconds,
                        addresses.Count);
                return value;
            }

            HashDigest<SHA256>? stateRootHash = _store.GetStateRootHash(offset);
            if (stateRootHash is { } h && _stateStore.ContainsStateRoot(h))
            {
                string[] rawKeys = addresses.Select(ToStateKey).ToArray();
                IReadOnlyList<IValue?> fetched = _stateStore.GetStates(stateRootHash, rawKeys);
                _stateCache.AddOrUpdate(cacheKey, fetched);
                Log
                    .ForContext("Source", nameof(BlockChainStates<T>))
                    .Debug(
                        "Cached values not found for {MethodName}(); " +
                        "took {DurationMs} ms to fetch values for {Count} addresses from store",
                        nameof(GetStates),
                        stopwatch.ElapsedMilliseconds,
                        addresses.Count);
                return fetched;
            }

            if (_blockChain is { } chain)
            {
                IReadOnlyList<IValue?> fetched = stateCompleter(chain, offset, addresses);
                _stateCache.AddOrUpdate(cacheKey, fetched);
                Log
                    .ForContext("Source", nameof(BlockChainStates<T>))
                    .Debug(
                        "Cached values not found for {MethodName}(); " +
                        "took {DurationMs} ms to fetch values for {Count} addresses from store",
                        nameof(GetStates),
                        stopwatch.ElapsedMilliseconds,
                        addresses.Count);
                return fetched;
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

        private struct CacheKey : IEquatable<CacheKey>
        {
            public CacheKey(BlockHash blockHash, IReadOnlyList<Address> addresses)
            {
                BlockHash = blockHash;
                Addresses = addresses;
            }

            public BlockHash BlockHash { get; }

            public IReadOnlyList<Address> Addresses { get; }

            public bool Equals(CacheKey other) =>
                BlockHash.Equals(BlockHash) && Addresses.SequenceEqual(other.Addresses);

            public override bool Equals(object? obj) => obj is CacheKey other && Equals(other);

            public override int GetHashCode()
            {
                int hash = 17;
                foreach (Address address in Addresses)
                {
                    hash = unchecked(hash * 31 + address.GetHashCode());
                }

                return HashCode.Combine(hash, BlockHash);
            }
        }
    }
}
