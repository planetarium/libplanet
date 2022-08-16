using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    internal class ConsensusPowerIndexInfo
    {
        internal ConsensusPowerIndexInfo()
        {
            Index = new SortedSet<ConsensusPowerKey>(new ConsensusPowerKeyComparer());
        }

        internal ConsensusPowerIndexInfo(IValue serialized)
        {
            IEnumerable<ConsensusPowerKey> items
                = ((List)serialized).Select(item => new ConsensusPowerKey(item));
            Index = new SortedSet<ConsensusPowerKey>(items, new ConsensusPowerKeyComparer());
        }

        public SortedSet<ConsensusPowerKey> Index { get; set; }

        public Address Address => ReservedAddress.ConsensusPowerIndex;

        internal IValue Serialize()
            => new List(Index.Select(consensusPowerKey => consensusPowerKey.Serialize()));
    }
}
