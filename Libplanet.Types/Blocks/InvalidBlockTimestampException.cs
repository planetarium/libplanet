using System;

namespace Libplanet.Types.Blocks
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
