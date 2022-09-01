using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class UnbondingSet
    {
        public UnbondingSet()
        {
            ValidatorAddressSet = new SortedSet<Address>();
            UndelegationAddressSet = new SortedSet<Address>();
            RedelegationAddressSet = new SortedSet<Address>();
        }

        public UnbondingSet(IValue serialized)
        {
            List serializedList = (List)serialized;
            ValidatorAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[0]).Select(x => x.ToAddress()));
            UndelegationAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[1]).Select(x => x.ToAddress()));
            RedelegationAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[2]).Select(x => x.ToAddress()));
        }

        public UnbondingSet(UnbondingSet unbondingSet)
        {
            ValidatorAddressSet = unbondingSet.ValidatorAddressSet;
            UndelegationAddressSet = unbondingSet.UndelegationAddressSet;
            RedelegationAddressSet = unbondingSet.RedelegationAddressSet;
        }

        public static long Period => 50400 * 4;

        public SortedSet<Address> ValidatorAddressSet { get; set; }

        public SortedSet<Address> UndelegationAddressSet { get; set; }

        public SortedSet<Address> RedelegationAddressSet { get; set; }

        public Address Address => ReservedAddress.UnbondingSet;

        public IValue Serialize()
        {
            return List.Empty
                .Add(new List(ValidatorAddressSet.Select(
                address => address.Serialize())))
                .Add(new List(UndelegationAddressSet.Select(
                address => address.Serialize())))
                .Add(new List(RedelegationAddressSet.Select(
                address => address.Serialize())));
        }
    }
}
