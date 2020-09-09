using System;
using System.Runtime.Serialization;

namespace Libplanet.Blocks
{
    public abstract class InvalidBlockException : Exception
    {
        public InvalidBlockException(string message)
            : base(message)
        {
        }

        protected InvalidBlockException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
