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
        private async Task ProcessMessageHandlerAsync(Message message)
        {
            switch (message)
            {
                case Ping _:
                case FindNeighbors _:
                    break;

                case GetChainStatus getChainStatus:
                {
                    _logger.Debug(
                        "Received a {MessageType} message.",
                        nameof(Messages.GetChainStatus));

                    // This is based on the assumption that genesis block always exists.
                    Block<T> tip = BlockChain.Tip;
                    var chainStatus = new ChainStatus(
                        tip.ProtocolVersion,
                        BlockChain.Genesis.Hash,
                        tip.Index,
                        tip.Hash,
                        tip.TotalDifficulty
                    )
                    {
                        Identity = getChainStatus.Identity,
                    };

                    await Transport.ReplyMessageAsync(chainStatus, default);
                    break;
                }

                case GetBlockHashes getBlockHashes:
                {
                    _logger.Debug(
                        "Received a {MessageType} message (stop: {Stop}).",
                        nameof(Messages.GetBlockHashes),
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
                        "with locator [{LocatorHead}, ...] (stop: {Stop}).",
                        hashes.Count,
                        offset,
                        getBlockHashes.Locator.FirstOrDefault(),
                        getBlockHashes.Stop);
                    var reply = new BlockHashes(offset, hashes)
                    {
                        Identity = getBlockHashes.Identity,
                    };

                    await Transport.ReplyMessageAsync(reply, default);
                    break;
                }

                case GetBlocks getBlocks:
                    await TransferBlocksAsync(getBlocks);
                    break;

                case GetTxs getTxs:
                    await TransferTxsAsync(getTxs);
                    break;

                case TxIds txIds:
                    ProcessTxIds(txIds);
                    break;

                case BlockHashes _:
                    _logger.Error(
                        "{MessageType} messages are only for IBD.",
                        nameof(Messages.BlockHashes));
                    break;

                case BlockHeaderMessage blockHeader:
                    ProcessBlockHeader(blockHeader);
                    break;

                default:
                    throw new InvalidMessageException(
                        $"Failed to handle message: {message}",
                        message
                    );
            }
        }

        private void ProcessBlockHeader(BlockHeaderMessage message)
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Debug(
                    "{MessageType} message was sent from an invalid peer {Peer}.",
                    nameof(Messages.BlockHeaderMessage),
                    message.Remote
                );
                return;
            }

            if (!message.GenesisHash.Equals(BlockChain.Genesis.Hash))
            {
                _logger.Debug(
                    "{MessageType} message was sent from a peer {Peer} with " +
                    "a different genesis block {Hash}.",
                    nameof(Messages.BlockHeaderMessage),
                    message.Remote,
                    message.GenesisHash
                );
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header;
            try
            {
                header = message.GetHeader(BlockChain.Policy.GetHashAlgorithm);
            }
            catch (InvalidBlockException ibe)
            {
                _logger.Debug(
                    ibe,
                    "Received header #{BlockIndex} {BlockHash} is invalid.",
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
                    "Received header #{BlockIndex} {BlockHash} has invalid timestamp: {Timestamp}.",
                    header.Index,
                    header.Hash,
                    header.Timestamp
                );
                return;
            }

            _logger.Information(
                "Received " + nameof(BlockHeader) + " #{BlockIndex} {BlockHash}.",
                header.Index,
                header.Hash
            );

            if (!IsBlockNeeded(header))
            {
                _logger.Debug(
                    "Received header #{BlockIndex} {BlockHash} from peer {Peer} is not needed " +
                    "for the current chain with tip #{TipIndex} {TipHash}.",
                    header.Index,
                    header.Hash,
                    peer,
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                return;
            }

            _logger.Information(
                "Adding received header #{BlockIndex} {BlockHash} from peer {Peer} to " +
                $"{nameof(BlockDemandTable)}...",
                header.Index,
                header.Hash,
                peer);
            BlockDemandTable.Add(
                BlockChain,
                IsBlockNeeded,
                new BlockDemand(header, peer, DateTimeOffset.UtcNow));
        }

        private async Task TransferTxsAsync(GetTxs getTxs)
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

                    Message response = new Messages.Tx(tx.Serialize(true))
                    {
                        Identity = getTxs.Identity,
                    };
                    await Transport.ReplyMessageAsync(response, default);
                }
                catch (KeyNotFoundException)
                {
                    _logger.Warning("Requested TxId {TxId} does not exist.", txid);
                }
            }
        }

        private void ProcessTxIds(TxIds message)
        {
            if (!(message.Remote is BoundPeer peer))
            {
                _logger.Information(
                    "Ignoring a {MessageType} message because it was sent by an invalid peer: " +
                    "{PeerAddress}.",
                    nameof(Messages.TxIds),
                    message.Remote?.Address.ToHex()
                );
                return;
            }

            _logger.Debug(
                "Received a {MessageType} message with {TxIdCount} txIds.",
                nameof(Messages.TxIds),
                message.Ids.Count()
            );

            TxCompletion.Demand(peer, message.Ids);
        }

        private async Task TransferBlocksAsync(GetBlocks getData)
        {
            string identityHex = ByteUtil.Hex(getData.Identity);
            _logger.Verbose(
                "Preparing a {MessageType} message to reply to {Identity}...",
                nameof(Messages.Blocks),
                identityHex
            );

            var blocks = new List<byte[]>();

            List<BlockHash> hashes = getData.BlockHashes.ToList();
            int i = 1;
            int total = hashes.Count;
            const string logMsg =
                "Fetching block {Index}/{Total} {Hash} to include in " +
                "a reply to {Identity}...";
            foreach (BlockHash hash in hashes)
            {
                _logger.Verbose(logMsg, i, total, hash, identityHex);
                if (_store.GetBlock<T>(BlockChain.Policy.GetHashAlgorithm, hash) is { } block)
                {
                    byte[] payload = Codec.Encode(block.MarshalBlock());
                    blocks.Add(payload);
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.Blocks(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    _logger.Verbose(
                        "Enqueuing a blocks reply (...{Index}/{Total})...",
                        i,
                        total
                    );
                    await Transport.ReplyMessageAsync(response, default);
                    blocks.Clear();
                }

                i++;
            }

            if (blocks.Any())
            {
                var response = new Messages.Blocks(blocks)
                {
                    Identity = getData.Identity,
                };
                _logger.Verbose(
                    "Enqueuing a blocks reply (...{Index}/{Total}) to {Identity}...",
                    total,
                    total,
                    identityHex
                );
                await Transport.ReplyMessageAsync(response, default);
            }

            _logger.Debug("Blocks were transferred to {Identity}.", identityHex);
        }
    }
}
