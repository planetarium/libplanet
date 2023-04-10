using System;
using Libplanet.Blocks;

namespace Libplanet.Explorer.Indexing;

/// <summary>
/// An exception raised when the indexed blocks do not match the blocks in the provided
/// <see cref="Blockchain.BlockChain{T}"/> object at the same height.
/// </summary>
public class IndexMismatchException : Exception
{
    internal IndexMismatchException(long index, BlockHash indexHash, BlockHash? chainHash)
        : base(
            $"The existing hash in the index for block #{index} doesn't match the hash"
            + $" in the chain. ({indexHash} != {chainHash}) This means the index is inconsistent"
            + " with the chain. Please make sure that the index is intended for the chain,"
            + " and if absolutely sure, delete the index database and try again.")
    {
        Index = index;
        IndexHash = indexHash;
        ChainHash = chainHash;
    }

    /// <summary>
    /// The index of the mismatched blocks.
    /// </summary>
    public long Index { get; }

    /// <summary>
    /// The hash of the indexed block.
    /// </summary>
    public BlockHash IndexHash { get; }

    /// <summary>
    /// The hash of the block inside the <see cref="Blockchain.BlockChain{T}"/> object.
    /// </summary>
    public BlockHash? ChainHash { get; }
}
