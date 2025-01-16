using System;

namespace Libplanet.Crypto
{
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
    }
}
