using System;
using System.Runtime.Serialization;

namespace Libplanet.Crypto
{
    [Serializable]
    public class GenerateKeyParamTriesExceedException : Exception
    {
        public GenerateKeyParamTriesExceedException()
        {
        }

        public GenerateKeyParamTriesExceedException(string message)
          : base(message)
        {
        }

        public GenerateKeyParamTriesExceedException(string message, Exception innerException)
          : base(message, innerException)
        {
        }

        protected GenerateKeyParamTriesExceedException(
          SerializationInfo info, StreamingContext context
        )
          : base(info, context)
        {
        }
    }
}