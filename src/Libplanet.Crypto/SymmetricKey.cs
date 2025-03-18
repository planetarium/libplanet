using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Crypto
{
    /// <summary>
    /// An <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
    /// >AES</a>-<a href="https://en.wikipedia.org/wiki/Galois/Counter_Mode"
    /// >GCM</a> <a href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm"
    /// >symmetric key</a>.  Unlike <see cref="PrivateKey"/> and
    /// <see cref="PublicKey"/> that are involved in an asymmetric key
    /// cryptography, it uses the same <see cref="SymmetricKey"/> for both
    /// encrypting a plaintext and decrypting a ciphertext.
    /// </summary>
    public class SymmetricKey : IEquatable<SymmetricKey>
    {
        private const int KeyByteSize = 32; // 256 bits
        private const int TagByteSize = 16; // 128 bits
        private const int NonceByteSize = 12; // 128 bits

        private readonly RandomNumberGenerator _secureRandom;

        private readonly byte[] _key;

        /// <summary>
        /// Creates a <see cref="SymmetricKey"/> instance from the given
        /// <see cref="byte"/> array (i.e., <paramref name="key"/>),
        /// which encodes a valid <a
        /// href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
        /// >AES</a>-<a href="https://en.wikipedia.org/wiki/Galois/Counter_Mode"
        /// >GCM</a> <a
        /// href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm"
        /// >symmetric key</a>.
        /// </summary>
        /// <param name="key">A valid <see cref="byte"/> array that
        /// encodes an AES-GCM symmetric key.
        /// </param>
        /// <remarks>A valid <see cref="byte"/> array for
        /// a <see cref="SymmetricKey"/> can be encoded using
        /// <see cref="ToByteArray()"/> method.
        /// </remarks>
        /// <seealso cref="ToByteArray()"/>
        public SymmetricKey(byte[] key)
        {
            _secureRandom = RandomNumberGenerator.Create();

            if (key == null || key.Length != KeyByteSize)
            {
                throw new ArgumentException(
                    $"Key needs to be {KeyByteSize} bytes!",
                    nameof(key));
            }

            _key = key;
        }

        /// <summary>
        /// An immutable <see cref="byte"/> array encoding of this key.
        /// </summary>
        /// <remarks>This is immutable.  For a mutable array, call
        /// <see cref="ToByteArray()"/> method.</remarks>
        /// <seealso cref="ToByteArray()"/>
        [Pure]
        public ImmutableArray<byte> ByteArray => _key.ToImmutableArray();

        public static bool operator ==(SymmetricKey left, SymmetricKey right) => left.Equals(right);

        public static bool operator !=(SymmetricKey left, SymmetricKey right) =>
            !left.Equals(right);

        public bool Equals(SymmetricKey? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return ByteArray.SequenceEqual(other.ByteArray);
        }

        public override bool Equals(object? obj) => obj is SymmetricKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Converts a plain <paramref name="message"/> to a ciphertext
        /// which can be decrypted with the same key.
        /// </summary>
        /// <param name="message">A binary data to be encrypted.</param>
        /// <param name="nonSecret">An extra data not to be encrypted, but
        /// to be just transmitted as is.  The default value is <see langword="null"/>,
        /// which means empty.</param>
        /// <returns>
        /// A ciphertext that was encrypted from the <paramref name="message"/>
        /// and can be decrypted with the same key.
        /// (Although the word &#x201c;ciphertext&#x201d; has the word
        /// &#x201c;text&#x201d;, a returned ciphertext is not a Unicode
        /// <see cref="string"/>, but a <see cref="byte"/> array.)
        /// </returns>
        /// <seealso cref="Decrypt(byte[], int)"/>
        [Pure]
        public byte[] Encrypt(byte[] message, byte[] nonSecret)
        {
#if NETSTANDARD2_0_OR_GREATER
            using var aes = new AesGcm(_key);
#else
            using var aes = new AesGcm(_key, tagSizeInBytes: TagByteSize);
#endif
            byte[] nonce = new byte[NonceByteSize];
            _secureRandom.GetBytes(nonce);

            byte[] ciphertext = new byte[message.Length];
            byte[] tag = new byte[TagByteSize];
            _secureRandom.GetBytes(nonce);

            aes.Encrypt(nonce, message, ciphertext, tag, nonSecret);

            using var resultStream = new MemoryStream();
            using var writer = new BinaryWriter(resultStream);
            writer.Write(nonSecret);
            writer.Write(nonce);
            writer.Write(ciphertext);
            writer.Write(tag);
            return resultStream.ToArray();
        }

        /// <summary>
        /// Converts a <paramref name="ciphertext"/> which was encrypted with
        /// the same key to the plain message.
        /// </summary>
        /// <param name="ciphertext">The encrypted data.</param>
        /// <param name="nonSecretLength">The length of <c>nonSecret</c> data.
        /// (See also <see cref="Encrypt(byte[], byte[])"/> method's the second
        /// parameter, which is optional.)  <c>0</c> by default.</param>
        /// <returns>The plain data the <paramref name="ciphertext"/> encrypted.
        /// It returns <see langword="null"/> if the <paramref name="ciphertext"/> is
        /// invalid (this behavior will be eventually changed in the future to
        /// throw an exception instead).</returns>
        /// <remarks>
        /// Although the parameter name <paramref name="ciphertext"/> has the
        /// word &#x201c;text&#x201d;, both a <paramref name="ciphertext"/>
        /// and a returned message are a <see cref="byte"/> string,
        /// not a Unicode <see cref="string"/>.
        /// </remarks>
        /// <seealso cref="Encrypt(byte[], byte[])"/>
        [Pure]
        public byte[] Decrypt(byte[] ciphertext, int nonSecretLength = 0)
        {
#if NETSTANDARD2_0_OR_GREATER
            using var aes = new AesGcm(_key);
#else
            using var aes = new AesGcm(_key, tagSizeInBytes: TagByteSize);
#endif
            using var inputStream = new MemoryStream(ciphertext);
            using var reader = new BinaryReader(inputStream);
            var nonSecretPayload = reader.ReadBytes(nonSecretLength);

            byte[] nonce = reader.ReadBytes(NonceByteSize);
            byte[] encryptedMessage = reader.ReadBytes(
                ciphertext.Length - nonSecretLength - nonce.Length - TagByteSize);
            byte[] tag = reader.ReadBytes(TagByteSize);

            byte[] decryptedMessage = new byte[encryptedMessage.Length];
            try
            {
                aes.Decrypt(nonce, encryptedMessage, tag, decryptedMessage, nonSecretPayload);
                return decryptedMessage;
            }
            catch (Exception e)
            {
                var message = "Failed to decrypt the ciphertext.";
                throw new InvalidCiphertextException(message, e);
            }
        }

        /// <summary>
        /// Gets a mutable <see cref="byte"/> array which encodes this key.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array which encodes this
        /// key.  Since it is created every time the method is called, any
        /// mutation on that does not affect this <see cref="SymmetricKey"/>
        /// object.</returns>
        /// <seealso cref="ByteArray"/>
        /// <seealso cref="SymmetricKey(byte[])"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();
    }
}
