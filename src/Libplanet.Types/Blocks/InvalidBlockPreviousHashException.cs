using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockPreviousHashException : InvalidBlockException
    {
        public InvalidBlockPreviousHashException(string message)
            : base(message)
        {
        }
    }
}
