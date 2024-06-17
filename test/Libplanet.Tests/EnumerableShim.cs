#pragma warning disable S1128
using System.Collections.Generic;
#pragma warning restore S1128 // S1128: Remove this unnecessary 'using'

namespace Libplanet.Tests
{
    /// <summary>
    /// Compatibility shim to fill the lack of extension methods on <see cref="IEnumerable{T}"/>
    /// in several target frameworks.
    /// </summary>
    public static class EnumerableShim
    {
#if NETFRAMEWORK && !NET48 && !NET472 && !NET471
        // Enumerable.Append<T>(IEnumerable<T>, T) is introduced since .NET Framework 4.7.1
        public static IEnumerable<T> Append<T>(this IEnumerable<T> source, T element)
        {
            foreach (T e in source)
            {
                yield return e;
            }

            yield return element;
        }
#endif
    }
}
