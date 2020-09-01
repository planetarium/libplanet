using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Serilog;
using Serilog.Events;

namespace Libplanet.Tests
{
    public static class LoggerExtensions
    {
        public static void CompareBothChains<T>(
            this ILogger logger,
            LogEventLevel logLevel,
            string labelA,
            BlockChain<T> chainA,
            string labelB,
            BlockChain<T> chainB
        )
            where T : IAction, new()
        =>
            logger.CompareBothChains(
                logLevel,
                labelA,
                chainA.BlockHashes.Select(h => chainA[h]).ToArray(),
                labelB,
                chainB.BlockHashes.Select(h => chainB[h]).ToArray()
            );

        public static void CompareBothChains<T>(
            this ILogger logger,
            LogEventLevel logLevel,
            string labelA,
            IReadOnlyList<Block<T>> chainA,
            string labelB,
            IReadOnlyList<Block<T>> chainB
        )
            where T : IAction, new()
        {
            if (chainA is null)
            {
                throw new ArgumentNullException(nameof(chainA));
            }
            else if (chainB is null)
            {
                throw new ArgumentNullException(nameof(chainB));
            }
            else if (chainA.Any(b => b is null))
            {
                throw new ArgumentException($"The {nameof(chainA)} contains null.", nameof(chainA));
            }
            else if (chainB.Any(b => b is null))
            {
                throw new ArgumentException($"The {nameof(chainB)} contains null.", nameof(chainB));
            }

            if (!logger.IsEnabled(logLevel))
            {
                return;
            }

            void Print(string i, string x, string y)
            {
                char bar = x.Equals(y) ? '|' : ':';
                logger.Write(logLevel, $"{bar} {i,3} {bar} {x,-64} {bar} {y,-64} {bar}");
            }

            var aTipIdx = (int)chainA[chainA.Count - 1].Index;
            var bTipIdx = (int)chainB[chainB.Count - 1].Index;
            Print("Idx", $"{labelA} (tip: {aTipIdx})", $"{labelB} (tip: {bTipIdx})");
            int tipIdx = Math.Max(aTipIdx, bTipIdx);
            int idx = 0;
            while (idx <= tipIdx)
            {
                Print(
                    $"#{idx}",
                    aTipIdx >= idx ? chainA[idx].ToString() : string.Empty,
                    bTipIdx >= idx ? chainB[idx].ToString() : string.Empty
                );
                idx++;
            }
        }
    }
}
