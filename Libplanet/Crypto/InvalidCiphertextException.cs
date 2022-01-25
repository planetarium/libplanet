using System;
using System.Runtime.Serialization;

namespace Libplanet.Crypto
{
    [Serializable]
    public class InvalidCiphertextException : Exception
    {
        public InvalidCiphertextException()
        {
        }

        public InvalidCiphertextException(string message)
            : base(message)
        {
        }

        public InvalidCiphertextException(
            string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected InvalidCiphertextException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }
    }
}
