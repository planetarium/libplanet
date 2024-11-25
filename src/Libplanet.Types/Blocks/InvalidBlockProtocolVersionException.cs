using System;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// The exception that is thrown when a <see cref="Block"/>'s
    /// <see cref="Block.ProtocolVersion"/> (or a <see cref="BlockHeader"/>'s
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

        /// <summary>
        /// The actual block protocol version which is invalid.
        /// </summary>
        public int ActualProtocolVersion { get; set; }
    }
}
