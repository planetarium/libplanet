using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Store.Trie
{
    public readonly struct PathCursor
    {
        public readonly ImmutableArray<byte> Bytes;
        public readonly int NibbleLength;
        public readonly int NibbleOffset;

        public PathCursor(in KeyBytes keyBytes, bool secure)
            : this(
                secure
                    ? HashDigest<SHA256>.DeriveFrom(keyBytes.ByteArray).ByteArray
                    : keyBytes.ByteArray,
                0,
                (secure ? HashDigest<SHA256>.Size : keyBytes.ByteArray.Length) * 2)
        {
        }

        /// <summary>
        /// Creates a <see cref="PathCursor"/> from <paramref name="nibbles"/>.
        /// </summary>
        /// <param name="nibbles">The <see cref="Nibbles"/> from which to derive
        /// a <see cref="PathCursor"/>.</param>
        public PathCursor(in Nibbles nibbles)
            : this(nibbles.GetCompressed(), 0, nibbles.Length)
        {
        }

        private PathCursor(in ImmutableArray<byte> bytes, int nibbleOffset, int nibbleLength)
        {
            if (nibbleOffset < 0 || nibbleOffset > nibbleLength)
            {
                throw new ArgumentOutOfRangeException(nameof(nibbleOffset));
            }

            Bytes = bytes;
            NibbleOffset = nibbleOffset;
            NibbleLength = nibbleLength;
        }

        [Pure]
        public int RemainingNibbleLength => NibbleLength - NibbleOffset;

        [Pure]
        public bool RemainingAnyNibbles => NibbleLength > NibbleOffset;

        [Pure]
        public byte NextNibble => NibbleOffset < NibbleLength
            ? GetNibble(Bytes[NibbleOffset / 2], NibbleOffset % 2 == 0)
            : throw new IndexOutOfRangeException();

        [Pure]
        public byte NibbleAt(int index)
        {
            int nibbleOffset = NibbleOffset + index;
            if (index < 0 || nibbleOffset >= NibbleLength)
            {
                throw new ArgumentOutOfRangeException(nameof(index));
            }

            return GetNibble(Bytes[nibbleOffset / 2], nibbleOffset % 2 == 0);
        }

        [Pure]
        public Nibbles GetRemainingNibbles()
        {
            var builder = ImmutableArray.CreateBuilder<byte>(RemainingNibbleLength);
            for (int i = NibbleOffset; i < NibbleLength; i++)
            {
                builder.Add(GetNibble(Bytes[i / 2], i % 2 == 0));
            }

            return new Nibbles(builder.MoveToImmutable());
        }

        [Pure]
        public PathCursor Next(int nibbleOffset) => nibbleOffset < 0
            ? throw new ArgumentOutOfRangeException(nameof(nibbleOffset))
            : new PathCursor(Bytes, NibbleOffset + nibbleOffset, NibbleLength);

        [Pure]
        public bool RemainingNibblesStartWith(in Nibbles nibbles)
        {
            if (NibbleLength < nibbles.Length)
            {
                return false;
            }

            return CountCommonStartingNibbles(nibbles) >= nibbles.Length;
        }

        /// <summary>
        /// Counts the number of common starting nibbles.
        /// </summary>
        /// <param name="nibbles">The set of nibbles to compare.</param>
        /// <returns>The number of common starting nibbles from
        /// current <see cref="NibbleOffset"/>.</returns>
        [Pure]
        public int CountCommonStartingNibbles(in Nibbles nibbles)
        {
            for (int i = 0; i < nibbles.Length; i++)
            {
                int nibbleOffset = NibbleOffset + i;
                int byteOffset = nibbleOffset / 2;
                if (byteOffset >= Bytes.Length)
                {
                    return i;
                }

                byte nibble = GetNibble(Bytes[byteOffset], nibbleOffset % 2 == 0);
                if (nibble != nibbles[i])
                {
                    return i;
                }
            }

            return nibbles.Length;
        }

        [Pure]
        private static byte GetNibble(byte octet, bool high) =>
            high ? (byte)(octet >> 4) : (byte)(octet & 0b00001111);
    }
}
