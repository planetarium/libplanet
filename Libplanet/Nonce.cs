using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Libplanet
{
    /// <summary>
    /// An arbitrary <see cref="byte"/>s that determines a
    /// <see cref="Hashcash.Stamp"/>.
    /// </summary>
    [JsonConverter(typeof(NonceJsonConverter))]
    public struct Nonce : IEquatable<Nonce>
    {
        private ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="Nonce"/>
        /// value.
        /// <para>This constructor is an inverse function of
        /// <see cref="ToByteArray()"/> method.</para>
        /// </summary>
        /// <param name="nonce">A <see cref="byte"/> array to convert to
        /// a <see cref="Nonce"/> object.  It must not be <see langword="null"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="nonce"/> is a <see langword="null"/>.</exception>
        /// <seealso cref="ToByteArray()"/>
        public Nonce(byte[] nonce)
            : this(nonce?.ToImmutableArray() ?? throw new ArgumentNullException(nameof(nonce)))
        {
        }

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="Nonce"/> instance.
        /// <para>This constructor is inverse of <see cref="ByteArray"/> property.</para>
        /// </summary>
        /// <param name="nonce">An immutable <see cref="byte"/> array to convert to
        /// a <see cref="Nonce"/> instance.</param>
        /// <seealso cref="ByteArray"/>
        public Nonce(in ImmutableArray<byte> nonce) =>
            _byteArray = nonce;

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the nonce.
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
                    _byteArray = ImmutableArray<byte>.Empty;
                }

                return _byteArray;
            }
        }

        public static bool operator ==(Nonce left, Nonce right) => left.Equals(right);

        public static bool operator !=(Nonce left, Nonce right) => !left.Equals(right);

        public bool Equals(Nonce other) => ByteArray.SequenceEqual(other.ByteArray);

        public override bool Equals(object? obj) => obj is Nonce other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of the nonce.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of the nonce.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to
        /// the <see cref="Nonce"/> object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Gets a hexadecimal representation of a <see cref="Nonce"/>.
        /// </summary>
        /// <returns>A hexadecimal representation of a <see cref="Nonce"/>.
        /// </returns>
        [Pure]
        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class NonceJsonConverter : JsonConverter<Nonce>
    {
        public override Nonce Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string? hex = reader.GetString();
            try
            {
                return new Nonce(ByteUtil.ParseHex(hex!));
            }
            catch (ArgumentException e)
            {
                throw new JsonException(e.Message);
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            Nonce value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(value.ToString());
    }
}
