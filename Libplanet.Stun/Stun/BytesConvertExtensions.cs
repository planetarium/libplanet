using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Stun
{
    internal static class BytesConvertExtensions
    {
        public static byte[] ToBytes(this ushort value)
        {
            var rv = new byte[sizeof(ushort)];

            rv[0] = (byte)((0xff00 & value) >> 8);
            rv[1] = (byte)(0x00ff & value);

            return rv;
        }

        public static byte[] ToBytes(this uint value)
        {
            var rv = new byte[sizeof(uint)];

            rv[0] = (byte)((0xff000000 & value) >> 24);
            rv[1] = (byte)((0x00ff0000 & value) >> 16);
            rv[2] = (byte)((0x0000ff00 & value) >> 8);
            rv[3] = (byte)(0x000000ff & value);

            return rv;
        }

        public static ushort ToUShort(this IEnumerable<byte> bytes)
        {
            byte[] bs = bytes.ToArray();

            if (bs.Length != sizeof(ushort))
            {
                throw new ArgumentOutOfRangeException(nameof(bytes));
            }

            ushort rv = bs[0];
            rv = (ushort)(rv << 8);
            rv |= bs[1];

            return rv;
        }

        public static uint ToUInt(this IEnumerable<byte> bytes)
        {
            byte[] bs = bytes.ToArray();

            if (bs.Length != sizeof(uint))
            {
                throw new ArgumentOutOfRangeException(nameof(bytes));
            }

            uint rv = bs[0];
            rv = rv << 8;
            rv |= bs[1];
            rv = rv << 8;
            rv |= bs[2];
            rv = rv << 8;
            rv |= bs[3];

            return rv;
        }
    }
}
