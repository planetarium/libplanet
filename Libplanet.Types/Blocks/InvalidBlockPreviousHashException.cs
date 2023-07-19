using System;

namespace Libplanet.Types.Blocks
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
