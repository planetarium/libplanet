using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class ValidatorPowerIndex
    {
        public ValidatorPowerIndex()
        {
            Index = new SortedSet<ValidatorPower>();
        }

        public ValidatorPowerIndex(IValue serialized)
        {
            IEnumerable<ValidatorPower> items
                = ((List)serialized).Select(item => new ValidatorPower(item));
            Index = new SortedSet<ValidatorPower>(items);
        }

        public ValidatorPowerIndex(ValidatorPowerIndex consensusPowerIndexInfo)
        {
            Index = consensusPowerIndexInfo.Index;
        }

        public SortedSet<ValidatorPower> Index { get; set; }

        public Address Address => ReservedAddress.ValidatorPowerIndex;

        public List<Address> ValidatorAddresses
            => Index.Select(key => key.ValidatorAddress).ToList();

        public IValue Serialize()
            => new List(Index.Select(consensusPowerKey => consensusPowerKey.Serialize()));
    }
}
