using System.Diagnostics;
using System.Threading;

namespace Libplanet.Action
{
    public static class AccountStateDeltaMetrics
    {
        public static readonly AsyncLocal<Stopwatch> GetStateTimer = new AsyncLocal<Stopwatch>();
        public static readonly AsyncLocal<int> GetStateCount = new AsyncLocal<int>();
    }
}
