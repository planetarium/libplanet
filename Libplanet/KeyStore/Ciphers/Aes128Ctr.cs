#nullable disable
using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;

namespace Libplanet.KeyStore.Ciphers
{
    /// <summary>
    /// AES-128-CTR (AES 128-bit in counter moder).
    /// </summary>
    [Pure]
    public sealed class Aes128Ctr : ICipher
    {
        /// <summary>
        /// Creates an <see cref="Aes128Ctr"/> instance with the given <paramref name="iv"/>.
        /// </summary>
        /// <param name="iv">Initialization vector.</param>
        /// <exception cref="ArgumentException">Thrown when the length of <paramref name="iv"/> is
        /// invalid.</exception>
        public Aes128Ctr(byte[] iv)
            : this(ImmutableArray.Create(iv))
        {
        }

        /// <summary>
        /// Creates an <see cref="Aes128Ctr"/> instance with the given <paramref name="iv"/>.
        /// </summary>
        /// <param name="iv">Initialization vector.</param>
        /// <exception cref="ArgumentException">Thrown when the length of <paramref name="iv"/> is
        /// invalid.</exception>
        public Aes128Ctr(in ImmutableArray<byte> iv)
        {
            if (iv.Length > 16)
            {
                throw new ArgumentOutOfRangeException(nameof(iv), "IV cannot be greater than 16.");
            }
            else if (iv.IsEmpty)
            {
                throw new ArgumentException("IV should be provided.", nameof(iv));
            }

            Iv = iv;
        }

        /// <summary>
        /// Initialization vector.
        /// </summary>
        [Pure]
        public ImmutableArray<byte> Iv { get; }

        /// <inheritdoc />
        [Pure]
        public ImmutableArray<byte> Encrypt(
            in ImmutableArray<byte> key,
            in ImmutableArray<byte> plaintext
        ) =>
            Cipher(true, key, plaintext);

        /// <inheritdoc />
        [Pure]
        public ImmutableArray<byte> Decrypt(
            in ImmutableArray<byte> key,
            in ImmutableArray<byte> ciphertext
        ) =>
            Cipher(false, key, ciphertext);

        /// <inheritdoc />
        public string WriteJson(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();
            writer.WriteString("iv", ByteUtil.Hex(Iv));
            writer.WriteEndObject();
            return "aes-128-ctr";
        }

        internal static ICipher FromJson(in JsonElement paramsElement)
        {
            if (!paramsElement.TryGetProperty("iv", out JsonElement ivElement))
            {
                throw new InvalidKeyJsonException(
                    "The \"cipherparams\" field must have an \"iv\" field."
                );
            }

            string ivString;
            try
            {
                ivString = ivElement.GetString();
            }
            catch (InvalidOperationException)
            {
                throw new InvalidKeyJsonException("The \"iv\" field must be a string.");
            }

            if (ivString is null)
            {
                throw new InvalidKeyJsonException(
                    "The \"iv\" field must not be null, but a string."
                );
            }

            byte[] iv;
            try
            {
                iv = ByteUtil.ParseHex(ivString);
            }
            catch (Exception e)
            {
                throw new InvalidKeyJsonException(
                    "The \"iv\" field must be a hexadecimal string of bytes.\n" + e
                );
            }

            return new Aes128Ctr(iv);
        }

        private ImmutableArray<byte> Cipher(
            in bool encrypt,
            in ImmutableArray<byte> key,
            in ImmutableArray<byte> input
        )
        {
            int keyLength = key.Length;
            if (keyLength != 16 && keyLength != 24 && keyLength != 32)
            {
                throw new ArgumentException(
                    "Key length must be one of 16/24/32 bytes (128/192/256 bits, respectively).",
                    nameof(key)
                );
            }

            // FIXME: Rather than depending on BouncyCastle, which is a pure C# implementation,
            //        it's better to use .NET Standard's System.Security.Cryptography API.
            IBufferedCipher cipher = CipherUtilities.GetCipher("AES/CTR/NoPadding");

            KeyParameter keyParam = ParameterUtilities.CreateKeyParameter(
                "AES128",
                key.ToArray()
            );
            byte[] iv = Iv.ToArray();
            ICipherParameters cipherParams = new ParametersWithIV(keyParam, iv);
            cipher.Init(encrypt, cipherParams);
            return cipher.DoFinal(input.ToArray()).ToImmutableArray();
        }
    }
}
