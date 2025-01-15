using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    public class InvalidMessageContentException : Exception
    {
        internal InvalidMessageContentException(
            string message,
            MessageContent content,
            Exception innerException
        )
            : base(message, innerException)
        {
            Content = content;
        }

        internal InvalidMessageContentException(string message, MessageContent content)
            : base(message)
        {
            Content = content;
        }

        internal MessageContent Content { get; }
    }
}
