using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private PathResolution ResolvePath(INode? node, in PathCursor cursor) =>
            node switch
            {
                null => PathResolution.Unresolved(),
                ValueNode valueNode => PathResolution.Resolved(valueNode.Value),
                ShortNode shortNode => cursor.RemainingNibblesStartWith(shortNode.Key)
                    ? ResolvePath(shortNode.Value, cursor.Next(shortNode.Key.Length))
                    : PathResolution.Unresolved(),
                FullNode fullNode => ResolvePath(
                    fullNode.Children[cursor.NextNibble],
                    cursor.Next(1)),
                HashNode hashNode => PathResolution.PartiallyResolved(hashNode.HashDigest, cursor),
                _ => throw new InvalidTrieNodeException(
                    $"Invalid node value: {node.ToBencodex().Inspect(false)}"),
            };

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
                    0)
            {
            }

            private PathCursor(in ImmutableArray<byte> bytes, int nibbleOffset)
            {
                int nibbleLength = bytes.Length * 2;
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
            public ImmutableArray<byte> GetRemainingNibbles()
            {
                var builder = ImmutableArray.CreateBuilder<byte>(RemainingNibbleLength);
                for (int i = NibbleOffset; i < NibbleLength; i++)
                {
                    builder.Add(GetNibble(Bytes[i / 2], i % 2 == 0));
                }

                return builder.MoveToImmutable();
            }

            [Pure]
            public PathCursor Next(int nibbleOffset) => nibbleOffset < 0
                ? throw new ArgumentOutOfRangeException(nameof(nibbleOffset))
                : new PathCursor(Bytes, NibbleOffset + nibbleOffset);

            // FIXME: We should declare a custom value type to represent nibbles...
            [Pure]
            public bool RemainingNibblesStartWith(in ImmutableArray<byte> nibbles)
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
            public int CountCommonStartingNibbles(in ImmutableArray<byte> nibbles)
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

            // FIXME: We should declare a custom value type to represent nibbles...
            [Pure]
            private static byte GetNibble(byte octet, bool high) =>
                high ? (byte)(octet >> 4) : (byte)(octet & 0b00001111);
        }

        private readonly struct PathResolution
        {
            public readonly IValue? Value;
            public readonly (HashDigest<SHA256> NodeHash, PathCursor Cursor)? Next;

            private PathResolution(IValue? value)
            {
                Value = value;
                Next = null;
            }

            private PathResolution(in HashDigest<SHA256> nodeHash, in PathCursor cursor)
            {
                Value = null;
                Next = (nodeHash, cursor);
            }

            public static PathResolution Unresolved() => default;

            public static PathResolution Resolved(IValue value) => new PathResolution(value);

            public static PathResolution PartiallyResolved(
                in HashDigest<SHA256> nodeHash,
                in PathCursor cursor
            ) =>
                new PathResolution(nodeHash, cursor);
        }
    }
}
