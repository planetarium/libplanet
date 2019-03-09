using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

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
    #pragma warning disable CS0282
    [Serializable]
    [Uno.GeneratedEquality]
    public partial struct TxId : ISerializable
    #pragma warning restore CS0282
    {
        /// <summary>
        /// The <see cref="byte"/> size that each <see cref="TxId"/> takes.
        /// <para>As a txid is a SHA-256 digest, it is 32 <see cref="byte"/>s.
        /// </para>
        /// </summary>
        public const int Size = 32;

        private ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="TxId"/>.
        /// </summary>
        /// <param name="txid">A <see cref="byte"/> array that encodes
        /// a <see cref="TxId"/>.  It must not be <c>null</c>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="txid"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="txid"/>'s <see cref="Array.Length"/> is not
        /// the same to the required <see cref="Size"/>.</exception>
        public TxId(byte[] txid)
        {
            if (txid == null)
            {
                throw new ArgumentNullException(nameof(txid));
            }

            if (txid.Length != Size)
            {
                throw new ArgumentOutOfRangeException(
                    $"TxId must be {Size} bytes.",
                    nameof(txid)
                );
            }

            _byteArray = txid.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        public TxId(
            SerializationInfo info,
            StreamingContext context)
            : this(info.GetValue<byte[]>("tx_id"))
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of
        /// this <see cref="TxId"/>.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        [Uno.EqualityKey]
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

        /// <inheritdoc />
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context)
        {
            info.AddValue("tx_id", _byteArray.ToArray());
        }
    }
}
