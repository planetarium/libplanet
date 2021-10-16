#if !NETSTANDARD2_1
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Libplanet
{
    internal static class EnumerableExtensions
    {
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
    }
}
#endif
