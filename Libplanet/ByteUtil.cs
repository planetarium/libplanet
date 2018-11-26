using System;

namespace Libplanet
{
    public static class ByteUtil
    {
        public static byte[] ParseHex(string hex)
        {
            var bytes = new byte[hex.Length / 2];
            for (var i = 0; i < hex.Length / 2; i++)
            {
                bytes[i] = Convert.ToByte(hex.Substring(i * 2, 2), 16);
            }

            return bytes;
        }

        public static string Hex(byte[] bytes)
        {
            string s = BitConverter.ToString(bytes);

            return s.Replace("-", string.Empty).ToLower();
        }
    }
}
