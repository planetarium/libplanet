using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Blockchain;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Tests
{
    public static class BlockChainExtensions
    {
        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// the tip of <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// the tip of <paramref name="blockChain"/>.</returns>
        public static IWorldState GetNextWorldState(this BlockChain blockChain) =>
            blockChain.GetNextStateRootHash() is HashDigest<SHA256> stateRootHash
                ? blockChain.GetWorldState(stateRootHash)
                : null;

        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="index"/>
        /// from <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <param name="index">The index of a <see cref="Block"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="index"/>.</returns>
        public static IWorldState GetNextWorldState(this BlockChain blockChain, long index) =>
            blockChain.GetNextStateRootHash(index) is HashDigest<SHA256> stateRootHash
                ? blockChain.GetWorldState(stateRootHash)
                : null;

        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="blockHash"/>
        /// from <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <param name="blockHash">The <see cref="BlockHash"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="blockHash"/>.</returns>
        public static IWorldState GetNextWorldState(
            this BlockChain blockChain,
            BlockHash blockHash) =>
            blockChain.GetNextStateRootHash(blockHash) is HashDigest<SHA256> stateRootHash
                ? blockChain.GetWorldState(stateRootHash)
                : null;
    }
}
