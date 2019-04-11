using System;
using Xunit;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTrackerTest
    {
        private readonly FileStoreFixture _fx;
        private readonly StoreTracker _tracker;

        public StoreTrackerTest()
        {
            _fx = new FileStoreFixture();
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
            _tracker.ListNamespaces();
            Assert.Equal(1, _tracker.Logs.Count);
            Assert.Equal(("ListNamespaces", null, null), _tracker.Logs[0]);

            var ns = Guid.NewGuid();
            _tracker.CountIndex(ns.ToString());
            Assert.Equal(2, _tracker.Logs.Count);
            Assert.Equal(("CountIndex", ns.ToString(), null), _tracker.Logs[1]);
        }

        [Fact]
        public void ClearLogs()
        {
            _tracker.ListNamespaces();
            _tracker.CountIndex(Guid.NewGuid().ToString());
            Assert.Equal(2, _tracker.Logs.Count);

            _tracker.ClearLogs();
            Assert.Empty(_tracker.Logs);
        }
    }
}
