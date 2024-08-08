using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Node;

public static class BoundPeerUtility
{
    public static BoundPeer Parse(string text)
    {
        var items = text.Split(',', StringSplitOptions.RemoveEmptyEntries);
        if (items.Length == 2)
        {
            var publicKey = PublicKey.FromHex(items[0]);
            var endPoint = (DnsEndPoint)EndPointUtility.Parse(items[1].Trim());
            return new BoundPeer(publicKey, endPoint);
        }

        throw new FormatException($"'{text}' is not supported.");
    }

    public static string ToString(BoundPeer boundPeer)
    {
        var publicKey = boundPeer.PublicKey.ToHex(compress: false);
        var endPoint = EndPointUtility.ToString(boundPeer.EndPoint);
        return $"{publicKey}, {endPoint}";
    }

    public static BoundPeer ParseOrFallback(string text, Func<BoundPeer> fallback)
    {
        return text == string.Empty ? fallback() : Parse(text);
    }
}
