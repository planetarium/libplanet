using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class ConsensusPowerIndexInfo
    {
        public ConsensusPowerIndexInfo()
        {
            Index = new SortedSet<ConsensusPowerKey>(new ConsensusPowerKeyComparer());
        }

        public ConsensusPowerIndexInfo(IValue serialized)
        {
            IEnumerable<ConsensusPowerKey> items
                = ((List)serialized).Select(item => new ConsensusPowerKey(item));
            Index = new SortedSet<ConsensusPowerKey>(items, new ConsensusPowerKeyComparer());
        }

        public ConsensusPowerIndexInfo(ConsensusPowerIndexInfo consensusPowerIndexInfo)
        {
            Index = consensusPowerIndexInfo.Index;
        }

        public SortedSet<ConsensusPowerKey> Index { get; set; }

        public Address Address => ReservedAddress.ConsensusPowerIndex;

        public List<Address> ValidatorAddresses
            => Index.Select(key => key.ValidatorAddress).ToList();

        public IValue Serialize()
            => new List(Index.Select(consensusPowerKey => consensusPowerKey.Serialize()));
    }
}
