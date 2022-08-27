using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Org.BouncyCastle.Crypto.Parameters;

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
    public class PublicKey : IEquatable<PublicKey>
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
        public PublicKey(IReadOnlyList<byte> publicKey)
            : this(GetECPublicKeyParameters(publicKey is byte[] ba ? ba : publicKey.ToArray()))
        {
        }

        internal PublicKey(ECPublicKeyParameters keyParam)
        {
            KeyParam = keyParam;
        }

        internal ECPublicKeyParameters KeyParam { get; }

        public static bool operator ==(PublicKey left, PublicKey right) => left.Equals(right);

        public static bool operator !=(PublicKey left, PublicKey right) => !left.Equals(right);

        public bool Equals(PublicKey? other) => KeyParam.Equals(other?.KeyParam);

        public override bool Equals(object? obj) => obj is PublicKey other && Equals(other);

        public override int GetHashCode() => KeyParam.GetHashCode();

        /// <summary>
        /// Encodes this public key into a mutable <see cref="byte"/> array representation.
        /// <para>To get an immutable one, use <see cref="ToImmutableArray(bool)"/> method
        /// instead.</para>
        /// </summary>
        /// <param name="compress">Returns a short length representation if it is <c>true</c>.
        /// This option does not lose any information.</param>
        /// <returns>An encoded mutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="PublicKey"/> instance again using
        /// <see cref="PublicKey(IReadOnlyList{byte})"/> constructor whether it is compressed
        /// or not.</returns>
        /// <seealso cref="ToImmutableArray(bool)"/>
        /// <seealso cref="PublicKey(IReadOnlyList{byte})"/>
        [Pure]
        public byte[] Format(bool compress) =>
            KeyParam.Q.GetEncoded(compress);

        /// <summary>
        /// Encodes this public key into a immutable <see cref="byte"/> array representation.
        /// <para>To get an mutable one, use <see cref="Format(bool)"/> method instead.</para>
        /// </summary>
        /// <param name="compress">Returns a short length representation if it is <c>true</c>.
        /// This option does not lose any information.</param>
        /// <returns>An encoded immutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="PublicKey"/> instance again using
        /// <see cref="PublicKey(IReadOnlyList{byte})"/> constructor whether it is compressed
        /// or not.</returns>
        /// <seealso cref="Format(bool)"/>
        /// <seealso cref="PublicKey(IReadOnlyList{byte})"/>
        [Pure]
        public ImmutableArray<byte> ToImmutableArray(bool compress) =>
            Format(compress).ToImmutableArray();

        /// <summary>
        /// Encrypts a plaintext <paramref name="message"/> to a ciphertext, which can be decrypted
        /// with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="message">A binary data to encrypt.</param>
        /// <returns>
        /// A ciphertext that was encrypted from the original <paramref name="message"/>.
        /// This can be decrypted with the corresponding <see cref="PrivateKey" />.
        /// </returns>
        /// <remarks>Although the word &#x201c;ciphertext&#x201d; has the word &#x201c;text&#x201d;,
        /// a returned ciphertext is not a Unicode <see cref="string"/>, but a mutable
        /// <see cref="byte"/> array.</remarks>
        /// <seealso cref="PrivateKey.Decrypt(byte[])"/>
        public byte[] Encrypt(byte[] message)
        {
            PrivateKey disposablePrivateKey = new PrivateKey();
            SymmetricKey aes = disposablePrivateKey.ExchangeKey(this);

            return aes.Encrypt(
                message,
                disposablePrivateKey.PublicKey.Format(true)
            );
        }

        /// <summary>
        /// Encrypts a plaintext <paramref name="message"/> to a ciphertext, which can be decrypted
        /// with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="message">A binary data to encrypt.</param>
        /// <returns>
        /// A ciphertext that was encrypted from the original <paramref name="message"/>.
        /// This can be decrypted with the corresponding <see cref="PrivateKey" />.
        /// </returns>
        /// <remarks>Although the word &#x201c;ciphertext&#x201d; has the word &#x201c;text&#x201d;,
        /// a returned ciphertext is not a Unicode <see cref="string"/>, but a mutable
        /// <see cref="byte"/> array.</remarks>
        /// <seealso cref="PrivateKey.Decrypt(ImmutableArray{byte})"/>
        public ImmutableArray<byte> Encrypt(ImmutableArray<byte> message) =>
            Encrypt(message.ToBuilder().ToArray()).ToImmutableArray();

        /// <summary>
        /// Verifies whether a <paramref name="signature"/> proves authenticity of
        /// <paramref name="message"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="message">A original plaintext message that the <paramref name="signature"/>
        /// tries to prove its authenticity.  I.e., an argument data passed to
        /// <see cref="PrivateKey.Sign(byte[])"/> or <see
        /// cref="PrivateKey.Sign(ImmutableArray{byte})" /> methods.</param>
        /// <param name="signature">A signature which tries to authenticity of
        /// <paramref name="message"/>.  I.e., a data that <see cref="PrivateKey.Sign(byte[])"/> or
        /// <see cref="PrivateKey.Sign(ImmutableArray{byte})"/> methods returned.</param>
        /// <returns><c>true</c> if the <paramref name="signature"/> proves authenticity of
        /// the <paramref name="message"/> with the corresponding <see cref="PrivateKey"/>.
        /// Otherwise <c>false</c>.</returns>
        [Pure]
        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof(message));
            }

            if (signature == null)
            {
                throw new ArgumentNullException(nameof(signature));
            }

            if (signature is ImmutableArray<byte> i ? i.IsDefaultOrEmpty : !signature.Any())
            {
                return false;
            }

            try
            {
                HashDigest<SHA256> hashed = message switch
                {
                    byte[] ma => HashDigest<SHA256>.DeriveFrom(ma),
                    ImmutableArray<byte> im => HashDigest<SHA256>.DeriveFrom(im),
                    _ => HashDigest<SHA256>.DeriveFrom(message.ToArray()),
                };
                return CryptoConfig.CryptoBackend.Verify(
                    hashed,
                    signature is byte[] ba ? ba : signature.ToArray(),
                    publicKey: this
                );
            }
            catch (Exception)
            {
                return false;
            }
        }

        /// <summary>
        /// <para>
        /// Verifies whether a <paramref name="proof"/> proves authenticity of
        /// <paramref name="message"/> with the corresponding <see cref="PrivateKey"/>.
        /// </para>
        /// <para>
        /// Generates a pseudorandom bytes from a <paramref name="proof"/>.
        /// </para>
        /// </summary>
        /// <param name="message">A original plaintext message that the <paramref name="proof"/>
        /// tries to prove its authenticity.  I.e., an argument data passed to
        /// <see cref="PrivateKey.VrfEvaluate(byte[])"/> or <see
        /// cref="PrivateKey.VrfEvaluate(ImmutableArray{byte})" /> methods.</param>
        /// <param name="proof">A proof which tries to authenticity of
        /// <paramref name="message"/>.
        /// I.e., a data that <see cref="PrivateKey.VrfEvaluate(byte[])"/> or
        /// <see cref="PrivateKey.VrfEvaluate(ImmutableArray{byte})"/> methods returned.</param>
        /// <returns><c>true</c> if the <paramref name="proof"/> proves authenticity of
        /// the <paramref name="message"/> with the corresponding <see cref="PrivateKey"/>.
        /// Otherwise <c>false</c>.</returns>
        /// <returns> A pseudorandom 64-bytes created from <paramref name="proof"/>.
        /// </returns>
        public (bool, byte[]) VrfVerify(byte[] message, byte[] proof)
        {
            return CryptoConfig.CryptoBackend.VrfVerify(proof, message, this);
        }

        /// <summary>
        /// Gets the public key's hexadecimal representation in compressed form.
        /// </summary>
        /// <returns>The hexadecimal string of the public key's compressed bytes.</returns>
        public override string ToString() => ByteUtil.Hex(Format(true));

        private static ECPublicKeyParameters GetECPublicKeyParameters(byte[] bs)
        {
            var ecParams = PrivateKey.GetECParameters();
            return new ECPublicKeyParameters(
                "ECDSA",
                ecParams.Curve.DecodePoint(bs),
                ecParams
            );
        }
    }
}
