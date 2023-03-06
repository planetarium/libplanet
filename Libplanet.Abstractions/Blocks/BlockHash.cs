using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A value type to represent SHA-256 digest of <see cref="Block{T}"/> data.
    /// </summary>
    /// <seealso cref="Block{T}.Hash"/>
    [JsonConverter(typeof(BlockHashJsonConverter))]
    [Serializable]
    public readonly struct BlockHash : ISerializable, IEquatable<BlockHash>
    {
        /// <summary>
        /// The size of bytes that each <see cref="BlockHash"/> consists of.
        /// </summary>
        public const int Size = 32;

        private static readonly ImmutableArray<byte> _defaultByteArray =
            new byte[32].ToImmutableArray();

        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="blockHash">An immutable <see cref="byte"/> array that encodes
        /// a SHA-256 digest of a <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="blockHash"/>'s <see cref="ImmutableArray{T}.Length"/> is not 32.
        /// </exception>
        public BlockHash(in ImmutableArray<byte> blockHash)
        {
            if (blockHash.Length != Size)
            {
                string message =
                    $"{nameof(BlockHash)} must be {Size} bytes, but {blockHash.Length} was given.";
                throw new ArgumentOutOfRangeException(nameof(blockHash), message);
            }

            _byteArray = blockHash;
        }

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="blockHash">A <see cref="byte"/> array that encodes
        /// a <see cref="BlockHash"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="blockHash"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="blockHash"/>'s <see cref="ImmutableArray{T}.Length"/> is not 32.
        /// </exception>
        public BlockHash(byte[] blockHash)
            : this((blockHash ?? throw new ArgumentNullException(nameof(blockHash)))
                .ToImmutableArray())
        {
        }

        private BlockHash(SerializationInfo info, StreamingContext context)
            : this(info.GetValue<byte[]>(nameof(BlockHash)))
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the block hash.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use <see cref="ToByteArray()"/> method
        /// instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray =>
            _byteArray.IsDefault ? _defaultByteArray : _byteArray;

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
        public static BlockHash FromString(string hex) =>
            new BlockHash(
                ByteUtil.ParseHexToImmutable(hex ?? throw new ArgumentNullException(nameof(hex)))
            );

        /// <summary>
        /// Converts a given <see cref="HashDigest{SHA256}"/> into a <see cref="BlockHash"/> value.
        /// </summary>
        /// <param name="hashDigest">A SHA-256 digest.</param>
        /// <returns>A block hash corresponding to the <paramref name="hashDigest"/>.</returns>
        [Pure]
        public static BlockHash FromHashDigest(HashDigest<SHA256> hashDigest)
            => new BlockHash(hashDigest.ByteArray);

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
        public byte[] ToByteArray() =>
            ByteArray.ToBuilder().ToArray();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(BlockHash other)
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
            obj is BlockHash h && Equals(h);

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
            info.AddValue(nameof(BlockHash), ToByteArray());

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() =>
            ByteUtil.Hex(ToByteArray());
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class BlockHashJsonConverter : JsonConverter<BlockHash>
    {
        public override BlockHash Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string? hex = reader.GetString();
            try
            {
                return BlockHash.FromString(hex!);
            }
            catch (ArgumentException e)
            {
                throw new JsonException(e.Message);
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            BlockHash value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(ByteUtil.Hex(value.ByteArray));
    }
}
