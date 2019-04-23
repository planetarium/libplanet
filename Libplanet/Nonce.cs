using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    /// <summary>
    /// An arbitrary <see cref="byte"/>s that determines a
    /// <see cref="Hashcash.Stamp"/>.
    /// </summary>
    [Equals]
    public struct Nonce
    {
        private ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="Nonce"/>
        /// value.
        /// <para>This constructor is an inverse function of
        /// <see cref="ToByteArray()"/> method.</para>
        /// </summary>
        /// <param name="nonce">A <see cref="byte"/> array to convert to
        /// a <see cref="Nonce"/> object.  It must not be <c>null</c>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="nonce"/> is a <c>null</c>.</exception>
        /// <seealso cref="ToByteArray()"/>
        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new ArgumentNullException(nameof(nonce));
            }

            _byteArray = nonce.ToImmutableArray();
        }

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
}
