#nullable enable
using System;
using System.Runtime.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidTimestampException : Exception
    {
        internal InvalidTimestampException(
            string message,
            DateTimeOffset createdOffset,
            TimeSpan lifespan,
            DateTimeOffset currentOffset,
            Exception innerException
        )
            : base(message, innerException)
        {
            CreatedOffset = createdOffset;
            Lifespan = lifespan;
            CurrentOffset = currentOffset;
        }

        internal InvalidTimestampException(
            string message,
            DateTimeOffset createdOffset,
            TimeSpan lifespan,
            DateTimeOffset currentOffset)
            : base(message)
        {
            CreatedOffset = createdOffset;
            Lifespan = lifespan;
            CurrentOffset = currentOffset;
        }

        protected InvalidTimestampException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            CreatedOffset = info.GetValue(nameof(CreatedOffset), typeof(DateTimeOffset))
                is DateTimeOffset createdOffset
                ? createdOffset
                : throw new SerializationException(
                    $"{nameof(CreatedOffset)} is expected to be a non-null " +
                    $"{nameof(DateTimeOffset)}.");
            Lifespan = info.GetValue(nameof(Lifespan), typeof(TimeSpan))
                is TimeSpan lifetime
                ? lifetime
                : throw new SerializationException(
                    $"{nameof(Lifespan)} is expected to be a non-null " +
                    $"{nameof(TimeSpan)}.");
            CurrentOffset = info.GetValue(nameof(CurrentOffset), typeof(DateTimeOffset))
                is DateTimeOffset currentOffset
                ? currentOffset
                : throw new SerializationException(
                    $"{nameof(CurrentOffset)} is expected to be a non-null " +
                    $"{nameof(DateTimeOffset)}.");
        }

        internal DateTimeOffset CreatedOffset { get; }

        internal TimeSpan Lifespan { get; }

        internal DateTimeOffset CurrentOffset { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(CreatedOffset), CreatedOffset);
            info.AddValue(nameof(Lifespan), Lifespan);
            info.AddValue(nameof(CurrentOffset), CurrentOffset);
        }
    }
}
