using System;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Tx
{
    public struct TxId : IEquatable<TxId>
    {
        public const int RequiredLength = 32;
        private readonly byte[] _bytes;

        public TxId(byte[] bytes)
        {
            if (bytes == null)
            {
                throw new ArgumentNullException(
                    $"It must not be null.",
                    nameof(bytes)
                );
            }

            if (bytes.Length != RequiredLength)
            {
                throw new ArgumentException(
                    $"It must be {RequiredLength} bytes.",
                    nameof(bytes)
                );
            }

            _bytes = bytes;
        }

        public static bool operator ==(TxId id1, TxId id2)
        {
            return id1.Equals(id2);
        }

        public static bool operator !=(TxId id1, TxId id2)
        {
            return !(id1 == id2);
        }

        [Pure]
        public byte[] ToByteArray()
        {
            return (byte[])_bytes.Clone();
        }

        public override string ToString()
        {
            return ByteUtil.Hex(_bytes);
        }

        public bool Equals(TxId other)
        {
            return _bytes.SequenceEqual(other._bytes);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }

            return obj is TxId other && Equals(other);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(_bytes);
        }
    }
}
