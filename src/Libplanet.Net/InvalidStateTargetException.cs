using System;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidStateTargetException : SwarmException
    {
        public InvalidStateTargetException()
        {
        }

        public InvalidStateTargetException(string message)
            : base(message)
        {
        }

        public InvalidStateTargetException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
