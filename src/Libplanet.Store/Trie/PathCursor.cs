using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Store.Trie
{
    public readonly struct PathCursor
    {
        public readonly Nibbles Nibbles;

        public readonly int Length;

        public readonly int Offset;

        public PathCursor(in KeyBytes keyBytes)
            : this(Nibbles.FromKeyBytes(keyBytes), 0)
        {
        }

        /// <summary>
        /// Creates a <see cref="PathCursor"/> from <paramref name="nibbles"/>.
        /// </summary>
        /// <param name="nibbles">The <see cref="Nibbles"/> from which to derive
        /// a <see cref="PathCursor"/>.</param>
        public PathCursor(in Nibbles nibbles)
            : this(nibbles, 0)
        {
        }

        private PathCursor(in Nibbles nibbles, int offset)
        {
            if (offset < 0 || offset > nibbles.Length)
            {
                throw new ArgumentOutOfRangeException(nameof(offset));
            }

            Nibbles = nibbles;
            Offset = offset;
            Length = nibbles.Length;
        }

        [Pure]
        public readonly int RemainingNibbleLength => Length - Offset;

        [Pure]
        public readonly bool RemainingAnyNibbles => Length > Offset;

        [Pure]
        public readonly byte NextNibble => Nibbles[Offset];

        [Pure]
        public Nibbles GetConsumedNibbles() => Nibbles.Take(Offset);

        [Pure]
        public Nibbles GetRemainingNibbles() => Nibbles.Skip(Offset);

        [Pure]
        public PathCursor Next(int offset) => offset < 0
            ? throw new ArgumentOutOfRangeException(nameof(offset))
            : new PathCursor(Nibbles, Offset + offset);

        [Pure]
        public bool RemainingNibblesStartWith(in Nibbles nibbles)
        {
            if (RemainingNibbleLength < nibbles.Length)
            {
                return false;
            }

            int i = 0;
            for (; i < nibbles.Length; i++)
            {
                int offset = Offset + i;
                if (Nibbles[offset] != nibbles[i])
                {
                    return false;
                }
            }

            return true;
        }

        /// <summary>
        /// Counts the number of common starting nibbles from the remaining path.
        /// </summary>
        /// <param name="nibbles">The list of nibbles to compare.</param>
        /// <returns>The number of common starting nibbles from the remaining path.
        [Pure]
        public int CountCommonStartingNibbles(in Nibbles nibbles)
        {
            int i = 0;
            for (; i < Math.Min(RemainingNibbleLength, nibbles.Length); i++)
            {
                int offset = Offset + i;
                if (Nibbles[offset] != nibbles[i])
                {
                    return i;
                }
            }

            return i;
        }

        [Pure]
        public Nibbles GetCommonStartingNibbles(in Nibbles nibbles)
        {
            var builder = ImmutableArray.CreateBuilder<byte>();

            int i = 0;
            for (; i < Math.Min(RemainingNibbleLength, nibbles.Length); i++)
            {
                int offset = Offset + i;
                if (Nibbles[offset] != nibbles[i])
                {
                    return new Nibbles(builder.ToImmutable());
                }
                else
                {
                    builder.Add(Nibbles[offset]);
                }
            }

            return new Nibbles(builder.ToImmutable());
        }
    }
}
