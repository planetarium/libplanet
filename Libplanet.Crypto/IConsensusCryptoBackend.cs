using System.Security.Cryptography;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Cryptography backend interface.
    /// </summary>
    /// <typeparam name="T">A <see cref="HashAlgorithm"/> which corresponds to a digest.</typeparam>
    /// <seealso cref="HashAlgorithm"/>
    public interface IConsensusCryptoBackend
    {
        /// <summary>
        /// Creates a <c>piBytes</c>(proof) from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="alphaBytes">A message bytearray to generate piBytes.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to prove
        /// <paramref name="alphaBytes"/>.
        /// </param>
        /// <returns>
        /// <c>piBytes</c> that is created from the <paramref name="alphaBytes"/>
        /// with the corresponding <paramref name="privateKey"/>,
        /// which is called as <c>proof</c>.
        /// </returns>
        byte[] Prove(byte[] alphaBytes, PrivateKey privateKey);

        /// <summary>
        /// Verifies whether a <paramref name="piBytes"/> was created from
        /// a <paramref name="alphaBytes"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="alphaBytes">A message bytearray.</param>
        /// <param name="piBytes">A proof that was created from the
        /// <paramref name="alphaBytes"/>.</param>
        /// <param name="publicKey"><see cref="PublicKey"/> used for verification.</param>
        /// <returns>true if the <paramref name="piBytes"/> was created
        /// from the <paramref name="alphaBytes"/> with the corresponding
        /// <see cref="PrivateKey"/>, otherwise false.
        /// </returns>
        bool VerifyProof(byte[] alphaBytes, byte[] piBytes, PublicKey publicKey);

        /// <summary>
        /// Generate <c>betaBytes</c>(proof hash) from a <paramref name="piBytes"/>.
        /// </summary>
        /// <param name="piBytes"> Proof to generate hash.
        /// </param>
        /// <returns>
        /// <c>betaBytes</c> generated from the <paramref name="piBytes"/>,
        /// which is called as <c>proof hash</c>.
        /// </returns>
        byte[] ProofToHash(byte[] piBytes);
    }
}
