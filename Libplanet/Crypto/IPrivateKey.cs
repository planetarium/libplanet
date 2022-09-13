using System.Collections.Immutable;

namespace Libplanet.Crypto
{
    /// <summary>
    /// The interface of a private key. It allows to align the essential methods and
    /// uses, mainly <see cref="Sign"/> and <see cref="KeyBytes"/>.
    /// </summary>
    public interface IPrivateKey
    {
        /// <summary>
        /// The <see cref="byte"/> representation of private key.
        /// </summary>
        ImmutableArray<byte> KeyBytes { get; }

        /// <summary>
        /// The public key pair, <see cref="IPublicKey"/> of private key.
        /// </summary>
        IPublicKey PublicKey { get; }

        /// <summary>
        /// Signs the message with base private key method. See base sign method for detailed
        /// description about signing and possibly thrown exceptions.
        /// </summary>
        /// <param name="message">A message to sign.</param>
        /// <returns>Returns a <see cref="byte"/> array of signature.</returns>
        public byte[] Sign(byte[] message);
    }
}
