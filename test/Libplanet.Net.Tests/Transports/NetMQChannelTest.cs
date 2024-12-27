using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Net.Tests.Transports
{
    // Test uses NetMQTransport as BoundPeer, which can be replaced with simple RouterSocket.
    public class NetMQChannelTest
    {
        private const int Timeout = 60 * 1000;

        [Fact]
        public void Abort()
        {
            var channel = new NetMQChannel(
                new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint(IPAddress.Loopback.ToString(), 0)));
            Assert.Throws<InvalidOperationException>(() => channel.Abort());
            channel.Open();
            channel.Abort();
            Assert.True(true);
        }

        [Fact]
        public void Close()
        {
            var closed = false;
            var channel = new NetMQChannel(
                new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint(IPAddress.Loopback.ToString(), 0)));
            channel.Closed += (_, _) => closed = true;
            Assert.Throws<InvalidOperationException>(() => channel.Close());
            channel.Open();
            channel.Close();
            Assert.True(closed);
        }

        [Fact]
        public void Open()
        {
            var opened = false;
            var channel = new NetMQChannel(
                new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint(IPAddress.Loopback.ToString(), 0)));
            channel.Opened += (_, _) => opened = true;
            channel.Open();
            Assert.True(opened);
        }

        [Fact]
        public async Task Faulted()
        {
            var faulted = false;
            var channel = new NetMQChannel(
                new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint(IPAddress.Loopback.ToString(), 0)));
            channel.Faulted += (_, _) => faulted = true;
            channel.Open();
            await Task.Delay(100);
            Assert.True(faulted);
        }

        [Fact(Timeout = Timeout)]
        public async Task SendMessageAsync()
        {
            var received = false;
            var receiverKey = new PrivateKey();
            var transport = await NetMQTransport.Create(
                receiverKey,
                new AppProtocolVersionOptions(),
                new HostOptions(
                    IPAddress.Loopback.ToString(),
                    new IceServer[] { }));
            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();
            transport.ProcessMessageHandler.Register(
                async msg =>
                {
                    received = msg.Content is PingMsg;
                    await transport.ReplyMessageAsync(
                        new PongMsg(),
                        msg.Identity!,
                        CancellationToken.None);
                });
            var channel = new NetMQChannel(transport.AsPeer);
            channel.Open();
            var key = new PrivateKey();
            await foreach (
                var reply in channel.SendMessageAsync(
                    new NetMQMessageCodec().Encode(
                        new PingMsg(),
                        key,
                        default,
                        new BoundPeer(
                            key.PublicKey,
                            new DnsEndPoint(IPAddress.Loopback.ToString(), 0)),
                        DateTimeOffset.UtcNow),
                    null,
                    1,
                    CancellationToken.None))
            {
                if (new NetMQMessageCodec().Decode(reply, true).Content is PongMsg)
                {
                    received = true;
                }
            }

            Assert.True(received);
        }
    }
}
