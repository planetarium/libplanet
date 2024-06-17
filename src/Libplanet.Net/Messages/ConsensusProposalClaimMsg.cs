using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Types.Blocks;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for claiming a <see cref="Proposal"/>.
    /// </summary>
    public class ConsensusProposalClaimMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposalClaimMsg"/> class.
        /// </summary>
        /// <param name="proposalClaim">A <see cref="ProposalClaim"/> of given height,
        /// round and <see cref="BlockHash"/>.</param>
        public ConsensusProposalClaimMsg(ProposalClaim proposalClaim)
            : base(proposalClaim.ValidatorPublicKey, proposalClaim.Height, proposalClaim.Round)
        {
            ProposalClaim = proposalClaim;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposalClaimMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusProposalClaimMsg(byte[][] dataframes)
            : this(new ProposalClaim(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="ProposalClaim"/> of the message.
        /// </summary>
        public ProposalClaim ProposalClaim { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { ProposalClaim.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusProposalClaimMsg;

        /// <inheritdoc cref="ConsensusMsg.Equals(ConsensusMsg?)"/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusProposalClaimMsg message &&
                   message.ProposalClaim.Equals(ProposalClaim);
        }

        /// <inheritdoc cref="ConsensusMsg.Equals(object?)"/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc cref="ConsensusMsg.GetHashCode"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, ProposalClaim);
        }
    }
}
