using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using Libplanet.Serialization;
using Binder = Microsoft.CSharp.RuntimeBinder.Binder;

namespace Libplanet
{
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
    [JsonConverter(typeof(HashDigestJsonConverter))]
    [Serializable]
    public readonly struct HashDigest<T> : ISerializable, IEquatable<HashDigest<T>>
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

        private static readonly ThreadLocal<T> Algorithm;
        private static readonly ImmutableArray<byte> DefaultByteArray;

        private readonly ImmutableArray<byte> _byteArray;

        static HashDigest()
        {
            Type type = typeof(T);
            MethodInfo method = type.GetMethod(nameof(HashAlgorithm.Create), new Type[0])!;
            MethodCallExpression methodCall = Expression.Call(null, method);
            var exc = new InvalidCastException($"Failed to invoke {methodCall} static method.");
            Func<T> instantiateAlgorithm = Expression.Lambda<Func<T>>(
                Expression.Coalesce(methodCall, Expression.Throw(Expression.Constant(exc), type))
            ).Compile();
            Algorithm = new ThreadLocal<T>(instantiateAlgorithm);
            Size = Algorithm.Value!.HashSize / 8;
            DefaultByteArray = ImmutableArray.CreateRange(Enumerable.Repeat(default(byte), Size));
        }

        /// <summary>
        /// Converts a <see cref="byte"/> array into a
        /// <see cref="HashDigest{T}"/>.
        /// </summary>
        /// <param name="hashDigest">A <see cref="byte"/> array that encodes
        /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="hashDigest"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hashDigest"/>'s <see cref="Array.Length"/> is not
        /// the same to the <see cref="Size"/> the hash algorithm
        /// (i.e., <typeparamref name="T"/> requires.</exception>
        public HashDigest(byte[] hashDigest)
            : this((hashDigest ?? throw new ArgumentNullException(nameof(hashDigest)))
                .ToImmutableArray())
        {
        }

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="HashDigest{T}"/>.
        /// </summary>
        /// <param name="hashDigest">An immutable <see cref="byte"/> array that encodes
        /// a <see cref="HashDigest{T}"/>.  It must not be <see langword="null"/>, and its
        /// <see cref="Array.Length"/> must be the same to <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hashDigest"/>'s <see cref="ImmutableArray{T}.Length"/> is not
        /// the same to the <see cref="Size"/> the hash algorithm
        /// (i.e., <typeparamref name="T"/>) requires.</exception>
        public HashDigest(in ImmutableArray<byte> hashDigest)
        {
            if (hashDigest.Length != Size)
            {
                string message =
                    $"HashDigest<{typeof(T).Name}> must be {Size} bytes, " +
                    $"but {hashDigest.Length} was given";
                throw new ArgumentOutOfRangeException(
                    nameof(hashDigest),
                    message
                );
            }

            _byteArray = hashDigest;
        }

        private HashDigest(
            SerializationInfo info,
            StreamingContext context)
            : this(info.GetValue<byte[]>(nameof(HashDigest<T>)))
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the digest.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray =>
            _byteArray.IsDefault ? DefaultByteArray : _byteArray;

        /// <summary>
        /// Converts a given hexadecimal representation of a digest into
        /// a <see cref="HashDigest{T}"/> object.
        /// <para>This is an inverse function of <see cref="ToString()"/>
        /// method.</para>
        /// </summary>
        /// <param name="hexDigest">A hexadecimal representation of
        /// a <see cref="HashDigest{T}"/>.</param>
        /// <returns>A corresponding <see cref="HashDigest{T}"/> value.
        /// </returns>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="hexDigest"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hexDigest"/>'s length is not the double of
        /// the <see cref="Size"/>, the hash algorithm
        /// (i.e., <typeparamref name="T"/> requires.</exception>
        /// <seealso cref="ToString()"/>
        /// <seealso cref="HashDigestExtensions.ToHashDigest{T}(string)"/>
        [Pure]
        public static HashDigest<T> FromString(string hexDigest)
        {
            if (hexDigest == null)
            {
                throw new ArgumentNullException(nameof(hexDigest));
            }

            if (hexDigest.Length != Size * 2)
            {
                string message =
                    $"HashDigest<{typeof(T).Name}> requires {Size * 2} " +
                    $"hexadecimal letters, but {hexDigest.Length} was given";
                throw new ArgumentOutOfRangeException(
                    nameof(hexDigest),
                    message
                );
            }

            return new HashDigest<T>(ByteUtil.ParseHexToImmutable(hexDigest));
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
            byte[] hash = Algorithm.Value!.ComputeHash(input);
            ImmutableArray<byte> movedImmutableArray =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref hash);
            return new HashDigest<T>(movedImmutableArray);
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
            var neverReusedBuffer = new byte[Size];
            Algorithm.Value!.TryComputeHash(input, neverReusedBuffer.AsSpan(), out _);
            ImmutableArray<byte> movedImmutable =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref neverReusedBuffer);
            return new HashDigest<T>(movedImmutable);
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
        public byte[] ToByteArray() =>
            ByteArray.ToArray();

        /// <summary>
        /// Gets a hexadecimal representation of a digest.
        /// <para>This is an inverse function of <see cref="FromString"/>.
        /// </para>
        /// </summary>
        /// <returns>A hexadecimal representation of a digest.</returns>
        /// <seealso cref="FromString(string)"/>
        [Pure]
        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
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

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(HashDigest<T> other)
        {
            for (int i = 0; i < Size; i++)
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

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(HashDigest<T>), ToByteArray());
        }
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
        /// <see cref="HashDigest{T}.FromString(string)"/> method.</para>
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
        /// <seealso cref="HashDigest{T}.FromString(string)"/>
        /// <seealso cref="HashDigest{T}.ToString()"/>
        public static HashDigest<T> ToHashDigest<T>(this string hexDigest)
            where T : HashAlgorithm
        {
            return HashDigest<T>.FromString(hexDigest);
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
                return fromString.Invoke(null, new object?[] { hex })!;
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
}
