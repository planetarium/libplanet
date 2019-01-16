using System;
using System.Diagnostics.Contracts;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;

namespace Libplanet.Crypto
{
    /// <summary>
    /// A public part of a key pair involved in
    /// <a href="https://en.wikipedia.org/wiki/ECDSA">ECDSA</a>, the digital
    /// signature algorithm on which the Libplanet is based.
    /// It can be used to verify signatures created with the corresponding
    /// <see cref="PrivateKey"/> and to encrypt messages for someone
    /// possessing the corresponding <see cref="PrivateKey"/>.
    /// This can be distributed publicly, hence the name.
    /// <para>Note that it uses <a href="https://en.bitcoin.it/wiki/Secp256k1"
    /// >secp256k1</a> as the parameters of the elliptic curve, which is same to
    /// <a href="https://bitcoin.org/">Bitcoin</a> and
    /// <a href="https://www.ethereum.org/">Ethereum</a>.
    /// It means public keys generated for Bitcoin/Ethereum can be used by
    /// Libplanet-backed games/apps too.</para>
    /// </summary>
    /// <remarks>Every <see cref="PublicKey"/> object is immutable.</remarks>
    /// <seealso cref="PrivateKey"/>
    /// <seealso cref="Address"/>
    [Uno.GeneratedEquality]
    public partial class PublicKey
    {
        /// <summary>
        /// Creates a <see cref="PublicKey"/> instance from the given
        /// <see cref="byte"/> array (i.e., <paramref name="publicKey"/>),
        /// which encodes a valid <a href="https://en.wikipedia.org/wiki/ECDSA">
        /// ECDSA</a> public key.
        /// </summary>
        /// <param name="publicKey">A valid <see cref="byte"/> array that
        /// encodes an ECDSA public key.  It can be either compressed or
        /// not.</param>
        /// <remarks>A valid <see cref="byte"/> array for
        /// a <see cref="PublicKey"/> can be encoded using
        /// <see cref="Format(bool)"/> method.
        /// </remarks>
        /// <seealso cref="Format(bool)"/>
        public PublicKey(byte[] publicKey)
            : this(GetECPublicKeyParameters(publicKey))
        {
        }

        internal PublicKey(ECPublicKeyParameters keyParam)
        {
            KeyParam = keyParam;
        }

        [Uno.EqualityKey]
        internal ECPublicKeyParameters KeyParam { get; }

        /// <summary>
        /// Encodes this public key into a <see cref="byte"/> array
        /// representation.
        /// </summary>
        /// <param name="compress">Returns a short length representation if
        /// it is <c>true</c>.  This option does not lose any information.
        /// </param>
        /// <returns>An encoded <see cref="byte"/> array representation.
        /// It can recover a <see cref="PublicKey"/> object again using
        /// its constructor (i.e., <see cref="PublicKey(byte[])"/>)
        /// regardless of compression.</returns>
        /// <seealso cref="PublicKey(byte[])"/>
        [Pure]
        public byte[] Format(bool compress)
        {
            return KeyParam.Q.GetEncoded(compress);
        }

        /// <summary>
        /// Converts a plain <paramref name="message"/> to a ciphertext
        /// which can be decrypted with the corresponding <see cref="PrivateKey"
        /// />.
        /// </summary>
        /// <param name="message">A binary data to be encrypted.</param>
        /// <returns>
        /// A ciphertext that was encrypted from the <paramref name="message"/>
        /// and can be decrypted with the corresponding <see cref="PrivateKey"
        /// />. (Although the word &#x201c;ciphertext&#x201d; has the word
        /// &#x201c;text&#x201d;, a returned ciphertext is not a Unicode
        /// <see cref="string"/>, but a <see cref="byte"/> array.)
        /// </returns>
        /// <seealso cref="PrivateKey.Decrypt(byte[])"/>
        public byte[] Encrypt(byte[] message)
        {
            PrivateKey disposablePrivateKey = new PrivateKey();
            byte[] aesKey = disposablePrivateKey.ExchangeKey(this);
            var aes = new Aesgcm(aesKey);

            return aes.Encrypt(
                message,
                disposablePrivateKey.PublicKey.Format(true)
            );
        }

        /// <summary>
        /// Verifies whether a <paramref name="signature"/> was created from
        /// a <paramref name="message"/> with the corresponding
        /// <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="message">A plain message that the
        /// <paramref name="signature"/> was created from.  That is, a data
        /// which was passed as an argument to
        /// <see cref="PrivateKey.Sign(byte[])"/>.</param>
        /// <param name="signature">A signature that was created from the
        /// <paramref name="message"/>.  That is, a data which was returned
        /// by <see cref="PrivateKey.Sign(byte[])"/>.</param>
        /// <returns><c>true</c> if the <paramref name="signature"/> was created
        /// from the <paramref name="message"/> with the corresponding
        /// <see cref="PrivateKey"/>. Otherwise <c>false</c>.</returns>
        [Pure]
        public bool Verify(byte[] message, byte[] signature) =>
            Verify(message, signature, "SHA256withECDSA");

        private static ECPublicKeyParameters GetECPublicKeyParameters(byte[] bs)
        {
            var ecParams = PrivateKey.GetECParameters();
            return new ECPublicKeyParameters(
                "ECDSA",
                ecParams.Curve.DecodePoint(bs),
                ecParams
            );
        }

        private bool Verify(
            byte[] message,
            byte[] signature,
            string algorithm)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof(message));
            }

            if (signature == null)
            {
                throw new ArgumentNullException(nameof(signature));
            }

            ISigner verifier = SignerUtilities.GetSigner(algorithm);
            verifier.Init(false, KeyParam);
            verifier.BlockUpdate(message, 0, message.Length);

            return verifier.VerifySignature(signature);
        }
    }
}
