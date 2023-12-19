using System;
using NetMQ;

namespace Libplanet.Net.Tests.Transports
{
    public class NetMQConfigFixture : IDisposable
    {
        public NetMQConfigFixture()
        {
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
