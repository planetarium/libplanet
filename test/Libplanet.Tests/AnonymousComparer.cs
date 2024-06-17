using System;
using System.Collections.Generic;

namespace Libplanet.Tests
{
    public class AnonymousComparer<T> : IComparer<T>
    {
        private Func<T, T, int> _comparer;

        public AnonymousComparer(Func<T, T, int> comparer)
        {
            _comparer = comparer;
        }

        public int Compare(T x, T y) => _comparer(x, y);
    }
}
