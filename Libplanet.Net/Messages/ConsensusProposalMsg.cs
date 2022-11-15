using System;
using System.Collections.Generic;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Consensus.Step.Propose"/>.
    /// </summary>
    public class ConsensusProposalMsg : ConsensusMsg
    {
        private static Codec _codec = new Codec();

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposalMsg"/> class.
        /// </summary>
        /// <param name="proposal">A <see cref="Proposal"/> of given height and round.</param>
        public ConsensusProposalMsg(
            Proposal proposal)
            : base(proposal.Validator, proposal.Height, proposal.Round, proposal.BlockHash)
        {
            Proposal = proposal;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposalMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusProposalMsg(byte[][] dataframes)
            : this(proposal: new Proposal(dataframes[0]))
        {
        }

        /// <summary>
        /// A marshalled <see cref="Block{T}"/>.
        /// </summary>
        public Proposal Proposal { get; }

        /// <inheritdoc cref="Message.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames => new List<byte[]> { Proposal.ByteArray };

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusProposal;

        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusProposalMsg message &&
                   message.Proposal.Equals(Proposal);
        }

        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Type, ByteUtil.CalculateHashCode(Proposal.ByteArray));
        }
    }
}
