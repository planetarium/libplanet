using System;
using System.Linq;
using Libplanet.Crypto;
using Org.BouncyCastle.Crypto.Digests;

namespace Libplanet
{
    public struct Address : IEquatable<Address>
    {
        private readonly byte[] _address;

        public Address(byte[] address)
        {
            if (address == null)
            {
                throw new NullReferenceException("address must not be null");
            }

            if (address.Length != 20)
            {
                throw new ArgumentException("address must be 20 bytes");
            }

            _address = address;
        }

        public byte[] ToByteArray()
        {
            return _address;
        }

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }

        public static Address FromPublicKey(PublicKey key)
        {
            byte[] hashPayload = key.Format(false).Skip(1).ToArray();
            var digest = new KeccakDigest(256);
            var output = new byte[digest.GetDigestSize()];
            digest.BlockUpdate(hashPayload, 0, hashPayload.Length);
            digest.DoFinal(output, 0);

            return new Address(output.Skip(output.Length - 20).ToArray());
        }

        public bool Equals(Address other)
        {
            return _address.SequenceEqual(other._address);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            return obj is Address other && Equals(other);
        }

        public override int GetHashCode()
        {
            return _address.Aggregate(0,
                (current, t) => unchecked(current * 21 + t));
        }

        public static bool operator ==(Address a1, Address a2)
        {
            return a1.Equals(a2);
        }

        public static bool operator !=(Address a1, Address a2)
        {
            return !(a1 == a2);
        }
    }
}
