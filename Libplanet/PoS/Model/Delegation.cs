using System;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class Delegation : IEquatable<Delegation>
    {
        public Delegation(Address delegatorAddress, Address validatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, validatorAddress);
            DelegatorAddress = delegatorAddress;
            ValidatorAddress = validatorAddress;
        }

        public Delegation(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            DelegatorAddress = serializedList[1].ToAddress();
            ValidatorAddress = serializedList[2].ToAddress();
        }

        public Delegation(Delegation delegationInfo)
        {
            Address = delegationInfo.Address;
            DelegatorAddress = delegationInfo.DelegatorAddress;
            ValidatorAddress = delegationInfo.ValidatorAddress;
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public static bool operator ==(Delegation obj, Delegation other)
        {
            return obj.Equals(other);
        }

        public static bool operator !=(Delegation obj, Delegation other)
        {
            return !(obj == other);
        }

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

        public override bool Equals(object? obj)
        {
            return Equals(obj as Delegation);
        }

        public bool Equals(Delegation? other)
        {
            return !(other is null) &&
                   Address.Equals(other.Address) &&
                   DelegatorAddress.Equals(other.DelegatorAddress) &&
                   ValidatorAddress.Equals(other.ValidatorAddress);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Address.ToByteArray());
        }
    }
}
