#nullable disable
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Net;
using Libplanet.Stun;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class IceServerTest
    {
        private const int Timeout = 60 * 1000;

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task CreateTurnClient()
        {
            var turnUri = FactOnlyTurnAvailableAttribute.GetTurnUri();
            var userInfo = turnUri.UserInfo.Split(':');
            await Assert.ThrowsAsync<ArgumentException>(
                async () =>
                {
                    await IceServer.CreateTurnClient(
                       new[] { new IceServer(new[] { "stun://stun.l.google.com:19302" }) }
                    );
                }
            );
            var servers = new List<IceServer>()
            {
                new IceServer(new[] { "turn://turn.does-not-exists.org" }),
            };

            await Assert.ThrowsAsync<IceServerException>(
                async () => { await IceServer.CreateTurnClient(servers); });

            servers.Add(new IceServer(new[] { turnUri }, userInfo[0], userInfo[1]));
            for (int i = 3; i > 0; i--)
            {
                TurnClient turnClient;
                try
                {
                    turnClient = await IceServer.CreateTurnClient(servers);
                }
                catch (IceServerException)
                {
                    // Try up to 3 times, as the servers are not well operational.
                    if (i > 1)
                    {
                        await Task.Delay(1000);
                        continue;
                    }

                    throw;
                }

                Assert.Equal(userInfo[0], turnClient.Username);
                Assert.Equal(userInfo[1], turnClient.Password);
            }
        }
    }
}
