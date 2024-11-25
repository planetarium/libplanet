#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Net
{
    public partial class Swarm
    {
        private readonly NullableSemaphore _transferBlocksSemaphore;
        private readonly NullableSemaphore _transferTxsSemaphore;
        private readonly NullableSemaphore _transferEvidenceSemaphore;

        private async Task ProcessMessageHandlerAsync(
            Message message,
            Channel<MessageContent> channel)
        {
            switch (message.Content)
            {
                case PingMsg _:
                case FindNeighborsMsg _:
                    return;

                case GetChainStatusMsg getChainStatus:
                {
                    _logger.Debug(
                        "Received a {MessageType} message",
                        nameof(GetChainStatusMsg));

                    // This is based on the assumption that genesis block always exists.
                    Block tip = BlockChain.Tip;
                    var chainStatus = new ChainStatusMsg(
                        tip.ProtocolVersion,
                        BlockChain.Genesis.Hash,
                        tip.Index,
                        tip.Hash
                    );

                    await channel.Writer.WriteAsync(chainStatus);
                    return;
                }

                case GetBlockHashesMsg getBlockHashes:
                {
                    _logger.Debug(
                        "Received a {MessageType} message locator [{LocatorHead}]",
                        nameof(GetBlockHashesMsg),
                        getBlockHashes.Locator.Hash);
                    IReadOnlyList<BlockHash> hashes = BlockChain.FindNextHashes(
                        getBlockHashes.Locator,
                        FindNextHashesChunkSize);
                    _logger.Debug(
                        "Found {HashCount} hashes after the branchpoint " +
                        "with locator [{LocatorHead}]",
                        hashes.Count,
                        getBlockHashes.Locator.Hash);
                    await channel.Writer.WriteAsync(new BlockHashesMsg(hashes));
                    return;
                }

                case GetBlocksMsg getBlocksMsg:
                    await TransferBlocksAsync(message, channel);
                    return;

                case GetTxsMsg getTxs:
                    await TransferTxsAsync(message, channel);
                    return;

                case GetEvidenceMsg getTxs:
                    await TransferEvidenceAsync(message, channel);
                    return;

                case TxIdsMsg txIds:
                    ProcessTxIds(message);
                    await channel.Writer.WriteAsync(new PongMsg());
                    return;

                case EvidenceIdsMsg evidenceIds:
                    ProcessEvidenceIds(message);
                    await channel.Writer.WriteAsync(new PongMsg());
                    return;

                case BlockHashesMsg _:
                    _logger.Error(
                        "{MessageType} messages are only for IBD",
                        nameof(BlockHashesMsg));
                    return;

                case BlockHeaderMsg blockHeader:
                    ProcessBlockHeader(message);
                    await channel.Writer.WriteAsync(new PongMsg());
                    return;

                default:
                    throw new InvalidMessageContentException(
                        $"Failed to handle message: {message.Content}",
                        message.Content);
            }
        }

        private void ProcessBlockHeader(Message message)
        {
            var blockHeaderMsg = (BlockHeaderMsg)message.Content;
            if (!blockHeaderMsg.GenesisHash.Equals(BlockChain.Genesis.Hash))
            {
                _logger.Debug(
                    "{MessageType} message was sent from a peer {Peer} with " +
                    "a different genesis block {Hash}",
                    nameof(BlockHeaderMsg),
                    message.Remote,
                    blockHeaderMsg.GenesisHash
                );
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header;
            try
            {
                header = blockHeaderMsg.GetHeader();
            }
            catch (InvalidBlockException ibe)
            {
                _logger.Debug(
                    ibe,
                    "Received header #{BlockIndex} {BlockHash} is invalid",
                    blockHeaderMsg.HeaderHash,
                    blockHeaderMsg.HeaderIndex
                );
                return;
            }

            try
            {
                header.ValidateTimestamp();
            }
            catch (InvalidBlockTimestampException e)
            {
                _logger.Debug(
                    e,
                    "Received header #{BlockIndex} {BlockHash} has invalid timestamp: {Timestamp}",
                    header.Index,
                    header.Hash,
                    header.Timestamp
                );
                return;
            }

            bool needed = IsBlockNeeded(header);
            _logger.Information(
                "Received " + nameof(BlockHeader) + " #{ReceivedIndex} {ReceivedHash}",
                header.Index,
                header.Hash);

            if (needed)
            {
                _logger.Information(
                    "Adding received header #{BlockIndex} {BlockHash} from peer {Peer} to " +
                    nameof(BlockDemandTable) + "...",
                    header.Index,
                    header.Hash,
                    message.Remote);
                BlockDemandTable.Add(
                    BlockChain,
                    IsBlockNeeded,
                    new BlockDemand(header, message.Remote, DateTimeOffset.UtcNow));
                return;
            }
            else
            {
                _logger.Information(
                    "Discarding received header #{ReceivedIndex} {ReceivedHash} from peer {Peer} " +
                    "as it is not needed for the current chain with tip #{TipIndex} {TipHash}",
                    header.Index,
                    header.Hash,
                    message.Remote,
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                return;
            }
        }

        private async Task TransferTxsAsync(Message message, Channel<MessageContent> channel)
        {
            if (!await _transferTxsSemaphore.WaitAsync(TimeSpan.Zero, _cancellationToken))
            {
                _logger.Debug(
                    "Message {Message} is dropped due to task limit {Limit}",
                    message,
                    Options.TaskRegulationOptions.MaxTransferTxsTaskCount);
                return;
            }

            try
            {
                var getTxsMsg = (GetTxsMsg)message.Content;
                foreach (TxId txid in getTxsMsg.TxIds)
                {
                    try
                    {
                        Transaction tx = BlockChain.GetTransaction(txid);

                        if (tx is null)
                        {
                            continue;
                        }

                        MessageContent response = new TxMsg(tx.Serialize());
                        await channel.Writer.WriteAsync(response);
                    }
                    catch (KeyNotFoundException)
                    {
                        _logger.Warning("Requested TxId {TxId} does not exist", txid);
                    }
                }
            }
            finally
            {
                int count = _transferTxsSemaphore.Release();
                if (count >= 0)
                {
                    _logger.Debug(
                        "{Count}/{Limit} tasks are remaining for handling {FName}",
                        count,
                        Options.TaskRegulationOptions.MaxTransferTxsTaskCount,
                        nameof(TransferTxsAsync));
                }
            }
        }

        private void ProcessTxIds(Message message)
        {
            var txIdsMsg = (TxIdsMsg)message.Content;
            _logger.Information(
                "Received a {MessageType} message with {TxIdCount} txIds",
                nameof(TxIdsMsg),
                txIdsMsg.Ids.Count()
            );

            TxCompletion.Demand(message.Remote, txIdsMsg.Ids);
        }

        private async Task TransferBlocksAsync(Message message, Channel<MessageContent> channel)
        {
            if (!await _transferBlocksSemaphore.WaitAsync(TimeSpan.Zero, _cancellationToken))
            {
                _logger.Debug(
                    "Message {Message} is dropped due to task limit {Limit}",
                    message,
                    Options.TaskRegulationOptions.MaxTransferBlocksTaskCount);
                return;
            }

            try
            {
                var blocksMsg = (GetBlocksMsg)message.Content;
                string reqId = !(message.Identity is null) && message.Identity.Length == 16
                    ? new Guid(message.Identity).ToString()
                    : "unknown";
                _logger.Verbose(
                    "Preparing a {MessageType} message to reply to {Identity}...",
                    nameof(Messages.BlocksMsg),
                    reqId);

                var payloads = new List<byte[]>();

                List<BlockHash> hashes = blocksMsg.BlockHashes.ToList();
                int count = 0;
                int total = hashes.Count;
                const string logMsg =
                    "Fetching block {Index}/{Total} {Hash} to include in " +
                    "a reply to {Identity}...";
                foreach (BlockHash hash in hashes)
                {
                    _logger.Verbose(logMsg, count, total, hash, reqId);
                    if (_store.GetBlock(hash) is { } block)
                    {
                        byte[] blockPayload = Codec.Encode(block.MarshalBlock());
                        payloads.Add(blockPayload);
                        byte[] commitPayload = BlockChain.GetBlockCommit(block.Hash) is { } commit
                            ? Codec.Encode(commit.Bencoded)
                            : Array.Empty<byte>();
                        payloads.Add(commitPayload);
                        count++;
                    }

                    if (payloads.Count / 2 == blocksMsg.ChunkSize)
                    {
                        var response = new BlocksMsg(payloads);
                        _logger.Verbose(
                            "Enqueuing a blocks reply (...{Count}/{Total})...",
                            count,
                            total
                        );
                        await channel.Writer.WriteAsync(response);
                        payloads.Clear();
                    }
                }

                if (payloads.Any())
                {
                    var response = new BlocksMsg(payloads);
                    _logger.Verbose(
                        "Enqueuing a blocks reply (...{Count}/{Total}) to {Identity}...",
                        count,
                        total,
                        reqId);
                    await channel.Writer.WriteAsync(response);
                }

                if (count == 0)
                {
                    var response = new BlocksMsg(payloads);
                    _logger.Verbose(
                        "Enqueuing a blocks reply (...{Index}/{Total}) to {Identity}...",
                        count,
                        total,
                        reqId);
                    await channel.Writer.WriteAsync(response);
                }

                _logger.Debug("{Count} blocks were transferred to {Identity}", count, reqId);
            }
            finally
            {
                int count = _transferBlocksSemaphore.Release();
                if (count >= 0)
                {
                    _logger.Debug(
                        "{Count}/{Limit} tasks are remaining for handling {FName}",
                        count,
                        Options.TaskRegulationOptions.MaxTransferBlocksTaskCount,
                        nameof(TransferBlocksAsync));
                }
            }
        }
    }
}
