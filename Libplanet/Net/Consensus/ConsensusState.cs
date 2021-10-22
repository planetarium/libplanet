using System;

namespace Libplanet.Net.Consensus
{
    public class ConsensusState
    {
        public ConsensusState(long nodeId)
        {
            NodeId = nodeId;
            Round = 0;
            Step = RoundStep.RoundStepNewRound;
            Data = Array.Empty<byte>();
        }

        /// <summary>
        /// This is step of round for consensus.
        /// </summary>
        public enum RoundStep : byte
        {
            /// <summary>
            /// New round.
            /// </summary>
            RoundStepNewRound = 0x00,

            /// <summary>
            /// Propose the new block.
            /// </summary>
            RoundStepPropose = 0x01,

            /// <summary>
            /// Voting for the new block.
            /// </summary>
            RoundStepPrevote = 0x02,

            /// <summary>
            /// Wait until reply about vote.
            /// </summary>
            RoundStepPrevoteWait = 0x03,

            /// <summary>
            /// Pre-committed message.
            /// </summary>
            RoundStepPreCommit = 0x04,

            /// <summary>
            /// Wait until reply about Pre-committed message.
            /// </summary>
            RoundStepPreCommitWait = 0x05,

            /// <summary>
            /// Commit.
            /// </summary>
            RoundStepCommit = 0x06,
        }

        internal long Round { get; set; }

        internal RoundStep Step { get; set; }

        internal byte[] Data { get; set; }

        internal long VoteCount { get; set; }

        internal long Vote23Count { get; set; }

        internal long NodeId { get; }
    }
}
