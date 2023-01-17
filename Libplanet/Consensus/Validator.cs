using System;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
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
    public class Validator
        : IEquatable<Validator>, IComparable<Validator>, IComparable
    {
        private const string PublicKeyKey = "pubKey";
        private const string PowerKey = "pow";

        /// <summary>
        /// Creates an instance of <see cref="Validator"/>, with given <paramref name="publicKey"/>
        /// and <paramref name="power"/>.
        /// </summary>
        /// <param name="publicKey">The <see cref="Libplanet.Crypto.PublicKey"/>
        /// of validator operator.</param>
        /// <param name="power">The <see langword="Power"/> of validator operator.</param>
        public Validator(
            PublicKey publicKey,
            BigInteger power)
        {
            PublicKey = publicKey;
            Power = power;
        }

        public Validator(ImmutableArray<byte> marshaled)
        {
            var codec = new Codec();
            Dictionary dict = (Dictionary)codec.Decode(marshaled.ToArray());
            PublicKey = new PublicKey(dict.GetValue<Binary>(PublicKeyKey).ByteArray);
            Power = new BigInteger(dict.GetValue<Binary>(PowerKey).ToByteArray());
        }

        public Validator(byte[] marshaled)
            : this(marshaled.ToImmutableArray())
        {
        }

        public Validator(Binary marshaled)
            : this(marshaled.ByteArray)
        {
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of validator operator.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// A <see cref="Address"/> of validator operator's <see cref="PublicKey"/>.
        /// </summary>
        public Address OperatorAddress => PublicKey.ToAddress();

        /// <summary>
        /// The <see langword="Power"/> of validator.
        /// </summary>
        public BigInteger Power { get; }

        /// <summary>
        /// The marshaled byte array of <see cref="Validator"/>.
        /// </summary>
        public ImmutableArray<byte> ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Dictionary.Empty;
                dict = dict.Add(PublicKeyKey, PublicKey.Format(true));
                if (Power is { } power)
                {
                    dict = dict.Add(PowerKey, power.ToByteArray());
                }
                else
                {
                    dict = dict.Add(PowerKey, BigInteger.MinusOne.ToByteArray());
                }

                return codec.Encode(dict).ToImmutableArray();
            }
        }

        public static bool operator ==(Validator obj, Validator other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(Validator obj, Validator other)
        {
            return !(obj == other);
        }

        public byte[] ToByteArray()
        {
            return ByteArray.ToArray();
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

        /// <summary>
        /// Check if <see cref="Validator"/>'s <see cref="PublicKey"/>
        /// is equals to <paramref name="other"/>'s <see cref="PublicKey"/>.
        /// </summary>
        /// <param name="other"><see cref="Validator"/> to compare.</param>
        /// <returns><see langword="true"/> if <see cref="PublicKey"/> are same,
        /// <see langword="false"/> otherwise.</returns>
        public bool PublicKeyEquals(Validator? other)
        {
            return PublicKey.Equals(other?.PublicKey);
        }

        /// <summary>
        /// Check if <see cref="Validator"/>'s <see cref="PublicKey"/>
        /// is equals to <paramref name="other"/>.
        /// </summary>
        /// <param name="other"><see cref="Crypto.PublicKey"/> to compare.</param>
        /// <returns><see langword="true"/> if <see cref="Crypto.PublicKey"/> are same,
        /// <see langword="false"/> otherwise.</returns>
        public bool PublicKeyEquals(PublicKey? other)
        {
            return PublicKey.Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return PublicKey.GetHashCode();
        }

        /// <inheritdoc/>
        public override string ToString() => $"{PublicKey}:{Power}";

        /// <inheritdoc/>
        int IComparable<Validator>.CompareTo(Validator? other)
        {
            return PublicKey.ToAddress().CompareTo(other?.PublicKey.ToAddress());
        }

        /// <inheritdoc/>
        int IComparable.CompareTo(object? obj)
        {
            if (obj is Validator other)
            {
                return ((IComparable<Validator>)this).CompareTo(other);
            }

            if (obj is null)
            {
                throw new ArgumentNullException(nameof(obj));
            }

            throw new ArgumentException(nameof(obj));
        }
    }
}
