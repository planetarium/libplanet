using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class Undelegation
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

        public Undelegation(Undelegation undelegationInfo)
        {
            Address = undelegationInfo.Address;
            DelegatorAddress = undelegationInfo.DelegatorAddress;
            ValidatorAddress = undelegationInfo.ValidatorAddress;
            UndelegationEntryIndex = undelegationInfo.UndelegationEntryIndex;
            UndelegationEntryAddresses = undelegationInfo.UndelegationEntryAddresses;
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
    }
}
