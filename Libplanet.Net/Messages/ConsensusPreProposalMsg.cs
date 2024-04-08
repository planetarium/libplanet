using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Types.Blocks;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="ConsensusStep.PrePropose"/>.
    /// </summary>
    public class ConsensusPreProposalMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreProposalMsg"/> class.
        /// </summary>
        /// <param name="preProposal">A <see cref="PreProposal"/> of given height and round.</param>
        public ConsensusPreProposalMsg(
            PreProposal preProposal)
            : base(
                  preProposal.ValidatorPublicKey,
                  preProposal.Height,
                  preProposal.Round)
        {
            PreProposal = preProposal;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusPreProposalMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusPreProposalMsg(byte[][] dataframes)
            : this(preProposal: new PreProposal(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="PreProposal"/> of the message.
        /// </summary>
        public PreProposal PreProposal { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { PreProposal.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusPreProposal;

        /// <inheritdoc/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusPreProposalMsg message &&
                   message.PreProposal.Equals(PreProposal);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, PreProposal);
        }
    }
}
