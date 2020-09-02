using System;
using System.Runtime.Serialization;

namespace Libplanet.Net.Protocols
{
    [Serializable]
    public class PingTimeoutException : TimeoutException
    {
        public PingTimeoutException(BoundPeer target)
            : base()
        {
            Target = target;
        }

        public PingTimeoutException(BoundPeer target, string message)
            : base(message)
        {
            Target = target;
        }

        public PingTimeoutException(BoundPeer target, string message, Exception innerException)
            : base(message, innerException)
        {
            Target = target;
        }

        protected PingTimeoutException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }

        public BoundPeer Target { get; private set; }
    }
}
