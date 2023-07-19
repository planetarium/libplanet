using System;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockHashException : InvalidBlockException
    {
        public InvalidBlockHashException(string message)
            : base(message)
        {
        }
    }
}
