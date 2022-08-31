using System;

namespace Libplanet.PoS
{
    public class JailedValidatorException : Exception
    {
        public JailedValidatorException(Address address)
            : base($"Validator {address} is jailed")
        {
        }
    }
}
