using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// <see cref="EvidenceId"/>, abbreviation of Evidence identifier,
    /// is a SHA-256 digest derived from a <see cref="EvidenceBase"/>'s
    /// content.
    /// <para>As it is a SHA-256 digest, it consists of 32 <see cref="byte"/>s,
    /// and 64 characters in hexadecimal.
    /// (See also <see cref="Size"/> constant.)</para>
    /// </summary>
    /// <seealso cref="EvidenceBase.Id"/>
    [Serializable]
    [JsonConverter(typeof(EvidenceIdJsonConverter))]
    public readonly struct EvidenceId
        : IEquatable<EvidenceId>, IComparable<EvidenceId>, IComparable, IBencodable
    {
        /// <summary>
        /// The <see cref="byte"/>s size that each <see cref="EvidenceId"/> takes.
        /// <para>As a evidenceId is a SHA-256 digest, it is 32 <see cref="byte"/>s.
        /// </para>
        /// </summary>
        public const int Size = 32;

        private static readonly Codec Codec = new Codec();

        private static readonly ImmutableArray<byte> _defaultByteArray =
            ImmutableArray.Create(new byte[Size]);

        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="EvidenceId"/>.
        /// </summary>
        /// <param name="evidenceId">An immutable <see cref="byte"/> array that encodes
        /// a <see cref="EvidenceId"/>.  It must not be <see langword="null"/>, and its
        /// <see cref="ImmutableArray{T}.Length"/> must be the same to <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="evidenceId"/>'s <see cref="Array.Length"/>
        /// is not the same to the required <see cref="Size"/>.</exception>
        public EvidenceId(in ImmutableArray<byte> evidenceId)
        {
            if (evidenceId.Length != Size)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(evidenceId),
                    $"Given {nameof(evidenceId)} must be {Size} bytes.");
            }

            _byteArray = evidenceId;
        }

        /// <summary>
        /// Converts a mutable <see cref="byte"/> array into a <see cref="EvidenceId"/>.
        /// </summary>
        /// <param name="evidenceId">A mutable <see cref="byte"/> array that encodes
        /// a <see cref="EvidenceId"/>.  It must not be <see langword="null"/>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="evidenceId"/>'s <see cref="Array.Length"/> is not
        /// the same to the required <see cref="Size"/>.</exception>
        public EvidenceId(byte[] evidenceId)
            : this(evidenceId.ToImmutableArray())
        {
        }

        /// <summary>
        /// Creates a <see cref="EvidenceId"/> instance from given <paramref name="bencoded"/>.
        /// </summary>
        /// <param name="bencoded">A Bencodex <see cref="Binary"/> of 32 <see cref="byte"/>s which
        /// represents an <see cref="EvidenceId"/>.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="bencoded"/>
        /// is not of type <see cref="Binary"/>.</exception>
        /// <seealso cref="EvidenceId(in ImmutableArray{byte})"/>
        public EvidenceId(IValue bencoded)
            : this(bencoded is Binary binary
                ? binary
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Binary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private EvidenceId(Binary bencoded)
            : this(bencoded.ByteArray)
        {
        }

        public static ImmutableArray<byte> DefaultByteArray => _defaultByteArray;

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of
        /// this <see cref="EvidenceId"/>.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray => _byteArray.IsDefault
            ? DefaultByteArray
            : _byteArray;

        /// <inheritdoc/>
        public IValue Bencoded => new Binary(ByteArray);

        public static bool operator ==(EvidenceId left, EvidenceId right) => left.Equals(right);

        public static bool operator !=(EvidenceId left, EvidenceId right) => !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="EvidenceId"/> value from a <paramref name="hex"/> string.
        /// </summary>
        /// <param name="hex">A hexadecimal string which encodes a <see cref="EvidenceId"/>.
        /// This has to contain 64 hexadecimal digits and must not be <see langword="null"/>
        /// This is usually made by <see cref="ToString()"/> method.</param>
        /// <returns>A corresponding <see cref="EvidenceId"/> value.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hex"/> is shorter or longer than 64 characters.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        /// <seealso cref="ToString()"/>
        public static EvidenceId Parse(string hex)
        {
            ImmutableArray<byte> bytes = ByteUtil.ParseHexToImmutable(hex);
            try
            {
                return new EvidenceId(bytes);
            }
            catch (ArgumentOutOfRangeException)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {Size * 2} characters, but {hex.Length} characters given.");
            }
        }

        public static bool TryParse(string hex, out EvidenceId? evidenceId)
        {
            try
            {
                evidenceId = Parse(hex);
                return true;
            }
            catch (Exception)
            {
                evidenceId = null;
                return false;
            }
        }

        public bool Equals(EvidenceId other) => ByteArray.SequenceEqual(other.ByteArray);

        public override bool Equals(object? obj) => obj is EvidenceId other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of
        /// this <see cref="EvidenceId"/>.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of
        /// this <see cref="EvidenceId"/>.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to
        /// the <see cref="EvidenceId"/> object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Gets a <see cref="EvidenceId"/>'s representative string.
        /// </summary>
        /// <returns>A string which represents this <see cref="EvidenceId"/>.
        /// </returns>
        [Pure]
        public override string ToString() => ByteUtil.Hex(ToByteArray());

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(EvidenceId other)
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
        public int CompareTo(object? obj) => obj is EvidenceId other ? CompareTo(other) : 1;
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class EvidenceIdJsonConverter : JsonConverter<EvidenceId>
    {
        public override EvidenceId Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string hex = reader.GetString() ?? throw new JsonException("Expected a string.");
            try
            {
                return EvidenceId.Parse(hex);
            }
            catch (ArgumentException e)
            {
                throw new JsonException(e.Message);
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            EvidenceId value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(value.ToString());
    }
}
