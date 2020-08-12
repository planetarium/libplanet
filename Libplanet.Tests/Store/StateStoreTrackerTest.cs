using System.Security.Cryptography;
using Xunit;

namespace Libplanet.Tests.Store
{
    public sealed class StateStoreTrackerTest
    {
        private readonly StoreFixture _fx;
        private readonly StateStoreTracker _tracker;

        public StateStoreTrackerTest()
        {
            _fx = new DefaultStoreFixture();
            _tracker = new StateStoreTracker(_fx.StateStore);
        }

        [Fact]
        public void LogsAreEmptyAtFirst()
        {
            Assert.Empty(_tracker.Logs);
        }

        [Fact]
        public void MethodCallsAreLogged()
        {
            _tracker.GetState("stateKey", chainId: _fx.StoreChainId);
            Assert.Equal(1, _tracker.Logs.Count);
            Assert.Equal(
                StoreTrackLog.Create(nameof(_tracker.GetState), "stateKey", null, _fx.StoreChainId),
                _tracker.Logs[0]);

            var hashDigest =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            _tracker.ExistsBlockState(hashDigest);
            Assert.Equal(2, _tracker.Logs.Count);
            Assert.Equal(
                StoreTrackLog.Create(nameof(_tracker.ExistsBlockState), hashDigest),
                _tracker.Logs[1]);
        }

        [Fact]
        public void ClearLogs()
        {
            _tracker.GetState("stateKey", chainId: _fx.StoreChainId);
            var hashDigest =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            _tracker.ExistsBlockState(hashDigest);
            Assert.Equal(2, _tracker.Logs.Count);

            _tracker.ClearLogs();
            Assert.Empty(_tracker.Logs);
        }
    }
}
