using System;

namespace Libplanet.Stun.Attributes
{
    public class InvalidStunAddressException : Exception
    {
        public InvalidStunAddressException(string message)
            : base(message)
        {
        }
    }
}
