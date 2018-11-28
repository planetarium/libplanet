using System;
using System.Diagnostics.Contracts;

namespace Libplanet
{
    public struct Nonce
    {
        private readonly byte[] _nonce;

        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new NullReferenceException("nonce must not be null");
            }

            _nonce = nonce;
        }

        [Pure]
        public byte[] ToByteArray()
        {
            return (byte[])_nonce.Clone();
        }

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }
}
