using System;

namespace Libplanet.PoS
{
    public class NullValidatorException : Exception
    {
        public NullValidatorException(Address address)
            : base($"Validator {address} not found")
        {
        }
    }
}
