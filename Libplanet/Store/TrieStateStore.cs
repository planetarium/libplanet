#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Security.Cryptography;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Serilog;

namespace Libplanet.Store
{
    /// <summary>
    /// An <see cref="IStateStore"/> implementation. It stores states with <see cref="MerkleTrie"/>.
    /// </summary>
    public class TrieStateStore : IStateStore
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly bool _secure;
        private readonly ILogger _logger;
        private bool _disposed = false;

        /// <summary>
        /// Creates a new <see cref="TrieStateStore"/>.
        /// </summary>
        /// <param name="stateKeyValueStore">The storage to store states. It used by
        /// <see cref="MerkleTrie"/> in internal.</param>
        /// <param name="secure">Whether to use <see cref="MerkleTrie"/> in secure mode.
        /// <seealso cref="MerkleTrie(IKeyValueStore, INode?, bool)"/>.</param>
        public TrieStateStore(
            IKeyValueStore stateKeyValueStore,
            bool secure = false)
        {
            _stateKeyValueStore = stateKeyValueStore;
            _secure = secure;
            _logger = Log.ForContext<TrieStateStore>();
        }

        /// <inheritdoc cref="IStateStore.PruneStates(IImmutableSet{HashDigest{SHA256}})"/>
        public void PruneStates(IImmutableSet<HashDigest<SHA256>> survivalStateRootHashes)
        {
            var stopwatch = new Stopwatch();
            _logger.Verbose($"Started {nameof(PruneStates)}()");
            var survivalNodes = new HashSet<HashDigest<SHA256>>();
            foreach (HashDigest<SHA256> stateRootHash in survivalStateRootHashes)
            {
                var stateTrie = new MerkleTrie(
                    _stateKeyValueStore,
                    new HashNode(stateRootHash),
                    _secure
                );
                _logger.Debug("Started to iterate hash nodes.");
                stopwatch.Start();
                foreach (HashDigest<SHA256> nodeHash in stateTrie.IterateHashNodes())
                {
                    survivalNodes.Add(nodeHash);
                }

                _logger.Debug(
                    "Finished to iterate hash nodes (elapsed: {ElapsedMilliseconds} ms).",
                    stopwatch.ElapsedMilliseconds);
                stopwatch.Stop();
            }

            _logger.Debug("{Count} hash nodes will survive.", survivalNodes.Count);

            // Clean up nodes.
            long deleteCount = 0;
            _logger.Debug("Started to clean up states.");
            stopwatch.Restart();
            foreach (var stateKey in _stateKeyValueStore.ListKeys())
            {
                if (survivalNodes.Contains(new HashDigest<SHA256>(stateKey)))
                {
                    continue;
                }

                _stateKeyValueStore.Delete(stateKey);
                ++deleteCount;
            }

            _logger.Debug(
                "Finished to clean up {DeleteCount} state hashes " +
                "(elapsed: {ElapsedMilliseconds} ms).",
                deleteCount,
                stopwatch.ElapsedMilliseconds);
            stopwatch.Stop();
        }

        /// <inheritdoc cref="IStateStore.GetStateRoot(HashDigest{SHA256}?)"/>
        public ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash) =>
            new MerkleTrie(
                _stateKeyValueStore,
                stateRootHash is { } hash ? new HashNode(hash) : null,
                _secure
            );

        /// <inheritdoc cref="System.IDisposable.Dispose()"/>
        public void Dispose()
        {
            if (!_disposed)
            {
                _stateKeyValueStore?.Dispose();
                _disposed = true;
            }
        }
    }
}
