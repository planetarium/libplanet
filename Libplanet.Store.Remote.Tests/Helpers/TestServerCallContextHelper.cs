using Grpc.Core;
using Grpc.Core.Testing;

namespace Libplanet.Store.Remote.Tests.Helpers
{
    public static class TestServerCallContextHelper
    {
        public static ServerCallContext Create()
        {
            return TestServerCallContext.Create(
                "test",
                null,
                DateTime.UtcNow,
                new Metadata(),
                CancellationToken.None,
                "peer",
                null,
                null,
                null,
                null,
                null);
        }
    }
}
