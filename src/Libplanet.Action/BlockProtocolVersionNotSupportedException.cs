using System;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when an <see cref="IPreEvaluationBlock"/> with
    /// a protocol version that is not supported by an implementation of
    /// <see cref="IActionEvaluator"/> is passed as an argument to
    /// <see cref="IActionEvaluator.Evaluate"/>.
    /// </summary>
    public sealed class BlockProtocolVersionNotSupportedException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="BlockProtocolVersionNotSupportedException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="blockProtocolVersion">The <see cref="Block.ProtocolVersion"/> of the
        /// <see cref="Block"/> that <paramref name="action"/> belongs to.</param>
        public BlockProtocolVersionNotSupportedException(
            string message,
            int blockProtocolVersion)
            : base(message)
        {
            BlockProtocolVersion = blockProtocolVersion;
        }

        /// <summary>
        /// The <see cref="Block.ProtocolVersion"/> of the <see cref="Block"/> that is
        /// not supported by an implementation of <see cref="IActionEvaluator"/>.
        /// </summary>
        public int BlockProtocolVersion { get; }
    }
}
