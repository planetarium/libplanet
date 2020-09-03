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

        protected PingTimeoutException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Target = (BoundPeer)info.GetValue("Target", typeof(BoundPeer));
        }

        public BoundPeer Target { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            if (info == null)
            {
                throw new System.ArgumentNullException(nameof(info));
            }

            base.GetObjectData(info, context);
            info.AddValue("Target", Target);
        }
    }
}
