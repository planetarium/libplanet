using System.Security.Cryptography;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Cryptography backend interface.
    /// </summary>
    public interface ICryptoBackend
    {
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
        bool Verify(
            HashDigest<SHA256> messageHash,
            byte[] signature,
            PublicKey publicKey);
    }
}
