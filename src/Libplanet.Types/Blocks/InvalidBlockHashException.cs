using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockHashException : InvalidBlockException
    {
        public InvalidBlockHashException(string message)
            : base(message)
        {
        }
    }
}
