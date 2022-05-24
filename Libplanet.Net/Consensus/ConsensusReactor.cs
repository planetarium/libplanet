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

            BroadcastBlock(_context.GetBlockFromStore(blockHash));
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
            // TODO: Broadcast to minimal amount of peers
            // TODO: 2/3 of peers?
            var marshaled = _codec.Encode(block.MarshalBlock());
            var listBLock = new List<byte[]>()
            {
                marshaled,
            };

            var message = new Messages.Blocks(listBLock);

            _transport.BroadcastMessage(_routingTable.Peers, message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                // TODO: Check store with proposed block, if there's none, Ask block from neighbors.
                // TODO: This has to be implemented. if not, proposer would be overloaded with
                // TODO: requests, and PutBlockToStore needs to be synced with Propose handling.
                // TODO: It is essential for validating block.
                case Messages.Blocks block:
                    await ReplyPongAsync(block);
                    _context.PutBlockToStore(UnmarshalBlock(block));
                    _logger.Debug(
                        "{NodeId} receives Block",
                        _context.NodeId);
                    break;
                case ConsensusMessage consensusMessage:
                    await ReplyPongAsync(message);
                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        // TODO: In my opinion block should wrap into message and
        // TODO: push it into the context.
        private Block<T> UnmarshalBlock(Messages.Blocks message) =>
            BlockMarshaler.UnmarshalBlock<T>(
                _context.HashAlgorithm,
                (Bencodex.Types.Dictionary)_codec.Decode(message.DataFrames.Last()));

        private async Task ReplyPongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
