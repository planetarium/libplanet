using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTimestampException : InvalidBlockException
    {
        public InvalidBlockTimestampException(string message)
            : base(message)
        {
        }
    }
}
