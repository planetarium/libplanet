using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusReactor<T> : IReactor
        where T : IAction, new()
    {
        private readonly Codec _codec = new Codec();

        private RoutingTable _routingTable;
        private ITransport _transport;
        private ConsensusContext<T> _context;
        private PrivateKey _privateKey;
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable routingTable,
            ITransport transport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            long nodeId,
            List<PublicKey>? validators)
        {
            _routingTable = routingTable;
            _transport = transport;
            _logger = Log
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
            _privateKey = privateKey;
            _context = new ConsensusContext<T>(
                nodeId,
                privateKey,
                validators ?? blockChain.Policy.GetValidators().ToList(),
                blockChain);
        }

        public void Dispose()
        {
            _transport.Dispose();
        }

        public VoteSet? VoteSetOf(long height)
        {
            Dictionary<long, VoteSet?> voteSets = _context.VoteSets;
            if (voteSets.ContainsKey(height))
            {
                return voteSets[height];
            }

            return null;
        }

        public async Task<Task> StartAsync(CancellationToken ctx)
        {
            _transport.ProcessMessageHandler.Register(ProcessMessageHandler);
            Task task = _transport.StartAsync(ctx);
            await _transport.WaitForRunningAsync();
            return task;
        }

        public async Task StopAsync(CancellationToken ctx)
        {
            await _transport.StopAsync(TimeSpan.FromMilliseconds(10), ctx);
        }

        public async Task ReceivedMessage(ConsensusMessage message)
        {
             HandleMessage(message);
             await Task.Yield();
        }

        public void HandleMessage(ConsensusMessage message)
        {
            Log.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleMessage: {@Message},",
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.State.GetType().ToString(),
                message);

            ConsensusMessage? res = _context.HandleMessage(message);

            if (res == null)
            {
                return;
            }

            res.Remote = _transport.AsPeer;
            BroadcastMessage(res);
        }

        public void Propose(BlockHash blockHash)
        {
            if (_context.CurrentRoundContext.LeaderElection() != _context.NodeId)
            {
                return;
            }

            Log.Debug(
                "Propose Block: {Hash}, Proposer: {NodeId}, Height: {Height}, Round: {Round}",
                blockHash,
                _context.NodeId,
                _context.Height,
                _context.Round);
            _context.CurrentRoundContext.BlockHash = blockHash;
            var propose = new ConsensusPropose(
                _context.NodeId,
                _context.Height,
                _context.Round,
                blockHash)
            {
                Remote = _transport.AsPeer,
            };

            BroadcastMessage(propose);
        }

        public override string ToString()
        {
            return _context.ToString();
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _transport.BroadcastMessage(_routingTable.Peers, message);
            HandleMessage(message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            await ReplyPongAsync(message);

            switch (message)
            {
                case Messages.Blocks block:
                    PutReceivedBlockToStore(block);
                    break;
                case GetBlocks hashes:
                    await ResponseBlockAsync(hashes);
                    break;
                case ConsensusMessage consensusMessage:
                    if (consensusMessage is ConsensusPropose consensusPropose &&
                        !_context.ContainsBlock(consensusPropose.BlockHash))
                    {
                        await RequestBlockAsync(consensusMessage);
                    }

                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        private void PutReceivedBlockToStore(Messages.Blocks message)
        {
            var block = BlockMarshaler.UnmarshalBlock<T>(
                _context.HashAlgorithm,
                (Bencodex.Types.Dictionary)_codec.Decode(message.DataFrames.Last())
            );

            if (!_context.ContainsBlock(block.Hash))
            {
                _context.PutBlockToStore(block);

                _logger.Debug(
                    "{MethodName}: Received Block {BlockHash} from {Remote}",
                    nameof(PutReceivedBlockToStore),
                    block.Hash,
                    message.Remote);

                HandleMessage(
                    new ConsensusVote(_context.CurrentRoundContext.Voting(VoteFlag.Absent)));
            }
        }

        private async Task RequestBlockAsync(ConsensusMessage consensusMessage)
        {
            var hashList = new List<BlockHash>
            {
                consensusMessage.BlockHash,
            };
            var message = new GetBlocks(hashList)
            {
                Version = consensusMessage.Version,
                Remote = _transport.AsPeer,
            };

            _logger.Debug(
                "{MethodName}: Requesting Block {BlockHash} derived from {@Message}",
                nameof(RequestBlockAsync),
                consensusMessage.BlockHash,
                consensusMessage);

            await _transport.SendMessageAsync(
                _routingTable.GetPeer(consensusMessage.Remote!.Address),
                message,
                TimeSpan.FromSeconds(1),
                CancellationToken.None);
        }

        private async Task ResponseBlockAsync(GetBlocks message)
        {
            var block = _context.GetBlockFromStore(message.BlockHashes.Last());
            if (block != null)
            {
                var listBlock = new List<byte[]>
                {
                    _codec.Encode(
                        block.MarshalBlock()),
                };
                var sending = new Messages.Blocks(listBlock)
                {
                    Version = message.Version,
                    Remote = _transport.AsPeer,
                };

                _logger.Debug(
                    "{MethodName}: Received Block request {BlockHash} from {Remote}",
                    nameof(RequestBlockAsync),
                    message.BlockHashes.First(),
                    message.Remote);

                await _transport.SendMessageAsync(
                    _routingTable.GetPeer(message.Remote!.Address),
                    sending,
                    TimeSpan.FromSeconds(1),
                    CancellationToken.None);
            }
        }

        private async Task ReplyPongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
