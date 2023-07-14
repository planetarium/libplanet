using System;

namespace Libplanet.Common.Types.Blocks
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
