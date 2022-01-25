#nullable disable
using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;

namespace Libplanet.KeyStore.Kdfs
{
    /// <summary>
    /// <a href="https://en.wikipedia.org/wiki/Scrypt">Scrypt</a>.
    /// </summary>
    [Pure]
    public sealed class Scrypt : IKdf
    {
        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/Scrypt">Scrypt</a>.
        /// </summary>
        /// <param name="cost">The CPU/memory cost parameter. Corresponds to <c>n</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        /// <param name="parallelization">The parallelization parameter.
        /// Corresponds to <c>p</c>.</param>
        /// <param name="blockSize">The blocksize parameter. Corresponds to <c>r</c>.</param>
        public Scrypt(
            int cost,
            byte[] salt,
            int keyLength,
            int parallelization,
            int blockSize
        )
            : this(
                cost,
                ImmutableArray.Create(salt, 0, salt.Length),
                keyLength,
                parallelization,
                blockSize
            )
        {
        }

        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/Scrypt">Scrypt</a>.
        /// </summary>
        /// <param name="cost">The CPU/memory cost parameter. Corresponds to <c>n</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        /// <param name="parallelization">The parallelization parameter.
        /// Corresponds to <c>p</c>.</param>
        /// <param name="blockSize">The blocksize parameter. Corresponds to <c>r</c>.</param>
        public Scrypt(
            int cost,
            in ImmutableArray<byte> salt,
            int keyLength,
            int parallelization,
            int blockSize
        )
        {
            if (cost < 2 || (cost & (cost - 1)) != 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(cost),
                    "Cost must be a power of 2 greater than 1!"
                );
            }

            if (cost > int.MaxValue / 128 / blockSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(cost),
                    "Parameter cost is too large!"
                );
            }

            if (blockSize > int.MaxValue / 128 / parallelization)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(blockSize),
                    "Parameter blockSize is too large!"
                );
            }

            Cost = cost;
            Salt = salt;
            KeyLength = keyLength;
            Parallelization = parallelization;
            BlockSize = blockSize;
        }

        /// <summary>
        /// The CPU/memory cost parameter. Corresponds to <c>n</c>.
        /// </summary>
        public int Cost { get; }

        /// <summary>
        /// The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.
        /// </summary>
        public int KeyLength { get; }

        /// <summary>
        /// A cryptographic salt.
        /// </summary>
        public ImmutableArray<byte> Salt { get; }

        /// <summary>
        /// The parallelization parameter. Corresponds to <c>p</c>.
        /// </summary>
        public int Parallelization { get; }

        /// <summary>
        /// The blocksize parameter. Corresponds to <c>r</c>.
        /// </summary>
        public int BlockSize { get; }

        /// <inheritdoc/>
        [Pure]
        public ImmutableArray<byte> Derive(string passphrase)
        {
            var key = Norgerman.Cryptography.Scrypt.ScryptUtil.Scrypt(
                passphrase, Salt.ToArray(), Cost, BlockSize, Parallelization, KeyLength
            );
            return ImmutableArray.Create(key, 0, KeyLength);
        }

        /// <inheritdoc/>
        public string WriteJson(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();
            writer.WriteNumber("dklen", KeyLength);
            writer.WriteNumber("n", Cost);
            writer.WriteNumber("p", Parallelization);
            writer.WriteNumber("r", BlockSize);
            writer.WriteString("salt", ByteUtil.Hex(Salt));
            writer.WriteEndObject();
            return "scrypt";
        }

        internal static IKdf FromJson(in JsonElement element)
        {
            if (!element.TryGetProperty("n", out JsonElement n))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"n\" field, ...."
                );
            }

            if (n.ValueKind != JsonValueKind.Number || !n.TryGetInt32(out int cost))
            {
                throw new InvalidKeyJsonException(
                    "The \"n\" field, the number of iterations, must be a number."
                );
            }

            if (!element.TryGetProperty("r", out JsonElement r))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"r\" field, ...."
                );
            }

            if (r.ValueKind != JsonValueKind.Number || !r.TryGetInt32(out int blockSize))
            {
                throw new InvalidKeyJsonException(
                    "The \"r\" field, the number of iterations, must be a number."
                );
            }

            if (!element.TryGetProperty("p", out JsonElement p))
            {
                throw new InvalidKeyJsonException(
                    "The \"kdfparams\" field must have a \"p\" field, ...."
                );
            }

            if (p.ValueKind != JsonValueKind.Number || !p.TryGetInt32(out int parallelization))
            {
                throw new InvalidKeyJsonException(
                    "The \"n\" field, the number of iterations, must be a number."
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

            return new Scrypt(cost, salt, keyLength, parallelization, blockSize);
        }
    }
}
