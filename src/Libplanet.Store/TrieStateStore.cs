using System;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
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

        public TrieStateStore(IKeyValueStore stateKeyValueStore, ILogger logger)
        {
            StateKeyValueStore = stateKeyValueStore;
            _cache = new HashNodeCache();
            _logger = logger;
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
            var performanceData = new PerformanceData();
            long count = 0;
            long accountStateCount = 0;
            long accountStateTrieCount = 0;

            _logger.Verbose("Started {MethodName}()", nameof(CopyStates));
            stopwatch.Start();
            performanceData.TotalStateRoots = stateRootHashes.Count;

            foreach (HashDigest<SHA256> stateRootHash in stateRootHashes)
            {
                var stateRootStopwatch = Stopwatch.StartNew();
                var stateTrie = (MerkleTrie)GetStateRoot(stateRootHash);
                if (!stateTrie.Recorded)
                {
                    throw new ArgumentException(
                        $"Failed to find a state root for given state root hash {stateRootHash}.");
                }
                stateRootStopwatch.Stop();
                performanceData.StateRootProcessingTimeMs += stateRootStopwatch.ElapsedMilliseconds;

                var trieIterationStopwatch = Stopwatch.StartNew();
                foreach (var (key, value) in stateTrie.IterateKeyValuePairs())
                {
                    var kvSetStopwatch = Stopwatch.StartNew();
                    targetKeyValueStore.Set(key, value);
                    kvSetStopwatch.Stop();
                    performanceData.KeyValueSetTimeMs += kvSetStopwatch.ElapsedMilliseconds;
                    count++;
                }
                trieIterationStopwatch.Stop();
                performanceData.TrieIterationTimeMs += trieIterationStopwatch.ElapsedMilliseconds;

                // FIXME: Probably not the right place to implement this.
                // It'd be better to have it in Libplanet.Action.State.
                var metadataStopwatch = Stopwatch.StartNew();
                if (stateTrie.Get(new KeyBytes(Array.Empty<byte>())) is { } metadata)
                {
                    // Account State들을 수집하여 병렬 처리
                    var accountStateData = new List<(HashDigest<SHA256> rootHash, MerkleTrie trie)>();

                    foreach (var (path, hash) in stateTrie.IterateValues())
                    {
                        // Ignore metadata
                        if (path.Length > 0)
                        {
                            accountStateCount++;

                            HashDigest<SHA256> accountStateRootHash = new HashDigest<SHA256>(hash);
                            var accountStateTrieStopwatch = Stopwatch.StartNew();
                            MerkleTrie accountStateTrie =
                                (MerkleTrie)GetStateRoot(accountStateRootHash);
                            accountStateTrieStopwatch.Stop();
                            performanceData.AccountStateProcessingTimeMs += accountStateTrieStopwatch.ElapsedMilliseconds;

                            if (!accountStateTrie.Recorded)
                            {
                                throw new ArgumentException(
                                    $"Failed to find a state root for given " +
                                    $"state root hash {accountStateRootHash}.");
                            }

                            accountStateData.Add((accountStateRootHash, accountStateTrie));
                        }
                    }

                                        // 병렬 처리로 Account State들을 처리
                    _logger.Information("Starting parallel processing of {AccountStateCount} account states", accountStateData.Count);
                    var parallelStopwatch = Stopwatch.StartNew();

                    var lockObject = new object();
                    var parallelCount = 0;

                    Parallel.ForEach(accountStateData, accountStateItem =>
                    {
                        var (accountStateRootHash, accountStateTrie) = accountStateItem;

                        accountStateTrieCount++;
                        var kvPairCount = 0;

                        foreach (var (key, value) in accountStateTrie.IterateKeyValuePairs())
                        {
                            targetKeyValueStore.Set(key, value);
                            kvPairCount++;
                        }

                        lock (lockObject)
                        {
                            count += kvPairCount;
                            parallelCount++;
                        }
                    });

                    parallelStopwatch.Stop();

                    // 병렬 처리 시간을 Account State Processing에 할당
                    performanceData.AccountStateProcessingTimeMs += parallelStopwatch.ElapsedMilliseconds;

                    _logger.Information("Parallel processing completed: {ProcessedCount} account states in {ElapsedMs} ms",
                        parallelCount, parallelStopwatch.ElapsedMilliseconds);
                }
                metadataStopwatch.Stop();
                performanceData.MetadataProcessingTimeMs += metadataStopwatch.ElapsedMilliseconds;
            }

            stopwatch.Stop();
            performanceData.TotalTimeMs = stopwatch.ElapsedMilliseconds;
            performanceData.TotalKeyValuePairs = count;
            performanceData.TotalAccountStates = accountStateCount;

            // 성능 분석 로그 출력
            _logger.Information("=== CopyStates Performance Analysis ===");
            _logger.Information("Total Execution Time: {TotalTime} ms ({TotalTimeMinutes:F2} minutes)",
                performanceData.TotalTimeMs, performanceData.TotalTimeMs / 60000.0);
            _logger.Information("Total State Roots Processed: {StateRoots}", performanceData.TotalStateRoots);
            _logger.Information("Total Account States Processed: {AccountStates}", performanceData.TotalAccountStates);
            _logger.Information("Total Account State Tries Processed: {AccountStateTries}", accountStateTrieCount);
            _logger.Information("Total Key-Value Pairs Copied: {KeyValuePairs}", performanceData.TotalKeyValuePairs);

            // 시간 분포 분석
            var stateRootPercentage = (double)performanceData.StateRootProcessingTimeMs / performanceData.TotalTimeMs * 100;
            var trieIterationPercentage = (double)performanceData.TrieIterationTimeMs / performanceData.TotalTimeMs * 100;
            var keyValueSetPercentage = (double)performanceData.KeyValueSetTimeMs / performanceData.TotalTimeMs * 100;
            var metadataPercentage = (double)performanceData.MetadataProcessingTimeMs / performanceData.TotalTimeMs * 100;
            var accountStatePercentage = (double)performanceData.AccountStateProcessingTimeMs / performanceData.TotalTimeMs * 100;

            _logger.Information("=== Time Distribution ===");
            _logger.Information("State Root Processing: {Time} ms ({Percentage:F1}%)",
                performanceData.StateRootProcessingTimeMs, stateRootPercentage);
            _logger.Information("Trie Iteration: {Time} ms ({Percentage:F1}%)",
                performanceData.TrieIterationTimeMs, trieIterationPercentage);
            _logger.Information("Key-Value Set Operations: {Time} ms ({Percentage:F1}%)",
                performanceData.KeyValueSetTimeMs, keyValueSetPercentage);
            _logger.Information("Metadata Processing: {Time} ms ({Percentage:F1}%)",
                performanceData.MetadataProcessingTimeMs, metadataPercentage);
            _logger.Information("Account State Processing: {Time} ms ({Percentage:F1}%)",
                performanceData.AccountStateProcessingTimeMs, accountStatePercentage);

            // 처리량 분석
            var totalTimeSeconds = performanceData.TotalTimeMs / 1000.0;
            var stateRootsPerSecond = performanceData.TotalStateRoots / totalTimeSeconds;
            var keyValuePairsPerSecond = performanceData.TotalKeyValuePairs / totalTimeSeconds;
            var accountStatesPerSecond = performanceData.TotalAccountStates / totalTimeSeconds;

            _logger.Information("=== Throughput Analysis ===");
            _logger.Information("State Roots per second: {Rate:F2}", stateRootsPerSecond);
            _logger.Information("Key-Value pairs per second: {Rate:F2}", keyValuePairsPerSecond);
            _logger.Information("Account States per second: {Rate:F2}", accountStatesPerSecond);

            // 병목점 분석
            _logger.Information("=== Bottleneck Analysis ===");
            if (keyValueSetPercentage > 50)
            {
                _logger.Information("🔴 PRIMARY BOTTLENECK: Key-Value Set operations ({Percentage:F1}%)", keyValueSetPercentage);
                _logger.Information("   - Consider implementing batch writing");
                _logger.Information("   - Optimize RocksDB write buffer size");
            }
            else if (trieIterationPercentage > 30)
            {
                _logger.Information("🟡 SECONDARY BOTTLENECK: Trie iteration ({Percentage:F1}%)", trieIterationPercentage);
                _logger.Information("   - Consider implementing node caching");
                _logger.Information("   - Optimize HashNode resolution");
            }
            else if (accountStatePercentage > 20)
            {
                _logger.Information("🟡 SECONDARY BOTTLENECK: Account state processing ({Percentage:F1}%)", accountStatePercentage);
                _logger.Information("   - Consider parallel processing of account states");
                _logger.Information("   - Implement account state batching");
            }

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

    /// <summary>
    /// 성능 측정 데이터를 담는 클래스
    /// </summary>
    public class PerformanceData
    {
        public long TotalTimeMs { get; set; }
        public long StateRootProcessingTimeMs { get; set; }
        public long TrieIterationTimeMs { get; set; }
        public long KeyValueSetTimeMs { get; set; }
        public long MetadataProcessingTimeMs { get; set; }
        public long AccountStateProcessingTimeMs { get; set; }
        public long TotalStateRoots { get; set; }
        public long TotalKeyValuePairs { get; set; }
        public long TotalAccountStates { get; set; }
        public double MemoryUsageMB { get; set; }
    }
}
