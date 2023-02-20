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
            switch (message)
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
                        tip.Hash,
                        tip.TotalDifficulty
                    )
                    {
                        Identity = getChainStatus.Identity,
                    };

                    return Transport.ReplyMessageAsync(chainStatus, default);
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
                    var reply = new BlockHashesMsg(offset, hashes)
                    {
                        Identity = getBlockHashes.Identity,
                    };

                    return Transport.ReplyMessageAsync(reply, default);
                }

                case GetBlocksMsg getBlocks:
                    return TransferBlocksAsync(getBlocks);

                case GetTxsMsg getTxs:
                    return TransferTxsAsync(getTxs);

                case TxIdsMsg txIds:
                    ProcessTxIds(txIds);
                    return Transport.ReplyMessageAsync(
                        new PongMsg { Identity = txIds.Identity },
                        default
                    );

                case BlockHashesMsg _:
                    _logger.Error(
                        "{MessageType} messages are only for IBD",
                        nameof(BlockHashesMsg));
                    return Task.CompletedTask;

                case BlockHeaderMsg blockHeader:
                    ProcessBlockHeader(blockHeader);
                    return Transport.ReplyMessageAsync(
                        new PongMsg { Identity = blockHeader.Identity },
                        default
                    );

                default:
                    throw new InvalidMessageException(
                        $"Failed to handle message: {message}",
                        message
                    );
            }
        }

        private void ProcessBlockHeader(BlockHeaderMsg message)
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Debug(
                    "{MessageType} message was sent from an invalid peer {Peer}",
                    nameof(Messages.BlockHeaderMsg),
                    message.Remote
                );
                return;
            }

            if (!message.GenesisHash.Equals(BlockChain.Genesis.Hash))
            {
                _logger.Debug(
                    "{MessageType} message was sent from a peer {Peer} with " +
                    "a different genesis block {Hash}",
                    nameof(Messages.BlockHeaderMsg),
                    message.Remote,
                    message.GenesisHash
                );
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header;
            try
            {
                header = message.GetHeader();
            }
            catch (InvalidBlockException ibe)
            {
                _logger.Debug(
                    ibe,
                    "Received header #{BlockIndex} {BlockHash} is invalid",
                    message.HeaderHash,
                    message.HeaderIndex
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
                    peer);
                BlockDemandTable.Add(
                    BlockChain,
                    IsBlockNeeded,
                    new BlockDemand(header, peer, DateTimeOffset.UtcNow));
                return;
            }
            else
            {
                _logger.Information(
                    "Discarding received header #{ReceivedIndex} {ReceivedHash} from peer {Peer} " +
                    "as it is not needed for the current chain with tip #{TipIndex} {TipHash}",
                    header.Index,
                    header.Hash,
                    peer,
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                return;
            }
        }

        private async Task TransferTxsAsync(GetTxsMsg getTxs)
        {
            foreach (TxId txid in getTxs.TxIds)
            {
                try
                {
                    Transaction<T> tx = BlockChain.GetTransaction(txid);

                    if (tx is null)
                    {
                        continue;
                    }

                    Message response = new TxMsg(tx.Serialize(true))
                    {
                        Identity = getTxs.Identity,
                    };
                    await Transport.ReplyMessageAsync(response, default);
                }
                catch (KeyNotFoundException)
                {
                    _logger.Warning("Requested TxId {TxId} does not exist", txid);
                }
            }
        }

        private void ProcessTxIds(TxIdsMsg message)
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "Ignoring a {MessageType} message because it was sent by an invalid peer: " +
                    "{PeerAddress}",
                    nameof(Messages.TxIdsMsg),
                    message.Remote?.Address.ToHex()
                );
                return;
            }

            _logger.Information(
                "Received a {MessageType} message with {TxIdCount} txIds",
                nameof(Messages.TxIdsMsg),
                message.Ids.Count()
            );

            TxCompletion.Demand(peer, message.Ids);
        }

        private async Task TransferBlocksAsync(GetBlocksMsg getData)
        {
            string reqId = !(getData.Identity is null) && getData.Identity.Length == 16 ?
                new Guid(getData.Identity).ToString() : "unknown";
            _logger.Verbose(
                "Preparing a {MessageType} message to reply to {Identity}...",
                nameof(Messages.BlocksMsg),
                reqId);

            var blocks = new List<byte[]>();

            List<BlockHash> hashes = getData.BlockHashes.ToList();
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
                    byte[] payload = Codec.Encode(block.MarshalBlock());
                    blocks.Add(payload);
                    count++;
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.BlocksMsg(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    _logger.Verbose(
                        "Enqueuing a blocks reply (...{Count}/{Total})...",
                        count,
                        total
                    );
                    await Transport.ReplyMessageAsync(response, default);
                    blocks.Clear();
                }
            }

            if (blocks.Any())
            {
                var response = new Messages.BlocksMsg(blocks)
                {
                    Identity = getData.Identity,
                };
                _logger.Verbose(
                    "Enqueuing a blocks reply (...{Count}/{Total}) to {Identity}...",
                    count,
                    total,
                    reqId);
                await Transport.ReplyMessageAsync(response, default);
            }

            if (count == 0)
            {
                var response = new Messages.BlocksMsg(blocks)
                {
                    Identity = getData.Identity,
                };
                _logger.Verbose(
                    "Enqueuing a blocks reply (...{Index}/{Total}) to {Identity}...",
                    count,
                    total,
                    reqId);
                await Transport.ReplyMessageAsync(response, default);
            }

            _logger.Debug("{Count} blocks were transferred to {Identity}", count, reqId);
        }
    }
}
