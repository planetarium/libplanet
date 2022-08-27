using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Math.EC;
using Org.BouncyCastle.Security;
using ECPoint = Org.BouncyCastle.Math.EC.ECPoint;

namespace Libplanet.Crypto
{
    /// <summary>
    /// A secret part of a key pair involved in
    /// <a href="https://en.wikipedia.org/wiki/ECDSA">ECDSA</a>, the digital
    /// signature algorithm on which the Libplanet is based.  It can be used to
    /// create signatures, which can be verified with the corresponding
    /// <see cref="Libplanet.Crypto.PublicKey"/>, as well as to decrypt
    /// messages which were encrypted with the corresponding
    /// <see cref="Libplanet.Crypto.PublicKey"/>.
    /// <para>Note that it uses <a href="https://en.bitcoin.it/wiki/Secp256k1"
    /// >secp256k1</a> as the parameters of the elliptic curve, which is
    /// the same to <a href="https://bitcoin.org/">Bitcoin</a> and
    /// <a href="https://www.ethereum.org/">Ethereum</a>.
    /// It means private keys generated for Bitcoin/Ethereum can be used by
    /// Libplanet-backed games/apps too.</para>
    /// </summary>
    /// <remarks>
    /// These (and any derived representations, e.g., <see cref="ByteArray"/>)
    /// must be kept secret, if they are exposed, an attacker will be able to
    /// forge signatures.
    /// <para>Every <see cref="PrivateKey"/> object is immutable.</para>
    /// </remarks>
    /// <seealso cref="Libplanet.Crypto.PublicKey"/>
    public class PrivateKey : IEquatable<PrivateKey>
    {
        private const int KeyByteSize = 32;
        private PublicKey? _publicKey;

        /// <summary>
        /// Generates a new unique <see cref="PrivateKey"/> instance.
        /// It can be analogous to creating a new account in a degree.
        /// </summary>
        public PrivateKey()
            : this(GenerateKeyParam())
        {
        }

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from the given <see cref="byte"/>s (i.e.,
        /// <paramref name="privateKey"/>), which encodes a valid
        /// <a href="https://en.wikipedia.org/wiki/ECDSA">ECDSA</a> private key.
        /// </summary>
        /// <param name="privateKey">A valid <see cref="byte"/>s that encodes an ECDSA private key.
        /// </param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="privateKey"/> is too short or too long.</exception>
        /// <remarks>A valid <see cref="byte"/> array for a <see cref="PrivateKey"/> can be encoded
        /// using <see cref="ByteArray"/> property.</remarks>
        /// <seealso cref="ByteArray"/>
        public PrivateKey(IReadOnlyList<byte> privateKey)
            : this(privateKey is byte[] ba ? ba : privateKey.ToArray(), informedConsent: true)
        {
            if (privateKey.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(privateKey),
                    $"The key must be {KeyByteSize} bytes."
                );
            }
        }

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from the given hexadecimal
        /// <see cref="string"/> (i.e.,<paramref name="hex"/>).
        /// </summary>
        /// <param name="hex">A hexadecimal string of a private key's
        /// <see cref="ByteArray"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        public PrivateKey(string hex)
            : this(unverifiedKey: GenerateBytesFromHexString(hex), informedConsent: true)
        {
        }

        internal PrivateKey(byte[] unverifiedKey, bool informedConsent)
            : this(GenerateKeyFromBytes(unverifiedKey))
        {
            // The `informedConsent` parameter mainly purposes to prevent this overload from
            // being chosen instead of PrivatKey(IReadOnly<byte>) by mistake.
            if (!informedConsent)
            {
                throw new ArgumentException(
                    nameof(informedConsent),
                    "The caller should ensure the key is valid and safe enough."
                );
            }
        }

        private PrivateKey(ECPrivateKeyParameters keyParam)
        {
            KeyParam = keyParam;
        }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this private key.
        /// </summary>
        public PublicKey PublicKey
        {
            get
            {
                if (_publicKey is null)
                {
                    ECDomainParameters ecParams = GetECParameters();
                    ECPoint q = ecParams.G.Multiply(KeyParam.D);
                    var kp = new ECPublicKeyParameters("ECDSA", q, ecParams);
                    _publicKey = new PublicKey(kp);
                }

                return _publicKey;
            }
        }

