using System.Net;
using System.Net.Sockets;

namespace Libplanet.Node.Tests;

internal sealed class RandomEndPoint : IDisposable
{
    private static readonly object LockObject = new();
    private static readonly List<int> PortList = [];

    private readonly DnsEndPoint _endPoint;
    private bool _isDisposed;

    public RandomEndPoint() => _endPoint = new DnsEndPoint("localhost", GetPort());

    public string Host => _endPoint.Host;

    public int Port => _endPoint.Port;

    public static implicit operator DnsEndPoint(RandomEndPoint endPointObject)
        => endPointObject._endPoint;

    public override string ToString() => $"{_endPoint.Host}:{_endPoint.Port}";

    public void Dispose()
    {
        ObjectDisposedException.ThrowIf(_isDisposed, this);

        lock (LockObject)
        {
            PortList.Remove(_endPoint.Port);
        }

        _isDisposed = true;
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
