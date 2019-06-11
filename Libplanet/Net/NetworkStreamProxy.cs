using System;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace Libplanet.Net
{
    internal class NetworkStreamProxy : IDisposable
    {
        private const int _bufferSize = 8192;
        private readonly NetworkStream _source;
        private TcpClient _targetClient;

        public NetworkStreamProxy(NetworkStream source)
        {
            _source = source;
        }

        public async Task StartAsync(string hostname, int port)
        {
            await StartAsync(IPAddress.Parse(hostname), port);
        }

        public async Task StartAsync(IPAddress address, int port)
        {
            await StartAsync(new IPEndPoint(address, port));
        }

        public async Task StartAsync(IPEndPoint endPoint)
        {
            _targetClient = new TcpClient();

            // TODO Should investigate about PC001 on TcpClient.Connect().
#pragma warning disable PC001  // API not supported on all platforms
            _targetClient.Connect(endPoint);
#pragma warning restore PC001
            NetworkStream target = _targetClient.GetStream();
            await Task.WhenAll(
                Proxy(_source, target),
                Proxy(target, _source));
        }

        public void Dispose()
        {
            _targetClient?.Dispose();
        }

        private async Task Proxy(NetworkStream source, NetworkStream target)
        {
            while (source.CanRead && target.CanWrite)
            {
                var buf = new byte[_bufferSize];
                int read = await source.ReadAsync(buf, 0, buf.Length);
                await target.WriteAsync(buf, 0, read);
            }
        }
    }
}
