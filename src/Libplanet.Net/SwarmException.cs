using System;

namespace Libplanet.Net
{
    public class SwarmException : Exception
    {
        public SwarmException()
        {
        }

        public SwarmException(string message)
            : base(message)
        {
        }

        public SwarmException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
