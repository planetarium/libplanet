using System;
using System.Text;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// Collection of wrapper methods to convert to byte-arrays from various types to store
    /// <see cref="RocksDBStore"/>.  Every integer data is converted to Big-endian, or
    /// "Network Byte Order" to order index lexicographically.
    /// </summary>
    internal static class RocksDBStoreBitConverter
    {
        /// <summary>
        /// Get <c>long</c> representation of the <paramref name="value"/>.
        /// </summary>
        /// <param name="value">The Big-endian byte-array value to convert to <c>long</c>.</param>
        /// <returns>The <c>long</c> representation of the <paramref name="value"/>.</returns>
        public static long ToInt64(byte[] value)
        {
            byte[] bytes = new byte[sizeof(long)];
            value.CopyTo(bytes, 0);

            // Use Big-endian to order index lexicographically.
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(bytes);
            }

            return BitConverter.ToInt64(bytes, 0);
        }

        /// <summary>
        /// Get <c>string</c> representation of the <paramref name="value"/>.
        /// </summary>
        /// <param name="value">The byte-array value to convert to <c>string</c>.</param>
        /// <returns>The <c>string</c> representation of the <paramref name="value"/>.</returns>
        public static string GetString(byte[] value)
        {
            return Encoding.UTF8.GetString(value);
        }

        /// <summary>
        /// Get Big-endian byte-array representation of the <paramref name="value"/>.
        /// </summary>
        /// <param name="value">The <c>long</c> value to convert to byte-array.</param>
        /// <returns>The Big-endian byte-array representation of the <paramref name="value"/>.
        /// </returns>
        public static byte[] GetBytes(long value)
        {
            byte[] bytes = BitConverter.GetBytes(value);

            // Use Big-endian to order index lexicographically.
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(bytes);
            }

            return bytes;
        }

        /// <summary>
        /// Get encoded byte-array representation of the <paramref name="value"/>.
        /// </summary>
        /// <param name="value">The <c>string</c> to convert to byte-array.</param>
        /// <returns>The encoded representation of the <paramref name="value"/>.</returns>
        public static byte[] GetBytes(string value)
        {
            return Encoding.UTF8.GetBytes(value);
        }
    }
}
