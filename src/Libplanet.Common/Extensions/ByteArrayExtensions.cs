using System;
using System.Diagnostics.Contracts;

namespace Libplanet.Common.Extensions;

/// <summary>
/// This extension class enables some convenient methods to deal with byte array.
/// </summary>
public static class ByteArrayExtensions
{
    /// <summary>
    /// Determines whether the beginning of this byte array instance matches a specified string.
    /// </summary>
    /// <param name="this">A byte array to check.</param>
    /// <param name="prefix">The prefix byte array to compare.</param>
    /// <returns>
    /// true if <paramref name="prefix"/> matches the beginning of <paramref name="this"/>;
    /// otherwise, false.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="this"/> or <paramref name="prefix"/> is null.
    /// </exception>
    [Pure]
    public static bool StartsWith(this byte[] @this, byte[] prefix)
    {
        if (prefix.Length > @this.Length)
        {
            return false;
        }

        for (int i = 0, j = 0; i < @this.Length && j < prefix.Length; i++, j++)
        {
            if (@this[i] != prefix[j])
            {
                return false;
            }
        }

        return true;
    }

    [Pure]
    public static int IndexOf(this byte[] @this, byte[] sub)
    {
        if (@this.Length < 1)
        {
            return sub.Length > 0 ? -1 : 0;
        }
        else if (@this.Length < sub.Length)
        {
            return -1;
        }

        for (var i = 0; i < @this.Length; i++)
        {
            var found = true;
            for (var j = 0; j < sub.Length; j++)
            {
                if (@this[i + j] != sub[j])
                {
                    found = false;
                    break;
                }
            }

            if (found)
            {
                return i;
            }
        }

        return -1;
    }
}
