using System;
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

        /// <summary>
        /// <para>
        /// Copies states under state root hashes of given <paramref name="stateRootHashes"/>
        /// to <paramref name="targetStateStore"/>.
        /// </para>
        /// <para>
        /// Under the hood, this not only copies states directly associated
        /// with <paramref name="stateRootHashes"/>, but also automatically copies states
        /// that are not directly associated with <paramref name="stateRootHashes"/>
        /// but associated with "subtries" with references stored in <see cref="ITrie"/>s
        /// of <paramref name="stateRootHashes"/>.
        /// </para>
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

                // FIXME: Probably not the right place to implement this.
                // It'd be better to have it in Libplanet.Action.State.
                if (stateTrie.Get(new KeyBytes(Array.Empty<byte>())) is { } metadata)
                {
                    foreach (var (path, hash) in stateTrie.IterateValues())
                    {
                        // Ignore metadata
                        if (path.Length > 0)
                        {
                            HashDigest<SHA256> accountStateRootHash = new HashDigest<SHA256>(hash);
                            MerkleTrie accountStateTrie =
                                (MerkleTrie)GetStateRoot(accountStateRootHash);
                            if (!accountStateTrie.Recorded)
                            {
                                throw new ArgumentException(
                                    $"Failed to find a state root for given " +
                                    $"state root hash {accountStateRootHash}.");
                            }

                            foreach (var (key, value) in accountStateTrie.IterateKeyValuePairs())
                            {
                                targetKeyValueStore.Set(key, value);
                                count++;
                            }
                        }
                    }
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
