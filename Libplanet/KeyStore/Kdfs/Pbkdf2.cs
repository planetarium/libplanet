#nullable disable
using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.KeyStore.Kdfs
{
    /// <summary>
    /// <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
    /// </summary>
    /// <typeparam name="T">PRF (pseudorandom function) to use, e.g.,
    /// <see cref="Sha256Digest"/>.</typeparam>
    [SuppressMessage(
        "Microsoft.StyleCop.CSharp.ReadabilityRules",
        "SA1402",
        Justification = "There are just generic & non-generic versions of the same name classes.")]
    [Pure]
    public sealed class Pbkdf2<T> : IKdf
        where T : GeneralDigest, new()
    {
        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
        /// </summary>
        /// <param name="iterations">The number of iterations desired.
        /// Corresponds to <c>c</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        public Pbkdf2(int iterations, byte[] salt, int keyLength)
            : this(iterations, ImmutableArray.Create(salt, 0, salt.Length), keyLength)
        {
        }

        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
        /// </summary>
        /// <param name="iterations">The number of iterations desired.
        /// Corresponds to <c>c</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        public Pbkdf2(int iterations, in ImmutableArray<byte> salt, int keyLength)
        {
            Iterations = iterations;
            Salt = salt;
            KeyLength = keyLength;
        }

        /// <summary>
        /// The number of iterations desired.  Corresponds to <c>c</c>.
        /// </summary>
        public int Iterations { get; }

        /// <summary>
        /// The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.
        /// </summary>
        public int KeyLength { get; }

        /// <summary>
        /// A cryptographic salt.
        /// </summary>
        public ImmutableArray<byte> Salt { get; }

        /// <inheritdoc/>
        [Pure]
        public ImmutableArray<byte> Derive(string passphrase)
        {
            var pdb = new Pkcs5S2ParametersGenerator(new T());
            pdb.Init(
                PbeParametersGenerator.Pkcs5PasswordToUtf8Bytes(passphrase.ToCharArray()),
                Salt.ToArray(),
                Iterations
            );
            var key = (KeyParameter)pdb.GenerateDerivedMacParameters(KeyLength * 8);
            return ImmutableArray.Create(key.GetKey(), 0, KeyLength);
        }

        /// <inheritdoc/>
        public string WriteJson(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();
            writer.WriteNumber("c", Iterations);
            writer.WriteNumber("dklen", KeyLength);
            string alg = new T().AlgorithmName;
            writer.WriteString(
                "prf",
                "hmac-" + alg.ToLower(CultureInfo.InvariantCulture).Replace("-", string.Empty)
            );
            writer.WriteString("salt", ByteUtil.Hex(Salt));
            writer.WriteEndObject();
            return "pbkdf2";
        }
    }

    internal static class Pbkdf2
    {
        internal static IKdf FromJson(in JsonElement element)
        {
            if (!element.TryGetProperty("c", out JsonElement c))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"c\" field, the number of iterations."
                );
            }

            if (c.ValueKind != JsonValueKind.Number || !c.TryGetInt32(out int iterations))
            {
                throw new InvalidKeyJsonException(
                    "The \"c\" field, the number of iterations, must be a number."
                );
            }

            if (!element.TryGetProperty("dklen", out JsonElement dklen))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"dklen\" field, " +
                    "the length of key in bytes."
                );
            }

            if (dklen.ValueKind != JsonValueKind.Number ||
                !dklen.TryGetInt32(out int keyLength))
            {
                throw new InvalidKeyJsonException(
                    "The \"dklen\" field, the length of key in bytes, must be a number."
                );
            }

            if (!element.TryGetProperty("salt", out JsonElement saltElement))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"salt\" field."
                );
            }

            string saltString;
            try
            {
                saltString = saltElement.GetString();
            }
            catch (InvalidOperationException)
            {
                throw new InvalidKeyJsonException("The \"salt\" field must be a string.");
            }

            byte[] salt;
            try
            {
                salt = ByteUtil.ParseHex(saltString);
            }
            catch (ArgumentNullException)
            {
                throw new InvalidKeyJsonException(
                    "The \"salt\" field must not be null, but a string."
                );
            }
            catch (Exception e)
            {
                throw new InvalidKeyJsonException(
                    "The \"salt\" field must be a hexadecimal string of bytes.\n" + e
                );
            }

            if (!element.TryGetProperty("prf", out JsonElement prfElement))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"prf\" field."
                );
            }

            string prf;
            try
            {
                prf = prfElement.GetString();
            }
            catch (InvalidOperationException)
            {
                throw new InvalidKeyJsonException(
                    "The \"prf\" field must be a string."
                );
            }

            return prf switch
            {
                "hmac-sha256" => new Pbkdf2<Sha256Digest>(iterations, salt, keyLength),
                null =>
                    throw new InvalidKeyJsonException(
                        "The \"prf\" field must not be null, but a string."),
                _ =>
                    throw new UnsupportedKeyJsonException($"Unsupported \"prf\" type: \"{prf}\"."),
            };
        }
    }
}
