using System;

namespace Libplanet.Net
{
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
