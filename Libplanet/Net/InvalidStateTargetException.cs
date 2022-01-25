using System;
using System.Runtime.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidStateTargetException : SwarmException
    {
        public InvalidStateTargetException()
        {
        }

        public InvalidStateTargetException(string message)
            : base(message)
        {
        }

        public InvalidStateTargetException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected InvalidStateTargetException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
