using System;
using System.Runtime.Serialization;

namespace Libplanet.Net.Protocols
{
    public class PeerDiscoveryException : SwarmException
    {
        public PeerDiscoveryException()
        {
        }

        public PeerDiscoveryException(string message)
            : base(message)
        {
        }

        public PeerDiscoveryException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected PeerDiscoveryException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }
    }
}
