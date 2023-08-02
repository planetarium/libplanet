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
            GetWorldState(offset).GetAccountState(accountAddress)
            .GetState(address);

        /// <inheritdoc cref="IBlockChainStates.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, Address accountAddress, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(accountAddress)
            .GetStates(addresses);

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetBalance(address, currency);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetTotalSupply(currency);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetValidatorSet();

        /// <inheritdoc cref="IBlockChainStates.GetWorldState"/>
        public IWorldState GetWorldState(BlockHash? offset) =>
            new WorldState(offset, this);

        /// <inheritdoc cref="IBlockChainStates.GetAccountState"/>
        public IAccountState GetAccountState(Address address, HashDigest<SHA256> srh) =>
            new AccountState(address, GetStateRoot(srh));

        /// <inheritdoc cref="IBlockChainStates.GetBlockStateRoot"/>
        public ITrie GetBlockStateRoot(BlockHash? offset)
        {
            if (!(offset is { } hash))
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
                    nameof(offset));
            }
        }

        /// <inheritdoc cref="IBlockChainStates.GetStateRoot"/>
        public ITrie GetStateRoot(HashDigest<SHA256>? srh)
        {
            if (!(srh is { } hash))
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
                    nameof(srh));
            }
        }
    }
}
