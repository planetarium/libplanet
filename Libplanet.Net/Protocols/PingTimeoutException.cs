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

        protected PingTimeoutException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Target = info.GetValue(nameof(Target), typeof(BoundPeer)) is BoundPeer target
                ? target
                : throw new SerializationException(
                    $"{nameof(Target)} is expected to be a non-null {nameof(BoundPeer)}.");
        }

        public BoundPeer Target { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            if (info is null)
            {
                throw new System.ArgumentNullException(nameof(info));
            }

            base.GetObjectData(info, context);
            info.AddValue(nameof(Target), Target);
        }
    }
}
