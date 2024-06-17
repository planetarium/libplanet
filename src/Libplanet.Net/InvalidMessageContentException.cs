using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    [Serializable]
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

        protected InvalidMessageContentException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            Content =
                info.GetValue(nameof(Content), typeof(MessageContent)) as MessageContent ??
                throw new SerializationException(
                    $"{nameof(Content)} is expected to be a non-null {nameof(Message)}.");
        }

        internal MessageContent Content { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Content), Content);
        }
    }
}
