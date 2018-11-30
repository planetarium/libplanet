using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockDifficultyException : InvalidBlockException
    {
        public InvalidBlockDifficultyException(string message)
            : base(message)
        {
        }
    }
}
