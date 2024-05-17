#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Types.Evidences;
using Libplanet.Types.Tx;
#if NETSTANDARD2_0
using Libplanet.Common;
#endif

namespace Libplanet.Net
{
    public partial class Swarm
    {
        public void BroadcastEvidences(IEnumerable<Evidence> evidences)
        {
            BroadcastEvidences(null, evidences);
        }

        internal async IAsyncEnumerable<Evidence> GetEvidencesAsync(
            BoundPeer peer,
            IEnumerable<EvidenceId> evidenceIds,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            var evidenceIdsAsArray = evidenceIds as EvidenceId[] ?? evidenceIds.ToArray();
            var request = new GetEvidencesMsg(evidenceIdsAsArray);
            int evidenceCount = evidenceIdsAsArray.Count();

            _logger.Debug("Required evidence count: {Count}", evidenceCount);

            var evidenceRecvTimeout = Options.TimeoutOptions.GetTxsBaseTimeout
                + Options.TimeoutOptions.GetTxsPerTxIdTimeout.Multiply(evidenceCount);
            if (evidenceRecvTimeout > Options.TimeoutOptions.MaxTimeout)
            {
                evidenceRecvTimeout = Options.TimeoutOptions.MaxTimeout;
            }

            IEnumerable<Message> replies;
            try
            {
                replies = await Transport.SendMessageAsync(
                    peer,
                    request,
                    evidenceRecvTimeout,
                    evidenceCount,
                    true,
                    cancellationToken
                ).ConfigureAwait(false);
            }
            catch (CommunicationFailException e) when (e.InnerException is TimeoutException)
            {
                yield break;
            }

            foreach (Message message in replies)
            {
                if (message.Content is EvidenceMsg parsed)
                {
                    Evidence evidence = Evidence.Deserialize(parsed.Payload);
                    yield return evidence;
                }
                else
                {
                    string errorMessage =
                        $"Expected {nameof(Transaction)} messages as response of " +
                        $"the {nameof(GetEvidencesMsg)} message, but got a " +
                        $"{message.GetType().Name} " +
                        $"message instead: {message}";
                    throw new InvalidMessageContentException(errorMessage, message.Content);
                }
            }
        }

        private void BroadcastEvidences(BoundPeer except, IEnumerable<Evidence> evidences)
        {
            List<EvidenceId> evidenceIds = evidences.Select(evidence => evidence.Id).ToList();
            _logger.Information("Broadcasting {Count} evidenceIds...", evidenceIds.Count);
            BroadcastEvidenceIds(except?.Address, evidenceIds);
        }

        private async Task BroadcastEvidenceAsync(
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(broadcastTxInterval, cancellationToken);

                    await Task.Run(
                        () =>
                        {
                            List<EvidenceId> evidenceIds = BlockChain
                                .GetPendingEvidences()
                                .Select(item => item.Id)
                                .ToList();

                            if (evidenceIds.Any())
                            {
                                _logger.Debug(
                                    "Broadcasting {EvidenceCount} pending evidences...",
                                    evidenceIds.Count);
                                BroadcastEvidenceIds(null, evidenceIds);
                            }
                        }, cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, "{MethodName}() was canceled", nameof(BroadcastTxAsync));
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occurred during {MethodName}()",
                        nameof(BroadcastTxAsync));
                }
            }
        }

        private void BroadcastEvidenceIds(Address? except, IEnumerable<EvidenceId> evidenceIds)
        {
            var message = new EvidenceIdsMsg(evidenceIds);
            BroadcastMessage(except, message);
        }

        private async Task TransferEvidencesAsync(Message message)
        {
            if (!await _transferEvidencesSemaphore.WaitAsync(TimeSpan.Zero, _cancellationToken))
            {
                _logger.Debug(
                    "Message {Message} is dropped due to task limit {Limit}",
                    message,
                    Options.TaskRegulationOptions.MaxTransferTxsTaskCount);
                return;
            }

            try
            {
                var getEvidencesMsg = (GetEvidencesMsg)message.Content;
                foreach (EvidenceId txid in getEvidencesMsg.EvidenceIds)
                {
                    try
                    {
                        Evidence tx = BlockChain.GetPendingEvidence(txid);

                        if (tx is null)
                        {
                            continue;
                        }

                        MessageContent response = new EvidenceMsg(tx.Serialize());
                        await Transport.ReplyMessageAsync(response, message.Identity, default);
                    }
                    catch (KeyNotFoundException)
                    {
                        _logger.Warning("Requested TxId {TxId} does not exist", txid);
                    }
                }
            }
            finally
            {
                int count = _transferEvidencesSemaphore.Release();
                if (count >= 0)
                {
                    _logger.Debug(
                        "{Count}/{Limit} tasks are remaining for handling {FName}",
                        count,
                        Options.TaskRegulationOptions.MaxTransferTxsTaskCount,
                        nameof(TransferEvidencesAsync));
                }
            }
        }

        private void ProcessEvidenceIds(Message message)
        {
            var evidenceIdsMsg = (EvidenceIdsMsg)message.Content;
            _logger.Information(
                "Received a {MessageType} message with {EvidenceIdCount} evidenceIds",
                nameof(EvidenceIdsMsg),
                evidenceIdsMsg.Ids.Count()
            );

            EvidenceCompletion.Demand(message.Remote, evidenceIdsMsg.Ids);
        }
    }
}
