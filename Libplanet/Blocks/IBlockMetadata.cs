#nullable enable
using System;
using System.Numerics;
using System.Security.Cryptography;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A common interface for blocks that do not have any proofs nor transactions (but only
    /// <see cref="TxHash"/>).
    /// </summary>
    public interface IBlockMetadata
    {
        /// <summary>
        /// The protocol version number.
        /// </summary>
        int ProtocolVersion { get; }

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Disallowed to be negative.</remarks>
        long Index { get; }

        /// <summary>
        /// The time the block is created.
        /// </summary>
        /// <remarks>This is always UTC.</remarks>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The address of the miner.
        /// </summary>
        Address Miner { get; }

        /// <summary>
        /// The mining difficulty that the block's <see cref="Nonce"/> has to satisfy.
        /// </summary>
        long Difficulty { get; }

        /// <summary>
        /// The total mining difficulty since the genesis including the block's
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <remarks>This must be greater than or equal to <see cref="Difficulty"/> at least, and
        /// must not be negative.</remarks>
        BigInteger TotalDifficulty { get; }

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this should be <c>null</c>.
        /// </summary>
        BlockHash? PreviousHash { get; }

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        HashDigest<SHA256>? TxHash { get; }
    }
}
