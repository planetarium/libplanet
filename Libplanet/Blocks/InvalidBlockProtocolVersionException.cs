using System;
using System.Runtime.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Block{T}"/>'s
    /// <see cref="Block{T}.ProtocolVersion"/> (or a <see cref="BlockHeader"/>'s
    /// <see cref="BlockHeader.ProtocolVersion"/>) is invalid.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockProtocolVersionException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockProtocolVersionException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="actualProtocolVersion">The actual block protocol version which is invalid.
        /// </param>
        public InvalidBlockProtocolVersionException(string message, int actualProtocolVersion)
            : base(message)
        {
            ActualProtocolVersion = actualProtocolVersion;
        }

        private InvalidBlockProtocolVersionException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            ActualProtocolVersion = info.GetInt32(nameof(ActualProtocolVersion));
        }

        /// <summary>
        /// The actual block protocol version which is invalid.
        /// </summary>
        public int ActualProtocolVersion { get; set; }

        /// <inheritdoc cref="Exception.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Message), Message);
            info.AddValue(nameof(ActualProtocolVersion), ActualProtocolVersion);
        }
    }
}
