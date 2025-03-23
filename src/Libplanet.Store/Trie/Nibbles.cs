using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Store.Trie;

public readonly struct Nibbles : IEquatable<Nibbles>, IFormattable
{
    public static readonly Nibbles Empty = default;

    private static readonly char[] _hexCharLookup =
    [
        '0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
    ];

    private readonly ImmutableArray<byte> _bytes;

    /// <summary>
    /// Creates an instance of <see cref="Nibbles"/> from a sequence of nibbles.
    /// </summary>
    /// <param name="bytes">The list of nibbles with each nibble assigned to
    /// a <see langword="byte"/>, i.e., each element is assumed to be less than 16.</param>
    /// <remarks>
    /// For performance reasons, this does not actually check whether <paramref name="bytes"/>
    /// is a valid sequence of nibbles, i.e. each element with value less than 16.
    /// </remarks>
    internal Nibbles(in ImmutableArray<byte> bytes) => _bytes = bytes;

    /// <summary>
    /// A list of <see langword="byte"/>s representing raw nibbles where each nibble
    /// is assigned to a <see langword="byte"/>.
    /// </summary>
    [Pure]
    public ImmutableArray<byte> ByteArray => _bytes.IsDefault ? [] : _bytes;

    [Pure]
    public int Length => ByteArray.Length;

    public byte this[int index] => ByteArray[index];

    public static bool operator ==(Nibbles left, Nibbles right) => left.Equals(right);

    public static bool operator !=(Nibbles left, Nibbles right) => !left.Equals(right);

    public static Nibbles Parse(string hex)
    {
        var builder = ImmutableArray.CreateBuilder<byte>(hex.Length);
        for (var i = 0; i < hex.Length; i++)
        {
            builder.Add((byte)Uri.FromHex(hex[i]));
        }

        return new Nibbles(builder.ToImmutable());
    }

    public static Nibbles FromKeyBytes(in KeyBytes keyBytes)
    {
        var capacity = keyBytes.ByteArray.Length * 2;
        var builder = ImmutableArray.CreateBuilder<byte>(capacity);
        for (var i = 0; i < keyBytes.ByteArray.Length; i++)
        {
            builder.Add((byte)(keyBytes.ByteArray[i] >> 4));
            builder.Add((byte)(keyBytes.ByteArray[i] & 0x0f));
        }

        return new Nibbles(builder.ToImmutable());
    }

    public Nibbles Append(byte @byte) => new(ByteArray.Add(@byte));

    public Nibbles Append(in Nibbles nibbles) => new(ByteArray.AddRange(nibbles.ByteArray));

    public Nibbles AppendMany(in ImmutableArray<byte> bytes) => new(ByteArray.AddRange(bytes));

    public Nibbles Take(int count)
    {
        if (count < 0)
        {
            var message = $"Given {nameof(count)} must be non-negative: {count}";
            throw new ArgumentOutOfRangeException(nameof(count), message);
        }

        if (count > Length)
        {
            var message = $"Given {nameof(count)} must be less than or equal to {Length}: {count}";
            throw new ArgumentOutOfRangeException(nameof(count), message);
        }

        return new Nibbles([.. _bytes.Take(count)]);
    }

    public Nibbles Take(in Nibbles nibbles)
    {
        var minLength = Math.Min(Length, nibbles.Length);
        var builder = ImmutableArray.CreateBuilder<byte>(minLength);

        for (var i = 0; i < minLength; i++)
        {
            if (ByteArray[i] != nibbles.ByteArray[i])
            {
                break;
            }

            builder.Add(ByteArray[i]);
        }

        return new Nibbles(builder.ToImmutable());
    }

    public Nibbles Skip(int count)
    {
        if (count < 0)
        {
            var message = $"Given {nameof(count)} must be non-negative: {count}";
            throw new ArgumentOutOfRangeException(nameof(count), message);
        }

        if (count > Length)
        {
            var message = $"Given {nameof(count)} must be less than or equal to {Length}: {count}";
            throw new ArgumentOutOfRangeException(nameof(count), message);
        }

        return new Nibbles([.. _bytes.Skip(count)]);
    }

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
        var length = Length;
        if (length % 2 != 0)
        {
            throw new InvalidOperationException(
                $"The length must be even in order to convert " +
                $"to a {nameof(KeyBytes)}: {length}");
        }

        var capacity = length / 2;
        var builder = ImmutableArray.CreateBuilder<byte>(capacity);
        for (var i = 0; i < length; i += 2)
        {
            builder.Add((byte)(_bytes[i] << 4 | _bytes[i + 1]));
        }

        return new KeyBytes(builder.ToImmutable());
    }

    [Pure]
    public bool StartsWith(in Nibbles nibbles)
    {
        if (Length < nibbles.Length)
        {
            return false;
        }

        for (var i = 0; i < nibbles.Length; i++)
        {
            if (ByteArray[i] != nibbles.ByteArray[i])
            {
                return false;
            }
        }

        return true;
    }

    public bool Equals(Nibbles other) => ByteArray.SequenceEqual(other.ByteArray);

    /// <inheritdoc cref="object.Equals(object?)"/>
    public override bool Equals(object? obj) => obj is Nibbles other && Equals(other);

    public override int GetHashCode()
    {
        var code = 0;
        unchecked
        {
            var bytes = ByteArray;
            foreach (byte @byte in bytes)
            {
                code = (code * 397) ^ @byte.GetHashCode();
            }
        }

        return code;
    }

    public override string ToString()
    {
        var chars = new char[Length];
        var bytes = ByteArray;
        for (var i = 0; i < Length; i++)
        {
            chars[i] = _hexCharLookup[bytes[i]];
        }

        return new string(chars);
    }

    /// <inheritdoc cref="IFormattable.ToString(string?, IFormatProvider?)"/>
    public string ToString(string? format, IFormatProvider? formatProvider) => format switch
    {
        "h" => ToString(),
        "H" => ToString().ToUpperInvariant(),
        _ => ToString(),
    };
}
