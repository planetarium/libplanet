using System;
using System.IO;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class DefaultStoreTest : StoreTest, IDisposable
    {
        private readonly DefaultStoreFixture _fx;

        public DefaultStoreTest(ITestOutputHelper testOutputHelper)
        {
            TestOutputHelper = testOutputHelper;
            Fx = _fx = new DefaultStoreFixture(memory: false);
            FxConstructor = () => new DefaultStoreFixture(memory: false);
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }

        [Fact]
        public void ConstructorAcceptsRelativePath()
        {
            string tmpDir = System.IO.Path.GetTempPath();
            string dirName = $"defaultstore_{Guid.NewGuid()}";
            string cwd = Directory.GetCurrentDirectory();
            IStore store;
            try
            {
                Directory.SetCurrentDirectory(tmpDir);
                store = new DefaultStore(dirName);
                store.PutTransaction(Fx.Transaction1);
            }
            finally
            {
                Directory.SetCurrentDirectory(cwd);
            }

            // If CWD is changed after DefaultStore instance was created
            // the instance should work as it had been.
            store.PutTransaction(Fx.Transaction2);

            // The following `identicalStore' instance should be identical to
            // the `store' instance above, i.e., views the same data.
            var identicalStore = new DefaultStore(Path.Combine(tmpDir, dirName));
            Assert.Equal(
                Fx.Transaction1,
                identicalStore.GetTransaction<DumbAction>(Fx.Transaction1.Id)
            );
            Assert.Equal(
                Fx.Transaction2,
                identicalStore.GetTransaction<DumbAction>(Fx.Transaction2.Id)
            );
        }
    }
}
