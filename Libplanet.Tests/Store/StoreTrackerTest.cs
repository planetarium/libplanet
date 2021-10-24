using System;
using Xunit;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTrackerTest
    {
        private readonly StoreFixture _fx;
        private readonly StoreTracker _tracker;

        public StoreTrackerTest()
        {
            _fx = new MemoryStoreFixture();
            _tracker = new StoreTracker(_fx.Store);
        }

        [Fact]
        public void LogsAreEmptyAtFirst()
        {
            Assert.Empty(_tracker.Logs);
        }

        [Fact]
        public void MethodCallsAreLogged()
        {
            _tracker.ListChainIds();
            Assert.Equal(1, _tracker.Logs.Count);
            Assert.Equal(
                StoreTrackLog.Create("ListChainIds"),
                _tracker.Logs[0]);

            var chainId = Guid.NewGuid();
            _tracker.CountIndex(chainId);
            Assert.Equal(2, _tracker.Logs.Count);
            Assert.Equal(StoreTrackLog.Create("CountIndex", chainId), _tracker.Logs[1]);
        }

        [Fact]
        public void ClearLogs()
        {
            _tracker.ListChainIds();
            _tracker.CountIndex(Guid.NewGuid());
            Assert.Equal(2, _tracker.Logs.Count);

            _tracker.ClearLogs();
            Assert.Empty(_tracker.Logs);
        }
    }
}
