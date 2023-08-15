using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A default implementation of <see cref="IBlockChainStates" /> interface.
    /// </summary>
    public class BlockChainStates : IBlockChainStates
    {
        private readonly IStore _store;
        private readonly IStateStore _stateStore;

        public BlockChainStates(IStore store, IStateStore stateStore)
        {
            _store = store;
            _stateStore = stateStore;
        }

        /// <inheritdoc cref="IBlockChainStates.GetState"/>
        public IValue? GetState(
            Address address, Address accountAddress, BlockHash? offset) =>
            GetWorldState(offset).GetAccount(accountAddress)
            .GetState(address);

        /// <inheritdoc cref="IBlockChainStates.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, Address accountAddress, BlockHash? offset) =>
            GetWorldState(offset).GetAccount(accountAddress)
            .GetStates(addresses);

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccount(ReservedAddresses.LegacyAccount)
            .GetBalance(address, currency);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccount(ReservedAddresses.LegacyAccount)
            .GetTotalSupply(currency);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetWorldState(offset).GetAccount(ReservedAddresses.LegacyAccount)
            .GetValidatorSet();

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(BlockHash?)"/>
        public IWorldState GetWorldState(BlockHash? blockHash) =>
            new WorldBaseState(_store.GetStateRootHash(blockHash), this);

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256}?)"/>
        public IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash) =>
            new WorldBaseState(stateRootHash, this);

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(Address, BlockHash?)"/>
        public IAccountState GetAccountState(Address address, BlockHash? blockHash) =>
            new AccountBaseState(address, GetStateRoot(blockHash));

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(Address, HashDigest{SHA256}?)"/>
        public IAccountState GetAccountState(Address address, HashDigest<SHA256>? stateRootHash) =>
            new AccountBaseState(address, GetStateRoot(stateRootHash));

        /// <inheritdoc cref="IBlockChainStates.GetStateRoot(BlockHash?)"/>
        public ITrie GetStateRoot(BlockHash? blockHash)
        {
            if (!(blockHash is { } hash))
            {
                return _stateStore.GetStateRoot(null);
            }
            else if (_store.GetStateRootHash(hash) is { } stateRootHash)
            {
                return GetStateRoot(stateRootHash);
            }
            else
            {
                throw new ArgumentException(
                    $"Could not find block hash {hash} in {nameof(IStore)}.",
                    nameof(blockHash));
            }
        }

        /// <inheritdoc cref="IBlockChainStates.GetStateRoot(HashDigest{SHA256}?)"/>
        public ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash)
        {
            if (!(stateRootHash is { } hash))
            {
                return _stateStore.GetStateRoot(null);
            }
            else if (_stateStore.ContainsStateRoot(hash))
            {
                return _stateStore.GetStateRoot(hash);
            }
            else
            {
                throw new ArgumentException(
                    $"Could not find state root {hash} in {nameof(IStateStore)}.",
                    nameof(stateRootHash));
            }
        }
    }
}
