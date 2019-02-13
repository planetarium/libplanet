using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Tx
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct TxId
    #pragma warning restore CS0282
    {
        public const int RequiredLength = 32;
        private ImmutableArray<byte> _byteArray;

        public TxId(byte[] txid)
        {
            if (txid == null)
            {
                throw new ArgumentNullException(
                    $"It must not be null.",
                    nameof(txid)
                );
            }

            if (txid.Length != RequiredLength)
            {
                throw new ArgumentException(
                    $"It must be {RequiredLength} bytes.",
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

        [Uno.EqualityKey]
        public ImmutableArray<byte> ByteArray
        {
            get
            {
                if (_byteArray.IsDefault)
                {
                    _byteArray = new byte[RequiredLength].ToImmutableArray();
                }

                return _byteArray;
            }
        }

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        [Pure]
        public string ToHex() => ByteUtil.Hex(ToByteArray());

        [Pure]
        public override string ToString()
        {
            return ToHex();
        }
    }
}