        /// <summary>
        /// An encoded <see cref="byte"/> array representation.
        /// </summary>
        /// <remarks>
        /// An encoded <see cref="byte"/> array representation can be recovered to a <see
        /// cref="PrivateKey"/> instance again using <see cref="PrivateKey(IReadOnlyList{byte})"/>
        /// constructor.
        /// <para>As like <see cref="PrivateKey"/> instances, it also must be kept secret.
        /// In practice, this must not be sent over the network, and be securely stored in the file
        /// system.  If you just want to store the in-memory private key in the persistent storage,
        /// use <see cref="KeyStore.ProtectedPrivateKey"/> or <see cref="KeyStore.Web3KeyStore"/>.
        /// </para>
        /// <para>To get a mutable array instead of immutable one, use <see cref="ToByteArray()"/>
        /// method instead.</para>
        /// </remarks>
        /// <seealso cref="ToByteArray()"/>
        /// <seealso cref="PrivateKey(IReadOnlyList{byte})"/>
        [Pure]
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        internal ECPrivateKeyParameters KeyParam { get; }

        public static bool operator ==(PrivateKey left, PrivateKey right) => left.Equals(right);

        public static bool operator !=(PrivateKey left, PrivateKey right) => !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from hexadecimal string of bytes.
        /// </summary>
        /// <param name="hex">A hexadecimal string of a private key's
        /// <see cref="ByteArray"/>.</param>
        /// <returns>A created <see cref="PrivateKey"/> instance.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        [Pure]
        public static PrivateKey FromString(string hex)
        {
            return new PrivateKey(
                unverifiedKey: GenerateBytesFromHexString(hex),
                informedConsent: true
            );
        }

        public bool Equals(PrivateKey? other) => KeyParam.Equals(other?.KeyParam);

        public override bool Equals(object? obj) => obj is PrivateKey other && Equals(other);

        public override int GetHashCode() =>
            unchecked(ByteUtil.CalculateHashCode(ToByteArray()) * 397 ^
                      KeyParam.GetHashCode());

        /// <summary>
        /// Creates a signature from the given <paramref name="message"/>.
        /// <para>
        /// A created signature can be verified by the corresponding
        /// <see cref="PublicKey"/>.
        /// </para>
        /// <para>
        /// Signatures can be created by only the <see cref="PrivateKey"/>
        /// which corresponds a <see cref="PublicKey"/> to verify these
        /// signatures.
        /// </para>
        /// <para>
        /// To sum up, a signature is used to guarantee:
        /// </para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created
        /// by someone possessing the corresponding <see cref="PrivateKey"/>,
        /// </description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>, and</description></item>
        /// <item><description>that the <paramref name="message"/> was not
        /// forged in the middle of transit.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message <see cref="byte"/>s to sign.</param>
        /// <returns>A signature that proves the authenticity of the <paramref name="message"/>.
        /// It can be verified using <see cref="Libplanet.Crypto.PublicKey.Verify"/> method.
        /// </returns>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Verify"/>
        public byte[] Sign(byte[] message)
        {
            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            return CryptoConfig.CryptoBackend.Sign(hashed, this);
        }

        /// <summary>
        /// Creates a signature from the given <paramref name="message"/>.
        /// <para>A created signature can be verified by the corresponding <see cref="PublicKey"/>.
        /// </para>
        /// <para>Signatures can be created by only the <see cref="PrivateKey"/> which corresponds
        /// a <see cref="PublicKey"/> to verify these signatures.</para>
        /// <para>To sum up, a signature is used to guarantee:</para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created by someone possessing
        /// the corresponding <see cref="PrivateKey"/>,</description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>, and</description></item>
        /// <item><description>that the <paramref name="message"/> was not forged in the middle of
        /// transit.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message <see cref="byte"/>s to sign.</param>
        /// <returns>A signature that proves the authenticity of the <paramref name="message"/>.
        /// It can be verified using <see cref="Libplanet.Crypto.PublicKey.Verify"/> method.
        /// </returns>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Verify"/>
        public ImmutableArray<byte> Sign(ImmutableArray<byte> message)
        {
            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            byte[] sig = CryptoConfig.CryptoBackend.Sign(hashed, this);
            return Unsafe.As<byte[], ImmutableArray<byte>>(ref sig);
        }

