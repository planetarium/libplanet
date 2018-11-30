using System;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    public struct Nonce : IEquatable<Nonce>
    {
        private readonly byte[] _nonce;

        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new NullReferenceException("nonce must not be null");
            }

            _nonce = nonce;
        }

        public static bool operator ==(Nonce n1, Nonce n2)
        {
            return n1.Equals(n2);
        }

        public static bool operator !=(Nonce n1, Nonce n2)
        {
            return !(n1 == n2);
        }

        [Pure]
        public byte[] ToByteArray()
        {
            return (byte[])_nonce.Clone();
        }

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }

        public bool Equals(Nonce other)
        {
            return _nonce.SequenceEqual(other._nonce);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }

            return obj is Nonce other && Equals(other);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(_nonce);
        }
    }
}
