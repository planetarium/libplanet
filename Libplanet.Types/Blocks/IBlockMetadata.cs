using System;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that do not have any proofs nor transactions (but only
    /// <see cref="TxHash"/>).
    /// </summary>
    public interface IBlockMetadata
    {
        /// <summary>
        /// The protocol version number.  For the latest protocol version, see
        /// <see cref="BlockMetadata.CurrentProtocolVersion"/>.  We have the following
        /// version info:
        /// <list type="bullet">
        /// <item><description>
        /// 0: The initial block protocol version number.  This is not actually recorded in
        /// storage.  That is, the lack of block protocol version in a stored block means it
        /// is of version 0.
        /// </description></item>
        /// <item><description>
        /// 1: Introduced to be stored with the block data.  Validation for
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/> was added.
        /// </description></item>
        /// <item><description>
        /// 2: Updated to include <see cref="IBlockHeader.Signature"/> to blocks.  As a result,
        /// the miner's identity is provided as a <see cref="Crypto.PublicKey"/>
        /// instead of a <see cref="Address"/>.  Additionally, total difficulty was added.
        /// </description></item>
        /// <item><description>
        /// 3: Updated to fix an issue with the internal execution ordering
        /// of <see cref="Tx.Transaction"/>s in blocks.
        /// </description></item>
        /// <item><description>
        /// 4: Updated to introduce a PBFT scheme.  <see cref="LastCommit"/> was added and
        /// total difficulty was removed.
        /// </description></item>
        /// <item><description>
        /// 5: Updated to introduce a world model.  No structural changes were made to blocks.
        /// This is used as a marker indicating when the data model should be migrated.
        /// </description></item>
        /// </list>
        /// </summary>
        /// <seealso cref="BlockMetadata.CurrentProtocolVersion"/>
        int ProtocolVersion { get; }

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Not allowed to be negative.</remarks>
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
        /// The public key of the <see cref="Miner"/>.  This is used for verifying the signature.
        /// <para>Although this is nullable type-wise, it is mandatory where
        /// <see cref="ProtocolVersion"/> is 2 or later.  As blocks had not been signed in
        /// the previous protocol versions, the type of this is nullable.
        /// </para>
        /// </summary>
        PublicKey? PublicKey { get; }

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this must be <see langword="null"/>.
        /// </summary>
        BlockHash? PreviousHash { get; }

        /// <summary>
        /// The hash of all transactions in the block.  This is <see langword="null"/> if the block
        /// has no transactions.
        /// </summary>
        HashDigest<SHA256>? TxHash { get; }

        /// <summary>
        /// The <see cref="BlockCommit"/> about previous block's vote information.
        /// </summary>
        BlockCommit? LastCommit { get; }

        /// <summary>
        /// The <see cref="Proof"/> from the proposer candidate.  This can be verified with
        /// proposer candidate's <see cref="PublicKey"/>, and can be used as a source of
        /// proposer candidate dependent random variable.  With above property,
        /// It is used for proposer sortition, and once proposer is decided, can be interpreted
        /// as source of proposer dependent random variable.
        /// </summary>
        Proof? Proof { get; }
    }
}
