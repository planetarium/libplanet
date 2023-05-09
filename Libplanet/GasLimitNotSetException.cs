using System;

namespace Libplanet
{
    [Serializable]
    public sealed class GasLimitNotSetException : Exception
    {
        public GasLimitNotSetException(Address address)
            : base($"Gas Limit has not been set. " +
                $"Please set the Gas Limit before adding gas to the account {address.ToString()}.")
        {
            Address = address;
        }

        public Address Address { get; }
    }
}
