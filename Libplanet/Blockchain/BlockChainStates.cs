using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action.State;
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
        public IWorldState GetWorldState(BlockHash? offset) =>
            new WorldBaseState(offset, this);

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(Address, BlockHash?)"/>
        public IAccountState GetAccountState(Address address, BlockHash? offset) =>
            GetWorldState(offset).GetAccount(address);

        /// <inheritdoc cref="IBlockChainStates.GetStateRoot(BlockHash?)"/>
        public ITrie GetStateRoot(BlockHash? offset)
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
                        $"Could not find state root {stateRootHash} associated with " +
                        $"block hash {offset} in {nameof(IStateStore)}.",
                        nameof(offset));
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Could not find block hash {hash} in {nameof(IStore)}.",
                    nameof(offset));
            }
        }
    }
}
