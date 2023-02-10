using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Tx
{
    /// <summary>
    /// <see cref="TxId"/>, abbreviation of transaction identifier,
    /// is a SHA-256 digest derived from a <see cref="Transaction{T}"/>'s
    /// content.
    /// <para>As it is a SHA-256 digest, it consists of 32 <see cref="byte"/>s,
    /// and 64 characters in hexadecimal.
    /// (See also <see cref="Size"/> constant.)</para>
    /// </summary>
    /// <seealso cref="Transaction{T}.Id"/>
    [Serializable]
    [JsonConverter(typeof(TxIdJsonConverter))]
    public readonly struct TxId
        : ISerializable, IEquatable<TxId>, IComparable<TxId>, IComparable, IBencodable
    {
        /// <summary>
        /// The <see cref="byte"/>s size that each <see cref="TxId"/> takes.
        /// <para>As a txid is a SHA-256 digest, it is 32 <see cref="byte"/>s.
        /// </para>
        /// </summary>
        public const int Size = 32;

        private static readonly Codec _codec = new Codec();

        private static readonly ImmutableArray<byte> _defaultByteArray =
            ImmutableArray.Create<byte>(new byte[Size]);

        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="TxId"/>.
        /// </summary>
        /// <param name="txid">An immutable <see cref="byte"/> array that encodes
        /// a <see cref="TxId"/>.  It must not be <see langword="null"/>, and its
        /// <see cref="ImmutableArray{T}.Length"/> must be the same to <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="txid"/>'s <see cref="Array.Length"/> is not the same to the required
        /// <see cref="Size"/>.</exception>
        public TxId(in ImmutableArray<byte> txid)
        {
            if (txid.Length != Size)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(txid), $"Given {nameof(txid)} must be {Size} bytes.");
            }

            _byteArray = txid;
        }

        /// <summary>
        /// Converts a mutable <see cref="byte"/> array into a <see cref="TxId"/>.
        /// </summary>
        /// <param name="txid">A mutable <see cref="byte"/> array that encodes
        /// a <see cref="TxId"/>.  It must not be <see langword="null"/>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="txid"/>'s <see cref="Array.Length"/> is not
        /// the same to the required <see cref="Size"/>.</exception>
        public TxId(byte[] txid)
            : this(txid.ToImmutableArray())
        {
        }

        /// <summary>
        /// Creates a <see cref="TxId"/> instance from given <paramref name="bencoded"/>.
        /// </summary>
        /// <param name="bencoded">A Bencodex <see cref="Binary"/> of 32 <see cref="byte"/>s which
        /// represents an <see cref="TxId"/>.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="bencoded"/>
        /// is not of type <see cref="Binary"/>.</exception>
        /// <seealso cref="TxId(in ImmutableArray{byte})"/>
        public TxId(IValue bencoded)
            : this(bencoded is Binary binary
                ? binary
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Binary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        public TxId(SerializationInfo info, StreamingContext context)
            : this(_codec.Decode(info.GetValue(nameof(Bencoded), typeof(byte[])) is
                byte[] bytes
                    ? bytes
                    : throw new SerializationException(
                        $"Invalid type for {nameof(Bencoded)} in {nameof(info)}.")))
        {
        }

        private TxId(Binary bencoded)
            : this(bencoded.ByteArray)
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of
        /// this <see cref="TxId"/>.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray => _byteArray.IsDefault
            ? _defaultByteArray
            : _byteArray;

        /// <inheritdoc/>
        public IValue Bencoded => new Binary(ByteArray);

        public static bool operator ==(TxId left, TxId right) => left.Equals(right);

        public static bool operator !=(TxId left, TxId right) => !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="TxId"/> value from a <paramref name="hex"/> string.
        /// </summary>
        /// <param name="hex">A hexadecimal string which encodes a <see cref="TxId"/>.
        /// This has to contain 64 hexadecimal digits and must not be <see langword="null"/>
        /// This is usually made by <see cref="ToHex()"/> method.</param>
        /// <returns>A corresponding <see cref="TxId"/> value.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hex"/> is shorter or longer than 64 characters.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        /// <seealso cref="ToHex()"/>
        public static TxId FromHex(string hex)
        {
            ImmutableArray<byte> bytes = ByteUtil.ParseHexToImmutable(hex);
            try
            {
                return new TxId(bytes);
            }
            catch (ArgumentOutOfRangeException)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {Size * 2} characters, but {hex.Length} characters given.");
            }
        }

        public bool Equals(TxId other) => ByteArray.SequenceEqual(other.ByteArray);

        public override bool Equals(object? obj) => obj is TxId other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of
        /// this <see cref="TxId"/>.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of
        /// this <see cref="TxId"/>.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to
        /// the <see cref="TxId"/> object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Gets a hexadecimal form of a <see cref="TxId"/>.
        /// </summary>
        /// <returns>64 hexadecimal characters.</returns>
        [Pure]
        public string ToHex() => ByteUtil.Hex(ToByteArray());

        /// <summary>
        /// Gets a <see cref="TxId"/>'s representative string.
        /// </summary>
        /// <returns>A string which represents this <see cref="TxId"/>.
        /// </returns>
        [Pure]
        public override string ToString() => ToHex();

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(TxId other)
        {
            for (int i = 0; i < Size; ++i)
            {
                int cmp = ByteArray[i].CompareTo(other.ByteArray[i]);
                if (cmp != 0)
                {
                    return cmp;
                }
            }

            return 0;
        }

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        public int CompareTo(object? obj) => obj is TxId other
            ? this.CompareTo(other)
            : throw new ArgumentException(
                $"Argument {nameof(obj)} is not a ${nameof(TxId)}.", nameof(obj));

        /// <inheritdoc />
        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Bencoded), _codec.Encode(Bencoded));
        }
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class TxIdJsonConverter : JsonConverter<TxId>
    {
        public override TxId Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string hex = reader.GetString() ?? throw new JsonException("Expected a string.");
            try
            {
                return TxId.FromHex(hex);
            }
            catch (ArgumentException e)
            {
                throw new JsonException(e.Message);
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            TxId value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(value.ToHex());
    }
}
