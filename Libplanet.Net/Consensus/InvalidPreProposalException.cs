using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="PreProposal"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="PreProposal"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidPreProposalException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidPreProposalException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="preProposal">The <see cref="PreProposal"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidPreProposalException(
            string message,
            PreProposal preProposal,
            Exception innerException)
            : base(message, innerException)
        {
            PreProposal = preProposal;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidPreProposalException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="preProposal">The <see cref="Proposal"/> that caused this exception.
        /// </param>
        public InvalidPreProposalException(string message, PreProposal preProposal)
            : base(message)
        {
            PreProposal = preProposal;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidPreProposalException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/>
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext"/>
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidPreProposalException(SerializationInfo info, StreamingContext context)
        {
            PreProposal =
                info.GetValue(nameof(PreProposal), typeof(PreProposal)) as PreProposal ??
                throw new SerializationException(
                    $"{nameof(PreProposal)} is expected to be a non-null {nameof(PreProposal)}.");
        }

        public PreProposal PreProposal { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(PreProposal), PreProposal);
        }
    }
}
