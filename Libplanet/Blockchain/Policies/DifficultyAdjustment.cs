using System;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Policies
{
    public static class DifficultyAdjustment<T>
        where T : IAction, new()
    {
        public static readonly TimeSpan DefaultTargetBlockInterval = TimeSpan.FromSeconds(5);

        public static readonly long DefaultDifficultyStability = 128;

        public static readonly long DefaultMinimumDifficulty = 1024;

        /// <summary>
        /// An Ethereum based difficulty adjustment algorithm.
        /// </summary>
        /// <param name="blockChain">The <see cref="BlockChain{T}"/> instance
        /// to calculate the next difficulty from.</param>
        /// <param name="targetBlockInterval">The base block interval this difficulty adjustment
        /// algorithm targets.  In reality, the algorithm does not actually target the given
        /// <see cref="TimeSpan"/>.  Assuming stable hash rate, the actual average of
        /// block intervals comes out to be about <c>targetBaseInterval * 1.4</c>.</param>
        /// <param name="difficultystability">Determines how stable difficulty should be over time.
        /// </param>
        /// <param name="minimumDifficulty">The lower bound on the difficulty.  This is ignored
        /// for genesis blocks.</param>
        /// <returns>The next target difficulty of a <see cref="Block{T}"/> that gets
        /// appended to <paramref name="blockChain"/>.</returns>
        /// <exception cref="IndexOutOfRangeException">When the number of blocks
        /// in <see cref="BlockChain{T}"/> is negative.</exception>
        /// <remarks>
        /// It is strongly recommended to use the factory version <see cref="AlgorithmFactory"/>
        /// to get a working difficulty adjustment algorithm.
        /// </remarks>
        public static long BaseAlgorithm(
            BlockChain<T> blockChain,
            TimeSpan targetBlockInterval,
            long difficultystability,
            long minimumDifficulty)
        {
            long index = blockChain.Count;

            if (index < 0)
            {
                throw new IndexOutOfRangeException(
                    $"Count of blocks must be non-negative: {index}.");
            }
            else if (index <= 1)
            {
                return index == 0 ? 0 : minimumDifficulty;
            }

            Block<T> prevBlock = blockChain[index - 1];
            Block<T> prevPrevBlock = blockChain[index - 2];
            TimeSpan prevTimeDiff = prevBlock.Timestamp - prevPrevBlock.Timestamp;

            const long minimumAdjustmentMultiplier = -99;
            long adjustmentMultiplier = Math.Max(
                1 - ((long)prevTimeDiff.TotalMilliseconds /
                    (long)targetBlockInterval.TotalMilliseconds),
                minimumAdjustmentMultiplier);
            long difficultyAdjustment =
                prevBlock.Difficulty / difficultystability * adjustmentMultiplier;

            long nextDifficulty = Math.Max(
                prevBlock.Difficulty + difficultyAdjustment, minimumDifficulty);

            return nextDifficulty;
        }

        /// <summary>
        /// Does sanity checks and binds arguments to the <see cref="BaseAlgorithm"/> based
        /// difficulty adjustment algorithm.
        /// </summary>
        /// <param name="targetBlockInterval">The base block interval this difficulty adjustment
        /// algorithm targets.  In reality, the algorithm does not actually target the given
        /// <see cref="TimeSpan"/>.  Assuming stable hash rate, the actual average of
        /// block intervals comes out to be about <c>targetBaseInterval * 1.4</c>.
        /// If ommited, set to <see cref="DefaultTargetBlockInterval"/> by default.
        /// </param>
        /// <param name="difficultyStability">Determines how stable difficulty should be over time.
        /// If ommited, set to <see cref="DefaultDifficultyStability"/> by default.
        /// </param>
        /// <param name="minimumDifficulty">The lower bound on the difficulty.</param>
        /// <returns>The next target difficulty of a <see cref="Block{T}"/> that gets
        /// appended to some <See cref="BlockChain{T}"/>.  If ommited, set to
        /// <see cref="DefaultMinimumDifficulty"/> by default.</returns>
        /// <returns>A difficulty adjustment algorithm with bound constants provided.</returns>
        /// <exception cref="ArgumentOutOfRangeException">If any of the arguments fail to
        /// satisfy the necessary constraints for the formula to work.</exception>
        public static Func<BlockChain<T>, long> AlgorithmFactory(
            TimeSpan targetBlockInterval,
            long difficultyStability,
            long minimumDifficulty)
        {
            if (targetBlockInterval <= TimeSpan.Zero)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(targetBlockInterval),
                    "Target interval between blocks must be positive.");
            }
            else if (difficultyStability <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(difficultyStability),
                    "Difficulty stability must be positive");
            }
            else if (minimumDifficulty < difficultyStability)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(difficultyStability),
                    "Minimum difficulty must be greater than or equal to difficulty stability.");
            }
            else if (minimumDifficulty <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(minimumDifficulty),
                    "Minimum difficulty must be positive.");
            }

            return blockChain => BaseAlgorithm(
                blockChain, targetBlockInterval, difficultyStability, minimumDifficulty);
        }
    }
}
