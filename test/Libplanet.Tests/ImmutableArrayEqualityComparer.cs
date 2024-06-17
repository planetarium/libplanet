using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Tests
{
    public class ImmutableArrayEqualityComparer<T> : IEqualityComparer<ImmutableArray<T>>
    {
        public bool Equals(ImmutableArray<T> x, ImmutableArray<T> y)
            => x.Length == y.Length && x.SequenceEqual(y);

        public int GetHashCode(ImmutableArray<T> obj)
        {
            int code = 0;
            unchecked
            {
                foreach (T el in obj)
                {
                    code = (code * 397) ^ el.GetHashCode();
                }
            }

            return code;
        }
    }
}
