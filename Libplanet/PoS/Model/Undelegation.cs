using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.PoS.Model
{
    public class Undelegation : IEquatable<Undelegation>
    {
        public Undelegation(Address delegatorAddress, Address validatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, validatorAddress);
            DelegatorAddress = delegatorAddress;
            ValidatorAddress = validatorAddress;
            UndelegationEntryIndex = 0;
            UndelegationEntryAddresses = new SortedList<long, Address>();
        }

        public Undelegation(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            DelegatorAddress = serializedList[1].ToAddress();
            ValidatorAddress = serializedList[2].ToAddress();
            UndelegationEntryIndex = serializedList[3].ToLong();
            UndelegationEntryAddresses = new SortedList<long, Address>();
            foreach (
                IValue serializedUndelegationEntryAddress
                in (List)serializedList[4])
            {
                List items = (List)serializedUndelegationEntryAddress;
                UndelegationEntryAddresses.Add(items[0].ToLong(), items[1].ToAddress());
            }
        }

        public Undelegation(Undelegation undelegation)
        {
            Address = undelegation.Address;
            DelegatorAddress = undelegation.DelegatorAddress;
            ValidatorAddress = undelegation.ValidatorAddress;
            UndelegationEntryIndex = undelegation.UndelegationEntryIndex;
            UndelegationEntryAddresses = undelegation.UndelegationEntryAddresses;
        }

        // TODO: Better structure
        // This hard coding will cause some problems when it's modified
        // May be it would be better to be serialized
        public static int MaximumUndelegationEntries { get => 10; }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public Address DelegationAddress
        {
            get => Delegation.DeriveAddress(DelegatorAddress, ValidatorAddress);
        }

        public long UndelegationEntryIndex { get; set; }

        public SortedList<long, Address> UndelegationEntryAddresses { get; set; }

        public static bool operator ==(Undelegation obj, Undelegation other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(Undelegation obj, Undelegation other)
        {
            return !(obj == other);
        }

        public static Address DeriveAddress(
            Address delegatorAddress, Address validatorAddress)
        {
            return delegatorAddress
                .Derive(validatorAddress.ToByteArray())
                .Derive("Undelegation");
        }

        public IValue Serialize()
        {
            List serializedUndelegationEntryAddresses = List.Empty;
            foreach (
                KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                serializedUndelegationEntryAddresses =
                    serializedUndelegationEntryAddresses.Add(
                        List.Empty
                        .Add(undelegationEntryAddressKV.Key.Serialize())
                        .Add(undelegationEntryAddressKV.Value.Serialize()));
            }

            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(ValidatorAddress.Serialize())
                .Add(UndelegationEntryIndex.Serialize())
                .Add(serializedUndelegationEntryAddresses);
        }

        public override bool Equals(object? obj)
        {
            return Equals(obj as Undelegation);
        }

        public bool Equals(Undelegation? other)
        {
            return !(other is null) &&
                   Address.Equals(other.Address) &&
                   DelegatorAddress.Equals(other.DelegatorAddress) &&
                   ValidatorAddress.Equals(other.ValidatorAddress) &&
                   DelegationAddress.Equals(other.DelegationAddress) &&
                   UndelegationEntryIndex == other.UndelegationEntryIndex &&
                   UndelegationEntryAddresses.SequenceEqual(other.UndelegationEntryAddresses);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Address.ToByteArray());
        }
    }
}
