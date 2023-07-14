using System;

namespace Libplanet.Common.Types.Blocks
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
