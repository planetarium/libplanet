using System;
using System.Numerics;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class designed for a <see langword="Validator"/> of consensus.
    /// A <see cref="Validator"/> consists of operator's <see cref="PublicKey"/>
    /// and its corresponding <see langword="Power"/>.
    /// </summary>
    public class Validator : IEquatable<Validator>
    {
        private const string PublicKeyKey = "pubKey";
        private const string PowerKey = "pow";
        private static Codec _codec = new Codec();

        /// <summary>
        /// Creates an instance of <see cref="Validator"/>, with given <paramref name="publicKey"/>
        /// and <paramref name="power"/>.
        /// </summary>
        /// <param name="publicKey">The <see cref="Libplanet.Crypto.PublicKey"/>
        /// of validator operator.</param>
        /// <param name="power">The <see langword="Power"/> of validator operator.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if <paramref name="power"/> is
        /// negative.</exception>
        public Validator(
            PublicKey publicKey,
            BigInteger power)
        {
            if (power < BigInteger.Zero)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(power),
                    $"Given {nameof(power)} cannot be negative: {power}");
            }

            PublicKey = publicKey;
            Power = power;
        }

        public Validator(Bencodex.Types.Dictionary encoded)
            : this(
                new PublicKey(encoded.GetValue<Binary>(PublicKeyKey).ByteArray),
                new BigInteger(encoded.GetValue<Binary>(PowerKey).ToByteArray()))
        {
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of validator operator.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// The <see langword="Power"/> of validator.
        /// </summary>
        public BigInteger Power { get; }

        /// <summary>
        /// An <see cref="Address"/> of the validator operator's <see cref="PublicKey"/>.
        /// </summary>
        [JsonIgnore]
        public Address OperatorAddress => PublicKey.ToAddress();

        [JsonIgnore]
        public Bencodex.Types.Dictionary Encoded => Dictionary.Empty
            .Add(PublicKeyKey, PublicKey.Format(true))
            .Add(PowerKey, Power.ToByteArray());

        public static bool operator ==(Validator obj, Validator other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(Validator obj, Validator other)
        {
            return !(obj == other);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            if (obj is Validator other)
            {
                return Equals(other);
            }

            return false;
        }

        /// <inheritdoc/>
        public bool Equals(Validator? other)
        {
            return PublicKey.Equals(other?.PublicKey) && Power.Equals(other?.Power);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(PublicKey, Power);
        }

        /// <inheritdoc/>
        public override string ToString() => $"{PublicKey}:{Power}";
    }
}
