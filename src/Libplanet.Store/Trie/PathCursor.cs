using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;

namespace Libplanet.Store.Trie;

public readonly struct PathCursor
{
    public readonly Nibbles Nibbles;

    public readonly int Length;

    public readonly int Position;

    /// <summary>
    /// Creates a <see cref="PathCursor"/> from <paramref name="nibbles"/>.
    /// </summary>
    /// <param name="nibbles">The <see cref="Nibbles"/> from which to derive
    /// a <see cref="PathCursor"/>.</param>
    public PathCursor(in Nibbles nibbles)
        : this(nibbles, 0)
    {
    }

    private PathCursor(in Nibbles nibbles, int position)
    {
        if (position < 0 || position > nibbles.Length)
        {
            throw new ArgumentOutOfRangeException(nameof(position));
        }

        Nibbles = nibbles;
        Position = position;
        Length = nibbles.Length;
    }

    [Pure]
    public byte Current => Nibbles[Position];

    [Pure]
    public Nibbles NextNibbles => Nibbles.Skip(Position);

    public bool IsEnd => Position == Length;

    public static PathCursor Create(in KeyBytes keyBytes) => new(Nibbles.FromKeyBytes(keyBytes));

    [Pure]
    public PathCursor Next(int offset) => offset < 0
        ? throw new ArgumentOutOfRangeException(nameof(offset))
        : new PathCursor(Nibbles, Position + offset);

    public Nibbles SubNibbles(int position) => SubNibbles(position, Length - position);

    public Nibbles SubNibbles(int position, int length)
    {
        if (position < 0 || position > Length)
        {
            throw new ArgumentOutOfRangeException(nameof(position));
        }

        if (length < 0 || position + length > Length)
        {
            throw new ArgumentOutOfRangeException(nameof(length));
        }

        var builder = ImmutableArray.CreateBuilder<byte>(length);
        for (var i = 0; i < length; i++)
        {
            builder.Add(Nibbles[position + i]);
        }

        return new Nibbles(builder.ToImmutable());
    }

    public override string ToString()
    {
        var s = $"{Nibbles:h}";
        if (Position < Nibbles.Length)
        {
            s = s.Insert(Position + 1, "\u0332");
        }

        return s;
    }

    public PathCursor SkipCommonPrefix(int position, in Nibbles nibbles)
    {
        var minLength = Math.Min(Length - position, nibbles.Length);
        var count = 0;

        for (var i = 0; i < minLength; i++)
        {
            if (Nibbles[i + position] != nibbles[i])
            {
                break;
            }

            count++;
        }

        return Next(count);
    }
}
