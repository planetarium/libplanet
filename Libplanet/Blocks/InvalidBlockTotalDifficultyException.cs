#nullable enable
using System;
using System.Numerics;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTotalDifficultyException : InvalidBlockException
    {
        public InvalidBlockTotalDifficultyException(
            long difficulty,
            BigInteger totalDifficulty,
            string message)
        : base(message)
        {
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
        }

        public long Difficulty { get; }

        public BigInteger TotalDifficulty { get; }
    }
}
