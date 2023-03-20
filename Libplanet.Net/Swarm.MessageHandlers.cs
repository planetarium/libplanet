#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Messages;
using Libplanet.Tx;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private Task ProcessMessageHandlerAsync(Message message)
        {
            switch (message.Content)
            {
                case PingMsg _:
                case FindNeighborsMsg _:
                    return Task.CompletedTask;

                case GetChainStatusMsg getChainStatus:
                {
                    _logger.Debug(
                        "Received a {MessageType} message",
                        nameof(GetChainStatusMsg));

                    // This is based on the assumption that genesis block always exists.
                    Block<T> tip = BlockChain.Tip;
                    var chainStatus = new ChainStatusMsg(
                        tip.ProtocolVersion,
                        BlockChain.Genesis.Hash,
                        tip.Index,
                        tip.Hash
                    );

                    return Transport.ReplyMessageAsync(
                        chainStatus,
                        message.Identity,
                        default);
                }

                case GetBlockHashesMsg getBlockHashes:
                {
                    _logger.Debug(
                        "Received a {MessageType} message (stop: {Stop})",
                        nameof(GetBlockHashesMsg),
                        getBlockHashes.Stop);
                    BlockChain.FindNextHashes(
                        getBlockHashes.Locator,
                        getBlockHashes.Stop,
                        FindNextHashesChunkSize
                    ).Deconstruct(
                        out long? offset,
                        out IReadOnlyList<BlockHash> hashes
                    );
                    _logger.Debug(
                        "Found {HashCount} hashes after the branchpoint (offset: {Offset}) " +
                        "with locator [{LocatorHead}, ...] (stop: {Stop})",
                        hashes.Count,
                        offset,
                        getBlockHashes.Locator.FirstOrDefault(),
                        getBlockHashes.Stop);
                    var reply = new BlockHashesMsg(offset, hashes);

                    return Transport.ReplyMessageAsync(reply, message.Identity, default);
                }

                case GetBlocksMsg getBlocksMsg:
                    return TransferBlocksAsync(message);

                case GetTxsMsg getTxs:
                    return TransferTxsAsync(message);

                case TxIdsMsg txIds:
                    ProcessTxIds(message);
                    return Transport.ReplyMessageAsync(
                        new PongMsg(),
                        message.Identity,
                        default
                    );

                case BlockHashesMsg _:
                    _logger.Error(
                        "{MessageType} messages are only for IBD",
                        nameof(BlockHashesMsg));
                    return Task.CompletedTask;

                case BlockHeaderMsg blockHeader:
                    ProcessBlockHeader(message);
                    return Transport.ReplyMessageAsync(
                        new PongMsg(),
                        message.Identity,
                        default
                    );

                default:
                    throw new InvalidMessageContentException(
                        $"Failed to handle message: {message.Content}",
                        message.Content
                    );
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

        private async Task TransferTxsAsync(Message message)
        {
            var getTxsMsg = (GetTxsMsg)message.Content;
            foreach (TxId txid in getTxsMsg.TxIds)
            {
                try
                {
                    Transaction<T> tx = BlockChain.GetTransaction(txid);

                    if (tx is null)
                    {
                        continue;
                    }

                    MessageContent response = new TxMsg(tx.Serialize(true));
                    await Transport.ReplyMessageAsync(response, message.Identity, default);
                }
                catch (KeyNotFoundException)
                {
                    _logger.Warning("Requested TxId {TxId} does not exist", txid);
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

        private async Task TransferBlocksAsync(Message message)
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
                if (_store.GetBlock<T>(hash) is { } block)
                {
                    byte[] blockPayload = Codec.Encode(block.MarshalBlock());
                    payloads.Add(blockPayload);
                    byte[] commitPayload = BlockChain.GetBlockCommit(block.Hash) is { } commit
                        ? Codec.Encode(commit.Bencoded)
                        : new byte[0];
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
                    await Transport.ReplyMessageAsync(response, message.Identity, default);
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
                await Transport.ReplyMessageAsync(response, message.Identity, default);
            }

            if (count == 0)
            {
                var response = new BlocksMsg(payloads);
                _logger.Verbose(
                    "Enqueuing a blocks reply (...{Index}/{Total}) to {Identity}...",
                    count,
                    total,
                    reqId);
                await Transport.ReplyMessageAsync(response, message.Identity, default);
            }

            _logger.Debug("{Count} blocks were transferred to {Identity}", count, reqId);
        }
    }
}
