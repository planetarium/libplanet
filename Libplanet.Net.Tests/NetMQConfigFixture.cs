using System;
using NetMQ;

namespace Libplanet.Net.Tests
{
    public class NetMQConfigFixture : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }
    }
}
