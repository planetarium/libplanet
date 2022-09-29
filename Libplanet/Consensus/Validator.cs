using System;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public struct Validator
        : IEquatable<Validator>, IComparable<Validator>, IComparable
    {
        private const string PublicKeyKey = "pk";
        private const string PowerKey = "pow";

        public Validator(
            PublicKey publicKey,
            BigInteger? power = null)
        {
            PublicKey = publicKey;
            Power = power;
        }

        public Validator(byte[] marshaled)
        {
            var codec = new Codec();
            Dictionary dict = (Dictionary)codec.Decode(marshaled);
            PublicKey = new PublicKey(dict.GetValue<Binary>(PublicKeyKey).ToByteArray());
            BigInteger power = new BigInteger(dict.GetValue<Binary>(PowerKey).ToByteArray());
            if (!power.Equals(BigInteger.MinusOne))
            {
                Power = power;
            }
            else
            {
                Power = null;
            }
        }

        public Validator(ImmutableArray<byte> marshaled)
        {
            var codec = new Codec();
            Dictionary dict = (Dictionary)codec.Decode(marshaled.ToArray());
            PublicKey = new PublicKey(dict.GetValue<Binary>(PublicKeyKey).ToByteArray());
            Power = new BigInteger(dict.GetValue<Binary>(PowerKey).ToByteArray());
        }

        public PublicKey PublicKey { get; }

        public BigInteger? Power { get; }

        public ImmutableArray<byte> ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Dictionary.Empty;
                dict.Add(PublicKeyKey, PublicKey.Format(true));
                if (Power is { } power)
                {
                    dict.Add(PowerKey, power.ToByteArray());
                }
                else
                {
                    dict.Add(PowerKey, BigInteger.MinusOne.ToByteArray());
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

        public override bool Equals(object? obj)
        {
            if (obj is Validator other)
            {
                return Equals(other);
            }

            return false;
        }

        public bool Equals(Validator other)
        {
            return PublicKey.Equals(other.PublicKey);
        }

        public override int GetHashCode()
        {
            return PublicKey.GetHashCode();
        }

        int IComparable<Validator>.CompareTo(Validator other)
        {
            int result
                = Power.Equals(other.Power)
                ? ((IComparable<Address>)PublicKey.ToAddress())
                .CompareTo(other.PublicKey.ToAddress())
                : (Power ?? BigInteger.MinusOne).CompareTo(other.Power ?? BigInteger.MinusOne);

            return -result;
        }

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
