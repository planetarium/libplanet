using System;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusMsg : MessageContent, IEquatable<ConsensusMsg>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class.
        /// </summary>
        /// <param name="validatorPublicKey">
        /// A <see cref="PublicKey"/> of the validator who made this message.</param>
        /// <param name="height">A <see cref="Context.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context.Round"/> the message is written for.</param>
        protected ConsensusMsg(
            PublicKey validatorPublicKey,
            long height,
            int round)
        {
            ValidatorPublicKey = validatorPublicKey;
            Round = round;
            Height = height;
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of the validator who made this message.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// A <see cref="Context.Height"/> the message is written for.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A <see cref="Context.Round"/> the message is written for.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// Indicates whether the current <see cref="ConsensusMsg"/>
        /// is equal to another <see cref="ConsensusMsg"/>.
        /// </summary>
        /// <param name="other">An <see cref="ConsensusMsg"/> to compare with this
        /// <see cref="ConsensusMsg"/>.</param>
        /// <returns>
        /// true if the current <see cref="ConsensusMsg"/> is equal to the other parameter;
        /// otherwise, false.
        /// </returns>
        public abstract bool Equals(ConsensusMsg? other);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public abstract override bool Equals(object? obj);

        /// <inheritdoc cref="object.GetHashCode"/>
        public abstract override int GetHashCode();
    }
}
