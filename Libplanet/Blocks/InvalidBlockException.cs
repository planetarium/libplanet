#nullable enable
using System;
using System.Runtime.Serialization;

namespace Libplanet.Blocks
{
    public abstract class InvalidBlockException : Exception
    {
        protected InvalidBlockException(string message)
            : base(message)
        {
        }

        protected InvalidBlockException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
