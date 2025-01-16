using System;

namespace Libplanet.Net.Protocols
{
    public class PingTimeoutException : TimeoutException
    {
        public PingTimeoutException(BoundPeer target)
            : base()
        {
            Target = target;
        }

        public PingTimeoutException(string message, BoundPeer target)
            : base(message)
        {
            Target = target;
        }

        public PingTimeoutException(string message, BoundPeer target, Exception innerException)
            : base(message, innerException)
        {
            Target = target;
        }

        public BoundPeer Target { get; private set; }
    }
}
