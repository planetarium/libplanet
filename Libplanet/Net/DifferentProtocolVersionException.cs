using System;

namespace Libplanet.Net
{
    [Serializable]
    public sealed class DifferentProtocolVersionException : Exception
    {
        public DifferentProtocolVersionException()
        {
        }

        public DifferentProtocolVersionException(string message)
            : base(message)
        {
        }

        public DifferentProtocolVersionException(
            string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
