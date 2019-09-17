using System;
using System.Collections.Generic;
using System.Text;

namespace Libplanet
{
    public static class EnumerableExtension
    {
        public static IEnumerable<T> ToEnumerable<T>(this T item)
        {
            yield return item;
        }
    }
}
