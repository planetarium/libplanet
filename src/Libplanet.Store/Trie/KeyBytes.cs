using System;
using System.Collections.Immutable;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using Libplanet.Common;

namespace Libplanet.Store.Trie;

/// <summary>
/// Wraps a byte array and provides equality comparison and hash code calculation. Designed
/// to be used as a key in dictionaries.
/// </summary>
/// <remarks>
/// Creates a new <see cref="KeyBytes"/> instance from the given byte array.
/// </remarks>
/// <param name="bytes">An immutable byte array to wrap.</param>
public readonly struct KeyBytes(in ImmutableArray<byte> bytes) : IEquatable<KeyBytes>
{
    /// <summary>
    /// The default <see cref="System.Text.Encoding"/>, which is <see cref="Encoding.UTF8"/>,ㅔ
    /// to use when creating an instance from a <see langword="string"/>.
    /// </summary>
    public static readonly Encoding Encoding = Encoding.UTF8;

    public static readonly KeyBytes Empty = default;

    private readonly ImmutableArray<byte> _bytes = bytes;

    /// <summary>
    /// Creates a new <seealso cref="KeyBytes"/> instance from given
    /// <paramref name="str"/> with <see cref="Encoding"/>.
    /// </summary>
    /// <param name="str">The key <see langword="string"/> to encode into bytes.</param>
    public KeyBytes(string str)
        : this(str, Encoding)
    {
    }

    /// <summary>
    /// Creates a new <seealso cref="KeyBytes"/> instance from given <paramref name="str"/>
    /// with <paramref name="encoding"/>.
    /// </summary>
    /// <param name="str">The key <see langword="string"/> to encode into bytes.</param>
    /// <param name="encoding">The <see cref="System.Text.Encoding"/> to be used for
    /// <paramref name="str"/>.</param>
    private KeyBytes(string str, Encoding encoding)
        : this(CreateArray(str, encoding))
    {
    }

    /// <summary>
    /// The length of the byte array.
    /// </summary>
    public int Length => ByteArray.Length;

    /// <summary>
    /// The immutable array of bytes.
    /// </summary>
    public ImmutableArray<byte> ByteArray => _bytes.IsDefault ? [] : _bytes;

    /// <summary>
    /// The hexadecimal string representation of the byte array.
    /// </summary>
    public string Hex => ByteUtil.Hex(ByteArray);

    /// <summary>
    /// Compares two <see cref="KeyBytes"/> values.
    /// </summary>
    /// <param name="left">An operand.</param>
    /// <param name="right">Another operand.</param>
    /// <returns><see langword="true"/> if two values equal; otherwise <see langword="false"/>.
    /// </returns>
    public static bool operator ==(KeyBytes left, KeyBytes right) => left.Equals(right);

    /// <summary>
    /// Compares two <see cref="KeyBytes"/> values.
    /// </summary>
    /// <param name="left">An operand.</param>
    /// <param name="right">Another operand.</param>
    /// <returns><see langword="false"/> if two values equal; otherwise <see langword="true"/>.
    /// </returns>
    public static bool operator !=(KeyBytes left, KeyBytes right) => !left.Equals(right);

    /// <summary>
    /// Parses the given hexadecimal string as bytes and returns a new <see cref="KeyBytes"/>
    /// instance.
    /// </summary>
    /// <param name="hex">A hexadecimal string which encodes bytes.</param>
    /// <returns>A new <see cref="KeyBytes"/> instance.</returns>
    /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
    /// string is <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
    /// <paramref name="hex"/> string is an odd number.</exception>
    /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
    /// not a valid hexadecimal string.</exception>
    public static KeyBytes Parse(string hex) => new(ByteUtil.ParseHexToImmutable(hex));

    /// <summary>
    /// Creates a new <see cref="KeyBytes"/> instance from the given byte array.
    /// </summary>
    /// <param name="bytes">A mutable byte array to wrap.</param>
    /// <returns>A new <see cref="KeyBytes"/> instance.</returns>
    public static KeyBytes Create(params byte[] bytes)
        => bytes.Length is 0 ? Empty : new(ImmutableArray.Create(bytes));

    /// <summary>
    /// Converts to a mutable byte array.
    /// </summary>
    /// <returns>A new copy of mutable byte array.</returns>
    public byte[] ToByteArray() => [.. ByteArray];

    public ReadOnlySpan<byte> AsSpan() => ByteArray.AsSpan();

    /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
    public bool Equals(KeyBytes other) => ByteArray.SequenceEqual(other.ByteArray);

    /// <inheritdoc cref="object.Equals(object?)"/>
    public override bool Equals(object? obj) => obj is KeyBytes other && Equals(other);

    /// <inheritdoc cref="object.GetHashCode()"/>
    public override int GetHashCode()
    {
        var hash = 17;
        var bytes = ByteArray;
        foreach (byte @byte in bytes)
        {
            hash = unchecked(hash * (31 + @byte));
        }

        return hash;
    }

    /// <inheritdoc cref="object.ToString()"/>
    public override string ToString()
    {
        var hex = Length > 0 ? $" {ByteUtil.Hex(ByteArray)}" : string.Empty;
        return $"{nameof(KeyBytes)} ({Length} B){hex}";
    }

    private static ImmutableArray<byte> CreateArray(string str, Encoding encoding)
    {
        var bytes = encoding.GetBytes(str);
        return Unsafe.As<byte[], ImmutableArray<byte>>(ref bytes);
    }
}
