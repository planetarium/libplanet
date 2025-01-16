using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockTimestampException : InvalidBlockException
    {
        public InvalidBlockTimestampException(string message)
            : base(message)
        {
        }
    }
}
