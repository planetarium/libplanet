using System.Collections.Generic;

namespace Libplanet.DataBase
{
    public static class Utils
    {
        public static int ByteCompare(IReadOnlyList<byte> x, IReadOnlyList<byte> y)
        {
            for (var idx = 0; idx < x.Count; idx++)
            {
                var cmp = x[idx].CompareTo(y[idx]);
                if (cmp != 0)
                {
                    return cmp;
                }
            }

            if (x.Count == y.Count) return 0;
            if (x.Count > y.Count) return -1;
            return 1; // x.Count < y.Count
        }
    }
}
