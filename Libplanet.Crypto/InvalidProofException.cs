using System;
using System.Runtime.Serialization;

namespace Libplanet.Crypto
{
    [Serializable]
    public class InvalidProofException : Exception
    {
        public InvalidProofException()
        {
        }

        public InvalidProofException(string message)
            : base(message)
        {
        }

        public InvalidProofException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected InvalidProofException(
            SerializationInfo info, StreamingContext context
        )
          : base(info, context)
        {
        }
    }
}
