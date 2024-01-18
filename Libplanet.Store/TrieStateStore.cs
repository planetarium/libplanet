using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Serilog;

namespace Libplanet.Store
{
    /// <summary>
    /// An <see cref="IStateStore"/> implementation. It stores states with <see cref="MerkleTrie"/>.
    /// </summary>
    public partial class TrieStateStore : IStateStore
    {
        private readonly ILogger _logger;
        private readonly HashNodeCache _cache;
        private bool _disposed = false;

        /// <summary>
        /// Creates a new <see cref="TrieStateStore"/>.
        /// </summary>
        /// <param name="stateKeyValueStore">The storage to store states. It used by
        /// <see cref="MerkleTrie"/> in internal.</param>
        public TrieStateStore(IKeyValueStore stateKeyValueStore)
        {
            StateKeyValueStore = stateKeyValueStore;
            _cache = new HashNodeCache();
            _logger = Log.ForContext<TrieStateStore>();
        }

        public IKeyValueStore StateKeyValueStore { get; }

        /// <inheritdoc cref="IStateStore.PruneStates(IImmutableSet{HashDigest{SHA256}})"/>
        public void PruneStates(IImmutableSet<HashDigest<SHA256>> survivingStateRootHashes)
        {
            // TODO: As MerkleTrie now have two levels of Merkle trees (one for accounts and one for
            // Bencodex values), it needs to be fixed so that it can prune offloaded Bencodex
            // values too.  https://github.com/planetarium/libplanet/issues/1653
            var stopwatch = new Stopwatch();
            _logger.Verbose("Started {MethodName}()", nameof(PruneStates));
            var survivalNodes = new HashSet<KeyBytes>();
            foreach (HashDigest<SHA256> stateRootHash in survivingStateRootHashes)
            {
                var stateTrie = new MerkleTrie(
                    StateKeyValueStore,
                    new HashNode(stateRootHash));
                _logger.Debug("Started to iterate hash nodes");
                stopwatch.Start();
                foreach ((KeyBytes key, byte[] _) in stateTrie.IterateKeyValuePairs())
                {
                    survivalNodes.Add(key);
                }

                _logger.Debug(
                    "Finished to iterate hash nodes (elapsed: {ElapsedMilliseconds} ms)",
                    stopwatch.ElapsedMilliseconds);
                stopwatch.Stop();
            }

            _logger.Debug("{Count} hash nodes will survive", survivalNodes.Count);

            // Clean up nodes.
            long deleteCount = 0;
            _logger.Debug("Started to clean up states...");
            stopwatch.Restart();
            foreach (var stateKey in StateKeyValueStore.ListKeys())
            {
                // FIXME: Bencodex fingerprints also should be tracked.
                //        https://github.com/planetarium/libplanet/issues/1653
                if (survivalNodes.Contains(stateKey))
                {
                    continue;
                }

                StateKeyValueStore.Delete(stateKey);
                deleteCount++;
            }

            _logger.Debug(
                "Finished to clean up {DeleteCount} state hashes " +
                "(elapsed: {ElapsedMilliseconds} ms)",
                deleteCount,
                stopwatch.ElapsedMilliseconds);
            stopwatch.Stop();
        }

        /// <summary>
        /// Copies states under state root hashes of given <paramref name="stateRootHashes"/>
        /// to <paramref name="targetStateStore"/>.
        /// </summary>
        /// <param name="stateRootHashes">The state root hashes of states to copy.</param>
        /// <param name="targetStateStore">The target state store to copy state root hashes.</param>
        /// <exception cref="ArgumentException">Thrown when a state root cannot be found for
        /// any of given <paramref name="stateRootHashes"/>.</exception>
        public void CopyStates(
            IImmutableSet<HashDigest<SHA256>> stateRootHashes, TrieStateStore targetStateStore)
        {
            IKeyValueStore targetKeyValueStore = targetStateStore.StateKeyValueStore;
            var stopwatch = new Stopwatch();
            long count = 0;
            _logger.Verbose("Started {MethodName}()", nameof(CopyStates));
            stopwatch.Start();

            foreach (HashDigest<SHA256> stateRootHash in stateRootHashes)
            {
                var stateTrie = (MerkleTrie)GetStateRoot(stateRootHash);
                if (!stateTrie.Recorded)
                {
                    throw new ArgumentException(
                        $"Failed to find a state root for given state root hash {stateRootHash}.");
                }

                foreach (var (key, value) in stateTrie.IterateKeyValuePairs())
                {
                    targetKeyValueStore.Set(key, value);
                    count++;
                }
            }

            stopwatch.Stop();
            _logger.Debug(
                "Finished copying all states with {Count} key value pairs " +
                "in {ElapsedMilliseconds} ms",
                count,
                stopwatch.ElapsedMilliseconds);
            _logger.Verbose("Finished {MethodName}()", nameof(CopyStates));
        }

        /// <inheritdoc cref="IStateStore.GetStateRoot(HashDigest{SHA256}?, bool)"/>
        public ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash) =>
            new MerkleTrie(
                StateKeyValueStore,
                stateRootHash is { } h2 ? new HashNode(h2) : null,
                _cache);

        /// <inheritdoc cref="System.IDisposable.Dispose()"/>
        public void Dispose()
        {
            if (!_disposed)
            {
                StateKeyValueStore?.Dispose();
                _disposed = true;
            }
        }
    }
}
