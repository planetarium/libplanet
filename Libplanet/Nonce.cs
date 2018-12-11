using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct Nonce
    #pragma warning restore CS0282
    {
        private ImmutableArray<byte> _byteArray;

        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new NullReferenceException("nonce must not be null");
            }

            _byteArray = nonce.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        [Uno.EqualityKey]
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

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        [Pure]
        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }
}
