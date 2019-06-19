using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Net.NetworkInformation;
using System.Runtime.Serialization;
using System.Text;
using Libplanet.Crypto;
using Libplanet.Serialization;
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
    [Equals]
    public struct Address : ISerializable
    {
        /// <summary>
        /// The <see cref="byte"/>s size that each <see cref="Address"/> takes.
        /// <para>It is 20 <see cref="byte"/>s.</para>
        /// </summary>
        public const int Size = 20;

        private ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Creates an <see cref="Address"/> instance from the given <see
        /// cref="byte"/> array (i.e., <paramref name="address"/>).
        /// </summary>
        /// <param name="address">An array of 20 <see cref="byte"/>s which
        /// represents an <see cref="Address"/>.  This must not be <c>null</c>.
        /// </param>
        /// <exception cref="NullReferenceException">Thrown when <c>null</c> was
        /// passed to <paramref name="address"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="address"/> array did not lengthen 20 bytes.</exception>
        /// <remarks>A valid <see cref="byte"/> array which represents an
        /// <see cref="Address"/> can be gotten using <see cref="ToByteArray()"
        /// /> method.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public Address(byte[] address)
        {
            if (address == null)
            {
                throw new NullReferenceException("address must not be null");
            }

            if (address.Length != Size)
            {
                throw new ArgumentException("address must be 20 bytes");
            }

            _byteArray = address.ToImmutableArray();
        }

        public Address(
            SerializationInfo info,
            StreamingContext context)
            : this(info.GetValue<byte[]>("address"))
        {
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a <see
        /// cref="PublicKey"/>.
        /// <para>Note that there is an equivalent extension method
        /// <see cref="AddressExtension.ToAddress(PublicKey)"/>, which enables
        /// a code like <c>publicKey.ToAddress()</c> instead of
        /// <c>new Address(publicKey)</c>, for convenience.</para>
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <seealso cref="AddressExtension.ToAddress(PublicKey)"/>
        public Address(PublicKey publicKey)
            : this(DeriveAddress(publicKey))
        {
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a hexadecimal
        /// address string.
        /// </summary>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c> was
        /// passed to <paramref name="hex"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="hex"/> did not lengthen 40 characters.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="hex"/> is mixed-case and the checksum is invalid.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref
        /// name="hex"/> does not consist of ASCII characters.</exception>
        /// <param name="hex">A 40 characters hexadecimal address string to
        /// derive the corresponding <see cref="Address"/> from. The string
        /// should be all lower-case or mixed-case which follows <a
        /// href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"
        /// >EIP 55</a>.</param>
        public Address(string hex)
            : this(DeriveAddress(hex))
        {
        }

        /// <summary>
        /// An immutable array of 20 <see cref="byte"/>s that represent this
        /// <see cref="Address"/>.
        /// </summary>
        /// <remarks>This is immutable.  For a mutable array, call <see
        /// cref="ToByteArray()"/> method.</remarks>
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
        public string ToHex()
        {
            string hex = ByteUtil.Hex(ToByteArray());
            return ToChecksumAddress(hex);
        }

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
        public override string ToString()
        {
            return $"0x{ToHex()}";
        }

        /// <inheritdoc />
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context)
        {
            info.AddValue("address", _byteArray.ToArray());
        }

        private static string ToChecksumAddress(string hex)
        {
            byte[] bytes = Encoding.ASCII.GetBytes(hex);
            byte[] hash = CalculateHash(bytes);
            string hashHex = ByteUtil.Hex(hash);
            string address = string.Empty;

            for (var i = 0; i < hex.Length; i++)
            {
                char c = hex[i];
                address += (hashHex[i] >= '8') ? char.ToUpper(c) : c;
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

        private static byte[] DeriveAddress(PublicKey key)
        {
            byte[] hashPayload = key.Format(false).Skip(1).ToArray();
            var output = CalculateHash(hashPayload);

            return output.Skip(output.Length - Size).ToArray();
        }

        private static byte[] DeriveAddress(string hex)
        {
            if (hex == null)
            {
                throw new ArgumentNullException(nameof(hex));
            }

            if (hex.Length != 40)
            {
                throw new ArgumentException(
                    "Address hex must be 40 bytes, but " +
                    $"{hex.Length} bytes were passed.",
                    nameof(hex)
                );
            }

            if (hex.ToLower() != hex && ToChecksumAddress(hex.ToLower()) != hex)
            {
                throw new ArgumentException(
                    "address checksum is invalid",
                    nameof(hex)
                );
            }

            try
            {
                return ByteUtil.ParseHex(hex);
            }
            catch (FormatException)
            {
                throw new ArgumentException(
                    "address hex must only consist of ASCII characters"
                );
            }
        }
    }
}
