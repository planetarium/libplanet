using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;

namespace Libplanet
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct HashDigest<T>
        where T : HashAlgorithm
    #pragma warning restore CS0282
    {
        public static readonly int Size;

        private ImmutableArray<byte> _byteArray;

        static HashDigest()
        {
            var thunk = (T)typeof(T).GetMethod("Create", new Type[0]).Invoke(null, new object[0]);
            Size = thunk.HashSize / 8;
        }

        public HashDigest(byte[] hashDigest)
        {
            if (hashDigest == null)
            {
                throw new NullReferenceException("HashDigest must not be null");
            }

            if (hashDigest.Length != Size)
            {
                throw new ArgumentException(
                    $"HashDigest<{typeof(T).Name}> must be {Size} bytes, " +
                    $"but {hashDigest.Length} was given"
                );
            }

            _byteArray = hashDigest.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        [Uno.EqualityKey]
        public ImmutableArray<byte> ByteArray
        {
            get
            {
                if (_byteArray.IsDefault)
                {
                    _byteArray = new byte[Size].ToImmutableArray();
                }

                return _byteArray;
            }
        }

        [Pure]
        public static HashDigest<T> FromString(string s)
        {
            return new HashDigest<T>(ByteUtil.ParseHex(s));
        }

        [Pure]
        public bool HasLeadingZeroBits(int bits)
        {
            var leadingBytes = bits / 8;
            var trailingBits = bits % 8;

            if (ByteArray.Length < (bits / 8) + 1)
            {
                return false;
            }

            for (int i = 0; i < leadingBytes; i++)
            {
                if (ByteArray[i] != 0)
                {
                    return false;
                }
            }

            if (trailingBits != 0)
            {
                var mask = 0xff << (8 - trailingBits) & 0xff;
                return (ByteArray[leadingBytes] & mask) == 0;
            }

            return true;
        }

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        [Pure]
        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }

    public static class HashDigestExtension
    {
        public static HashDigest<A> ToHashDigest<A>(this string str)
            where A : HashAlgorithm
        {
            return HashDigest<A>.FromString(str);
        }
    }
}
