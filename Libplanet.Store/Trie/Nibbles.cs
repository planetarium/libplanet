using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Store.Trie
{
    public struct Nibbles : IEquatable<Nibbles>
    {
        private static readonly char[] _hexCharLookup =
        {
            '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
        };

        private readonly ImmutableArray<byte> _bytes;

        public Nibbles(in ImmutableArray<byte> nibbles)
        {
            _bytes = nibbles;
        }

        /// <summary>
        /// A list of <see langword="byte"/>s representing raw nibbles where each nibble
        /// is assigned to a <see langword="byte"/>.
        /// </summary>
        [Pure]
        public ImmutableArray<byte> ByteArray => _bytes.IsDefaultOrEmpty
            ? ImmutableArray<byte>.Empty
            : _bytes;

        [Pure]
        public int Length => ByteArray.Length;

        /// <summary>
        /// The hex representation of the <see cref="Nibbles"/>.  Unlike most other
        /// hex representations, returned <see langword="string"/> is of the same length as
        /// <see cref="ByteArray"/> and can be of odd length.
        /// </summary>
        [Pure]
        public string Hex
        {
            get
            {
                char[] chars = new char[Length];
                for (int i = 0; i < Length; i++)
                {
                    chars[i] = _hexCharLookup[ByteArray[i]];
                }

                return new string(chars);
            }
        }

        public byte this[int index] => ByteArray[index];

        public static Nibbles FromHex(string hex)
        {
            byte[] bytes = new byte[hex.Length];
            for (var i = 0; i < hex.Length; i++)
            {
                bytes[i] = (byte)System.Uri.FromHex(hex[i]);
            }

            return new Nibbles(bytes.ToImmutableArray());
        }

        public static Nibbles FromBytes(in ImmutableArray<byte> bytes)
        {
            var builder = ImmutableArray.CreateBuilder<byte>(bytes.Length * 2);
            for (int i = 0; i < bytes.Length; i++)
            {
                builder.Add((byte)(bytes[i] >> 4));
                builder.Add((byte)(bytes[i] & 0x0f));
            }

            return new Nibbles(builder.ToImmutable());
        }

        public Nibbles Add(byte b)
        {
            return new Nibbles(ByteArray.Add(b));
        }

        public Nibbles AddRange(in ImmutableArray<byte> nibbles)
        {
            return new Nibbles(ByteArray.AddRange(nibbles));
        }

        public Nibbles AddRange(in Nibbles nibbles)
        {
            return new Nibbles(ByteArray.AddRange(nibbles.ByteArray));
        }

        /// <summary>
        /// A list of <see langword="byte"/>s representing compressed nibbles where each
        /// pair of nibbles is compacted into a <see langword="byte"/>.
        /// </summary>
        /// <returns>
        /// A compacted nibbles in <see langword="byte"/>s.
        /// </returns>
        /// <remarks>
        /// As nibbles with odd length and nibbles with even length ending in 0 may have
        /// the same compressed representation, this should be used with <see cref="Length"/>
        /// in most cases.
        /// </remarks>
        /// <seealso cref="Length"/>
        [Pure]
        public ImmutableArray<byte> GetCompressed()
        {
            int oddNibble = Length % 2;
            int byteLength = Length / 2 + oddNibble;
            var builder = ImmutableArray.CreateBuilder<byte>(byteLength);
            for (int i = 0, evenNibbles = Length - oddNibble; i < evenNibbles; i += 2)
            {
                builder.Add((byte)(ByteArray[i] << 4 | ByteArray[i + 1]));
            }

            if (oddNibble > 0)
            {
                builder.Add((byte)(ByteArray[Length - 1] << 4));
            }

            return builder.ToImmutable();
        }

        public bool Equals(Nibbles other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } nibbles && ByteArray.SequenceEqual(nibbles.ByteArray);
        }

        public override bool Equals(object? obj) =>
            obj is Nibbles other && Equals(other);

        public override int GetHashCode()
        {
            int code = 0;
            unchecked
            {
                foreach (byte b in ByteArray)
                {
                    code = (code * 397) ^ b.GetHashCode();
                }
            }

            return code;
        }

        public override string ToString()
        {
            return Hex;
        }
    }
}
