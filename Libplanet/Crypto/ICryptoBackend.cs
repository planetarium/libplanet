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

        /// <summary>
        /// Creates a piBytes from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="alphaBytes">A message bytearray to generate piBytes and betaBytes.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to prove
        /// <paramref name="alphaBytes"/>.
        /// </param>
        /// <returns> A piBytes created from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// piBytes is called as "proof".
        /// </returns>
        /// <returns> A betaBytes created from piBytes.
        /// betaBytes is used as 64-bytes "pseudorandom bytes".
        /// </returns>
        (byte[], byte[]) VrfEvaluate(byte[] alphaBytes, PrivateKey privateKey);

        /// <summary>
        /// Verifies whether a <paramref name="piBytes"/> was created from
        /// a <paramref name="alphaBytes"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="piBytes">A proof that was created from the
        /// <paramref name="alphaBytes"/>.</param>
        /// <param name="alphaBytes">A message bytearray.</param>
        /// <param name="publicKey"><see cref="PublicKey"/> used for verification.</param>
        /// <returns><c>true</c> if the <paramref name="piBytes"/> was created
        /// from the <paramref name="alphaBytes"/> with the corresponding
        /// <see cref="PrivateKey"/>. Otherwise <c>false</c>.</returns>
        /// <returns> A betaBytes created from <paramref name="piBytes"/>.
        /// betaBytes is used as 64-bytes "pseudorandom bytes".
        /// </returns>
        (bool, byte[]) VrfVerify(byte[] piBytes, byte[] alphaBytes, PublicKey publicKey);
    }
}
