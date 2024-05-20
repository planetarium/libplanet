using System;
using System.Runtime.Serialization;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when an <see cref="IPreEvaluationBlock"/> with
    /// a protocol version that is not supported by an implementation of
    /// <see cref="IActionEvaluator"/> is passed as an argument to
    /// <see cref="IActionEvaluator.Evaluate"/>.
    /// </summary>
    [Serializable]
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

        private BlockProtocolVersionNotSupportedException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            BlockProtocolVersion = (int)info.GetValue(
                nameof(BlockProtocolVersion),
                typeof(int))!;
        }

        /// <summary>
        /// The <see cref="Block.ProtocolVersion"/> of the <see cref="Block"/> that is
        /// not supported by an implementation of <see cref="IActionEvaluator"/>.
        /// </summary>
        public int BlockProtocolVersion { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BlockProtocolVersion), BlockProtocolVersion, typeof(int));
        }
    }
}
