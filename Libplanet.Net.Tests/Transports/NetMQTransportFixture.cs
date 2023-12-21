using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Net.Transports;
using NetMQ;

namespace Libplanet.Net.Tests.Transports
{
    public class NetMQTransportFixture : IDisposable
    {
        private HashSet<NetMQTransport> _netMQTransports;

        public NetMQTransportFixture()
        {
            _netMQTransports = new HashSet<NetMQTransport>();
        }

        public void Dispose()
        {
            _netMQTransports.AsParallel().ForAll(transport => transport.Dispose());
            NetMQConfig.Cleanup(false);
        }

        public void Track(NetMQTransport transport)
            => _netMQTransports.Add(transport);
    }
}
