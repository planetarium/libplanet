using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Store.Trie
{
    public readonly struct Nibbles : IEquatable<Nibbles>
    {
        public static readonly Nibbles Empty = new Nibbles(ImmutableArray<byte>.Empty);

        private static readonly char[] _hexCharLookup =
        {
            '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
        };

        private readonly ImmutableArray<byte> _bytes;

        /// <summary>
        /// Creates an instance of <see cref="Nibbles"/> from a sequence of nibbles.
        /// </summary>
        /// <param name="nibbles">The list of nibbles with each nibble assigned to
        /// a <see langword="byte"/>, i.e., each element is assumed to be less than 16.</param>
        /// <remarks>
        /// For performance reasons, this does not actually check whether <paramref name="nibbles"/>
        /// is a valid sequence of nibbles, i.e. each element with value less than 16.
        /// </remarks>
        internal Nibbles(in ImmutableArray<byte> nibbles)
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

        public static Nibbles FromKeyBytes(in KeyBytes keyBytes)
        {
            var builder = ImmutableArray.CreateBuilder<byte>(keyBytes.ByteArray.Length * 2);
            for (int i = 0; i < keyBytes.ByteArray.Length; i++)
            {
                builder.Add((byte)(keyBytes.ByteArray[i] >> 4));
                builder.Add((byte)(keyBytes.ByteArray[i] & 0x0f));
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

        public Nibbles Take(int count) => count <= Length
            ? new Nibbles(ByteArray.Take(count).ToImmutableArray())
            : throw new ArgumentOutOfRangeException(
                nameof(count),
                $"Given {nameof(count)} must be less than or equal to {Length}: {count}");

        public Nibbles Skip(int count) => count <= Length
            ? new Nibbles(ByteArray.Skip(count).ToImmutableArray())
            : throw new ArgumentOutOfRangeException(
                nameof(count),
                $"Given {nameof(count)} must be less than or equal to {Length}: {count}");

        /// <summary>
        /// Gets a <see cref="KeyBytes"/> representing compressed nibbles where
        /// each pair of nibbles is compacted into a <see langword="byte"/>.
        /// </summary>
        /// <returns>
        /// A <see cref="KeyBytes"/> representing compacted nibbles.
        /// </returns>
        /// <exception cref="InvalidOperationException">Thrown when <see cref="Length"/> is odd.
        /// </exception>
        [Pure]
        public KeyBytes ToKeyBytes()
        {
            if (Length % 2 != 0)
            {
                throw new InvalidOperationException(
                    $"The length must be even in order to convert " +
                    $"to a {nameof(KeyBytes)}: {Length}");
            }

            int byteLength = Length / 2;
            var builder = ImmutableArray.CreateBuilder<byte>(byteLength);
            for (int i = 0; i < Length; i += 2)
            {
                builder.Add((byte)(ByteArray[i] << 4 | ByteArray[i + 1]));
            }

            return new KeyBytes(builder.ToImmutable());
        }

        public bool Equals(Nibbles other)
        {
#if NETSTANDARD2_0_OR_GREATER
            if (ReferenceEquals(this, other))
            {
                return true;
            }
#endif // NETSTANDARD2_0_OR_GREATER

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
