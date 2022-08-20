using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class UnbondingSetInfo
    {
        public UnbondingSetInfo()
        {
            UnbondingValidatorAddressSet = new SortedSet<Address>(new AddressComparer());
            UndelegationAddressSet = new SortedSet<Address>(new AddressComparer());
            RedelegationAddressSet = new SortedSet<Address>(new AddressComparer());
        }

        public UnbondingSetInfo(IValue serialized)
        {
            List serializedList = (List)serialized;
            UnbondingValidatorAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[0]).Select(x => x.ToAddress()), new AddressComparer());
            UndelegationAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[1]).Select(x => x.ToAddress()), new AddressComparer());
            RedelegationAddressSet
                = new SortedSet<Address>(
                    ((List)serializedList[2]).Select(x => x.ToAddress()), new AddressComparer());
        }

        public UnbondingSetInfo(UnbondingSetInfo unbondingSetInfo)
        {
            UnbondingValidatorAddressSet = unbondingSetInfo.UnbondingValidatorAddressSet;
            UndelegationAddressSet = unbondingSetInfo.UndelegationAddressSet;
            RedelegationAddressSet = unbondingSetInfo.RedelegationAddressSet;
        }

        public static long Period => 50400 * 4;

        public SortedSet<Address> UnbondingValidatorAddressSet { get; set; }

        public SortedSet<Address> UndelegationAddressSet { get; set; }

        public SortedSet<Address> RedelegationAddressSet { get; set; }

        public Address Address => ReservedAddress.UnbondingSet;

        public IValue Serialize()
        {
            return List.Empty
                .Add(new List(UnbondingValidatorAddressSet.Select(
                address => address.Serialize())))
                .Add(new List(UndelegationAddressSet.Select(
                address => address.Serialize())))
                .Add(new List(RedelegationAddressSet.Select(
                address => address.Serialize())));
        }
    }
}
