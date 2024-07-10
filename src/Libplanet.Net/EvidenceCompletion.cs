using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Types.Evidence;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net
{
    public class EvidenceCompletion<TPeer> : IDisposable
        where TPeer : notnull
    {
        private readonly CancellationTokenSource _cancellationTokenSource;
        private readonly BlockChain _blockChain;
        private readonly EvidenceFetcher _evidenceFetcher;
        private readonly EvidenceBroadcaster _evidenceBroadcaster;
        private readonly ILogger _logger;
        private readonly ConcurrentDictionary<TPeer, EvidenceFetchJob> _evidenceFetchJobs;

        private bool _disposed;

        public EvidenceCompletion(
            BlockChain blockChain,
            EvidenceFetcher evidenceFetcher,
            EvidenceBroadcaster evidenceBroadcaster)
        {
            _cancellationTokenSource = new CancellationTokenSource();
            _blockChain = blockChain;
            _evidenceFetcher = evidenceFetcher;
            _evidenceBroadcaster = evidenceBroadcaster;
            _evidenceFetchJobs = new ConcurrentDictionary<TPeer, EvidenceFetchJob>();
            EvidenceReceived = new AsyncAutoResetEvent();

            _logger = Log
                .ForContext<EvidenceCompletion<TPeer>>()
                .ForContext("Source", nameof(EvidenceCompletion<TPeer>));
        }

        public delegate IAsyncEnumerable<EvidenceBase> EvidenceFetcher(
            TPeer peer,
            IEnumerable<EvidenceId> evidenceIds,
            CancellationToken cancellationToken
        );

        public delegate void EvidenceBroadcaster(TPeer except, IEnumerable<EvidenceBase> evidence);

        internal AsyncAutoResetEvent EvidenceReceived { get; }

        public void Dispose()
        {
            if (!_disposed)
            {
                _cancellationTokenSource.Cancel();
                _disposed = true;
            }
        }

        public void Demand(TPeer peer, EvidenceId evidenceId) => Demand(peer, new[] { evidenceId });

        public void Demand(TPeer peer, IEnumerable<EvidenceId> evidenceIds)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(EvidenceCompletion<TPeer>));
            }

            HashSet<EvidenceId> required = GetRequiredEvidenceIds(evidenceIds);

            _logger.Information(
                "There are {RequiredCount} unaware transactions to receive out of {Count} ",
                required.Count,
                evidenceIds.Count());

            if (!required.Any())
            {
                return;
            }

            do
            {
                EvidenceFetchJob evidenceFetchJob = _evidenceFetchJobs.GetOrAdd(
                    peer,
                    peerAsKey => EvidenceFetchJob.RunAfter(
                        peerAsKey,
                        _evidenceFetcher,
                        TimeSpan.FromSeconds(1),
                        (task) =>
                        {
                            if (task.IsCompleted &&
                                !task.IsFaulted &&
                                !task.IsCanceled &&
                                task.Result is ISet<EvidenceBase> evidence)
                            {
                                ProcessFetchedEvidenceIds(evidence, peerAsKey);
                            }

                            _evidenceFetchJobs.TryRemove(peer, out _);
                        },
                        _cancellationTokenSource.Token
                    )
                );

                if (evidenceFetchJob.TryAdd(required, out HashSet<EvidenceId> rest))
                {
                    break;
                }

                required = rest;
                _evidenceFetchJobs.TryRemove(peer, out _);
            }
            while (true);
        }

        private void ProcessFetchedEvidenceIds(ISet<EvidenceBase> evidence, TPeer peer)
        {
            try
            {
                var policyCompatEvidence = new HashSet<EvidenceBase>(
                    evidence.Where(
                        evidence =>
                        {
                            return true;
                        }));

                var pendingEvidence = new List<EvidenceBase>();
                foreach (var ev in policyCompatEvidence)
                {
                    try
                    {
                        _blockChain.AddEvidence(ev);
                        pendingEvidence.Add(ev);
                    }
                    catch (Exception e)
                    {
                        const string message =
                            "Received transaction from {Peer} with id {EvidenceId} " +
                            "will not be added since it is invalid";
                        _logger.Error(e, message, peer, ev.Id);
                    }
                }

                // To maintain the consistency of the unit tests.
                if (policyCompatEvidence.Any())
                {
                    EvidenceReceived.Set();
                }

                if (pendingEvidence.Any())
                {
                    _logger.Information(
                        "Staged {StagedEvidenceCount} out of {EvidenceCount} evidence from {Peer}",
                        pendingEvidence.Count,
                        evidence.Count,
                        peer);

                    _evidenceBroadcaster(peer, pendingEvidence);
                }
                else
                {
                    _logger.Information(
                        "No transaction has been staged among received {EvidenceCount} from {Peer}",
                        evidence.Count,
                        peer
                    );
                }
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An error occurred during {MethodName}() from {Peer}",
                    nameof(ProcessFetchedEvidenceIds),
                    peer);
                throw;
            }
            finally
            {
                _logger.Debug(
                    "End of {MethodName}() from {Peer}",
                    nameof(ProcessFetchedEvidenceIds),
                    peer);
            }
        }

        private HashSet<EvidenceId> GetRequiredEvidenceIds(IEnumerable<EvidenceId> ids)
        {
            return new HashSet<EvidenceId>(ids);
        }

        private class EvidenceFetchJob
        {
            private readonly EvidenceFetcher _evidenceFetcher;
            private readonly Channel<EvidenceId> _evidenceIds;
            private readonly TPeer _peer;
            private readonly ILogger _logger;
            private readonly ReaderWriterLockSlim _evidenceIdsWriterLock;

            private EvidenceFetchJob(EvidenceFetcher evidenceFetcher, TPeer peer)
            {
                _evidenceFetcher = evidenceFetcher;
                _peer = peer;
                _evidenceIds = Channel.CreateUnbounded<EvidenceId>(
                    new UnboundedChannelOptions
                    {
                        SingleReader = true,
                    }
                );
                _evidenceIdsWriterLock = new ReaderWriterLockSlim();

                _logger = Log
                    .ForContext<EvidenceFetchJob>()
                    .ForContext("Source", nameof(EvidenceFetchJob));
            }

            public static EvidenceFetchJob RunAfter(
                TPeer peer,
                EvidenceFetcher evidenceFetcher,
                TimeSpan waitFor,
                Action<Task<ISet<EvidenceBase>>> continuation,
                CancellationToken cancellationToken)
            {
                var task = new EvidenceFetchJob(evidenceFetcher, peer);
                _ = task.RequestAsync(waitFor, cancellationToken).ContinueWith(continuation);
                return task;
            }

            public bool TryAdd(IEnumerable<EvidenceId> evidenceIds, out HashSet<EvidenceId> rest)
            {
                rest = new HashSet<EvidenceId>(evidenceIds);
                _evidenceIdsWriterLock.EnterReadLock();
                try
                {
                    foreach (EvidenceId evidenceId in evidenceIds)
                    {
                        _evidenceIds.Writer.WriteAsync(evidenceId);
                        rest.Remove(evidenceId);
                    }

                    return true;
                }
                catch (ChannelClosedException)
                {
                    return false;
                }
                finally
                {
                    _evidenceIdsWriterLock.ExitReadLock();
                }
            }

            private async Task<ISet<EvidenceBase>> RequestAsync(
                TimeSpan waitFor,
                CancellationToken cancellationToken
            )
            {
                _ = Task.Run(async () =>
                {
                    await Task.Delay(waitFor);
                    _evidenceIdsWriterLock.EnterWriteLock();
                    try
                    {
                        _evidenceIds.Writer.TryComplete();
                    }
                    finally
                    {
                        _evidenceIdsWriterLock.ExitWriteLock();
                    }
                });

                try
                {
                    var evidenceIds = new HashSet<EvidenceId>();

                    while (await _evidenceIds.Reader.WaitToReadAsync(cancellationToken))
                    {
                        while (_evidenceIds.Reader.TryRead(out EvidenceId evidenceId))
                        {
                            evidenceIds.Add(evidenceId);
                        }
                    }

                    _logger.Debug(
                        "Start to run _evidenceFetcher from {Peer}. (count: {Count})",
                        _peer,
                        evidenceIds.Count);
                    var stopWatch = new Stopwatch();
                    stopWatch.Start();
                    var evidence = new HashSet<EvidenceBase>(
                        await _evidenceFetcher(
                                _peer,
                                evidenceIds,
                                cancellationToken)
                            .ToListAsync(cancellationToken)
                            .AsTask());
                    _logger.Debug(
                        "End of _evidenceFetcher from {Peer}. (received: {Count}); " +
                        "Time taken: {Elapsed}",
                        _peer,
                        evidence.Count,
                        stopWatch.Elapsed);

                    return evidence;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An error occurred during {MethodName}() from {Peer}",
                        nameof(RequestAsync),
                        _peer);
                    throw;
                }
                finally
                {
                    _logger.Debug(
                        "End of {MethodName}() from {Peer}",
                        nameof(RequestAsync),
                        _peer);
                }
            }
        }
    }
}
