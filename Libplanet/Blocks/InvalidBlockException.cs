using System;

namespace Libplanet.Blocks
{
    public abstract class InvalidBlockException : Exception
    {
        public InvalidBlockException(string message)
            : base(message)
        {
        }
    }
}
