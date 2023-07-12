using System;
using System.Numerics;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class designed for a <see langword="Validator"/> of consensus.
    /// A <see cref="Validator"/> consists of operator's <see cref="PublicKey"/>
    /// and its corresponding <see langword="Power"/>.
    /// </summary>
    public class Validator : IEquatable<Validator>, IBencodable
    {
        private static readonly byte[] PublicKeyKey = { 0x50 }; // 'P'
        private static readonly byte[] PowerKey = { 0x70 }; // 'p'

        /// <summary>
        /// Creates an instance of <see cref="Validator"/>, with given <paramref name="publicKey"/>
        /// and <paramref name="power"/>.
        /// </summary>
        /// <param name="publicKey">The <see cref="Libplanet.Common.Crypto.PublicKey"/>
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

        public Validator(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private Validator(Bencodex.Types.Dictionary bencoded)
            : this(
                new PublicKey(bencoded.GetValue<Binary>(PublicKeyKey).ByteArray),
                new BigInteger(bencoded.GetValue<Integer>(PowerKey)))
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

        /// <inheritdoc/>
        [JsonIgnore]
        public Bencodex.Types.IValue Bencoded => Dictionary.Empty
            .Add(PublicKeyKey, PublicKey.Format(true))
            .Add(PowerKey, Power);

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
