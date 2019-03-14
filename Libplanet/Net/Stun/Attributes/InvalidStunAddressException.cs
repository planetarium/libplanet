using System;

namespace Libplanet.Net.Stun.Attributes
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
