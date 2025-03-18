#nullable enable
using System;
using System.Diagnostics;
using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A default implementation of <see cref="IBlockChainStates" /> interface.
    /// </summary>
    public class BlockChainStates : IBlockChainStates
    {
        private readonly IStore _store;
        private readonly IStateStore _stateStore;
        private readonly ActivitySource _activitySource;

        public BlockChainStates(IStore store, IStateStore stateStore)
        {
            _store = store;
            _stateStore = stateStore;
            _activitySource = new ActivitySource("Libplanet.Blockchain.BlockChainStates");
        }

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(BlockHash)"/>
        public IWorldState GetWorldState(BlockHash offset)
        {
            using Activity? a = _activitySource
                .StartActivity(ActivityKind.Internal)?
                .AddTag("BlockHash", offset.ToString());
            return new WorldBaseState(GetTrie(offset), _stateStore);
        }

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256}?)"/>
        public IWorldState GetWorldState(HashDigest<SHA256> stateRootHash)
            => new WorldBaseState(GetTrie(stateRootHash), _stateStore);

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
        /// <remarks>
        /// An <see cref="ITrie"/> returned by this method is read-only.
        /// </remarks>
        private ITrie GetTrie(BlockHash offset)
        {
            using Activity? a = _activitySource
                .StartActivity(ActivityKind.Internal)?
                .AddTag("BlockHash", offset.ToString());
            if (_store.GetStateRootHash(offset) is { } stateRootHash)
            {
                a?.SetStatus(ActivityStatusCode.Ok);
                return GetTrie(stateRootHash);
            }
            else
            {
                a?.SetStatus(ActivityStatusCode.Error);
                throw new ArgumentException(
                    $"Could not find block hash {offset} in {nameof(IStore)}.",
                    nameof(offset));
            }
        }

        private ITrie GetTrie(HashDigest<SHA256> hash)
        {
            ITrie trie = _stateStore.GetStateRoot(hash);
            return trie.Recorded
                ? trie
                : throw new ArgumentException(
                    $"Could not find state root {hash} in {nameof(IStateStore)}.",
                    nameof(hash));
        }
    }
}
