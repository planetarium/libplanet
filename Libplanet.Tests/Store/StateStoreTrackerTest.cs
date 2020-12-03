using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
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
            var blockHash = default(HashDigest<SHA256>);
            var chainId = default(Guid);
            _tracker.GetState("stateKey", blockHash, chainId);
            StoreTrackLog storeTrackLog = StoreTrackLog.Create(
                nameof(_tracker.GetState), "stateKey", blockHash, chainId);
            Assert.Equal(1, _tracker.Logs.Count);
            Assert.Equal(
                storeTrackLog,
                _tracker.Logs[0]);

            var hashDigest =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            _tracker.ContainsBlockStates(hashDigest);
            storeTrackLog = StoreTrackLog.Create(nameof(_tracker.ContainsBlockStates), hashDigest);
            Assert.Equal(2, _tracker.Logs.Count);
            Assert.Equal(
                storeTrackLog,
                _tracker.Logs[1]);
        }

        [Fact]
        public void ClearLogs()
        {
            var blockHash = default(HashDigest<SHA256>);
            var chainId = default(Guid);
            _tracker.GetState("stateKey", blockHash, chainId);
            var hashDigest =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            _tracker.ContainsBlockStates(hashDigest);
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

            public IValue GetState(
                string stateKey, HashDigest<SHA256>? blockHash = null, Guid? chainId = null)
            {
                return null;
            }

            public bool ContainsBlockStates(HashDigest<SHA256> blockHash) => false;

            public void ForkStates<T>(
                Guid sourceChainId, Guid destinationChainId, Block<T> branchpoint)
                where T : IAction, new()
            {
            }
        }
    }
}
