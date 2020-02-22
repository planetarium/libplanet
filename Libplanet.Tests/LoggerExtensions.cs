using System;
using Libplanet.Action;
using Libplanet.Blockchain;
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
        {
            if (chainA is null)
            {
                throw new ArgumentNullException(nameof(chainA));
            }
            else if (chainB is null)
            {
                throw new ArgumentNullException(nameof(chainB));
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

            long aTipIdx = chainA.Tip.Index;
            long bTipIdx = chainB.Tip.Index;
            Print("Idx", $"{labelA} (tip: {aTipIdx})", $"{labelB} (tip: {bTipIdx})");
            long tipIdx = Math.Max(aTipIdx, bTipIdx);
            long idx = 0;
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
