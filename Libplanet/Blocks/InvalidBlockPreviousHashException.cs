using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockPreviousHashException : InvalidBlockException
    {
        public InvalidBlockPreviousHashException(string message)
            : base(message)
        {
        }
    }
}