        /// <summary>
        /// Creates a proof and pseudorandom byte from the given <paramref name="message"/>.
        /// <para>
        /// A created proof can be verified by the corresponding
        /// <see cref="PublicKey"/>.
        /// </para>
        /// <para>
        /// A created proof can regenerate unique pseudorandom byte.
        /// </para>
        /// <para>
        /// Proofs can be created by only the <see cref="PrivateKey"/>
        /// which corresponds a <see cref="PublicKey"/> to verify these proofs.
        /// </para>
        /// <para>
        /// To sum up, a proof is used to guarantee:
        /// </para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created
        /// by someone possessing the corresponding <see cref="PrivateKey"/>,
        /// </description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>,</description></item>
        /// <item><description>that the <paramref name="message"/> was not
        /// forged in the middle of transit, and</description></item>
        /// <item><description>that the generated pseudorandom byte was created
        /// properly by someone possessing the corresponding
        /// <see cref="PrivateKey"/>, and</description></item>
        /// <item><description>that the generated pseudorandom byte was not
        /// forged in the middle of transit.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message <see cref="byte"/>s to sign.</param>
        /// <returns>A proof that proves the authenticity of the <paramref name="message"/>.
        /// It can be verified using <see cref="Libplanet.Crypto.PublicKey.VrfVerify"/> method.
        /// </returns>
        /// <returns>A pseudorandom 64-byte array generated from the proof.
        /// It can be regenerated using <see cref="Libplanet.Crypto.PublicKey.VrfVerify"/> method.
        /// </returns>
        /// <seealso cref="Libplanet.Crypto.PublicKey.VrfVerify"/>
        public (byte[], byte[]) VrfEvaluate(byte[] message)
        {
            return CryptoConfig.CryptoBackend.VrfEvaluate(message, this);
        }

        /// <summary>
        /// Creates a proof and pseudorandom byte from the given <paramref name="message"/>.
        /// <para>
        /// A created proof can be verified by the corresponding
        /// <see cref="PublicKey"/>.
        /// </para>
        /// <para>
        /// A created proof can regenerate unique pseudorandom byte.
        /// </para>
        /// <para>
        /// Proofs can be created by only the <see cref="PrivateKey"/>
        /// which corresponds a <see cref="PublicKey"/> to verify these proofs.
        /// </para>
        /// <para>
        /// To sum up, a proof is used to guarantee:
        /// </para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created
        /// by someone possessing the corresponding <see cref="PrivateKey"/>,
        /// </description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>,</description></item>
        /// <item><description>that the <paramref name="message"/> was not
        /// forged in the middle of transit, and</description></item>
        /// <item><description>that the generated pseudorandom byte was created
        /// properly by someone possessing the corresponding
        /// <see cref="PrivateKey"/>, and</description></item>
        /// <item><description>that the generated pseudorandom byte was not
        /// forged in the middle of transit.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message <see cref="byte"/>s to sign.</param>
        /// <returns>A proof that proves the authenticity of the <paramref name="message"/>.
        /// It can be verified using <see cref="Libplanet.Crypto.PublicKey.VrfVerify"/> method.
        /// </returns>
        /// <returns>A pseudorandom 64-byte array generated from the proof.
        /// It can be regenerated using <see cref="Libplanet.Crypto.PublicKey.VrfVerify"/> method.
        /// </returns>
        /// <seealso cref="Libplanet.Crypto.PublicKey.VrfVerify"/>
        public (ImmutableArray<byte>, ImmutableArray<byte>) VrfEvaluate(
            ImmutableArray<byte> message)
        {
            (byte[] proof, byte[] result)
                = CryptoConfig.CryptoBackend.VrfEvaluate(message.ToArray(), this);
            return (
                Unsafe.As<byte[], ImmutableArray<byte>>(ref proof),
                Unsafe.As<byte[], ImmutableArray<byte>>(ref result));
        }

