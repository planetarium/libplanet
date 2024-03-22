using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// An <see langword="interface"/> for the <see cref="LotMetadata"/>.
    /// </summary>
    public interface ILotMetadata
    {
        /// <summary>
        /// Height of the consensus where <see cref="Validator"/>
        /// participate in the draw of the proposer.
        /// </summary>
        long Height { get; }

        /// <summary>
        /// Round of the consensus where <see cref="Validator"/>
        /// participate in the draw of the proposer.
        /// </summary>
        int Round { get; }

        /// <summary>
        /// <see cref="Proof"/> that has been decided on the previous <see cref="Round"/>.
        /// if current <see cref="Round"/> is 0, it indicates <see cref="Proof"/>
        /// from the <see cref="Blocks.IBlockMetadata.LastCommit"/>
        /// of the <see cref="Blocks.Block"/> proposing.
        /// <seealso cref="Blocks.BlockCommit.Round"/>
        /// </summary>
        Proof? LastProof { get; }
    }
}
