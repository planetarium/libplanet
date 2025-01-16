using System;

namespace Libplanet.Stun
{
    public class IceServerException : Exception
    {
        public IceServerException(string message)
            : base(message)
        {
        }
    }
}
