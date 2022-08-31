using System;

namespace Libplanet.PoS
{
    public class InvalidExchangeRateException : Exception
    {
        public InvalidExchangeRateException(Address address)
            : base($"Exchange of Validator {address} is invalid")
        {
        }
    }
}
