#nullable enable
using System.Collections.Generic;

namespace Libplanet
{
    /// <summary>
    /// Extension methods for measuring exact evaluation time of lazy <see cref="IEnumerable{T}"/>
    /// objects.
    /// </summary>
    internal static class EnumerableMeasurement
    {
        /// <summary>
        /// Invokes the specified actions before and after the actual evaluation of the specified
        /// <paramref name="enumerable"/> object.
        /// </summary>
        /// <example><![CDATA[
        /// Console.WriteLine("Before GetStream() call.");
        /// IEnumerable<int> stream = GetStream().OnBeforeAndAfter(
        ///     before: () => Console.WriteLine("Before enumeration."),
        ///     after: () => Console.WriteLine("After enumeration.")
        /// );
        /// Console.WriteLine("After GetStream() call.");
        /// foreach (int i in stream) Console.WriteLine("Enumerating... {0}", i);
        /// // Output:
        /// // Before GetStream() call.
        /// // After GetStream() call.
        /// // Before enumeration.
        /// // Enumerating... 1
        /// // Enumerating... 2
        /// // ...
        /// // After enumeration.
        /// ]]></example>
        /// <param name="enumerable">An enumerable object.</param>
        /// <param name="before">An action to be invoked right before enumeration.</param>
        /// <param name="after">An action to be invoked right after enumeration.</param>
        /// <typeparam name="T">The type of the elements of <paramref name="enumerable"/>.
        /// </typeparam>
        /// <returns>Equivalent to <paramref name="enumerable"/>.</returns>
        public static IEnumerable<T> OnBeforeAndAfter<T>(
            this IEnumerable<T> enumerable,
            System.Action before,
            System.Action after
        )
        {
            before();
            foreach (var item in enumerable)
            {
                yield return item;
            }

            after();
        }
    }
}
