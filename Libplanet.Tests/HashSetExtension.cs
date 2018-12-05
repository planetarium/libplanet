using System.Collections.Generic;

namespace Libplanet.Tests
{
    public static class HashSetExtension
    {
        public static HashSet<T> ToHashSet<T>(this IEnumerable<T> l)
        {
            return new HashSet<T>(l);
        }
    }
}
