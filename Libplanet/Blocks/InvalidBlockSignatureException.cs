using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Serialization;
using static Libplanet.ByteUtil;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when a block's signature is invalid.
    /// </summary>
    [Serializable]
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
                (invalidSignature is { } sig ? $"\nInvalid signature: {Hex(sig)}" : string.Empty)
            )
        {
            PublicKey = publicKey;
            InvalidSignature = invalidSignature;
        }

        protected InvalidBlockSignatureException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            byte[]? pubKeyBytes;
            try
            {
                pubKeyBytes = info.GetValue<byte[]>(nameof(PublicKey));
            }
            catch (SerializationException)
            {
                pubKeyBytes = null;
            }

            byte[]? sig;
            try
            {
                sig = info.GetValue<byte[]>(nameof(InvalidSignature));
            }
            catch (SerializationException)
            {
                sig = null;
            }

            PublicKey = pubKeyBytes is { } p ? new PublicKey(p) : null;
            InvalidSignature = sig is { } s
                ? ImmutableArray.Create(s)
                : (ImmutableArray<byte>?)null;
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

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            if (PublicKey is { } pubKey)
            {
                info.AddValue(nameof(PublicKey), pubKey.Format(true));
            }

            if (InvalidSignature is { } sig)
            {
                info.AddValue(nameof(InvalidSignature), sig.ToBuilder().ToArray());
            }
        }
    }
}
