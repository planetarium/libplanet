#nullable disable
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Stun;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class IceServerTest
    {
        private const int Timeout = 60 * 1000;

        [Fact]
        public void ParseUrl()
        {
            string urlString;
            IceServer iceServer;

            urlString = "turn://only.path.component";
            iceServer = new IceServer(urlString);
            Assert.Empty(iceServer.Username);
            Assert.Empty(iceServer.Credential);

            urlString = "turn://@path.with.at.symbol";
            iceServer = new IceServer(urlString);
            Assert.Empty(iceServer.Username);
            Assert.Empty(iceServer.Credential);

            urlString = "turn://path@with.username";
            iceServer = new IceServer(urlString);
            Assert.Equal("path", iceServer.Username);
            Assert.Empty(iceServer.Credential);

            urlString = "turn://username:@with.empty.credential";
            iceServer = new IceServer(urlString);
            Assert.Equal("username", iceServer.Username);
            Assert.Empty(iceServer.Credential);

            urlString = "turn://:empty@username.with.credential";
            iceServer = new IceServer(urlString);
            Assert.Empty(iceServer.Username);
            Assert.Equal("empty", iceServer.Credential);

            urlString = "turn://:@only.userinfo.separator";
            iceServer = new IceServer(urlString);
            Assert.Empty(iceServer.Username);
            Assert.Empty(iceServer.Credential);

            urlString = "turn://user:info@some.path";
            iceServer = new IceServer(urlString);
            Assert.Equal("user", iceServer.Username);
            Assert.Equal("info", iceServer.Credential);

            urlString = "turn://user:info:invalid@some.path";
            Assert.Throws<ArgumentException>(() => new IceServer(urlString));
        }

        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task CreateTurnClient()
        {
            var turnUri = FactOnlyTurnAvailableAttribute.GetTurnUri();
            var userInfo = turnUri.UserInfo.Split(':');
            await Assert.ThrowsAsync<ArgumentException>(
                async () => await TurnClient.Create(
                    new[] { new IceServer("stun://stun.l.google.com:19302") }));
            var servers = new List<IceServer>()
            {
                new IceServer("turn://turn.does-not-exists.org"),
            };

            await Assert.ThrowsAsync<IceServerException>(
                async () => await TurnClient.Create(servers));

            servers.Add(new IceServer(turnUri));
            for (int i = 3; i > 0; i--)
            {
                TurnClient turnClient;
                try
                {
                    turnClient = await TurnClient.Create(servers);
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
