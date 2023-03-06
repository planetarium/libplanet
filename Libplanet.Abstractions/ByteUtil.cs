using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Runtime.CompilerServices;

namespace Libplanet
{
    /// <summary>
    /// Utility methods to deal with <see cref="byte"/> arrays.
    /// </summary>
    public static class ByteUtil
    {
        private static readonly char[] _hexCharLookup =
        {
            '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
        };

        /// <summary>
        /// Converts a hexadecimal string to a mutable <see cref="byte"/> array.
        /// </summary>
        /// <param name="hex">A <see cref="string"/> which encodes
        /// <see cref="byte"/>s in hexadecimal.  Its length must be zero or
        /// an even number.  It must not be <see langword="null"/>.</param>
        /// <returns>A <see cref="byte"/> array that the given
        /// <paramref name="hex"/> string represented in hexadecimal.
        /// It lengthens the half of the given <paramref name="hex"/> string.
        /// </returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length
        /// of the given <paramref name="hex"/> string is an odd number.
        /// </exception>
        /// <exception cref="FormatException">Thrown when the given
        /// <paramref name="hex"/> string is not a valid hexadecimal string.
        /// </exception>
        /// <seealso cref="ParseHexToImmutable(string)"/>
        /// <seealso cref="Hex(byte[])"/>
        [Pure]
        public static byte[] ParseHex(string hex)
        {
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
                bytes[i] = byte.Parse(
                    hex.Substring(i * 2, 2), NumberStyles.HexNumber, CultureInfo.InvariantCulture);
            }

            return bytes;
        }

        /// <summary>
        /// Converts a hexadecimal string to an immutable <see cref="byte"/> array.
        /// </summary>
        /// <param name="hex">A <see cref="string"/> which encodes <see cref="byte"/>s in
        /// hexadecimal.  Its length must be zero or an even number.  It must not be
        /// <see langword="null"/>.</param>
        /// <returns>A <see cref="byte"/> array that the given <paramref name="hex"/> string
        /// represented in hexadecimal.  It lengthens the half of the given <paramref name="hex"/>
        /// string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is an odd number.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string
        /// is not a valid hexadecimal string.</exception>
        /// <seealso cref="ParseHex(string)"/>
        /// <seealso cref="Hex(in ImmutableArray{byte})"/>
        [Pure]
        public static ImmutableArray<byte> ParseHexToImmutable(string hex)
        {
            byte[] bytes = ParseHex(hex);
            ImmutableArray<byte> movedImmutableArray =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref bytes);
            return movedImmutableArray;
        }

        /// <summary>
        /// Renders a hexadecimal string from a <see cref="byte"/> array.
        /// </summary>
        /// <param name="bytes">A <see cref="byte"/> array to renders
        /// the corresponding hexadecimal string.
        /// </param>
        /// <returns>A hexadecimal string which encodes the given
        /// <paramref name="bytes"/>.</returns>
        /// <seealso cref="Hex(in ImmutableArray{byte})"/>
        /// <seealso cref="ParseHex(string)"/>
        [Pure]
        public static string Hex(byte[] bytes)
        {
            char[] chars = new char[bytes.Length * 2];
            for (int i = 0; i < bytes.Length; i++)
            {
                chars[i * 2] = _hexCharLookup[bytes[i] >> 4];
                chars[i * 2 + 1] = _hexCharLookup[bytes[i] & 0xf];
            }

            return new string(chars);
        }

        /// <summary>
        /// Renders a hexadecimal string from a <see cref="byte"/> array.
        /// </summary>
        /// <param name="bytes">A <see cref="byte"/> array to renders
        /// the corresponding hexadecimal string.
        /// </param>
        /// <returns>A hexadecimal string which encodes the given
        /// <paramref name="bytes"/>.</returns>
        /// <seealso cref="Hex(byte[])"/>
        /// <seealso cref="ParseHexToImmutable(string)"/>
        [Pure]
        public static string Hex(in ImmutableArray<byte> bytes) =>
            Hex(bytes.IsDefaultOrEmpty ? new byte[0] : bytes.ToArray());

        /// <summary>
        /// Calculates a deterministic hash code from a given
        /// <paramref name="bytes"/>.  It is mostly used to implement
        /// <see cref="object.GetHashCode()"/> method.
        /// </summary>
        /// <param name="bytes">A <see cref="byte"/> array, which completely
        /// determines (or encodes) an object, to calculate a hash code.</param>
        /// <returns>A hash code determined from the given
        /// <paramref name="bytes"/>.  For equivalent <paramref name="bytes"/>,
        /// the same hash code is returned.  It must not be <see langword="null"/>.
        /// </returns>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="bytes"/> is <see langword="null"/>.</exception>
        [Pure]
        public static int CalculateHashCode(byte[] bytes)
        {
            if (bytes == null)
            {
                throw new ArgumentNullException(nameof(bytes));
            }

            int code = 0;
            unchecked
            {
                foreach (byte b in bytes)
                {
                    code = (code * 397) ^ b.GetHashCode();
                }
            }

            return code;
        }

        /// <summary>
        /// Timing safe comparision of two byte arrays.
        /// </summary>
        /// <remarks>In case of two byte arrays do not have the same length, it tries to keep
        /// the timing dependent on the length of the shorter one.</remarks>
        /// <param name="left">A byte array.</param>
        /// <param name="right">Another byte array.</param>
        /// <returns><see langword="true"/> iff two byte arrays have the exactly same contents.
        /// </returns>
        [Pure]
        public static bool TimingSafelyCompare(IReadOnlyList<byte> left, IReadOnlyList<byte> right)
        {
            bool differ = left.Count != right.Count;
            for (int i = 0, len = Math.Min(left.Count, right.Count); i < len; i++)
            {
                differ = differ || (left[i] ^ right[i]) != 0;
            }

            return !differ;
        }

        /// <summary>
        /// Tests if a hash digest is less than the target computed for the given
        /// <paramref name="difficulty"/>).
        /// </summary>
        /// <param name="hashDigest">A hash digest to test.</param>
        /// <param name="difficulty">The difficulty to compute target number.</param>
        /// <returns><see langword="true"/> only if a digest is less than the target computed for
        /// the given <paramref name="difficulty"/>).  If <paramref name="difficulty"/> is <c>0</c>
        /// it always returns <see langword="true"/>.</returns>
        [Pure]
        public static bool Satisfies(IReadOnlyList<byte> hashDigest, long difficulty)
        {
            if (difficulty == 0)
            {
                return true;
            }
            else if (!hashDigest.Any())
            {
                return false;
            }

            var maxTargetBytes = new byte[hashDigest.Count + 1];
            maxTargetBytes[hashDigest.Count] = 0x01;
            var maxTarget = new BigInteger(maxTargetBytes);
            BigInteger target = maxTarget / difficulty;

            var digestArray = new byte[hashDigest.Count + 1];
            int i = 0;
            foreach (byte b in hashDigest)
            {
                digestArray[i++] = b;
            }

            // Append zero to convert unsigned BigInteger.  Note that BigInteger(byte[]) assumes
            // the input bytes are in little-endian order.
            digestArray[i] = 0;

            var result = new BigInteger(digestArray);
            return result < target;
        }
    }
}
