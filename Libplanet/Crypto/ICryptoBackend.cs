using System;
using System.Security.Cryptography;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Cryptography backend interface.
    /// </summary>
    /// <typeparam name="T">A <see cref="HashAlgorithm"/> which corresponds to a digest.</typeparam>
    /// <seealso cref="HashAlgorithm"/>
    public interface ICryptoBackend<T>
        where T : HashAlgorithm
    {
        /// <summary>
        /// Creates a signature from <paramref name="messageHash"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="messageHash">A 32 bytes message hash digest hashed with SHA256 to sign.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to sign
        /// <paramref name="messageHash"/>.
        /// </param>
        /// <returns> Created a signature from <paramref name="messageHash"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </returns>
        byte[] Sign(HashDigest<T> messageHash, PrivateKey privateKey);

        /// <summary>
        /// Verifies whether a <paramref name="signature"/> was created from
        /// a <paramref name="messageHash"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="messageHash">A 32 bytes message hash digest hashed with SHA256.</param>
        /// <param name="signature">A signature that was created from the
        /// <paramref name="messageHash"/>.</param>
        /// <param name="publicKey"><see cref="PublicKey"/> used for verification.</param>
        /// <returns><c>true</c> if the <paramref name="signature"/> was created
        /// from the <paramref name="messageHash"/> with the corresponding
        /// <see cref="PrivateKey"/>. Otherwise <c>false</c>.</returns>
        /// <exception cref="Exception">If any exception is thrown, the given
        /// <paramref name="signature"/> is considered as invalid.</exception>
        bool Verify(
            HashDigest<T> messageHash,
            byte[] signature,
            PublicKey publicKey);

        (byte[], byte[]) VrfEvaluate(byte[] alphaBytes, PrivateKey privateKey);

        (bool, byte[]) VrfVerify(byte[] piBytes, byte[] alphaBytes, PublicKey publicKey);
    }
}
