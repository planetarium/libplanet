using System;
using System.Collections.Immutable;
using System.ComponentModel;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
#if NETSTANDARD2_0
using System.Runtime.CompilerServices;
#endif
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using Bencodex;
using Bencodex.Types;

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
[SuppressMessage(
    "ReSharper",
    "StaticMemberInGenericType",
    Justification = "Size & DefaultByteArray differ between HashAlgorithm types."
)]
[TypeConverter(typeof(HashDigestTypeConverter))]
[JsonConverter(typeof(HashDigestJsonConverter))]
public readonly struct HashDigest<T> : IEquatable<HashDigest<T>>, IBencodable
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

    private readonly ImmutableArray<byte> _byteArray;

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
    /// <param name="bytes">An immutable <see cref="byte"/> array that encodes
    /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>, and its
    /// <see cref="Array.Length"/> must be the same to <see cref="Size"/>.</param>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="bytes"/>'s <see cref="ImmutableArray{T}.Length"/> is not
    /// the same to the <see cref="Size"/> the hash algorithm
    /// (i.e., <typeparamref name="T"/>) requires.</exception>
    public HashDigest(in ImmutableArray<byte> bytes)
    {
        if (bytes.Length != Size)
        {
            var message = $"HashDigest<{typeof(T).Name}> must be {Size} bytes, " +
                          $"but {bytes.Length} was given";
            throw new ArgumentOutOfRangeException(nameof(bytes), message);
        }

        _byteArray = bytes;
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

        _byteArray = bytes;
    }

    /// <summary>
    /// A bare immutable <see cref="byte"/> array of the digest.
    /// </summary>
    /// <remarks>It is immutable.  For a mutable array, use
    /// <see cref="ToByteArray()"/> method instead.</remarks>
    /// <seealso cref="ToByteArray()"/>
    public ImmutableArray<byte> ByteArray => _byteArray.IsDefault ? DefaultByteArray : _byteArray;

    /// <inheritdoc cref="IBencodable.Bencoded"/>
    public IValue Bencoded => new Binary(ByteArray);

    /// <summary>
    /// Converts a <see cref="byte"/> array into a
    /// <see cref="HashDigest{T}"/>.
    /// </summary>
    /// <param name="bytes">A <see cref="byte"/> array that encodes
    /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>,
    /// and its <see cref="Array.Length"/> must be the same to
    /// <see cref="Size"/>.</param>
    /// <exception cref="ArgumentNullException">Thrown when the given
    /// <paramref name="bytes"/> is <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="bytes"/>'s <see cref="Array.Length"/> is not
    /// the same to the <see cref="Size"/> the hash algorithm
    /// (i.e., <typeparamref name="T"/> requires.</exception>
    public static HashDigest<T> Create(params byte[] bytes) => new(bytes: [.. bytes]);

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
    public static HashDigest<T> DeriveFrom(byte[] input)
    {
#if NETSTANDARD2_0
        byte[] hash = Algorithm.Value!.ComputeHash(input);
        ImmutableArray<byte> movedImmutableArray =
            Unsafe.As<byte[], ImmutableArray<byte>>(ref hash);
        return new HashDigest<T>(movedImmutableArray);
#else
        return DeriveFrom(input.AsSpan());
#endif
    }

    /// <summary>
    /// Computes a hash digest of the algorithm <typeparamref name="T"/> from the given
    /// <paramref name="input"/> bytes.
    /// </summary>
    /// <param name="input">The bytes to compute its hash.</param>
    /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
    [Pure]
    public static HashDigest<T> DeriveFrom(ImmutableArray<byte> input)
    {
#if NETSTANDARD2_0
        byte[] movedArray = Unsafe.As<ImmutableArray<byte>, byte[]>(ref input);
        return DeriveFrom(movedArray);
#else
        return DeriveFrom(input.AsSpan());
#endif
    }

    /// <summary>
    /// Computes a hash digest of the algorithm <typeparamref name="T"/> from the given
    /// <paramref name="input"/> bytes.
    /// </summary>
    /// <param name="input">The bytes to compute its hash.</param>
    /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
    [Pure]
    public static HashDigest<T> DeriveFrom(ReadOnlySpan<byte> input)
    {
#if NETSTANDARD2_0
        var array = new byte[input.Length];
        for (int i = 0; i < input.Length; i++)
        {
            array[i] = input[i];
        }

        return DeriveFrom(array);
#else
        Span<byte> buffer = stackalloc byte[Size];
        Algorithm.Value!.TryComputeHash(input, buffer, out _);
        var builder = ImmutableArray.CreateBuilder<byte>(Size);
        foreach (byte b in buffer)
        {
            builder.Add(b);
        }

        return new HashDigest<T>(builder.MoveToImmutable());
#endif
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
    public override string ToString() => ByteUtil.Hex(ToByteArray());

    /// <inheritdoc cref="object.GetHashCode()"/>
    [Pure]
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

/// <summary>
/// Augments types to have some shortcut methods dealing with
/// <see cref="HashDigest{T}"/> values.
/// </summary>
public static class HashDigestExtensions
{
    /// <summary>
    /// Converts a given hexadecimal representation of a digest into
    /// a <see cref="HashDigest{T}"/> object.
    /// <para>This is a shortcut of
    /// <see cref="HashDigest{T}.Parse(string)"/> method.</para>
    /// <para>This is an inverse function of
    /// <see cref="HashDigest{T}.ToString()"/> method.</para>
    /// </summary>
    /// <param name="hexDigest">A hexadecimal representation of
    /// a <see cref="HashDigest{T}"/>.</param>
    /// <typeparam name="T">A <see cref="HashAlgorithm"/> which corresponds
    /// to a digest.</typeparam>
    /// <returns>A corresponding <see cref="HashDigest{T}"/> value.
    /// </returns>
    /// <exception cref="ArgumentNullException">Thrown when the given
    /// <paramref name="hexDigest"/> is <see langword="null"/>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
    /// <paramref name="hexDigest"/>'s length is not the double of
    /// the <see cref="HashDigest{T}.Size"/>, the hash algorithm
    /// (i.e., <typeparamref name="T"/> requires.</exception>
    /// <seealso cref="HashDigest{T}.Parse(string)"/>
    /// <seealso cref="HashDigest{T}.ToString()"/>
    public static HashDigest<T> ToHashDigest<T>(this string hexDigest)
        where T : HashAlgorithm
    {
        return HashDigest<T>.Parse(hexDigest);
    }
}

/// <summary>
/// The <see cref="TypeConverter"/> implementation for <see cref="HashDigest{T}"/>.
/// </summary>
[SuppressMessage(
    "StyleCop.CSharp.MaintainabilityRules",
    "SA1402:FileMayOnlyContainASingleClass",
    Justification = "It's okay to have non-public classes together in a single file."
)]
internal class HashDigestTypeConverter : TypeConverter
{
    private readonly MethodInfo _fromString;

    public HashDigestTypeConverter(Type type)
    {
        if (!type.IsConstructedGenericType ||
            type.GetGenericTypeDefinition() != typeof(HashDigest<>) ||
            type.GetGenericArguments().Length != 1)
        {
            throw new ArgumentException(
                "Only usable with a constructed HashDigest<T>.",
                nameof(type));
        }

        _fromString = type.GetMethod(
            nameof(HashDigest<SHA1>.Parse),
            BindingFlags.Public | BindingFlags.Static,
            Type.DefaultBinder,
            new[] { typeof(string) },
            null
        ) ?? throw new MissingMethodException(
            $"Failed to look up the {nameof(HashDigest<SHA1>.Parse)} method");
    }

    /// <inheritdoc cref="TypeConverter.CanConvertFrom(ITypeDescriptorContext?, Type)"/>
    public override bool CanConvertFrom(ITypeDescriptorContext? context, Type sourceType) =>
        sourceType == typeof(string) || base.CanConvertFrom(context, sourceType);

    /// <inheritdoc
    /// cref="TypeConverter.ConvertFrom(ITypeDescriptorContext?, CultureInfo?, object)"/>
    public override object? ConvertFrom(
        ITypeDescriptorContext? context,
        CultureInfo? culture,
        object value
    )
    {
        if (value is string v)
        {
            try
            {
                return _fromString.Invoke(null, new[] { v })!;
            }
            catch (TargetInvocationException e) when (e.InnerException is { } ie)
            {
                if (ie is ArgumentOutOfRangeException || ie is FormatException)
                {
                    throw new ArgumentException(ie.Message, ie);
                }

                throw ie;
            }
        }

        return base.ConvertFrom(context, culture, value);
    }

    /// <inheritdoc cref="TypeConverter.CanConvertTo(ITypeDescriptorContext?, Type?)"/>
    public override bool CanConvertTo(ITypeDescriptorContext? context, Type? destinationType) =>
        destinationType == typeof(string) || base.CanConvertTo(context, destinationType);

    /// <inheritdoc
    /// cref="TypeConverter.ConvertTo(ITypeDescriptorContext?, CultureInfo?, object?, Type)"/>
    public override object? ConvertTo(
        ITypeDescriptorContext? context,
        CultureInfo? culture,
        object? value,
        Type destinationType
    )
    {
        if (value != null &&
            destinationType == typeof(string) &&
            value.GetType().IsConstructedGenericType &&
            value.GetType().GetGenericTypeDefinition() == typeof(HashDigest<>))
        {
            return value.ToString()!;
        }

        return base.ConvertTo(context, culture, value, destinationType);
    }
}

// NOTE: As JsonConverterAttribute does not take a generic type, we need to make
// a JsonConverter<System.Object> instead.
[SuppressMessage(
    "StyleCop.CSharp.MaintainabilityRules",
    "SA1402:FileMayOnlyContainASingleClass",
    Justification = "It's okay to have non-public classes together in a single file."
)]
internal class HashDigestJsonConverter : JsonConverter<object>
{
    private Type? _queriedType;

    public override bool CanConvert(Type typeToConvert)
    {
        if (typeToConvert.IsConstructedGenericType &&
            typeToConvert.GetGenericTypeDefinition() == typeof(HashDigest<>))
        {
            _queriedType = typeToConvert;
            return true;
        }

        _queriedType = null;
        return false;
    }

    public override object Read(
        ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options
    )
    {
        if (typeToConvert == typeof(object) && _queriedType is { } t)
        {
            typeToConvert = t;
        }

        MethodInfo fromString = typeToConvert.GetMethod(
            "FromString",
            BindingFlags.Public | BindingFlags.Static
        )!;
        string? hex = reader.GetString();
        try
        {
            return fromString.Invoke(null, [hex])!;
        }
        catch (ArgumentException e)
        {
            throw new JsonException(e.Message);
        }
    }

    public override void Write(
        Utf8JsonWriter writer,
        object value,
        JsonSerializerOptions options
    ) =>
        writer.WriteStringValue(value.ToString());
}
