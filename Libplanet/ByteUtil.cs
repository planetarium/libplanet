using System;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    /// <summary>
    /// Utility methods to deal with <see cref="byte"/> arrays.
    /// </summary>
    public static class ByteUtil
    {
        /// <summary>
        /// Converts a hexadecimal string to a <see cref="byte"/> array.
        /// </summary>
        /// <param name="hex">A <see cref="string"/> which encodes
        /// <see cref="byte"/>s in hexadecimal.  Its length must be zero or
        /// an even number.  It must not be <c>null</c>.</param>
        /// <returns>A <see cref="byte"/> array that the given
        /// <paramref name="hex"/> string represented in hexadecimal.
        /// It lengthens the half of the given <paramref name="hex"/> string.
        /// </returns>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="hex"/> string is <c>null</c>.
        /// </exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length
        /// of the given <paramref name="hex"/> string is an odd number.
        /// </exception>
        /// <exception cref="FormatException">Thrown when the given
        /// <paramref name="hex"/> string is not a valid hexadecimal string.
        /// </exception>
        [Pure]
        public static byte[] ParseHex(string hex)
        {
            if (hex == null)
            {
                throw new ArgumentNullException(nameof(hex));
            }

            if (hex.Length % 2 > 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    "A length of a hexadecimal string must be an even number."
                );
            }

            var bytes = new byte[hex.Length / 2];
            for (var i = 0; i < hex.Length / 2; i++)
            {
                bytes[i] = Convert.ToByte(hex.Substring(i * 2, 2), 16);
            }

            return bytes;
        }

        /// <summary>
        /// Renders a hexadecimal string from a <see cref="byte"/> array.
        /// </summary>
        /// <param name="bytes">A <see cref="byte"/> array to renders
        /// the corresponding hexadecimal string.  It must not be <c>null</c>.
        /// </param>
        /// <returns>A hexadecimal string which encodes the given
        /// <paramref name="bytes"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="bytes"/> is <c>null</c>.</exception>
        [Pure]
        public static string Hex(byte[] bytes)
        {
            if (bytes == null)
            {
                throw new ArgumentNullException(nameof(bytes));
            }

            string s = BitConverter.ToString(bytes);

            return s.Replace("-", string.Empty).ToLower();
        }

        /// <summary>
        /// Calculates a deterministic hash code from a given
        /// <paramref name="bytes"/>.  It is mostly used to implement
        /// <see cref="object.GetHashCode()"/> method.
        /// </summary>
        /// <param name="bytes">A <see cref="byte"/> array, which completely
        /// determines (or encodes) an object, to calculate a hash code.</param>
        /// <returns>A hash code determined from the given
        /// <paramref name="bytes"/>.  For equivalent <paramref name="bytes"/>,
        /// the same hash code is returned.  It must not be <c>null</c>.
        /// </returns>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="bytes"/> is <c>null</c>.</exception>
        [Pure]
        public static int CalculateHashCode(byte[] bytes)
        {
            if (bytes == null)
            {
                throw new ArgumentNullException(nameof(bytes));
            }

            return bytes.Aggregate(
                0,
                (current, t) => unchecked(current * (bytes.Length + 1) + t)
            );
        }
    }
}
