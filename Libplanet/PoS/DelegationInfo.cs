using System;
using Bencodex.Types;

namespace Libplanet.PoS
{
    [Serializable]
    public class DelegationInfo
    {
        public DelegationInfo(Address delegatorAddress, Address validatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, validatorAddress);
            DelegatorAddress = delegatorAddress;
            ValidatorAddress = validatorAddress;
        }

        public DelegationInfo(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            DelegatorAddress = serializedList[1].ToAddress();
            ValidatorAddress = serializedList[2].ToAddress();
        }

        public DelegationInfo(DelegationInfo delegationInfo)
        {
            Address = delegationInfo.Address;
            DelegatorAddress = delegationInfo.DelegatorAddress;
            ValidatorAddress = delegationInfo.ValidatorAddress;
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public static Address DeriveAddress(Address delegatorAddress, Address validatorAddress)
        {
            return delegatorAddress
                .Derive(validatorAddress.ToByteArray())
                .Derive("Delegation");
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(ValidatorAddress.Serialize());
        }
    }
}
