using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Types.Converters;

namespace Libplanet.Types.Blocks;

/// <summary>
/// A value type to represent SHA-256 digest of <see cref="Block"/> data.
/// </summary>
/// <seealso cref="Block.Hash"/>
[JsonConverter(typeof(BlockHashJsonConverter))]
public readonly struct BlockHash :
    IEquatable<BlockHash>, IComparable<BlockHash>, IComparable, IBencodable, IFormattable
{
    /// <summary>
    /// The size of bytes that each <see cref="BlockHash"/> consists of.
    /// </summary>
    public const int Size = 32;

    private static readonly ImmutableArray<byte> _defaultBytes
        = new byte[Size].ToImmutableArray();

    private readonly ImmutableArray<byte> _bytes;

    /// <summary>
    /// Converts an immutable <see cref="byte"/> array into a <see cref="BlockHash"/>.
    /// </summary>
    /// <param name="immutableBytes">An immutable <see cref="byte"/> array that encodes
    /// a SHA-256 digest of a <see cref="Block"/>.</param>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="immutableBytes"/>'s <see cref="ImmutableArray{T}.Length"/> is not 32.
    /// </exception>
    public BlockHash(in ImmutableArray<byte> immutableBytes)
    {
        if (immutableBytes.Length != Size)
        {
            string message =
                $"{nameof(BlockHash)} must be {Size} bytes, but {immutableBytes.Length} was given.";
            throw new ArgumentOutOfRangeException(nameof(immutableBytes), message);
        }

        _bytes = immutableBytes;
    }

    /// <summary>
    /// Converts a <see cref="byte"/> array into a <see cref="BlockHash"/>.
    /// </summary>
    /// <param name="bytes">A <see cref="byte"/> array that encodes
    /// a <see cref="BlockHash"/>.</param>
    /// <exception cref="ArgumentNullException">Thrown when the given
    /// <paramref name="bytes"/> is <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="bytes"/>'s <see cref="ImmutableArray{T}.Length"/> is not 32.
    /// </exception>
    public BlockHash(byte[] bytes)
        : this(bytes.ToImmutableArray())
    {
    }

    public BlockHash(IValue value)
    {
        if (value is not Binary binary)
        {
            var message = $"Given {nameof(value)} must be of type " +
                          $"{typeof(Binary)}: {value.GetType()}";
            throw new ArgumentException(message, nameof(value));
        }

        var bytes = binary.ByteArray;
        if (bytes.Length != Size)
        {
            var message = $"{nameof(BlockHash)} must be {Size} bytes, " +
                          $"but {bytes.Length} was given";
            throw new ArgumentOutOfRangeException(nameof(value), message);
        }

        _bytes = bytes;
    }

    /// <summary>
    /// A bare immutable <see cref="byte"/> array of the block hash.
    /// </summary>
    /// <remarks>It is immutable.  For a mutable array, use <see cref="ToByteArray()"/> method
    /// instead.</remarks>
    /// <seealso cref="ToByteArray()"/>
    public ImmutableArray<byte> ByteArray => _bytes.IsDefault ? _defaultBytes : _bytes;

    /// <inheritdoc/>
    public IValue Bencoded => new Binary(ByteArray);

    public static bool operator ==(BlockHash left, BlockHash right) => left.Equals(right);

    public static bool operator !=(BlockHash left, BlockHash right) => !left.Equals(right);

    /// <summary>
    /// Converts a given hexadecimal representation of a block hash into
    /// a <see cref="BlockHash"/> value.
    /// <para>This is an inverse function of <see cref="ToString()"/> method.</para>
    /// </summary>
    /// <param name="hex">A hexadecimal representation of a <see cref="BlockHash"/>.</param>
    /// <returns>A corresponding <see cref="BlockHash"/> value.</returns>
    /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/> is
    /// <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
    /// <paramref name="hex"/> string is an odd number.</exception>
    /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string
    /// is not a valid hexadecimal string.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="hex"/>'s length is not 64.</exception>
    /// <seealso cref="ToString()"/>
    [Pure]
    public static BlockHash Parse(string hex) => new(ByteUtil.ParseHexToImmutable(hex));

    /// <summary>
    /// Converts a given <see cref="HashDigest{SHA256}"/> into a <see cref="BlockHash"/> value.
    /// </summary>
    /// <param name="hashDigest">A SHA-256 digest.</param>
    /// <returns>A block hash corresponding to the <paramref name="hashDigest"/>.</returns>
    [Pure]
    public static BlockHash Create(HashDigest<SHA256> hashDigest) => new(hashDigest.ByteArray);

    /// <summary>
    /// Computes a SHA-256 digest from the given <paramref name="blockBytes"/>.
    /// </summary>
    /// <param name="blockBytes">The bytes serializing a block to compute its hash.</param>
    /// <returns>The SHA-256 hash digest derived from <paramref name="blockBytes"/>.</returns>
    [Pure]
    public static BlockHash DeriveFrom(IReadOnlyList<byte> blockBytes)
    {
        SHA256 sha256 = SHA256.Create();
        byte[] digest = sha256.ComputeHash(blockBytes is byte[] b ? b : blockBytes.ToArray());
        return new BlockHash(digest);
    }

    /// <summary>
    /// Gets a bare mutable <see cref="byte"/> array of the block hash.
    /// </summary>
    /// <returns>A new mutable <see cref="byte"/> array of the block hash.
    /// Since a returned array is created every time the method is called,
    /// any mutations on that array does not affect to the block hash object.
    /// </returns>
    /// <seealso cref="ByteArray"/>
    [Pure]
    public byte[] ToByteArray() => [.. ByteArray];

    /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
    [Pure]
    public bool Equals(BlockHash other)
    {
        if (_bytes.IsDefaultOrEmpty && other._bytes.IsDefaultOrEmpty)
        {
            return true;
        }
        else if (ByteArray.Length != other.ByteArray.Length)
        {
            return false;
        }

        for (int i = 0; i < ByteArray.Length; i++)
        {
            if (!ByteArray[i].Equals(other.ByteArray[i]))
            {
                return false;
            }
        }

        return true;
    }

    /// <inheritdoc cref="object.Equals(object)"/>
    [Pure]
    public override bool Equals(object? obj) => obj is BlockHash h && Equals(h);

    /// <inheritdoc cref="object.GetHashCode()"/>
    [Pure]
    public override int GetHashCode()
    {
        var code = 0;
        unchecked
        {
            var bytes = ByteArray;
            foreach (var @byte in bytes)
            {
                code = (code * 397) ^ @byte.GetHashCode();
            }
        }

        return code;
    }

    /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
    public int CompareTo(BlockHash other)
    {
        ImmutableArray<byte> self = ByteArray, operand = other.ByteArray;

        for (int i = 0; i < Size; i++)
        {
            int cmp = ((IComparable<byte>)self[i]).CompareTo(operand[i]);
            if (cmp != 0)
            {
                return cmp;
            }
        }

        return 0;
    }

    /// <inheritdoc cref="IComparable.CompareTo(object)"/>
    public int CompareTo(object? obj) => obj is BlockHash other
        ? this.CompareTo(other)
        : throw new ArgumentException(
            $"Argument {nameof(obj)} is not an ${nameof(BlockHash)}.", nameof(obj));

    /// <inheritdoc cref="object.ToString()"/>
    [Pure]
    public override string ToString() => ToString("h", null);

    /// <inheritdoc cref="IFormattable.ToString(string?, IFormatProvider?)"/>
    [Pure]
    public string ToString(string? format, IFormatProvider? formatProvider)
    {
        var hex = ByteUtil.Hex(ToByteArray());
        return format switch
        {
            "h" => hex,
            "H" => hex.ToUpperInvariant(),
            null => hex,
            _ => throw new FormatException($"The format string '{format}' is not supported."),
        };
    }
}
