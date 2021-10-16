using System.Collections.Generic;
using System.Linq;

namespace Libplanet.RocksDBStore
{
    public static class EnumerableExtensions
    {
        public static IEnumerable<TSource> LongSkip<TSource>(
            this IEnumerable<TSource> source,
            long count
        )
        {
            if (count < 0)
            {
                count = 0;
            }

            if (count <= int.MaxValue)
            {
                return source.Skip((int)count);
            }

            return SkipIterator(source, count);
        }

        private static IEnumerable<TSource> SkipIterator<TSource>(
            IEnumerable<TSource> source,
            long count
        )
        {
            foreach (var item in source)
            {
                if (count > 0)
                {
                    --count;
                }
                else
                {
                    yield return item;
                }
            }
        }
    }
}
