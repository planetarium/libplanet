#nullable disable
using System;
using System.Collections.Generic;
#if !NETSTANDARD2_1
using System.Diagnostics;
#endif
using System.Linq;

namespace Libplanet
{
    internal static class EnumerableExtensions
    {
        /// <summary>
        /// Similar to <see
        /// cref="Enumerable.Max{TSource,TResult}(IEnumerable{TSource}, Func{TSource, TResult})"/>
        /// method, but it returns the source element with the maximum value of the given
        /// <paramref name="selector"/>, instead of the maximum value.
        /// </summary>
        /// <param name="source">The source enumerable.</param>
        /// <param name="selector">A function to select the value to compare.</param>
        /// <typeparam name="TSource">The type of the source elements.</typeparam>
        /// <typeparam name="TComparable">The type of the value to compare.</typeparam>
        /// <returns>The source element with the maximum value of the given
        /// <paramref name="selector"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the source sequence is empty.
        /// </exception>
        public static TSource Greatest<TSource, TComparable>(
            this IEnumerable<TSource> source,
            Func<TSource, TComparable> selector
        )
            where TComparable : IComparable<TComparable>
        {
            bool first = true;
            TSource greatestElement = default;
            TComparable greatestValue = default;
            foreach (TSource element in source)
            {
                TComparable value = selector(element);
                if (first || value.CompareTo(greatestValue) > 0)
                {
                    greatestValue = value;
                    greatestElement = element;
                }

                first = false;
            }

            if (first)
            {
                throw new InvalidOperationException("Sequence contains no elements.");
            }

            return greatestElement;
        }

#if !NETSTANDARD2_1
        // Copied from .NET Runtime <https://git.io/JL8X6#L115-L154>
        public static IEnumerable<TSource> SkipLast<TSource>(
            this IEnumerable<TSource> source,
            int count
        )
        {
            if (source == null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            return count <= 0 ? source.Skip(0) : SkipLastIterator(source, count);
        }

        private static IEnumerable<TSource> SkipLastIterator<TSource>(
            IEnumerable<TSource> source,
            int count
        )
        {
            Debug.Assert(source != null, $"The {nameof(source)} must not be null.");
            Debug.Assert(count > 0, $"The {count} must be greater than zero.");

            var queue = new Queue<TSource>();

            using IEnumerator<TSource> e = source.GetEnumerator();
            while (e.MoveNext())
            {
                if (queue.Count == count)
                {
                    do
                    {
                        yield return queue.Dequeue();
                        queue.Enqueue(e.Current);
                    }
                    while (e.MoveNext());
                    break;
                }
                else
                {
                    queue.Enqueue(e.Current);
                }
            }
        }
#endif
    }
}
