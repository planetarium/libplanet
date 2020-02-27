using System;
using System.Diagnostics.Contracts;

namespace Libplanet
{
    /// <summary>
    /// This extension class enables some convenient methods to deal with byte array.
    /// </summary>
    /// <seealso cref="Address"/>
    public static class ByteArrayExtensions
    {
        /// <summary>
        /// Determines whether the beginning of this byte array instance matches a specified string.
        /// </summary>
        /// <param name="bytes">A byte array to check.</param>
        /// <param name="prefix">The prefix byte array to compare.</param>
        /// <returns>
        /// true if <paramref name="prefix"/> matches the beginning of <paramref name="bytes"/>;
        /// otherwise, false.
        /// </returns>
        /// <exception cref="ArgumentNullException">
        /// <paramref name="bytes"/> or <paramref name="prefix"/> is null.
        /// </exception>
        [Pure]
        public static bool StartsWith(this byte[] bytes, byte[] prefix)
        {
            if (bytes is null)
            {
                throw new ArgumentNullException(nameof(bytes));
            }

            if (prefix is null)
            {
                throw new ArgumentNullException(nameof(prefix));
            }

            if (prefix.Length > bytes.Length)
            {
                return false;
            }

            for (int i = 0, j = 0; i < bytes.Length && j < prefix.Length; i++, j++)
            {
                if (bytes[i] != prefix[j])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
