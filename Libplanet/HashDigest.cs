using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;

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
    public struct HashDigest<T> : IEquatable<HashDigest<T>>
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

        private ImmutableArray<byte> _byteArray;

        static HashDigest()
        {
            var thunk = (T)typeof(T).GetMethod("Create", new Type[0]).Invoke(
                null, new object[0]);
            Size = thunk.HashSize / 8;
        }

        /// <summary>
        /// Converts a <see cref="byte"/> array into a
        /// <see cref="HashDigest{T}"/>.
        /// </summary>
        /// <param name="hashDigest">A <see cref="byte"/> array that encodes
        /// a <see cref="HashDigest{T}"/>.  It must not be <c>null</c>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="hashDigest"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hashDigest"/>'s <see cref="Array.Length"/> is not
        /// the same to the <see cref="Size"/> the hash algorithm
        /// (i.e., <typeparamref name="T"/> requires.</exception>
        public HashDigest(byte[] hashDigest)
        {
            if (hashDigest == null)
            {
                throw new ArgumentNullException(nameof(hashDigest));
            }

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

            _byteArray = hashDigest.ToImmutableArray();
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the digest.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray
        {
            get
            {
                if (_byteArray.IsDefault)
                {
                    _byteArray = new byte[Size].ToImmutableArray();
                }

                return _byteArray;
            }
        }

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
        /// <paramref name="hexDigest"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hexDigest"/>'s length is not the double of
        /// the <see cref="Size"/>, the hash algorithm
        /// (i.e., <typeparamref name="T"/> requires.</exception>
        /// <seealso cref="ToString()"/>
        /// <seealso cref="HashDigestExtension.ToHashDigest{T}(string)"/>
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

            return new HashDigest<T>(ByteUtil.ParseHex(hexDigest));
        }

        /// <summary>
        /// Tests if a digest is less than the target computed for the given
        /// <paramref name="difficulty"/>).
        /// </summary>
        /// <param name="difficulty">The difficulty to compute target number.
        /// </param>
        /// <returns><c>true</c> only if a digest is less than the target
        /// computed for the given <paramref name="difficulty"/>).
        /// If <paramref name="difficulty"/> is <c>0</c> it always returns
        /// <c>true</c>.
        /// </returns>
        [Pure]
        public bool LessThanTarget(long difficulty)
        {
            if (difficulty == 0)
            {
                return true;
            }

            BigInteger target = new BigInteger(
                Math.Pow(2, 256) / difficulty);

            // Add zero to convert unsigned BigInteger
            BigInteger result = new BigInteger(ByteArray.Add(0).ToArray());

            return result < target;
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
        public byte[] ToByteArray() => ByteArray.ToArray();

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

        [Pure]
        public override bool Equals(object obj)
        {
            return obj is IEquatable<HashDigest<T>> other
                ? other.Equals(this)
                : false;
        }

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

        [Pure]
        bool IEquatable<HashDigest<T>>.Equals(HashDigest<T> other)
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
    }

    /// <summary>
    /// Augments types to have some shortcut methods dealing with
    /// <see cref="HashDigest{T}"/> values.
    /// </summary>
    public static class HashDigestExtension
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
        /// <paramref name="hexDigest"/> is <c>null</c>.</exception>
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
}
