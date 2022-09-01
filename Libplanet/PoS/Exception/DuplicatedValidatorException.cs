using System;

namespace Libplanet.PoS
{
    public class DuplicatedValidatorException : Exception
    {
        public DuplicatedValidatorException(Address address)
            : base($"Validator {address} is duplicated")
        {
        }
    }
}
