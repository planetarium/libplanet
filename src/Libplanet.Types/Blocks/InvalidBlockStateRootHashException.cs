using System;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Types.Blocks
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
    }
}
