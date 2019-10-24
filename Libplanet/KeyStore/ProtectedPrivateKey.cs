using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Libplanet.KeyStore.Ciphers;
using Libplanet.KeyStore.Kdfs;
using Org.BouncyCastle.Crypto.Digests;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// Protects a <see cref="PrivateKey"/> with a passphrase (i.e., password).
    /// </summary>
    public sealed class ProtectedPrivateKey
    {
        /// <summary>
        /// Loads a protected private key.
        /// </summary>
        /// <param name="kdf">A key derivation function to derive a symmetric key to decrypt
        /// a <see cref="PrivateKey"/>.</param>
        /// <param name="mac">MAC digest to check if a derived key is correct or not.</param>
        /// <param name="cipher">A symmetric cipher to decrypt a <see cref="PrivateKey"/>.</param>
        /// <param name="ciphertext">An encrypted <see cref="PrivateKey"/>.</param>
        public ProtectedPrivateKey(
            IKdf kdf,
            byte[] mac,
            ICipher cipher,
            byte[] ciphertext
        )
            : this(kdf, ImmutableArray.Create(mac), cipher, ImmutableArray.Create(ciphertext))
        {
        }

        /// <summary>
        /// Loads a protected private key.
        /// </summary>
        /// <param name="kdf">A key derivation function to derive a symmetric key to decrypt
        /// a <see cref="PrivateKey"/>.</param>
        /// <param name="mac">MAC digest to check if a derived key is correct or not.</param>
        /// <param name="cipher">A symmetric cipher to decrypt a <see cref="PrivateKey"/>.</param>
        /// <param name="ciphertext">An encrypted <see cref="PrivateKey"/>.</param>
        public ProtectedPrivateKey(
            IKdf kdf,
            ImmutableArray<byte> mac,
            ICipher cipher,
            ImmutableArray<byte> ciphertext
        )
        {
            Kdf = kdf;
            Mac = mac;
            Cipher = cipher;
            Ciphertext = ciphertext;
        }

        /// <summary>
        /// A key derivation function to derive a symmetric key to decrypt
        /// a <see cref="PrivateKey"/>.
        /// </summary>
        [Pure]
        public IKdf Kdf { get; }

        [Pure]
        public ImmutableArray<byte> Mac { get; }

        /// <summary>
        /// A symmetric cipher to decrypt a <see cref="PrivateKey"/>.
        /// </summary>
        [Pure]
        public ICipher Cipher { get; }

        /// <summary>
        /// An encrypted <see cref="PrivateKey"/>.
        /// </summary>
        [Pure]
        public ImmutableArray<byte> Ciphertext { get; }

        /// <summary>
        /// Protects a bare <see cref="PrivateKey"/> using a user input
        /// <paramref name="passphrase"/>.
        /// </summary>
        /// <param name="privateKey">A bare private key to protect.</param>
        /// <param name="passphrase">A user input passphrase (i.e., password).</param>
        /// <returns>A passphrase-protected private key.</returns>
        [Pure]
        public static ProtectedPrivateKey Protect(PrivateKey privateKey, string passphrase)
        {
            var salt = new byte[32];
            var rng = RandomNumberGenerator.Create();
            rng.GetBytes(salt);
            var kdf = new Pbkdf2<Sha256Digest>(10240, salt, 32);
            ImmutableArray<byte> derivedKey = kdf.Derive(passphrase);
            ImmutableArray<byte> encKey = MakeEncryptionKey(derivedKey);
            var iv = new byte[16];
            rng.GetBytes(iv);
            var cipher = new Aes128Ctr(iv);
            ImmutableArray<byte> ciphertext = cipher.Encrypt(
                encKey,
                ImmutableArray.Create(privateKey.ByteArray)
            );
            ImmutableArray<byte> mac = CalculateMac(derivedKey, ciphertext);
            return new ProtectedPrivateKey(kdf, mac, cipher, ciphertext);
        }

        /// <summary>
        /// Gets the protected <see cref="PrivateKey"/> using a user input
        /// <paramref name="passphrase"/>.
        /// </summary>
        /// <param name="passphrase">A user input passphrase (i.e., password).</param>
        /// <returns>A bare <see cref="PrivateKey"/>.</returns>
        [Pure]
        public PrivateKey Unprotect(string passphrase)
        {
            ImmutableArray<byte> derivedKey = Kdf.Derive(passphrase);
            var mac = CalculateMac(derivedKey, Ciphertext);
            if (!Mac.SequenceEqual(mac))
            {
                throw new IncorrectPassphraseException(
                    "The input passphrase is incorrect.",
                    nameof(passphrase),
                    Mac,
                    mac
                );
            }

            ImmutableArray<byte> encKey = MakeEncryptionKey(derivedKey);
            ImmutableArray<byte> plaintext = Cipher.Decrypt(encKey, Ciphertext);
            return new PrivateKey(plaintext.ToBuilder().ToArray());
        }

        private static ImmutableArray<byte> MakeEncryptionKey(ImmutableArray<byte> derivedKey)
        {
            const int keySubBytes = 16;
            return ImmutableArray.Create(derivedKey, 0, derivedKey.Length - keySubBytes);
        }

        private static ImmutableArray<byte> CalculateMac(
            ImmutableArray<byte> derivedKey,
            ImmutableArray<byte> ciphertext
        )
        {
            const int keySubBytes = 16;
            var seal = new byte[keySubBytes + ciphertext.Length];
            derivedKey.CopyTo(derivedKey.Length - keySubBytes, seal, 0, keySubBytes);
            ciphertext.CopyTo(seal, keySubBytes);
            var digest = new KeccakDigest(256);
            var mac = new byte[digest.GetDigestSize()];
            digest.BlockUpdate(seal, 0, seal.Length);
            digest.DoFinal(mac, 0);
            return ImmutableArray.Create(mac);
        }
    }
}
