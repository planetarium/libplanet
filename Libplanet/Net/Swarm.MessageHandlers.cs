using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Net.Messages;
using Libplanet.Tx;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private void ProcessMessageHandler(object target, Message message)
        {
            switch (message)
            {
                case Ping _:
                case FindNeighbors _:
                    break;

                case GetChainStatus getChainStatus:
                {
                    _logger.Debug($"Received a {nameof(GetChainStatus)} message.");

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

                    Transport.ReplyMessage(chainStatus);
                    break;
                }

                case GetBlockHashes getBlockHashes:
                {
                    const string msg =
                        "Received a " + nameof(GetBlockHashes) + " message " +
                        "(stop: {Stop}).";
                    BlockHash[] locatorArray = getBlockHashes.Locator.ToArray();
                    _logger.Debug(msg, getBlockHashes.Stop);
                    BlockChain.FindNextHashes(
                        getBlockHashes.Locator,
                        getBlockHashes.Stop,
                        FindNextHashesChunkSize
                    ).Deconstruct(
                        out long? offset,
                        out IReadOnlyList<BlockHash> hashes
                    );
                    const string resultMsg =
                        "Found hashes after the branchpoint (stop: {Stop}): " +
                        "{Hashes} (offset: {Offset}.";
                    _logger.Debug(resultMsg, getBlockHashes.Stop, hashes, offset);
                    var reply = new BlockHashes(offset, hashes)
                    {
                        Identity = getBlockHashes.Identity,
                    };

                    Transport.ReplyMessage(reply);
                    break;
                }

                case GetBlocks getBlocks:
                    TransferBlocks(getBlocks);
                    break;

                case GetTxs getTxs:
                    TransferTxs(getTxs);
                    break;

                case TxIds txIds:
                    ProcessTxIds(txIds);
                    break;

                case BlockHashes _:
                    _logger.Error($"{nameof(BlockHashes)} messages are only for IBD.");
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
                    "BlockHeaderMessage was sent from invalid peer " +
                    "{PeerAddress}; ignored.",
                    message.Remote.Address
                );
                return;
            }

            if (!message.GenesisHash.Equals(BlockChain.Genesis.Hash))
            {
                _logger.Debug(
                    "BlockHeaderMessage was sent from the peer " +
                    "{PeerAddress} with different genesis block {hash}; ignored.",
                    message.Remote.Address,
                    message.GenesisHash
                );
                return;
            }

            BlockHeaderReceived.Set();
            BlockHeader header = message.Header;

            _logger.Information(
                $"Received {nameof(BlockHeader)} #{{BlockIndex}} {{BlockHash}}.",
                header.Index,
                header.Hash
            );

            HashAlgorithmType hashAlgorithm = BlockChain.Policy.GetHashAlgorithm(header.Index);
            try
            {
                header.Validate(hashAlgorithm, DateTimeOffset.UtcNow);
            }
            catch (InvalidBlockException ibe)
            {
                _logger.Debug(
                    ibe,
                    "Received header #{BlockIndex} {BlockHash} seems invalid; ignored.",
                    header.Index,
                    header.Hash
                );
                return;
            }

            if (!IsBlockNeeded(header))
            {
                _logger.Debug(
                    "Received header #{BlockIndex} {BlockHash} from peer {Peer} is not needed " +
                    "for the current chain with tip #{TipIndex} {TipHash}.",
                    header.Index,
                    header.Hash,
                    peer,
                    BlockChain.Tip,
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

        private void TransferTxs(GetTxs getTxs)
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
                    Transport.ReplyMessage(response);
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
                    $"Ignores a {nameof(TxIds)} message because it was sent by an invalid peer: " +
                    "{PeerAddress}.",
                    message.Remote?.Address.ToHex()
                );
                return;
            }

            _logger.Debug(
                $"Received a {nameof(TxIds)} message: {{@TxIds}}.",
                message.Ids.Select(txid => txid.ToString())
            );

            IStagePolicy<T> stagePolicy = BlockChain.StagePolicy;
            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !_demandTxIds.ContainsKey(id))
                .Where(id => !stagePolicy.Ignores(BlockChain, id))
                .ToImmutableHashSet();

            if (!newTxIds.Any())
            {
                _logger.Debug("No unaware transactions to receive.");
                return;
            }

            _logger.Debug(
                "Unaware transactions to receive: {@TxIds}.",
                newTxIds.Select(txid => txid.ToString())
            );
            foreach (TxId txid in newTxIds)
            {
                _demandTxIds.TryAdd(txid, peer);
            }
        }

        private void TransferBlocks(GetBlocks getData)
        {
            string identityHex = ByteUtil.Hex(getData.Identity);
            _logger.Verbose(
                $"Preparing a {nameof(Blocks)} message to reply to {{Identity}}...",
                identityHex
            );

            var blocks = new List<byte[]>();

            List<BlockHash> hashes = getData.BlockHashes.ToList();
            int i = 1;
            int total = hashes.Count;
            const string logMsg =
                "Fetching a block #{Index}/{Total} ({Hash}) to include to " +
                "a reply to {Identity}...";
            foreach (BlockHash hash in hashes)
            {
                _logger.Verbose(logMsg, i, total, hash, identityHex);
                if (_store.ContainsBlock(hash))
                {
                    Block<T> block = _store.GetBlock<T>(hash);
                    byte[] payload = block.Serialize();
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
                    Transport.ReplyMessage(response);
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
                Transport.ReplyMessage(response);
            }

            _logger.Debug("Blocks were transferred to {Identity}.", identityHex);
        }
    }
}
