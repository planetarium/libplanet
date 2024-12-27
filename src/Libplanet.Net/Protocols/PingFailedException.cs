using System;
using System.Runtime.Serialization;

namespace Libplanet.Net.Protocols
{
    [Serializable]
    public class PingFailedException : Exception
    {
        public PingFailedException(BoundPeer target, Exception innerException)
            : base($"Failed to send ping to target peer {target}", innerException)
        {
            Target = target;
        }

        public PingFailedException(string message, BoundPeer target, Exception innerException)
            : base(message, innerException)
        {
            Target = target;
        }

        protected PingFailedException(SerializationInfo info, StreamingContext context)
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
