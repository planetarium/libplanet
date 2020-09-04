#nullable enable
using System;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;

namespace Libplanet.Blocks
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
        /// <param name="expectedStateRootHash">The hash recorded as
        /// <see cref="Block{T}.StateRootHash"/>>.</param>
        /// <param name="actualStateRootHash">The hash of state trie on the block executed.</param>
        /// <param name="message">The message that describes the error.</param>
        // FIXME: 'expectedStateRootHash' should be not nullable after it decided
        //        to force state root hash.
        public InvalidBlockStateRootHashException(
            HashDigest<SHA256>? expectedStateRootHash,
            HashDigest<SHA256> actualStateRootHash,
            string message)
            : base(message)
        {
            ActualStateRootHash = actualStateRootHash;
            ExpectedStateRootHash = expectedStateRootHash;
        }

        /// <summary>
        /// The hash of state trie on the block executed.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> ActualStateRootHash { get; }

        /// <summary>
        /// The hash recorded as <see cref="Block{T}.StateRootHash"/>>.
        /// </summary>
        [Pure]
        public HashDigest<SHA256>? ExpectedStateRootHash { get; }
    }
}
