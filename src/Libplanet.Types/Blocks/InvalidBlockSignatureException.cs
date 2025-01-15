using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// An exception thrown when a block's signature is invalid.
    /// </summary>
    public class InvalidBlockSignatureException : InvalidBlockException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidBlockPublicKeyException"/> instance.
        /// </summary>
        /// <param name="message">A message that describes the error.</param>
        /// <param name="publicKey">The public key used for signing the block.</param>
        /// <param name="invalidSignature">The block signature which is invalid.</param>
        public InvalidBlockSignatureException(
            string message,
            PublicKey? publicKey,
            ImmutableArray<byte>? invalidSignature
        )
            : base(
                message +
                (publicKey is { } pubKey ? $"\nPublic key: {pubKey}" : string.Empty) +
                (invalidSignature is { } sig
                    ? $"\nInvalid signature: {ByteUtil.Hex(sig)}"
                    : string.Empty)
            )
        {
            PublicKey = publicKey;
            InvalidSignature = invalidSignature;
        }

        /// <summary>
        /// The public key used for signing the block.
        /// </summary>
        [Pure]
        public PublicKey? PublicKey { get; }

        /// <summary>
        /// The block signature which is invalid.
        /// </summary>
        [Pure]
        public ImmutableArray<byte>? InvalidSignature { get; }
    }
}
