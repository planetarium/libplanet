using System;

namespace Libplanet.Blocks
{
    [Serializable]
    internal class InvalidBlockTimestampException : InvalidBlockException
    {
        public InvalidBlockTimestampException(string message)
            : base(message)
        {
        }
    }
}
