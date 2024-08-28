using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Node.Tests;

internal sealed class RandomPrivateKey
{
    private readonly PrivateKey _privateKey = new();

    public PublicKey PublicKey => _privateKey.PublicKey;

    public Address Address => _privateKey.PublicKey.Address;

    public static implicit operator PrivateKey(RandomPrivateKey randomPrivateKey)
        => randomPrivateKey._privateKey;

    public override string ToString() => ByteUtil.Hex(_privateKey.ByteArray);

    public AppProtocolVersion ToAppProtocolVersion(int version)
        => AppProtocolVersion.Sign(_privateKey, version);
}
