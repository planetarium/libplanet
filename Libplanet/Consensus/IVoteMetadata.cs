using System;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A common <see langword="interface"/> for <see cref="Vote"/>s
    /// and <see cref="VoteMetadata"/>s.
    /// </summary>
    public interface IVoteMetadata
    {
        /// <summary>
        /// Height of the vote target block.
        /// </summary>
        long Height { get; }

        /// <summary>
        /// Round of the vote in given height.
        /// </summary>
        int Round { get; }

        /// <summary>
        /// <see cref="BlockHash"/> of the block in vote. If default, vote nil.
        /// </summary>
        BlockHash BlockHash { get; }

        /// <summary>
        /// The time at which the voting took place.
        /// </summary>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The <see cref="PublicKey"/> of the validator that voted.
        /// </summary>
        PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The <see cref="VoteFlag"/> indicating the type of a <see cref="Vote"/>.
        /// </summary>
        VoteFlag Flag { get; }
    }
}
