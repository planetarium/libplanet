using System;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Blocks
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

        protected InvalidBlockPublicKeyException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            byte[] pubKeyBytes;
            try
            {
                pubKeyBytes = info.GetValue<byte[]>(nameof(InvalidPublicKey));
            }
            catch (SerializationException)
            {
                InvalidPublicKey = null;
                return;
            }

            InvalidPublicKey = new PublicKey(pubKeyBytes);
        }

        /// <summary>
        /// The invalid public key tried to be used in the block.
        /// </summary>
        [Pure]
        public PublicKey? InvalidPublicKey { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            if (InvalidPublicKey is { } pubKey)
            {
                info.AddValue(nameof(InvalidPublicKey), pubKey.Format(true));
            }
        }
    }
}
