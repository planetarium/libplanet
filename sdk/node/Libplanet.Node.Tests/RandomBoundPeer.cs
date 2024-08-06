using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Node.Tests;

internal sealed class RandomBoundPeer : IDisposable
{
    private readonly BoundPeer _boundPeer;
    private readonly PrivateKey _privateKey = new();
    private readonly RandomEndPoint _endPoint = new();

    public RandomBoundPeer() => _boundPeer = new BoundPeer(PublicKey, _endPoint);

    public RandomBoundPeer(PrivateKey privateKey)
    {
        _privateKey = privateKey;
        _boundPeer = new BoundPeer(PublicKey, _endPoint);
    }

    public PrivateKey PrivateKey => _privateKey;

    public PublicKey PublicKey => _privateKey.PublicKey;

    public EndPoint EndPoint => _endPoint;

    public static implicit operator BoundPeer(RandomBoundPeer randomBoundPeer)
        => randomBoundPeer._boundPeer;

    public override string ToString() => $"{PublicKey}, {_endPoint}";

    public void Dispose() => _endPoint.Dispose();
}
