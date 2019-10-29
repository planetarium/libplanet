using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class IceServerTest
    {
        private const int Timeout = 60 * 1000;

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task CreateTurnClient()
        {
            var turnUri = new Uri(
                Environment.GetEnvironmentVariable(
                    FactOnlyTurnAvailable.TurnUrlVarName));
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
            var turnClient = await IceServer.CreateTurnClient(servers);

            Assert.Equal(userInfo[0], turnClient.Username);
            Assert.Equal(userInfo[1], turnClient.Password);
        }
    }
}
