using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockPreviousMinerException : InvalidBlockException
    {
        public InvalidBlockPreviousMinerException(string message)
            : base(message)
        {
        }
    }
}
