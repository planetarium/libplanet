using System;

namespace Libplanet
{
    public struct Address
    {
        private readonly byte[] _address;

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
            _address = address;
        }

        public byte[] ToByteArray()
        {
            return _address;
        }

        public override string ToString()
        {
            return BitConverter.ToString(ToByteArray())
                .Replace("-", "")
                .ToLower();
        }
    }
}
