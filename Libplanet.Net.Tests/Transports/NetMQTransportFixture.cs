using System;
using NetMQ;

namespace Libplanet.Net.Tests.Transports
{
    public class NetMQTransportFixture : IDisposable
    {
        public NetMQTransportFixture()
        {
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
