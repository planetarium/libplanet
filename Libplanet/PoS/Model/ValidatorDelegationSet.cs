using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS.Model
{
    public class ValidatorDelegationSet
    {
        private readonly SortedSet<Address> _set;

        public ValidatorDelegationSet(Address validatorAddress)
        {
            Address = DeriveAddress(validatorAddress);
            ValidatorAddress = validatorAddress;
            _set = new SortedSet<Address>();
        }

        public ValidatorDelegationSet(IValue serialized)
        {
            var dict = (Dictionary)serialized;
            Address = dict["addr"].ToAddress();
            ValidatorAddress = dict["val_addr"].ToAddress();
            _set = new SortedSet<Address>(((List)dict["set"]).Select(x => x.ToAddress()));
        }

        public ValidatorDelegationSet(ValidatorDelegationSet bondedValidatorSet)
        {
            Address = bondedValidatorSet.Address;
            ValidatorAddress = bondedValidatorSet.ValidatorAddress;
            _set = bondedValidatorSet._set;
        }

        public Address Address { get; }

        public Address ValidatorAddress { get; }

        public ImmutableSortedSet<Address> Set => _set.ToImmutableSortedSet();

        public static Address DeriveAddress(Address validatorAddress)
        {
            return validatorAddress.Derive("ValidatorDelegationSetAddress");
        }

        public void Add(Address delegationAddress)
        {
            _set.Add(delegationAddress);
        }

        public void Remove(Address delegationAddress)
        {
            _set.Remove(delegationAddress);
        }

        public IValue Serialize()
        {
            return Dictionary.Empty
                .Add("addr", Address.Serialize())
                .Add("val_addr", ValidatorAddress.Serialize())
                .Add("set", Set.Select(x => x.Serialize()));
        }
    }
}
