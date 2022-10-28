using System;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusMsg : Message, IEquatable<ConsensusMsg>
    {
        protected const byte Nil = 0x00;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class.
        /// </summary>
        /// <param name="validator">
        /// A <see cref="PublicKey"/> of the validator who made this message.</param>
        /// <param name="height">A <see cref="Context{T}.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context{T}.Round"/> the message is written for.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> the message is written for.</param>
        protected ConsensusMsg(
            PublicKey validator,
            long height,
            int round,
            BlockHash? blockHash)
        {
            Validator = validator;
            Round = round;
            Height = height;
            BlockHash = blockHash;
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of the validator who made this message.
        /// </summary>
        public PublicKey Validator { get; }

        /// <summary>
        /// A <see cref="Context{T}.Height"/> the message is written for.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A <see cref="Context{T}.Round"/> the message is written for.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// A <see cref="BlockHash"/> the message is written for.
        /// </summary>
        public BlockHash? BlockHash { get; }

        public abstract bool Equals(ConsensusMsg? other);

        public abstract override bool Equals(object? obj);

        public abstract override int GetHashCode();
    }
}
