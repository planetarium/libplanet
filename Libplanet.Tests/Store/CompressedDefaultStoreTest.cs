using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class CompressedDefaultStoreTest : DefaultStoreTest
    {
        public CompressedDefaultStoreTest(ITestOutputHelper testOutputHelper)
            : base(testOutputHelper, compress: true)
        {
        }
    }
}
