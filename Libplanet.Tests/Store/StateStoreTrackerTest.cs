using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Xunit;

namespace Libplanet.Tests.Store
{
    public sealed class StateStoreTrackerTest
    {
        private readonly StateStoreTracker _tracker;

        public StateStoreTrackerTest()
        {
            _tracker = new StateStoreTracker(new NoOpStateStore());
        }

        [Fact]
        public void LogsAreEmptyAtFirst()
        {
            Assert.Empty(_tracker.Logs);
        }

        [Fact]
        public void MethodCallsAreLogged()
        {
            var blockHash = default(BlockHash);
            _tracker.GetState("stateKey", blockHash);
            StoreTrackLog storeTrackLog = StoreTrackLog.Create(
                nameof(_tracker.GetState), "stateKey", blockHash);
            Assert.Equal(1, _tracker.Logs.Count);
            Assert.Equal(
                storeTrackLog,
                _tracker.Logs[0]);

            var randomHash = new BlockHash(TestUtils.GetRandomBytes(32));
            _tracker.ContainsBlockStates(randomHash);
            storeTrackLog = StoreTrackLog.Create(nameof(_tracker.ContainsBlockStates), randomHash);
            Assert.Equal(2, _tracker.Logs.Count);
            Assert.Equal(
                storeTrackLog,
                _tracker.Logs[1]);
        }

        [Fact]
        public void ClearLogs()
        {
            var blockHash = default(BlockHash);
            _tracker.GetState("stateKey", blockHash);
            var randomHash = new BlockHash(TestUtils.GetRandomBytes(32));
            _tracker.ContainsBlockStates(randomHash);
            Assert.Equal(2, _tracker.Logs.Count);

            _tracker.ClearLogs();
            Assert.Empty(_tracker.Logs);
        }

        private class NoOpStateStore : IStateStore
        {
            public void SetStates<T>(Block<T> block, IImmutableDictionary<string, IValue> states)
                where T : IAction, new()
            {
            }

            public IValue GetState(string stateKey, BlockHash? blockHash = null) => null;

            public bool ContainsBlockStates(BlockHash blockHash) => false;

            public void ForkStates<T>(
                Guid sourceChainId, Guid destinationChainId, Block<T> branchpoint)
                where T : IAction, new()
            {
            }

            public void Dispose()
            {
            }
        }
    }
}
