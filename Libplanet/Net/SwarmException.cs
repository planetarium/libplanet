using System;
using System.Runtime.Serialization;

namespace Libplanet.Net
{
    [Serializable]
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

        protected SwarmException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }
    }
}
