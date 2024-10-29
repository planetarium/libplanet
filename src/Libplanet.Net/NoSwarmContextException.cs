using System;

namespace Libplanet.Net
{
    [Serializable]
    public class NoSwarmContextException : SwarmException
    {
        public NoSwarmContextException()
        {
        }

        public NoSwarmContextException(string message)
            : base(message)
        {
        }

        public NoSwarmContextException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