        /// <summary>
        /// Decrypts a <paramref name="ciphertext"/> which was encrypted with the corresponding
        /// <see cref="PublicKey"/> to the original plain text.
        /// </summary>
        /// <param name="ciphertext">The encrypted message.</param>
        /// <returns>The decrypted original message.</returns>
        /// <exception cref="InvalidCiphertextException">Thrown when the given
        /// <paramref name="ciphertext"/> is invalid.</exception>
        /// <remarks>
        /// Although the parameter name <paramref name="ciphertext"/> has the
        /// word &#x201c;text&#x201d;, both a <paramref name="ciphertext"/> and a returned message
        /// are <see cref="byte"/>s, not Unicode <see cref="string"/>s.
        /// </remarks>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Encrypt(byte[])"/>
        [Pure]
        public byte[] Decrypt(byte[] ciphertext)
        {
            PublicKey pubKey = new PublicKey(ciphertext.Take(33).ToArray());
            SymmetricKey aes = ExchangeKey(pubKey);

            return aes.Decrypt(ciphertext, 33);
        }

        /// <summary>
        /// Decrypts a <paramref name="ciphertext"/> which was encrypted with the corresponding
        /// <see cref="PublicKey"/> to the original plain text.
        /// </summary>
        /// <param name="ciphertext">The encrypted message.</param>
        /// <returns>The decrypted original message.</returns>
        /// <exception cref="InvalidCiphertextException">Thrown when the given
        /// <paramref name="ciphertext"/> is invalid.</exception>
        /// <remarks>
        /// Although the parameter name <paramref name="ciphertext"/> has the
        /// word &#x201c;text&#x201d;, both a <paramref name="ciphertext"/> and a returned message
        /// are <see cref="byte"/>s, not Unicode <see cref="string"/>s.
        /// </remarks>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Encrypt(ImmutableArray{byte})"/>
        [Pure]
        public ImmutableArray<byte> Decrypt(ImmutableArray<byte> ciphertext) =>
            Decrypt(ciphertext.ToBuilder().ToArray()).ToImmutableArray();

        /// <summary>
        /// Securely exchange a <see cref="SymmetricKey"/> with a peer's
        /// <see cref="PublicKey"/>.
        /// Two parties can agree on a (new, unique, and typically temporal)
        /// key without revealing to any eavesdropping party what key has been
        /// agreed upon.
        /// <para>Technically it is <a href="https://en.wikipedia.org/wiki/ECDH"
        /// >ECDH</a>, a <a
        /// href="https://en.wikipedia.org/wiki/DH_key_exchange"
        /// >Diffie&#x2013;Hellman key exchange</a> of elliptic-curve version.
        /// </para>
        /// </summary>
        /// <param name="publicKey">The <see cref="PublicKey"/> possessed by
        /// a peer to whom exchange a private key with.</param>
        /// <returns>An exchanged (agreed) <see cref="SymmetricKey"/>.
        /// Note that it is not an elliptic-curve private key, but an <a
        /// href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
        /// >AES</a> key.</returns>
        [Pure]
        public SymmetricKey ExchangeKey(PublicKey publicKey)
        {
            ECPoint p = CalculatePoint(publicKey.KeyParam);
            BigInteger x = p.AffineXCoord.ToBigInteger();
            BigInteger y = p.AffineYCoord.ToBigInteger();

            byte[] xbuf = x.ToByteArrayUnsigned();
            var ybuf = new byte[] { (byte)(y.TestBit(0) ? 0x03 : 0x02) };

            var hash = new Sha256Digest();
            var result = new byte[hash.GetDigestSize()];

            hash.BlockUpdate(ybuf, 0, ybuf.Length);
            hash.BlockUpdate(xbuf, 0, xbuf.Length);
            hash.DoFinal(result, 0);

            return new SymmetricKey(result);
        }

