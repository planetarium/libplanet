using System;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Common.Serialization;

namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// The exception that is thrown when the state root hash in the block has
    /// mismatches to the state root hash of the trie on the block executed in local.
    /// </summary>
    [Serializable]
    public class InvalidBlockStateRootHashException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidBlockStateRootHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="expectedStateRootHash">The hash recorded as
        /// <see cref="Block.StateRootHash"/>>.</param>
        /// <param name="actualStateRootHash">The hash of state trie on the block executed.</param>
        public InvalidBlockStateRootHashException(
            string message,
            HashDigest<SHA256> expectedStateRootHash,
            HashDigest<SHA256> actualStateRootHash)
            : base(message)
        {
            ActualStateRootHash = actualStateRootHash;
            ExpectedStateRootHash = expectedStateRootHash;
        }

        private InvalidBlockStateRootHashException(
            SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ActualStateRootHash =
                info.GetValue<HashDigest<SHA256>>(nameof(ActualStateRootHash));
            ExpectedStateRootHash =
                info.GetValue<HashDigest<SHA256>>(nameof(ExpectedStateRootHash));
        }

        /// <summary>
        /// The hash of state trie on the block executed.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> ActualStateRootHash { get; }

        /// <summary>
        /// The hash recorded as <see cref="Block.StateRootHash"/>>.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> ExpectedStateRootHash { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ActualStateRootHash), ActualStateRootHash);
            info.AddValue(nameof(ExpectedStateRootHash), ExpectedStateRootHash);
        }
    }
}
