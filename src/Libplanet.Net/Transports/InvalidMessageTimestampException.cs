using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An exception that is thrown when the timestamp of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
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

        internal DateTimeOffset CreatedOffset { get; private set; }

        internal TimeSpan? Buffer { get; private set; }

        internal DateTimeOffset CurrentOffset { get; private set; }
    }
}