        /// <summary>
        /// Encodes the private key into a corresponding mutable <see cref="byte"/> array
        /// representation.
        /// </summary>
        /// <returns>An encoded <see cref="byte"/> array representation.  It guarantees that
        /// returned arrays are never reused, and mutating on them does not affect
        /// <see cref="PrivateKey"/> instance's internal states.</returns>
        /// <remarks>
        /// An encoded <see cref="byte"/> array representation can be recovered to a <see
        /// cref="PrivateKey"/> instance again using <see cref="PrivateKey(IReadOnlyList{byte})"/>
        /// constructor.
        /// <para>As like <see cref="PrivateKey"/> instances, it also must be kept secret.
        /// In practice, this must not be sent over the network, and be securely stored in the file
        /// system.  If you just want to store the in-memory private key in the persistent storage,
        /// use <see cref="KeyStore.ProtectedPrivateKey"/> or <see cref="KeyStore.Web3KeyStore"/>.
        /// </para>
        /// <para>To get an immutable array instead of mutable one, use <see cref="ByteArray"/>
        /// property.</para>
        /// </remarks>
        /// <seealso cref="ByteArray"/>
        /// <seealso cref="PrivateKey(IReadOnlyList{byte})"/>
        [Pure]
        public byte[] ToByteArray() =>
            KeyParam.D.ToByteArrayUnsigned();

        internal static ECDomainParameters GetECParameters()
        {
            return GetECParameters("secp256k1");
        }

        private static ECDomainParameters GetECParameters(string name)
        {
            X9ECParameters ps = SecNamedCurves.GetByName(name);
            return new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
        }

        private static ECPrivateKeyParameters GenerateKeyParam()
        {
            var gen = new ECKeyPairGenerator();
            var secureRandom = new SecureRandom();
            ECDomainParameters ecParams = GetECParameters();
            var keyGenParam =
                new ECKeyGenerationParameters(ecParams, secureRandom);
            gen.Init(keyGenParam);

            const int maxTries = 3000;
            int tries = 0;
            ECPrivateKeyParameters result;

            while (tries < maxTries)
            {
                result = (ECPrivateKeyParameters)gen.GenerateKeyPair().Private;
                if (result.D.ToByteArrayUnsigned().Length == KeyByteSize)
                {
                    return result;
                }

                tries++;
            }

            throw new GenerateKeyParamTriesExceedException(
                "Can't find appropriate parameter for private key" +
                $"(maxTries: {maxTries})"
            );
        }

        private static ECPrivateKeyParameters GenerateKeyFromBytes(byte[] privateKey)
        {
            var param = new ECPrivateKeyParameters(
                "ECDSA",
                new BigInteger(1, privateKey),
                GetECParameters()
            );

            // For sanity check.
#pragma warning disable SA1312, S1481
            var _ = new PrivateKey(param).PublicKey;
#pragma warning restore SA1312, S1481
            return param;
        }

        private static byte[] GenerateBytesFromHexString(string hex)
        {
            byte[] bytes = ByteUtil.ParseHex(hex);
            if (bytes.Length != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {KeyByteSize * 2} hexadecimal digits."
                );
            }

            return bytes;
        }

        private ECPoint CalculatePoint(ECPublicKeyParameters pubKeyParams)
        {
            ECDomainParameters dp = KeyParam.Parameters;
            if (!dp.Equals(pubKeyParams.Parameters))
            {
                throw new InvalidOperationException(
                    "ECDH public key has wrong domain parameters"
                );
            }

            BigInteger d = KeyParam.D;

            ECPoint q = dp.Curve.DecodePoint(pubKeyParams.Q.GetEncoded(true));
            if (q.IsInfinity)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid public key for ECDH"
                );
            }

            BigInteger h = dp.H;
            if (!h.Equals(BigInteger.One))
            {
                d = dp.H.ModInverse(dp.N).Multiply(d).Mod(dp.N);
                q = ECAlgorithms.ReferenceMultiply(q, h);
            }

            ECPoint p = q.Multiply(d).Normalize();
            if (p.IsInfinity)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid agreement value for ECDH"
                );
            }

            return p;
        }
    }
}
