using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
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
        /// <param name="address">The address of the protected private key.</param>
        /// <param name="kdf">A key derivation function to derive a symmetric key to decrypt
        /// a <see cref="PrivateKey"/>.</param>
        /// <param name="mac">MAC digest to check if a derived key is correct or not.</param>
        /// <param name="cipher">A symmetric cipher to decrypt a <see cref="PrivateKey"/>.</param>
        /// <param name="ciphertext">An encrypted <see cref="PrivateKey"/>.</param>
        public ProtectedPrivateKey(
            Address address,
            IKdf kdf,
            byte[] mac,
            ICipher cipher,
            byte[] ciphertext
        )
            : this(
                address,
                kdf,
                ImmutableArray.Create(mac),
                cipher,
                ImmutableArray.Create(ciphertext)
            )
        {
        }

        /// <summary>
        /// Loads a protected private key.
        /// </summary>
        /// <param name="address">The address of the protected private key.</param>
        /// <param name="kdf">A key derivation function to derive a symmetric key to decrypt
        /// a <see cref="PrivateKey"/>.</param>
        /// <param name="mac">MAC digest to check if a derived key is correct or not.</param>
        /// <param name="cipher">A symmetric cipher to decrypt a <see cref="PrivateKey"/>.</param>
        /// <param name="ciphertext">An encrypted <see cref="PrivateKey"/>.</param>
        public ProtectedPrivateKey(
            Address address,
            IKdf kdf,
            ImmutableArray<byte> mac,
            ICipher cipher,
            ImmutableArray<byte> ciphertext
        )
        {
            Address = address;
            Kdf = kdf;
            Mac = mac;
            Cipher = cipher;
            Ciphertext = ciphertext;
        }

        /// <summary>
        /// The address of the protected private key.
        /// </summary>
        public Address Address { get; }

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
            Address address = privateKey.PublicKey.ToAddress();
            return new ProtectedPrivateKey(address, kdf, mac, cipher, ciphertext);
        }

        /// <summary>
        /// Loads a <see cref="ProtectedPrivateKey"/> from a JSON.
        /// </summary>
        /// <param name="json">A JSON string that encodes a <see cref="ProtectedPrivateKey"/>.
        /// </param>
        /// <returns>A protected private key loaded from the given <paramref name="json"/>.
        /// </returns>
        /// <exception cref="JsonException">Thrown when the given <paramref name="json"/> is not
        /// a valid JSON.</exception>
        /// <exception cref="InvalidKeyJsonException">Thrown when the given key data lacks some
        /// required fields or consists of wrong types.</exception>
        /// <exception cref="UnsupportedKeyJsonException">Thrown when the given key data depends on
        /// an unsupported features (e.g., KDF).</exception>
        public static ProtectedPrivateKey FromJson(string json)
        {
            var options = new JsonDocumentOptions
            {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip,
            };

            using (JsonDocument doc = JsonDocument.Parse(json, options))
            {
                JsonElement rootElement = doc.RootElement;
                if (rootElement.ValueKind != JsonValueKind.Object)
                {
                    throw new InvalidKeyJsonException(
                        "The root of the key JSON must be an object, but it is a/an " +
                        $"{rootElement.ValueKind}."
                    );
                }

                if (!rootElement.TryGetProperty("version", out JsonElement versionElement))
                {
                    throw new InvalidKeyJsonException(
                        "The key JSON must contain \"version\" field, but it lacks."
                    );
                }

                if (versionElement.ValueKind != JsonValueKind.Number ||
                    !versionElement.TryGetDecimal(out decimal versionNum))
                {
                    throw new InvalidKeyJsonException("The \"version\" field must be a number.");
                }
                else if (versionNum != 3)
                {
                    throw new UnsupportedKeyJsonException(
                        $"The key JSON format version {versionNum} is unsupported; " +
                        "Only version 3 is supported."
                    );
                }

                string GetStringProperty(JsonElement element, string fieldName)
                {
                    if (!element.TryGetProperty(fieldName, out JsonElement fieldElement))
                    {
                        throw new InvalidKeyJsonException(
                            $"The key JSON must contain \"{fieldName}\" field, but it lacks."
                        );
                    }

                    string str;
                    try
                    {
                        str = fieldElement.GetString();
                    }
                    catch (InvalidOperationException)
                    {
                        throw new InvalidKeyJsonException(
                            $"The \"{fieldName}\" field must be a string."
                        );
                    }

                    if (str is null)
                    {
                        throw new InvalidKeyJsonException(
                            $"The \"{fieldName}\" field must not be null, but a string."
                        );
                    }

                    return str;
                }

                JsonElement GetObjectProperty(JsonElement element, string fieldName)
                {
                    if (!element.TryGetProperty(fieldName, out var fieldElement))
                    {
                        throw new InvalidKeyJsonException(
                            $"The key JSON must contain \"{fieldName}\" field, but it lacks."
                        );
                    }
                    else if (fieldElement.ValueKind != JsonValueKind.Object)
                    {
                        throw new InvalidKeyJsonException(
                            $"The \"{fieldName}\" field must be an object, but it is a/an " +
                            $"{fieldElement.ValueKind}."
                        );
                    }

                    return fieldElement;
                }

                byte[] GetHexProperty(JsonElement element, string fieldName)
                {
                    string str = GetStringProperty(element, fieldName);
                    byte[] bytes;
                    try
                    {
                        bytes = ByteUtil.ParseHex(str);
                    }
                    catch (Exception e)
                    {
                        throw new InvalidKeyJsonException(
                            $"The \"{fieldName}\" field must be a hexadecimal string.\n{e}"
                        );
                    }

                    return bytes;
                }

                JsonElement crypto = GetObjectProperty(rootElement, "crypto");
                string cipherType = GetStringProperty(crypto, "cipher");
                JsonElement cipherParamsElement = GetObjectProperty(crypto, "cipherparams");
                byte[] ciphertext = GetHexProperty(crypto, "ciphertext");
                byte[] mac = GetHexProperty(crypto, "mac");
                string kdfType = GetStringProperty(crypto, "kdf");
                JsonElement kdfParamsElement = GetObjectProperty(crypto, "kdfparams");
                byte[] addressBytes = GetHexProperty(rootElement, "address");
                Address address;
                try
                {
                    address = new Address(addressBytes);
                }
                catch (ArgumentException e)
                {
                    throw new InvalidKeyJsonException(
                        "The \"address\" field must contain an Ethereum-style address which " +
                        "consists of 40 hexadecimal letters: " + e
                    );
                }

                ICipher cipher;
                switch (cipherType)
                {
                    case "aes-128-ctr":
                        cipher = Aes128Ctr.FromJson(cipherParamsElement);
                        break;

                    default:
                        throw new UnsupportedKeyJsonException(
                            $"Unsupported cipher type: \"{cipherType}\"."
                        );
                }

                IKdf kdf;
                switch (kdfType)
                {
                    case "pbkdf2":
                        kdf = Pbkdf2.FromJson(kdfParamsElement);
                        break;

                    default:
                        throw new UnsupportedKeyJsonException(
                            $"Unsupported cipher type: \"{kdfType}\"."
                        );
                }

                return new ProtectedPrivateKey(address, kdf, mac, cipher, ciphertext);
            }
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

            var key = new PrivateKey(plaintext.ToBuilder().ToArray());
            Address actualAddress = key.PublicKey.ToAddress();
            if (!Address.Equals(actualAddress))
            {
                throw new MismatchedAddressException(
                    "The actual address of the unprotected private key does not match to " +
                    "the expected address of the protected private key.",
                    Address,
                    actualAddress
                );
            }

            return key;
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
