namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// The very essential metadata extracted from a block.  This purposes to determine
    /// the canonical chain.
    /// </summary>
    public interface IBlockExcerpt
    {
        /// <summary>
        /// A block's protocol version.
        /// </summary>
        /// <seealso cref="Block.ProtocolVersion"/>
        public int ProtocolVersion { get; }

        /// <summary>
        /// A block's index (height).
        /// </summary>
        /// <seealso cref="Block.Index"/>
        public long Index { get; }

        /// <summary>
        /// A block's hash.
        /// </summary>
        /// <summary>
        /// The hash digest derived from the whole contents of the block including
        /// <see cref="IBlockHeader.StateRootHash"/>, which is determined by evaluating transactions
        /// and a <see cref="Blockchain.Policies.IBlockPolicy.BlockAction"/> (if exists).
        /// <para>This is used for block's unique identifier.</para>
        /// </summary>
        /// <seealso cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        /// <seealso cref="IBlockHeader.StateRootHash"/>
        /// <seealso cref="Block.Hash"/>
        public BlockHash Hash { get; }
    }
}
