using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Store;
using Libplanet.Store.Trie;

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

        /// <inheritdoc cref="IBlockChainStates.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, BlockHash? offset) =>
            GetBlockStates(offset).GetStates(addresses);

        /// <inheritdoc cref="IBlockChainStates.GetBalance"/>
        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetBlockStates(offset).GetBalance(address, currency);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply"/>
        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetBlockStates(offset).GetTotalSupply(currency);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetBlockStates(offset).GetValidatorSet();

        /// <inheritdoc cref="IBlockChainStates.GetBlockStates"/>
        public IBlockStates GetBlockStates(BlockHash? offset) =>
            new BlockStates(offset, GetStateRoot(offset));

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
        private ITrie GetStateRoot(BlockHash? offset)
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
