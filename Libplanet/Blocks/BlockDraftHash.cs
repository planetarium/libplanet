#nullable enable
using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A value type to represent block draft hash bytes which is derived
    /// <see cref="BlockDraft{T}"/> data.
    /// </summary>
    /// <seealso cref="BlockDraft{T}.Hash"/>
    [Serializable]
    public readonly struct BlockDraftHash : ISerializable, IEquatable<BlockDraftHash>
    {
        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="BlockDraftHash"/>.
        /// </summary>
        /// <param name="blockDraftHash">An immutable <see cref="byte"/> array that encodes
        /// a <see cref="BlockDraftHash"/>.</param>
        public BlockDraftHash(ImmutableArray<byte> blockDraftHash) =>
            _byteArray = blockDraftHash;

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="BlockDraftHash"/>.
        /// </summary>
        /// <param name="blockDraftHash">A <see cref="byte"/> array that encodes
        /// a <see cref="BlockDraftHash"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="blockDraftHash"/> is <c>null</c>.</exception>
        public BlockDraftHash(byte[] blockDraftHash)
            : this((blockDraftHash ?? throw new ArgumentNullException(nameof(blockDraftHash)))
                .ToImmutableArray())
        {
        }

        private BlockDraftHash(SerializationInfo info, StreamingContext context)
            : this(info.GetValue<byte[]>(nameof(BlockDraftHash)))
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the block draft hash.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use <see cref="ToByteArray()"/> method
        /// instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray =>
            _byteArray.IsDefault ? ImmutableArray<byte>.Empty : _byteArray;

        /// <summary>
        /// The length of the block draft hash in bytes.
        /// </summary>
        [Pure]
        public int BytesLength =>
            _byteArray.IsDefault ? 0 : _byteArray.Length;

        /// <summary>
        /// Converts a given hexadecimal representation of a block hash into
        /// a <see cref="BlockDraftHash"/> value.
        /// <para>This is an inverse function of <see cref="ToString()"/> method.</para>
        /// </summary>
        /// <param name="hex">A hexadecimal representation of a <see cref="BlockDraftHash"/>.</param>
        /// <returns>A corresponding <see cref="BlockDraftHash"/> value.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/> is
        /// <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is an odd number.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string
        /// is not a valid hexadecimal string.</exception>
        /// <seealso cref="ToString()"/>
        [Pure]
        public static BlockDraftHash FromString(string hex) =>
            new BlockDraftHash(ByteUtil.ParseHex(
                hex ?? throw new ArgumentNullException(nameof(hex))));

        /// <summary>
        /// Converts a given <see cref="HashDigest{T}"/> value into a
        /// <see cref="BlockDraftHash"/> value.
        /// </summary>
        /// <param name="hashDigest">A hash digest.</param>
        /// <typeparam name="T">The hash algorithm.</typeparam>
        /// <returns>A block draft hash corresponding to the
        /// <paramref name="hashDigest"/>.</returns>
        [Pure]
        public static BlockDraftHash FromHashDigest<T>(HashDigest<T> hashDigest)
            where T : HashAlgorithm
            => new BlockDraftHash(hashDigest.ByteArray);

        /// <summary>
        /// Tests if a block draft hash is less than the target computed for the given
        /// <paramref name="difficulty"/>).
        /// </summary>
        /// <param name="difficulty">The difficulty to compute target number.</param>
        /// <returns><c>true</c> only if a digest is less than the target computed for the given
        /// <paramref name="difficulty"/>).  If <paramref name="difficulty"/> is <c>0</c> it always
        /// returns <c>true</c>.</returns>
        [Pure]
        public bool Satisfies(long difficulty)
        {
            if (difficulty == 0)
            {
                return true;
            }
            else if (_byteArray.IsDefaultOrEmpty)
            {
                return false;
            }

            var maxTargetBytes = new byte[_byteArray.Length + 1];
            maxTargetBytes[_byteArray.Length] = 0x01;
            var maxTarget = new BigInteger(maxTargetBytes);
            BigInteger target = maxTarget / difficulty;

            // Add zero to convert unsigned BigInteger
            var result = new BigInteger(_byteArray.Add(0).ToBuilder().ToArray());

            return result < target;
        }

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of the block draft hash.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of the block draft hash.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to the block draft hash object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() =>
            ByteArray.ToBuilder().ToArray();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(BlockDraftHash other)
        {
            if (_byteArray.IsDefaultOrEmpty && other._byteArray.IsDefaultOrEmpty)
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
        public override bool Equals(object? obj) =>
            obj is BlockDraftHash h && Equals(h);

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

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public void GetObjectData(SerializationInfo info, StreamingContext context) =>
            info.AddValue(nameof(BlockDraftHash), ToByteArray());

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() =>
            ByteUtil.Hex(ToByteArray());
    }
}
