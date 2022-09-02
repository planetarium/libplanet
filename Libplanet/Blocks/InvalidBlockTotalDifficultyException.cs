using System;
using System.Numerics;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTotalDifficultyException : InvalidBlockException
    {
        public InvalidBlockTotalDifficultyException(
            string message,
            long difficulty,
            BigInteger totalDifficulty)
        : base(message)
        {
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
        }

        public long Difficulty { get; }

        public BigInteger TotalDifficulty { get; }
    }
}
