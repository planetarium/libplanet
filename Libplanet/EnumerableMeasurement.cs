using System.Collections.Generic;
using System.Diagnostics;

namespace Libplanet
{
    /// <summary>
    /// Extension methods for measuring exact evaluation time of lazy <see cref="IEnumerable{T}"/>
    /// objects.
    /// </summary>
    public static class EnumerableMeasurement
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

        /// <summary>
        /// Measures how long it takes to actually evaluate the specified
        /// <paramref name="enumerable"/> and then reports the elapsed time through
        /// the specified <paramref name="onMeasured"/> callback.
        /// </summary>
        /// <example><![CDATA[
        /// IEnumerable<int> stream = GetStream().WithMeasuringTime(
        ///     elapsed => Console.WriteLine("Elapsed time: {0} ms", elapsed.ElapsedMilliseconds)
        /// );
        /// foreach (int i in stream) Console.WriteLine("Enumerating... {0}", i);
        /// // Output:
        /// // Enumerating... 1
        /// // Enumerating... 2
        /// // ...
        /// // Elapsed time: ... ms
        /// ]]></example>
        /// <param name="enumerable">An enumerable object.</param>
        /// <param name="onMeasured">A callback to be invoked when the enumeration and its
        /// measurement is done.  A <see cref="Stopwatch"/> instance is passed as the
        /// first argument to the callback.</param>
        /// <typeparam name="T">The type of the elements of <paramref name="enumerable"/>.
        /// </typeparam>
        /// <returns>Equivalent to <paramref name="enumerable"/>.</returns>
        public static IEnumerable<T> WithMeasuringTime<T>(
            this IEnumerable<T> enumerable,
            System.Action<Stopwatch> onMeasured
        )
        {
            var stopwatch = new Stopwatch();
            return OnBeforeAndAfter(
                enumerable,
                before: stopwatch.Start,
                after: () =>
                {
                    stopwatch.Stop();
                    onMeasured(stopwatch);
                }
            );
        }
    }
}
