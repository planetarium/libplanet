using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// An exception that is thrown when the signature of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    [Serializable]
    public class InvalidMessageSignatureException : Exception
    {
        public InvalidMessageSignatureException(
            string message)
            : base(message)
        {
        }

        private InvalidMessageSignatureException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)))
        {
        }
    }
}
