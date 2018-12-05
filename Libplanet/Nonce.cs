using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct Nonce : IEquatable<Nonce>
    #pragma warning restore CS0282
    {
        [Uno.EqualityKey]
        public readonly ImmutableArray<byte> ByteArray;

        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new NullReferenceException("nonce must not be null");
            }

            ByteArray = nonce.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }
}
