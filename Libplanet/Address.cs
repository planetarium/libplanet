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
        private ImmutableArray<byte> _byteArray;

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

            _byteArray = address.ToImmutableArray();

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
                    _byteArray = new byte[20].ToImmutableArray();
                }

                return _byteArray;
            }
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
            return $"0x{Hex()}";
        }

        public string Hex()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }
}
