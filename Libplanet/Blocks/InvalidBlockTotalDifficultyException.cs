using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTotalDifficultyException : InvalidBlockException
    {
        public InvalidBlockTotalDifficultyException(string message)
            : base(message)
        {
        }
    }
}
