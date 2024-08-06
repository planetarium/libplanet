using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Moq;

namespace Libplanet.Node.Tests.Services;

public class PeerTest
{
    [Fact]
    public void Base_Test()
    {
        var transportMock = new Mock<ITransport>();
        using var boundPeer = new RandomBoundPeer();
        var peer = new Peer(transportMock.Object, boundPeer);

        Assert.Equal(boundPeer.PublicKey.Address, peer.Address);
        Assert.Equal(boundPeer, peer.BoundPeer);
        Assert.Equal(DateTimeOffset.MinValue, peer.LastUpdated);
        Assert.Equal(DateTimeOffset.MinValue, peer.LifeTime);
        Assert.Equal(TimeSpan.FromSeconds(120), peer.LifeTimeSpan);
        Assert.Equal(TimeSpan.MinValue, peer.Latency);
        Assert.False(peer.IsAlive);
    }

    [Fact]
    public void Update_Test()
    {
        var transportMock = new Mock<ITransport>();
        using var boundPeer = new RandomBoundPeer();
        var peer = new Peer(transportMock.Object, boundPeer);
        var now = DateTimeOffset.UtcNow;
        peer.Update();

        Assert.True(now <= peer.LastUpdated);
        Assert.True(now + TimeSpan.FromSeconds(120) <= peer.LifeTime);
        Assert.True(peer.IsAlive);
    }

    [Fact]
    public async Task PingAsync_TestAsync()
    {
        var pongMsg = new PongMsg();
        var apv = GenesisOptions.AppProtocolVersion;
        using var messageBoundPeer = new RandomBoundPeer();
        var message = new Message(pongMsg, apv, messageBoundPeer, DateTimeOffset.Now, []);
        var transportMock = new Mock<ITransport>();

        transportMock.Setup(item => item.SendMessageAsync(
            It.IsAny<BoundPeer>(),
            It.IsAny<PingMsg>(),
            It.IsAny<TimeSpan>(),
            It.IsAny<CancellationToken>()))
            .ReturnsAsync(message);

        using var boundPeer = new RandomBoundPeer();
        var timeout = TimeSpan.FromSeconds(1);
        var peer = new Peer(transportMock.Object, boundPeer);

        var result = await peer.PingAsync(timeout, cancellationToken: default);

        transportMock.Verify();
        Assert.True(result);
    }

    [Fact]
    public async Task PingAsync_Cancel_TestAsync()
    {
        var pongMsg = new PongMsg();
        var apv = GenesisOptions.AppProtocolVersion;
        using var messageBoundPeer = new RandomBoundPeer();
        var message = new Message(pongMsg, apv, messageBoundPeer, DateTimeOffset.Now, []);
        var transportMock = new Mock<ITransport>();

        async Task<Message> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            await Task.Delay(1000, cancellationToken);
            return message;
        }

        transportMock
            .Setup(item => item.SendMessageAsync(
                It.IsAny<BoundPeer>(),
                It.IsAny<PingMsg>(),
                It.IsAny<TimeSpan>(),
                It.IsAny<CancellationToken>()))
            .Returns(SendMessageAsync);

        using var boundPeer = new RandomBoundPeer();
        var timeout = TimeSpan.FromSeconds(1);
        var peer = new Peer(transportMock.Object, boundPeer);
        using var cancellationTokenSource = new CancellationTokenSource(1);

        var result = await peer.PingAsync(timeout, cancellationTokenSource.Token);

        Assert.False(result);
        Assert.Equal(TimeSpan.MinValue, peer.Latency);
    }
}
