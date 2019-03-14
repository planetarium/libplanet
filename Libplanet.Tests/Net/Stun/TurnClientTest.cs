using System;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Stun;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net.Stun
{
    public class TurnClientTest : IDisposable
    {
        private readonly FileStoreFixture _fx;
        private readonly TurnClient _turnClient;

        public TurnClientTest(ITestOutputHelper output)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}")
                .CreateLogger()
                .ForContext<SwarmTest>();

            _fx = new FileStoreFixture();

            string turnUrl = Environment.GetEnvironmentVariable(
                FactOnlyTurnAvailable.TurnUrlVarName);

            if (!string.IsNullOrEmpty(turnUrl))
            {
                var uri = new Uri(turnUrl);
                string[] userInfos = uri.UserInfo.Split(':');
                _turnClient = new TurnClient(
                    uri.Host,
                    userInfos[0],
                    userInfos[1],
                    uri.Port);
            }
        }

        public void Dispose()
        {
            _fx.Dispose();
            _turnClient.Dispose();
        }

        [FactOnlyTurnAvailable]
        public async Task WorkAsExpected()
        {
            Swarm s1 = new Swarm(new PrivateKey());

            BlockChain<BaseAction> chain = new BlockChain<BaseAction>(
                new BlockPolicy<BaseAction>(), _fx.Store);

            Task s1RunningTask = s1.StartAsync(chain);
            await s1.WaitForRunningAsync();

            IPEndPoint relayAddr = await _turnClient.AllocateRequestAsync(777);
            Swarm s2 = new Swarm(
                new PrivateKey(),
                ipAddress: relayAddr.Address,
                listenPort: relayAddr.Port);

            Task s2RunningTask = s2.StartAsync(chain);
            await s2.WaitForRunningAsync();

            // allow s2 to connect turn
            IPEndPoint ep = await _turnClient.GetMappedAddressAsync();
            await _turnClient.CreatePermissionAsync(ep);

            Task s1AddPeerTask = Task.Run(async () =>
            {
                await Task.Delay(500);
                await s1.AddPeersAsync(new[] { s2.AsPeer });
            });

            Task proxyBindingTask = Task.Run(async () =>
            {
                while (true)
                {
                    NetworkStream stream = await _turnClient.AcceptRelayedStreamAsync();
                    Task proxyTask = Task.Run(async () =>
                    {
                        using (var proxy = new NetworkStreamProxy(stream))
                        {
                            await proxy.StartAsync("127.0.0.1", relayAddr.Port);
                        }
                    });
                }
            });

            await Task.Delay(10000);
            Assert.Contains(s1.AsPeer, s2.AsEnumerable());
        }
    }
}
