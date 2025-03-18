using System;
using System.Collections.Immutable;
using System.ComponentModel;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using System.Threading;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common.Converters;
using Libplanet.Common.JsonConverters;

namespace Libplanet.Common;

/// <summary>
/// A value type to represent digest bytes determined by a
/// <see cref="HashAlgorithm"/>.  For more type safety, it takes
/// a type parameter <typeparamref name="T"/> of
/// <see cref="HashAlgorithm"/>.
/// </summary>
/// <typeparam name="T">A <see cref="HashAlgorithm"/> which corresponds to
/// a digest.  This determines <see cref="Size"/> of a digest.</typeparam>
/// <seealso cref="HashAlgorithm"/>
[TypeConverter(typeof(HashDigestTypeConverter))]
[JsonConverter(typeof(HashDigestJsonConverter))]
public readonly struct HashDigest<T> : IEquatable<HashDigest<T>>, IBencodable, IFormattable
    where T : HashAlgorithm
{
    /// <summary>
    /// The fixed, and valid <see cref="Array.Length"/> of
    /// a <see cref="byte"/> array of every digest.
    /// <para>This varies depending upon what <see cref="HashAlgorithm"/> is
    /// used for <typeparamref name="T"/>.  For example, if <typeparamref
    /// name="T"/> is <see cref="SHA1"/> <see cref="Size"/> is <c>20</c>,
    /// and if <see cref="SHA256"/> it is <c>32</c>.</para>
    /// </summary>
    public static readonly int Size;

    public static readonly HashDigest<T> Empty = default;

    private static readonly ThreadLocal<T> Algorithm;
    private static readonly ImmutableArray<byte> DefaultByteArray;

    private readonly ImmutableArray<byte> _bytes;

    static HashDigest()
    {
        var type = typeof(T);
        if (type.GetMethod(nameof(HashAlgorithm.Create), []) is not { } method)
        {
            var message = $"Failed to look up the {nameof(HashAlgorithm.Create)} method";
            throw new UnreachableException(message);
        }

        var methodCall = Expression.Call(null, method);
        var exception = new InvalidCastException($"Failed to invoke {methodCall} static method.");
        var instantiateAlgorithm = Expression.Lambda<Func<T>>(
            Expression.Coalesce(methodCall, Expression.Throw(Expression.Constant(exception), type))
        ).Compile();
        Algorithm = new ThreadLocal<T>(instantiateAlgorithm);
        Size = Algorithm.Value!.HashSize / 8;
        DefaultByteArray = [.. Enumerable.Repeat(default(byte), Size)];
    }

    /// <summary>
    /// Converts an immutable <see cref="byte"/> array into a <see cref="HashDigest{T}"/>.
    /// </summary>
    /// <param name="immutableBytes">An immutable <see cref="byte"/> array that encodes
    /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>, and its
    /// <see cref="Array.Length"/> must be the same to <see cref="Size"/>.</param>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="immutableBytes"/>'s <see cref="ImmutableArray{T}.Length"/> is not
    /// the same to the <see cref="Size"/> the hash algorithm
    /// (i.e., <typeparamref name="T"/>) requires.</exception>
    public HashDigest(in ImmutableArray<byte> immutableBytes)
    {
        if (immutableBytes.Length != Size)
        {
            var message = $"HashDigest<{typeof(T).Name}> must be {Size} bytes, " +
                          $"but {immutableBytes.Length} was given";
            throw new ArgumentOutOfRangeException(nameof(immutableBytes), message);
        }

        _bytes = immutableBytes;
    }

    /// <summary>
    /// Converts a <see cref="byte"/> array into a
    /// <see cref="HashDigest{T}"/>.
    /// </summary>
    /// <param name="bytes">A <see cref="byte"/> array that encodes
    /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>,
    /// and its <see cref="Array.Length"/> must be the same to
    /// <see cref="Size"/>.</param>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="bytes"/>'s <see cref="Array.Length"/> is not
    /// the same to the <see cref="Size"/> the hash algorithm
    /// (i.e., <typeparamref name="T"/> requires.</exception>
    public HashDigest(byte[] bytes)
        : this(immutableBytes: [.. bytes])
    {
    }

    public HashDigest(IValue value)
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
            var message = $"HashDigest<{typeof(T).Name}> must be {Size} bytes, " +
                          $"but {bytes.Length} was given";
            throw new ArgumentOutOfRangeException(nameof(value), message);
        }

        _bytes = bytes;
    }

    /// <summary>
    /// A bare immutable <see cref="byte"/> array of the digest.
    /// </summary>
    /// <remarks>It is immutable.  For a mutable array, use
    /// <see cref="ToByteArray()"/> method instead.</remarks>
    /// <seealso cref="ToByteArray()"/>
    public ImmutableArray<byte> ByteArray => _bytes.IsDefault ? DefaultByteArray : _bytes;

    /// <inheritdoc cref="IBencodable.Bencoded"/>
    public IValue Bencoded => new Binary(ByteArray);

    public static bool operator ==(HashDigest<T> left, HashDigest<T> right) => left.Equals(right);

    public static bool operator !=(HashDigest<T> left, HashDigest<T> right) => !(left == right);

    /// <summary>
    /// Converts a given hexadecimal representation of a digest into
    /// a <see cref="HashDigest{T}"/> object.
    /// <para>This is an inverse function of <see cref="ToString()"/>
    /// method.</para>
    /// </summary>
    /// <param name="hex">A hexadecimal representation of
    /// a <see cref="HashDigest{T}"/>.</param>
    /// <returns>A corresponding <see cref="HashDigest{T}"/> value.
    /// </returns>
    /// <exception cref="ArgumentNullException">Thrown when the given
    /// <paramref name="hex"/> is <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="hex"/>'s length is not the double of
    /// the <see cref="Size"/>, the hash algorithm
    /// (i.e., <typeparamref name="T"/> requires.</exception>
    /// <seealso cref="ToString()"/>
    /// <seealso cref="HashDigestExtensions.ToHashDigest{T}(string)"/>
    [Pure]
    public static HashDigest<T> Parse(string hex)
    {
        if (hex.Length != Size * 2)
        {
            var message = $"HashDigest<{typeof(T).Name}> requires {Size * 2} " +
                          $"hexadecimal letters, but {hex.Length} was given";
            throw new ArgumentOutOfRangeException(nameof(hex), message);
        }

        return new HashDigest<T>(ByteUtil.ParseHexToImmutable(hex));
    }

    /// <summary>
    /// Computes a hash digest of the algorithm <typeparamref name="T"/> from the given
    /// <paramref name="input"/> bytes.
    /// </summary>
    /// <param name="input">The bytes to compute its hash.</param>
    /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
    [Pure]
    public static HashDigest<T> DeriveFrom(byte[] input) => DeriveFrom(input.AsSpan());

    /// <summary>
    /// Computes a hash digest of the algorithm <typeparamref name="T"/> from the given
    /// <paramref name="input"/> bytes.
    /// </summary>
    /// <param name="input">The bytes to compute its hash.</param>
    /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
    [Pure]
    public static HashDigest<T> DeriveFrom(in ImmutableArray<byte> input)
        => DeriveFrom(input.AsSpan());

    /// <summary>
    /// Computes a hash digest of the algorithm <typeparamref name="T"/> from the given
    /// <paramref name="input"/> bytes.
    /// </summary>
    /// <param name="input">The bytes to compute its hash.</param>
    /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
    [Pure]
    public static HashDigest<T> DeriveFrom(ReadOnlySpan<byte> input)
    {
        Span<byte> buffer = stackalloc byte[Size];
        Algorithm.Value!.TryComputeHash(input, buffer, out _);
        return new HashDigest<T>([.. buffer]);
    }

    /// <summary>
    /// Gets a bare mutable <see cref="byte"/> array of the digest.
    /// </summary>
    /// <returns>A new mutable <see cref="byte"/> array of the digest.
    /// Since a returned array is created every time the method is called,
    /// any mutations on that array does not affect to the digest object.
    /// </returns>
    /// <seealso cref="ByteArray"/>
    [Pure]
    public byte[] ToByteArray() => [.. ByteArray];

    /// <summary>
    /// Gets a hexadecimal representation of a digest.
    /// <para>This is an inverse function of <see cref="Parse"/>.
    /// </para>
    /// </summary>
    /// <returns>A hexadecimal representation of a digest.</returns>
    /// <seealso cref="Parse(string)"/>
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

    /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
    [Pure]
    public bool Equals(HashDigest<T> other)
    {
        for (var i = 0; i < Size; i++)
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
    public override bool Equals(object? obj) =>
        obj is IEquatable<HashDigest<T>> other && other.Equals(this);
}
