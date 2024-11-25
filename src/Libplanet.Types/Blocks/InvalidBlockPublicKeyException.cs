using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// An exception thrown when a block's public key is invalid.
    /// </summary>
    [Serializable]
    public class InvalidBlockPublicKeyException : InvalidBlockException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidBlockPublicKeyException"/> instance.
        /// </summary>
        /// <param name="message">A message that describes the error.</param>
        /// <param name="invalidPublicKey">The invalid public key tried to be used
        /// in the block.</param>
        public InvalidBlockPublicKeyException(string message, PublicKey? invalidPublicKey)
            : base(
                message +
                (invalidPublicKey is { } pubKey ? $"\nInvalid public key: {pubKey}" : string.Empty)
            )
        {
            InvalidPublicKey = invalidPublicKey;
        }

        /// <summary>
        /// The invalid public key tried to be used in the block.
        /// </summary>
        [Pure]
        public PublicKey? InvalidPublicKey { get; }
    }
}
