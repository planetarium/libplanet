using System;

namespace Libplanet.Stun
{
    [Serializable]
    public class IceServerException : Exception
    {
        public IceServerException(string message)
            : base(message)
        {
        }
    }
}
