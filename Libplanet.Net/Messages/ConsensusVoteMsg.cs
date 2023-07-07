using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusVoteMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class.
        /// </summary>
        /// <param name="validatorPublicKey">
        /// A <see cref="PublicKey"/> of the validator who made this message.</param>
        /// <param name="height">A <see cref="Context.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context.Round"/> the message is written for.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> the message is written for.</param>
        /// <param name="flag">A <see cref="VoteFlag"/>.</param>
        protected ConsensusVoteMsg(
            PublicKey validatorPublicKey,
            long height,
            int round,
            BlockHash blockHash,
            VoteFlag flag)
            : base(validatorPublicKey, height, round)
        {
            BlockHash = blockHash;
            Flag = flag;
        }

        /// <summary>
        /// A <see cref="BlockHash"/> the message is written for.
        /// </summary>
        public BlockHash BlockHash { get; }

        /// <summary>
        /// A <see cref="VoteFlag"/> of message's vote.
        /// </summary>
        public VoteFlag Flag { get; }
    }
}
