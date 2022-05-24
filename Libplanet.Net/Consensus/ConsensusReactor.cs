using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
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
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable routingTable,
            ITransport transport,
            BlockChain<T> blockChain,
            long nodeId,
            List<PublicKey>? validators)
        {
            _routingTable = routingTable;
            _transport = transport;
            _logger = Log
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
            _context = new ConsensusContext<T>(
                nodeId,
                validators ?? blockChain.Policy.GetValidators().ToList(),
                blockChain);
        }

        public void Dispose()
        {
            _transport.Dispose();
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

            // TODO: Prepare block before broadcast.
            BroadcastBlock(_context.GetBlockFromStore(blockHash)!);
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

        private void BroadcastBlock(Block<T> block)
        {
            // TODO: Replace with gossip protocol-ish?
            var message = new Messages.Blocks(new List<byte[]>()
            {
                _codec.Encode(block.MarshalBlock()),
            });

            // TODO: Broadcast to minimal amount of peers (i.e., 2/3)
            _transport.BroadcastMessage(_routingTable.Peers, message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            await ReplyPongAsync(message);

            switch (message)
            {
                case Messages.Blocks block:
                    // TODO: Postpone the vote until block receives (lock needed)
                    StoreProposedBlock(block);
                    break;
                case GetBlocks hashes:
                    await SendBlockAsync(hashes);
                    break;
                case ConsensusMessage consensusMessage:
                    if (consensusMessage is ConsensusPropose consensusPropose &&
                        !_context.ContainBlock(consensusPropose.BlockHash))
                    {
                        RequestBlockAsync(consensusPropose);
                    }

                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        // FIXME: Hide methods and messages into Context.
        private void StoreProposedBlock(Messages.Blocks block)
        {
            _context.PutBlockToStore(UnmarshalBlock(block));
            _logger.Debug("{NodeId} receives Block", _context.NodeId);
        }

        private Block<T> UnmarshalBlock(Messages.Blocks message) =>
            BlockMarshaler.UnmarshalBlock<T>(
                _context.HashAlgorithm,
                (Bencodex.Types.Dictionary)_codec.Decode(message.DataFrames.Last()));

        private async Task SendBlockAsync(GetBlocks hashes)
        {
            var block = _context.GetBlockFromStore(hashes.BlockHashes.First());
            if (block == null)
            {
                await ReplyPongAsync(hashes);
                return;
            }

            var message = new Messages.Blocks(new List<byte[]>()
            {
                _codec.Encode(block.MarshalBlock()),
            });

            await _transport.SendMessageAsync(
                _routingTable.GetPeer(hashes.Remote!.Address),
                message,
                TimeSpan.Zero,
                1,
                true,
                CancellationToken.None);
        }

        private void RequestBlockAsync(ConsensusPropose consensusPropose)
        {
            var message = new Messages.GetBlocks(new[] { consensusPropose.BlockHash });

            _transport.BroadcastMessage(_routingTable.Peers, message);
        }

        private async Task ReplyPongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
