using System;
using System.Runtime.Serialization;

namespace Libplanet.Tx
{
    [Serializable]
    public sealed class InvalidActionTypeException : Exception
    {
        public InvalidActionTypeException()
        {
        }

        public InvalidActionTypeException(string message)
            : base(message)
        {
        }

        public InvalidActionTypeException(
            string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
