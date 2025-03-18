using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using Libplanet.Common;
using Secp256k1Net;

namespace Libplanet.Crypto
{
    /// <summary>
    /// A secret part of a key pair involved in
    /// <a href="https://en.wikipedia.org/wiki/ECDSA">ECDSA</a>, the digital
    /// signature algorithm on which the Libplanet is based.  It can be used to
    /// create signatures, which can be verified with the corresponding
    /// <see cref="Crypto.PublicKey"/>, as well as to decrypt
    /// messages which were encrypted with the corresponding
    /// <see cref="Crypto.PublicKey"/>.
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
    /// <seealso cref="Crypto.PublicKey"/>
    public class PrivateKey : IEquatable<PrivateKey>
    {
        internal static readonly object _secpLock = new object();
        private const int KeyByteSize = 32;
        private readonly ImmutableArray<byte> _bytes;
        private PublicKey? _publicKey;

        /// <summary>
        /// Generates a new unique <see cref="PrivateKey"/> instance.
        /// It can be analogous to creating a new account in a degree.
        /// </summary>
        public PrivateKey()
            : this(GenerateBytes())
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
        public PrivateKey(byte[] privateKey)
            : this(privateKey.ToImmutableArray())
        {
        }

        public PrivateKey(in ImmutableArray<byte> immutableBytes)
            : this(immutableBytes, verify: true)
        {
        }

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from the given hexadecimal
        /// <see cref="string"/> (i.e.,<paramref name="hex"/>).
        /// </summary>
        /// <param name="hex">A hexadecimal string of a private key's
        /// <see cref="ByteArray"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        public PrivateKey(string hex)
            : this(GenerateBytesFromHexString(hex), verify: true)
        {
        }

        private PrivateKey(in ImmutableArray<byte> bytes, bool verify)
        {
            if (verify && !VerifyBytes(bytes))
            {
                throw new ArgumentException("Invalid private key.", nameof(bytes));
            }

            _bytes = bytes;
        }

        /// <summary>
        /// The corresponding <see cref="Crypto.PublicKey"/> of
        /// this private key.
        /// </summary>
        public PublicKey PublicKey
        {
            get
            {
                if (_publicKey is null)
                {
                    lock (_secpLock)
                    {
                        using var secp256k1 = new Secp256k1();
                        var publicKey = new byte[Secp256k1.PUBKEY_LENGTH];
                        secp256k1.PublicKeyCreate(publicKey, _bytes.ToArray());
                        _publicKey = new PublicKey(publicKey, verify: false);
                    }
                }

                return _publicKey;
            }
        }

        /// <summary>
        /// The corresponding <see cref="Crypto.Address"/> derived from a <see cref="PrivateKey"/>.
        /// This is the same as the one derived from <see cref="PublicKey"/>.
        /// </summary>
        public Address Address => new Address(PublicKey);

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

        public static bool operator ==(PrivateKey left, PrivateKey right) => left.Equals(right);

        public static bool operator !=(PrivateKey left, PrivateKey right) => !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from hexadecimal string of bytes.
        /// </summary>
        /// <param name="hex">A hexadecimal string of a private key's
        /// <see cref="ByteArray"/>.</param>
        /// <returns>A created <see cref="PrivateKey"/> instance.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        [Pure]
        public static PrivateKey FromString(string hex)
            => new PrivateKey(GenerateBytesFromHexString(hex), verify: true);

        public bool Equals(PrivateKey? other)
            => other is not null && _bytes.SequenceEqual(other._bytes);

        public override bool Equals(object? obj) => obj is PrivateKey other && Equals(other);

        public override int GetHashCode()
        {
            HashCode hash = default;
            for (var i = 0; i < _bytes.Length; i++)
            {
                hash.Add(_bytes[i]);
            }

            return hash.ToHashCode();
        }

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
        /// It can be verified using <see cref="Crypto.PublicKey.Verify"/> method.
        /// </returns>
        /// <seealso cref="Crypto.PublicKey.Verify"/>
        public byte[] Sign(byte[] message)
        {
            // HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            return CryptoConfig.CryptoBackend.Sign(message, this);
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
        /// It can be verified using <see cref="Crypto.PublicKey.Verify"/> method.
        /// </returns>
        /// <seealso cref="Crypto.PublicKey.Verify"/>
        public ImmutableArray<byte> Sign(ImmutableArray<byte> message)
        {
            // HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            byte[] sig = CryptoConfig.CryptoBackend.Sign(message.ToArray(), this);
            return Unsafe.As<byte[], ImmutableArray<byte>>(ref sig);
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
        /// <seealso cref="Crypto.PublicKey.Encrypt(byte[])"/>
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
        /// <seealso cref="Crypto.PublicKey.Encrypt(ImmutableArray{byte})"/>
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
            lock (_secpLock)
            {
                using var secp256k1 = new Secp256k1();
                var secret = new byte[Secp256k1.SECRET_LENGTH];
                secp256k1.Ecdh(secret, publicKey.Raw.ToArray(), _bytes.ToArray());

                return new SymmetricKey(secret);
            }
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
        public byte[] ToByteArray() => _bytes.ToArray();

        internal static byte[] GetPublicKey(in ImmutableArray<byte> raw, bool compress)
        {
            lock (_secpLock)
            {
                using var secp256k1 = new Secp256k1();
                var length = compress
                    ? Secp256k1.SERIALIZED_COMPRESSED_PUBKEY_LENGTH
                    : Secp256k1.SERIALIZED_UNCOMPRESSED_PUBKEY_LENGTH;
                var flag = compress
                    ? Flags.SECP256K1_EC_COMPRESSED : Flags.SECP256K1_EC_UNCOMPRESSED;
                var publicKey = new byte[length];
                if (!secp256k1.PublicKeySerialize(publicKey, raw.ToArray(), flag))
                {
                    throw new NotSupportedException("Failed to serialize a public key.");
                }

                return publicKey;
            }
        }

        private static byte[] GenerateBytes()
        {
            lock (_secpLock)
            {
                using var secp256k1 = new Secp256k1();
                using var rnd = RandomNumberGenerator.Create();
                var privateKey = new byte[Secp256k1.PRIVKEY_LENGTH];
                do
                {
                    rnd.GetBytes(privateKey);
                }
                while (!secp256k1.SecretKeyVerify(privateKey));
                return privateKey;
            }
        }

        private static ImmutableArray<byte> GenerateBytesFromHexString(string hex)
        {
            byte[] bytes = ByteUtil.ParseHex(hex);
            if (bytes.Length != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {KeyByteSize * 2} hexadecimal digits."
                );
            }

            return bytes.ToImmutableArray();
        }

        private static bool VerifyBytes(in ImmutableArray<byte> bytes)
        {
            lock (_secpLock)
            {
                using var secp256k1 = new Secp256k1();
                return bytes.Length == KeyByteSize && secp256k1.SecretKeyVerify(bytes.ToArray());
            }
        }
    }
}
