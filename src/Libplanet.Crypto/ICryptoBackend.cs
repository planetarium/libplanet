using System;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Cryptography backend interface.
    /// </summary>
    public interface ICryptoBackend
    {
        /// <summary>
        /// Creates a signature from <paramref name="message"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="message">A 32 bytes message hash digest hashed with SHA256 to sign.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to sign
        /// <paramref name="message"/>.
        /// </param>
        /// <returns> Created a signature from <paramref name="message"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </returns>
        byte[] Sign(byte[] message, PrivateKey privateKey);

        /// <summary>
        /// Verifies whether a <paramref name="signature"/> was created from
        /// a <paramref name="message"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="message">A 32 bytes message hash digest hashed with SHA256.</param>
        /// <param name="signature">A signature that was created from the
        /// <paramref name="message"/>.</param>
        /// <param name="signer"><see cref="Address"/> used for verification.</param>
        /// <returns><see langword="true"/> if the <paramref name="signature"/> was created
        /// from the <paramref name="message"/> with the corresponding
        /// <see cref="PrivateKey"/>. Otherwise <see langword="false"/>.</returns>
        /// <exception cref="Exception">If any exception is thrown, the given
        /// <paramref name="signature"/> is considered as invalid.</exception>
        bool Verify(byte[] message, byte[] signature, Address signer);
    }
}
