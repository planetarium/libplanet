using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Stun;
using Serilog;

namespace Libplanet.Net
{
    public class IceServer
    {
        public IceServer(
            string url,
            string? username = null,
            string? credential = null)
        {
            Url = new Uri(url);
            Username = username;
            Credential = credential;
        }

        public IceServer(
            Uri url,
            string? username = null,
            string? credential = null)
        {
            Url = url;
            Username = username;
            Credential = credential;
        }

        public Uri Url { get; }

        public string? Username { get; }

        public string? Credential { get; }

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
