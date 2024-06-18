using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Blockchain;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Tests
{
    public static class BlockChainExtensions
    {
        public static Block GetNextBlock(this BlockChain blockChain, BlockHash blockHash) =>
            blockChain[blockChain[blockHash].Index + 1];

        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// the tip of <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// the tip of <paramref name="blockChain"/>.</returns>
        public static IWorldState GetResultWorldState(this BlockChain blockChain) =>
            GetResultWorldState(blockChain, blockChain.Tip);

        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="index"/>
        /// from <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <param name="index">The index of a <see cref="Block"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="index"/>.</returns>
        public static IWorldState GetResultWorldState(this BlockChain blockChain, long index) =>
            GetResultWorldState(blockChain, blockChain[index]);

        /// <summary>
        /// Returns an <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="blockHash"/>
        /// from <paramref name="blockChain"/>.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain"/> to search.</param>
        /// <param name="blockHash">The <see cref="BlockHash"/> to search.</param>
        /// <returns>An <see cref="IWorldState"/> resulting from the execution of
        /// a <see cref="Block"/> associated with given <paramref name="blockHash"/>.</returns>
        public static IWorldState GetResultWorldState(
            this BlockChain blockChain,
            BlockHash blockHash) =>
            GetResultWorldState(blockChain, blockChain[blockHash]);

        private static IWorldState GetResultWorldState(BlockChain blockChain, Block block)
        {
            if (block.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
            {
                return blockChain.GetWorldState(block.StateRootHash);
            }
            else
            {
                // Since block is fetched from blockChain, its index will be at most tip's index.
                if (block.Index < blockChain.Tip.Index)
                {
                    return blockChain.GetWorldState(blockChain[block.Index + 1].StateRootHash);
                }
                else
                {
                    return blockChain.GetNextStateRootHash(block.Hash) is
                        HashDigest<SHA256> stateRootHash
                            ? blockChain.GetWorldState(stateRootHash)
                            : null;
                }
            }
        }
    }
}
