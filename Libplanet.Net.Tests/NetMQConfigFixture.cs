using System;
using NetMQ;

namespace Libplanet.Net.Tests
{
    public class NetMQConfigFixture : IDisposable
    {
        public NetMQConfigFixture()
        {
            NetMQConfig.MaxSockets = 4096;
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
