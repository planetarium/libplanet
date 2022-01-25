using System;
using System.Runtime.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    public class PeerNotFoundException : SwarmException
    {
        public PeerNotFoundException()
        {
        }

        public PeerNotFoundException(string message)
            : base(message)
        {
        }

        public PeerNotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected PeerNotFoundException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }
    }
}
