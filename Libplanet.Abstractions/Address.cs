using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Org.BouncyCastle.Crypto.Digests;

namespace Libplanet
{
    /// <summary>
    /// An identifier of 20 bytes (or 40 letters in hexadecimal, commonly with
    /// a prefix <c>0x</c>) that refers to a unique account.
    /// <para>It is derived from the corresponding <see cref="PublicKey"/>
    /// of an account, but as a derivation loses information, it is always
    /// unidirectional.</para>
    /// <para>The address derivation from a public key is as follows:</para>
    /// <list type="number">
    /// <item><description>Calculates the Keccak-256, which is a previous form
    /// of SHA-3 before NIST standardized it and does not follow
    /// <a href="http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf"
    /// >FIPS-202</a>, of the corresponding <see cref="PublicKey"/>.
    /// </description></item>
    /// <item><description>Takes only the last 20 bytes of the calculated
    /// Keccak-256 hash.</description></item>
    /// <item><description>When the address needs to be shown to end users,
    /// displays these 20 bytes in hexadecimal, with a prefix <c>0x</c>.
    /// </description></item>
    /// </list>
    /// <para>Since the scheme of the address derivation and the <see
    /// cref="PrivateKey"/>/<see cref="PublicKey"/> is the same to
    /// <a href="https://www.ethereum.org/">Ethereum</a>, Ethereum addresses
    /// can be used by Libplanet-backed games/apps too.</para>
    /// </summary>
    /// <remarks>Every <see cref="Address"/> value is immutable.</remarks>
    /// <seealso cref="PublicKey"/>
    [Serializable]
    [JsonConverter(typeof(AddressJsonConverter))]
    public readonly struct Address
        : ISerializable, IEquatable<Address>, IComparable<Address>, IComparable, IBencodable
    {
        /// <summary>
        /// The <see cref="byte"/>s size that each <see cref="Address"/> takes.
        /// <para>It is 20 <see cref="byte"/>s.</para>
        /// </summary>
        public const int Size = 20;

        private static readonly Codec _codec = new Codec();

        private static readonly ImmutableArray<byte> _defaultByteArray =
            ImmutableArray.Create<byte>(new byte[Size]);

        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Creates an <see cref="Address"/> instance from the given immutable <see
        /// cref="byte"/> array (i.e., <paramref name="address"/>).
        /// </summary>
        /// <param name="address">An immutable array of 20 <see cref="byte"/>s which
        /// represents an <see cref="Address"/>.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="address"/> array did not lengthen 20 bytes.</exception>
        /// <remarks>A valid <see cref="byte"/> array which represents an
        /// <see cref="Address"/> can be gotten using <see cref="ToByteArray()"
        /// /> method.</remarks>
        /// <seealso cref="ByteArray"/>
        public Address(in ImmutableArray<byte> address)
        {
            if (address.Length != Size)
            {
                throw new ArgumentException(
                    $"Given {nameof(address)} must be 20 bytes", nameof(address));
            }

            _byteArray = address;
        }

        /// <summary>
        /// Creates an <see cref="Address"/> instance from the given <see
        /// cref="byte"/> array (i.e., <paramref name="address"/>).
        /// </summary>
        /// <param name="address">An array of 20 <see cref="byte"/>s which
        /// represents an <see cref="Address"/>.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="address"/> array did not lengthen 20 bytes.</exception>
        /// <remarks>A valid <see cref="byte"/> array which represents an
        /// <see cref="Address"/> can be gotten using <see cref="ToByteArray()"
        /// /> method.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public Address(byte[] address)
            : this(address.ToImmutableArray())
        {
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a <see
        /// cref="PublicKey"/>.
        /// <para>Note that there is an equivalent extension method
        /// <see cref="AddressExtensions.ToAddress(PublicKey)"/>, which enables
        /// a code like <c>publicKey.ToAddress()</c> instead of
        /// <c>new Address(publicKey)</c>, for convenience.</para>
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <seealso cref="AddressExtensions.ToAddress(PublicKey)"/>
        public Address(PublicKey publicKey)
            : this(DeriveAddress(publicKey))
        {
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a hexadecimal
        /// address string.
        /// </summary>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="hex"/>
        /// is neither 40 chars long nor 42 chars long with 0x prefix.</exception>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="hex"/>
        /// is mixed-case and the checksum is invalid.</exception>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="hex"/>
        /// does not consist of ASCII characters.</exception>
        /// <param name="hex">A 40 characters or included 0x prefix hexadecimal
        /// address string to derive the corresponding <see cref="Address"/> from.
        /// The string should be all lower-case or mixed-case which follows <a
        /// href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"
        /// >EIP 55</a>.</param>
        public Address(string hex)
            : this(DeriveAddress(hex))
        {
        }

        /// <summary>
        /// Creates an <see cref="Address"/> instance from given <paramref name="bencoded"/>.
        /// </summary>
        /// <param name="bencoded">A Bencodex <see cref="Binary"/> of 20 <see cref="byte"/>s which
        /// represents an <see cref="Address"/>.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="bencoded"/>
        /// is not of type <see cref="Binary"/>.</exception>
        /// <seealso cref="Address(in ImmutableArray{byte})"/>
        public Address(IValue bencoded)
            : this(bencoded is Binary binary
                ? binary
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Binary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private Address(Binary bencoded)
            : this(bencoded.ByteArray)
        {
        }

        private Address(SerializationInfo info, StreamingContext context)
            : this(_codec.Decode(info.GetValue(nameof(Bencoded), typeof(byte[])) is
                byte[] bytes
                    ? bytes
                    : throw new SerializationException(
                        $"Invalid type for {nameof(Bencoded)} in {nameof(info)}.")))
        {
        }

        /// <summary>
        /// An immutable array of 20 <see cref="byte"/>s that represent this
        /// <see cref="Address"/>.
        /// </summary>
        /// <remarks>This is immutable.  For a mutable array, call <see
        /// cref="ToByteArray()"/> method.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray => _byteArray.IsDefault
            ? _defaultByteArray
            : _byteArray;

        /// <inheritdoc/>
        public IValue Bencoded => new Binary(ByteArray);

        public static bool operator ==(Address left, Address right) => left.Equals(right);

        public static bool operator !=(Address left, Address right) => !left.Equals(right);

        public bool Equals(Address other) => ByteArray.SequenceEqual(other.ByteArray);

        public override bool Equals(object? obj) => obj is Address other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Gets a mutable array of 20 <see cref="byte"/>s that represent
        /// this <see cref="Address"/>.
        /// </summary>
        /// <returns>A new mutable array which represents this
        /// <see cref="Address"/>.  Since it is created every time the method
        /// is called, any mutation on that does not affect internal states of
        /// this <see cref="Address"/>.</returns>
        /// <seealso cref="ByteArray"/>
        /// <seealso cref="Address(byte[])"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Gets a mixed-case hexadecimal string of 40 letters that represent
        /// this <see cref="Address"/>. The returned hexadecimal string follows
        /// <a
        /// href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"
        /// >EIP 55</a>.
        /// </summary>
        /// <example>A returned string looks like
        /// <c>87Ae4774E20963fd6caC967CF47aDCF880C3e89B</c>.</example>
        /// <returns>A hexadecimal string of 40 letters that represent
        /// this <see cref="Address"/>.  Note that it does not start with
        /// a prefix.</returns>
        /// <remarks>As the returned string has no prefix, for
        /// <c>0x</c>-prefixed hexadecimal, call <see cref="ToString()"/>
        /// method instead.</remarks>
        /// <seealso cref="ToString()"/>
        [Pure]
        public string ToHex() => ToChecksumAddress(ByteUtil.Hex(ToByteArray()));

        /// <summary>
        /// Gets a <c>0x</c>-prefixed mixed-case hexadecimal string of
        /// 42 letters that represent this <see cref="Address"/>. The returned
        /// hexadecimal string follows
        /// <a
        /// href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"
        /// >EIP 55</a>.
        /// </summary>
        /// <example>A returned string looks like
        /// <c>0x87Ae4774E20963fd6caC967CF47aDCF880C3e89B</c>.</example>
        /// <returns>A <c>0x</c>-hexadecimal string of 42 letters that represent
        /// this <see cref="Address"/>.</returns>
        /// <remarks>As the returned string is <c>0x</c>-prefixed, for
        /// hexadecimal without prefix, call <see cref="ToHex()"/> method
        /// instead.</remarks>
        /// <seealso cref="ToHex()"/>
        [Pure]
        public override string ToString() => $"0x{ToHex()}";

        /// <inheritdoc/>
        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Bencoded), _codec.Encode(Bencoded));
        }

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(Address other)
        {
            ImmutableArray<byte> self = ByteArray, operand = other.ByteArray;

            for (int i = 0; i < Size; i++)
            {
                int cmp = ((IComparable<byte>)self[i]).CompareTo(operand[i]);
                if (cmp != 0)
                {
                    return cmp;
                }
            }

            return 0;
        }

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        public int CompareTo(object? obj) => obj is Address other
            ? this.CompareTo(other)
            : throw new ArgumentException(
                $"Argument {nameof(obj)} is not an ${nameof(Address)}.", nameof(obj));

        private static string ToChecksumAddress(string hex)
        {
            byte[] bytes = Encoding.ASCII.GetBytes(hex);
            byte[] hash = CalculateHash(bytes);
            string hashHex = ByteUtil.Hex(hash);
            string address = string.Empty;

            for (var i = 0; i < hex.Length; i++)
            {
                char c = hex[i];
                address += (hashHex[i] >= '8') ? char.ToUpper(c, CultureInfo.InvariantCulture) : c;
            }

            return address;
        }

        private static byte[] CalculateHash(byte[] value)
        {
            var digest = new KeccakDigest(256);
            var output = new byte[digest.GetDigestSize()];
            digest.BlockUpdate(value, 0, value.Length);
            digest.DoFinal(output, 0);
            return output;
        }

        private static ImmutableArray<byte> DeriveAddress(PublicKey key)
        {
            byte[] hashPayload = key.Format(false).Skip(1).ToArray();
            var output = CalculateHash(hashPayload);

            return output.Skip(output.Length - Size).ToImmutableArray();
        }

        private static ImmutableArray<byte> DeriveAddress(string hex)
        {
            if (hex.Length != 40 && hex.Length != 42)
            {
                throw new ArgumentException(
                    $"Address hex must be either 42 chars or 40 chars, " +
                    $"but given {nameof(hex)} is of length {hex.Length}: {hex}",
                    nameof(hex));
            }

            if (hex.Length == 42)
            {
                if (hex.StartsWith("0x"))
                {
                    hex = hex.Substring(2);
                }
                else
                {
                    throw new ArgumentException(
                        $"Address hex of length 42 chars must start with \"0x\" prefix: {hex}",
                        nameof(hex));
                }
            }

            if (hex.ToLower(CultureInfo.InvariantCulture) != hex &&
                ToChecksumAddress(hex.ToLower(CultureInfo.InvariantCulture)) != hex)
            {
                throw new ArgumentException("Address checksum is invalid", nameof(hex));
            }

            try
            {
                return ByteUtil.ParseHexToImmutable(hex);
            }
            catch (FormatException fe)
            {
                throw new ArgumentException(
                    "Address hex must only consist of ASCII characters", fe);
            }
        }
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class AddressJsonConverter : JsonConverter<Address>
    {
        public override Address Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string hex = reader.GetString() ?? throw new JsonException("Expected a string.");
            try
            {
                return new Address(hex);
            }
            catch (ArgumentException e)
            {
                throw new JsonException(e.Message);
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            Address value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(value.ToHex());
    }
}
