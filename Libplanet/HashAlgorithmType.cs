#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Reflection;
using System.Security.Cryptography;

namespace Libplanet
{
    /// <summary>
    /// Represents the type of <see cref="HashAlgorithm"/>.
    /// <para>It is guaranteed that only one instance is created for the same subclass of
    /// <see cref="HashAlgorithm"/>.</para>
    /// </summary>
    [Pure]
    public sealed class HashAlgorithmType : IEquatable<HashAlgorithmType>
    {
        private static readonly ConcurrentDictionary<Type, HashAlgorithmType> _internedObjects
            = new ConcurrentDictionary<Type, HashAlgorithmType>();

        private readonly HashAlgorithm _instance;

        private HashAlgorithmType(Type type)
        {
            Type = type;
            MethodInfo method = type.GetMethod(nameof(HashAlgorithm.Create), new Type[0])!;
            string excMsg =
                $"Failed to invoke {type.FullName}.{nameof(HashAlgorithm.Create)}() static method.";
            _instance = method?.Invoke(null, new object[0]) as HashAlgorithm
                ?? throw new InvalidCastException(excMsg);
        }

        /// <summary>
        /// The <see cref="Type"/> object which refers to a subclass of
        /// <see cref="HashAlgorithm"/>.
        /// </summary>
        [Pure]
        public Type Type { get; }

        /// <summary>
        /// The length of bytes of every digest that the <see cref="HashAlgorithmType"/> makes.
        /// </summary>
        [Pure]
        public int DigestSize => _instance.HashSize / 8;

        /// <summary>
        /// Checks if two <see cref="HashAlgorithmType"/>s refers to the same
        /// <see cref="HashAlgorithm"/> class.
        /// </summary>
        /// <param name="left">An instance.</param>
        /// <param name="right">Another instance.</param>
        /// <returns><c>true</c> iff two operands refers to the same <see cref="HashAlgorithm"/>
        /// class.</returns>
        [Pure]
        public static bool operator ==(HashAlgorithmType left, HashAlgorithmType right) =>
            left is IEquatable<HashAlgorithmType> l && l.Equals(right);

        /// <summary>
        /// Checks if two <see cref="HashAlgorithmType"/>s do not refer to the different
        /// <see cref="HashAlgorithm"/> class.
        /// </summary>
        /// <param name="left">An instance.</param>
        /// <param name="right">Another instance.</param>
        /// <returns><c>false</c> iff two operands refers to the same <see cref="HashAlgorithm"/>
        /// class.</returns>
        public static bool operator !=(HashAlgorithmType left, HashAlgorithmType right) =>
            !(left == right);

        /// <summary>
        /// Creates a <see cref="HashAlgorithmType"/> which refers to <typeparamref name="T"/>.
        /// </summary>
        /// <param name="objectToInferType">An optional object to make the compiler infers the
        /// type parameter <typeparamref name="T"/> from this.</param>
        /// <typeparam name="T">A subclass of <see cref="HashAlgorithm"/>.</typeparam>
        /// <returns>A <see cref="HashAlgorithmType"/> which refers to <typeparamref name="T"/>.
        /// </returns>
        [Pure]
        public static HashAlgorithmType Of<T>(T? objectToInferType = null)
            where T : HashAlgorithm =>
            Of(typeof(T));

        /// <summary>
        /// Computes a hash digest of the hash algorithm from the given
        /// <paramref name="input"/> bytes.
        /// </summary>
        /// <param name="input">The bytes to compute its hash.</param>
        /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
        [Pure]
        public byte[] Digest(byte[] input) =>
            _instance.ComputeHash(input);

        /// <summary>
        /// Computes a hash digest of the hash algorithm from the given
        /// <paramref name="input"/> bytes.
        /// </summary>
        /// <param name="input">The bytes to compute its hash.</param>
        /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
        [Pure]
        public ImmutableArray<byte> Digest(ImmutableArray<byte> input) =>
            Digest(input.ToBuilder().ToArray()).ToImmutableArray();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(HashAlgorithmType? other) =>
            other is { } o && Type == o.Type;

        /// <inheritdoc cref="object.Equals(object)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is IEquatable<HashAlgorithmType> e && e.Equals(this);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            Type.GetHashCode();

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() =>
            Type.FullName ?? "(Unknown)";

        private static HashAlgorithmType Of(Type type)
        {
            if (!_internedObjects.TryGetValue(type, out HashAlgorithmType? v))
            {
                v = new HashAlgorithmType(type);
            }

            return v;
        }
    }
}
