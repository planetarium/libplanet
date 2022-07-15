using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Stun;
using Serilog;

namespace Libplanet.Net
{
    public class IceServer
    {
        public IceServer(string url)
            : this(new Uri(url))
        {
        }

        public IceServer(Uri url)
        {
#pragma warning disable S1121, S3358, SA1316
            Url = url;
            Func<string, string, bool, char, (string, string, bool)> parser =
                (username, credential, colonFound, c) =>
                    c == ':'
                        ? colonFound
                            ? (username, credential, !colonFound)
                            : throw new ArgumentException(
                                $"Uri.UserInfo '{url.UserInfo}' have to contain single colon " +
                                "as a delimiter between username and credential.")
                        : colonFound
                            ? (username += c, credential, colonFound)
                            : (username, credential += c, colonFound);
            (string username, string credential, bool colonFound) seed =
                (string.Empty, string.Empty, true);
            (Username, Credential, _) = url.UserInfo
                .Aggregate(seed, (prev, c) => parser(
                    prev.username, prev.credential, prev.colonFound, c));
#pragma warning restore S1121, S3358, SA1316
        }

        public Uri Url { get; }

        public string Username { get; }

        public string Credential { get; }

        internal static async Task<TurnClient> CreateTurnClient(
            IEnumerable<IceServer> iceServers)
        {
            foreach (IceServer server in iceServers)
            {
                Uri url = server.Url;
                if (url.Scheme != "turn")
                {
                    throw new ArgumentException($"{url} is not a valid TURN url.");
                }

                int port = url.IsDefaultPort
                    ? TurnClient.TurnDefaultPort
                    : url.Port;
                var turnClient = new TurnClient(
                    url.Host,
                    server.Username,
                    server.Credential,
                    port);

                if (await turnClient.IsConnectable())
                {
                    Log.Debug("TURN client created: {Host}:{Port}", url.Host, url.Port);
                    return turnClient;
                }
            }

            throw new IceServerException("Could not find a suitable ICE server.");
        }
    }
}
