using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Threading;

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

        private readonly MethodInfo? _instanceCtor;

        private readonly ThreadLocal<HashAlgorithm> _instance;

        private HashAlgorithmType(Type type)
        {
            Type = type;
            MethodInfo method = Type.GetMethod(nameof(HashAlgorithm.Create), new Type[0])!;
            string excMsg =
                $"Failed to invoke {Type.FullName}.{nameof(HashAlgorithm.Create)}() static method.";
            _instanceCtor = method;
            _instance = new ThreadLocal<HashAlgorithm>(() =>
                _instanceCtor?.Invoke(null, new object[0]) as HashAlgorithm
                    ?? throw new InvalidCastException(excMsg)
            );

            // Immediately create an instance to check if the constructor works well:
            HashAlgorithm unused = _instance.Value!;
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
        public int DigestSize => _instance.Value!.HashSize / 8;

        /// <summary>
        /// Checks if two <see cref="HashAlgorithmType"/>s refers to the same
        /// <see cref="HashAlgorithm"/> class.
        /// </summary>
        /// <param name="left">An instance.</param>
        /// <param name="right">Another instance.</param>
        /// <returns><see langword="true"/> iff two operands refers to the same
        /// <see cref="HashAlgorithm"/> class.</returns>
        [Pure]
        public static bool operator ==(HashAlgorithmType left, HashAlgorithmType right) =>
            left is IEquatable<HashAlgorithmType> l && l.Equals(right);

        /// <summary>
        /// Checks if two <see cref="HashAlgorithmType"/>s do not refer to the different
        /// <see cref="HashAlgorithm"/> class.
        /// </summary>
        /// <param name="left">An instance.</param>
        /// <param name="right">Another instance.</param>
        /// <returns><see langword="false"/> iff two operands refers to the same
        /// <see cref="HashAlgorithm"/> class.</returns>
        public static bool operator !=(HashAlgorithmType left, HashAlgorithmType right) =>
            !(left == right);

        /// <summary>
        /// Creates a <see cref="HashAlgorithmType"/> which refers to <typeparamref name="T"/>.
        /// </summary>
        /// <param name="objectToInferType">An optional object to make the compiler infers the
        /// type parameter <typeparamref name="T"/> from this.  Note that the value in itself is
        /// never used at runtime.</param>
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
        public byte[] Digest(byte[] input)
        {
            HashAlgorithm algo = _instance.Value!;
            algo.Initialize();
            return algo.ComputeHash(input);
        }

        /// <summary>
        /// Computes a hash digest of the hash algorithm from the given
        /// <paramref name="input"/> bytes.
        /// </summary>
        /// <param name="input">The bytes to compute its hash.</param>
        /// <returns>The hash digest derived from <paramref name="input"/>.</returns>
        [Pure]
        public ImmutableArray<byte> Digest(ImmutableArray<byte> input) =>
            Digest(input.ToBuilder().ToArray()).ToImmutableArray();

        /// <summary>
        /// Computes a hash digest of the hash algorithm from the given <paramref name="chunks"/> of
        /// input bytes.
        /// </summary>
        /// <param name="chunks">The chunks of bytes to compute its hash.</param>
        /// <returns>The hash digest derivied from input <paramref name="chunks"/>.</returns>
        [Pure]
        public byte[] Digest(IEnumerable<byte[]> chunks)
        {
            HashAlgorithm algo = _instance.Value!;
            algo.Initialize();
            foreach (byte[] chunk in chunks)
            {
                algo.TransformBlock(chunk, 0, chunk.Length, null, 0);
            }

            algo.TransformFinalBlock(Array.Empty<byte>(), 0, 0);
            return algo.Hash;
        }

        /// <summary>
        /// Computes a hash digest of the hash algorithm from the given <paramref name="chunks"/> of
        /// input bytes.
        /// </summary>
        /// <param name="chunks">The chunks of bytes to compute its hash.</param>
        /// <returns>The hash digest derivied from input <paramref name="chunks"/>.</returns>
        [Pure]
        public ImmutableArray<byte> Digest(IEnumerable<ImmutableArray<byte>> chunks) =>
            Digest(chunks.Select(imm => imm.ToBuilder().ToArray())).ToImmutableArray();

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
