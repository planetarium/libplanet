#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using xRetry;

namespace Libplanet.Net.Tests
{
    public sealed class FactOnlyTurnAvailableAttribute : RetryFactAttribute
    {
        public const string TurnUrlsVarName = "TURN_SERVER_URLS";

        public static readonly IReadOnlyList<Uri> TurnUris =
            (Environment.GetEnvironmentVariable(TurnUrlsVarName) ?? string.Empty)
                .Split(' ', '\t', '\r', '\n')
                .Where(s => s.Trim().Any()).Select(s => new Uri(s)).ToArray();

        private static readonly Random _random = new Random();

        private static readonly IceServer[] _iceServers = TurnUris
            .Select(turnUri =>
            {
                try
                {
                    return new IceServer(url: turnUri);
                }
                catch (ArgumentNullException)
                {
                    return null;
                }
            })
            .Where(s => !(s is null))
            .ToArray();

        public FactOnlyTurnAvailableAttribute(int maxRetries = 1, int delayBetweenRetriesMs = 0)
            : base(maxRetries, delayBetweenRetriesMs)
        {
            if (!TurnUris.Any())
            {
                Skip =
                    $"Skipped as TURN/ICE servers are not configured; " +
                    $"set the environment variable {TurnUrlsVarName} with " +
                    $"space-separated TURN/ICE server URLs.";
            }
            else if (!GetIceServers().Any())
            {
                Skip = "Available only when any TURN/ICE server is running.";
            }
        }

        public static Uri GetTurnUri() =>
            TurnUris[_random.Next(TurnUris.Count)];

        public static IReadOnlyList<IceServer> GetIceServers()
        {
            var list = new IceServer[_iceServers.Length];
            Array.Copy(_iceServers, list, list.Length);

            // Fisher–Yates shuffle
            int n = list.Length;
            while (n > 1)
            {
                n--;
                int k = _random.Next(n + 1);
                IceServer value = list[k];
                list[k] = list[n];
                list[n] = value;
            }

            return list;
        }
    }
}
