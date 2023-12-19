using Xunit;

namespace Libplanet.Net.Tests.Transports
{
    [CollectionDefinition("NetMQConfiguration")]
    public class NetMQConfigCollection : ICollectionFixture<NetMQConfigFixture>
    {
        // This class has no code, and is never created. Its purpose is simply
        // to be the place to apply [CollectionDefinition] and all the
        // ICollectionFixture<> interfaces.
    }
}
