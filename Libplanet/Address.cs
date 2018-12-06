using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Libplanet.Crypto;
using Org.BouncyCastle.Crypto.Digests;

namespace Libplanet
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct Address
    #pragma warning restore CS0282
    {
        [Uno.EqualityKey]
        public readonly ImmutableArray<byte> ByteArray;

        public Address(byte[] address)
        {
            if (address == null)
            {
                throw new NullReferenceException("address must not be null");
            }

            if (address.Length != 20)
            {
                throw new ArgumentException("address must be 20 bytes");
            }

            ByteArray = address.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        [Pure]
        public static Address FromPublicKey(PublicKey key)
        {
            byte[] hashPayload = key.Format(false).Skip(1).ToArray();
            var digest = new KeccakDigest(256);
            var output = new byte[digest.GetDigestSize()];
            digest.BlockUpdate(hashPayload, 0, hashPayload.Length);
            digest.DoFinal(output, 0);

            return new Address(output.Skip(output.Length - 20).ToArray());
        }

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        [Pure]
        public override string ToString()
        {
            return $"0x{ByteUtil.Hex(ToByteArray())}";
        }
    }
}
