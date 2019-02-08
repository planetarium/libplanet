using System;
using System.Runtime.Serialization;

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

        protected NoSwarmContextException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }
    }
}
