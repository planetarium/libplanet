using System;
using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreTest : StoreTest, IDisposable
    {
        public MemoryStoreTest(ITestOutputHelper testOutputHelper)
        {
            TestOutputHelper = testOutputHelper;
            Fx = new MemoryStoreFixture();
            FxConstructor = () => new MemoryStoreFixture();
        }

        protected override ITestOutputHelper TestOutputHelper { get; }

        protected override StoreFixture Fx { get; }

        protected override Func<StoreFixture> FxConstructor { get; }

        public void Dispose()
        {
            Fx?.Dispose();
        }
    }
}
