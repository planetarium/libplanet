using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An exception that is thrown when the timestamp of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    [Serializable]
    public class InvalidMessageTimestampException : Exception
    {
        internal InvalidMessageTimestampException(
            string message,
            DateTimeOffset createdOffset,
            TimeSpan? buffer,
            DateTimeOffset currentOffset)
            : base(message)
        {
            CreatedOffset = createdOffset;
            Buffer = buffer;
            CurrentOffset = currentOffset;
        }

        protected InvalidMessageTimestampException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            CreatedOffset = info.GetValue<DateTimeOffset>(nameof(CreatedOffset));
            Buffer = info.GetValue<TimeSpan?>(nameof(Buffer));
            CurrentOffset = info.GetValue<DateTimeOffset>(nameof(CurrentOffset));
        }

        internal DateTimeOffset CreatedOffset { get; private set; }

        internal TimeSpan? Buffer { get; private set; }

        internal DateTimeOffset CurrentOffset { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(CreatedOffset), CreatedOffset);
            info.AddValue(nameof(Buffer), Buffer);
            info.AddValue(nameof(CurrentOffset), CurrentOffset);
        }
    }
}
