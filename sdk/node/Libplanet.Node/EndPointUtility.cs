using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Net;
using System.Net.Sockets;

namespace Libplanet.Node;

public static class EndPointUtility
{
    private static readonly object LockObject = new();
    private static readonly List<int> PortList = [];

    public static (string Host, int Port) GetElements(EndPoint endPoint)
    {
        if (endPoint is DnsEndPoint dnsEndPoint)
        {
            return (dnsEndPoint.Host, dnsEndPoint.Port);
        }
        else if (endPoint is IPEndPoint iPEndPoint)
        {
            return ($"{iPEndPoint.Address}", iPEndPoint.Port);
        }

        throw new NotSupportedException($"'{endPoint}' is not supported.");
    }

    public static string ToString(EndPoint endPoint)
    {
        if (endPoint is DnsEndPoint dnsEndPoint)
        {
            return $"{dnsEndPoint.Host}:{dnsEndPoint.Port}";
        }
        else if (endPoint is IPEndPoint iPEndPoint)
        {
            return $"{iPEndPoint.Address}:{iPEndPoint.Port}";
        }

        throw new NotSupportedException($"'{endPoint}' is not supported.");
    }

    public static EndPoint Parse(string text)
    {
        var items = text.Split(':');
        if (IPAddress.TryParse(items[0], out var address))
        {
            return new IPEndPoint(address, int.Parse(items[1], CultureInfo.InvariantCulture));
        }
        else if (items.Length == 2)
        {
            return new DnsEndPoint(items[0], int.Parse(items[1], CultureInfo.InvariantCulture));
        }

        throw new NotSupportedException($"'{text}' is not supported.");
    }

    public static bool TryParse(string text, [MaybeNullWhen(false)] out EndPoint endPoint)
    {
        try
        {
            endPoint = Parse(text);
            return true;
        }
        catch
        {
            endPoint = null;
            return false;
        }
    }

    public static DnsEndPoint Next() => new("localhost", GetPort());

    internal static IPEndPoint ConvertToIPEndPoint(EndPoint endPoint)
    {
        var (host, port) = GetElements(endPoint);
        if (IPAddress.TryParse(host, out var address))
        {
            return new IPEndPoint(address, port);
        }

        var addresses = Dns.GetHostAddresses(host)
                           .Where(item => item.AddressFamily == AddressFamily.InterNetwork)
                           .ToArray();
        if (addresses.Length > 0)
        {
            return new IPEndPoint(addresses[0], port);
        }

        throw new NotSupportedException($"'{host}' is not supported.");
    }

    private static int GetPort()
    {
        lock (LockObject)
        {
            var port = GetRandomPort();
            while (PortList.Contains(port))
            {
                port = GetRandomPort();
            }

            PortList.Add(port);
            return port;
        }
    }

    private static int GetRandomPort()
    {
        var listener = new TcpListener(IPAddress.Loopback, 0);
        listener.Start();
        var port = ((IPEndPoint)listener.LocalEndpoint).Port;
        listener.Stop();
        return port;
    }
}
