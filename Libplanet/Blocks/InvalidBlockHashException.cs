using System;

namespace Libplanet.Blocks
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
