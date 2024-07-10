using System;
using System.Collections.Generic;

namespace Libplanet.Types.Evidence
{
    public sealed class EvidenceIdComparer : IComparer<EvidenceId>
    {
        private readonly Func<EvidenceId, EvidenceId, int> _comparer;

        private EvidenceIdComparer(Func<EvidenceId, EvidenceId, int> comparer)
        {
            _comparer = comparer;
        }

        public static EvidenceIdComparer Ascending { get; }
            = new EvidenceIdComparer((x, y) => x.CompareTo(y));

        public static EvidenceIdComparer Descending { get; }
            = new EvidenceIdComparer((x, y) => y.CompareTo(x));

        public int Compare(EvidenceId x, EvidenceId y) => _comparer(x, y);
    }
}
