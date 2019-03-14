using System;

namespace Libplanet.Stun.Attributes
{
    [Serializable]
    public class InvalidStunAddressException : Exception
    {
        public InvalidStunAddressException(string message)
            : base(message)
        {
        }
    }
}
