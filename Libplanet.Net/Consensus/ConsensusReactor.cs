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

        public async Task ReceivedMessage(Message message)
        {
            if (message is ConsensusMessage consensusMessage)
            {
                HandleConsensusMessage(consensusMessage);
            }
            else
            {
                HandleMessage(message);
            }

            await Task.Yield();
        }

        public void HandleConsensusMessage(ConsensusMessage message)
        {
            Log.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleConsensusMessage: {@Message},",
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.State.GetType().ToString(),
                message);

            ConsensusMessage? res = _context.HandleMessage(message) as ConsensusMessage;

            if (res == null)
            {
                return;
            }

            res.Remote = _transport.AsPeer;
            BroadcastMessage(res);
        }

        public void HandleMessage(Message message)
        {
            Log.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleMessage: {@Message},",
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.State.GetType().ToString(),
                message);

            Message? res = _context.HandleMessage(message);

            if (res == null)
            {
                return;
            }

            res.Remote = _transport.AsPeer;
            BroadcastMessage(message);
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

            // TODO: Make sure block is prepared before broadcasting.
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
            HandleConsensusMessage(message);
        }

        private void BroadcastMessage(Message message)
        {
            _transport.BroadcastMessage(_routingTable.Peers, message);
        }

        /// <summary>
        /// Wraps <see cref="Block{T}"/> as <see cref="Messages.Blocks"/> and broadcast to known
        /// peers in <see cref="RoutingTable"/>.
        /// </summary>
        /// <param name="block">A block to broadcast.</param>
        private void BroadcastBlock(Block<T> block)
        {
            var message = new Messages.Blocks(new List<byte[]>()
            {
                _codec.Encode(block.MarshalBlock()),
            });

            // TODO: Broadcast to minimal amount of peers (eg.. 2/3 of peers)
            _transport.BroadcastMessage(_routingTable.Peers, message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            await ReplyPongAsync(message);

            switch (message)
            {
                case Messages.Blocks block:
                    // TODO: Postpone the vote until receives target blocks (lock needed)
                    // FIXME: In the current stage of development, node cannot validate block.
                    await ReceivedMessage(block);
                    break;
                case GetBlocks hashes:
                    await SendBlockAsync(hashes);
                    break;
                case ConsensusMessage consensusMessage:
                    if (consensusMessage is ConsensusPropose consensusPropose &&
                        !_context.ContainBlock(consensusPropose.BlockHash))
                    {
                        await RequestBlockAsync(consensusPropose);
                    }

                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        /// <summary>
        /// Responding to <see cref="Messages.GetBlocks"/>.
        /// </summary>
        /// <param name="hashes">A message that received from remote.</param>
        /// <remarks>If requested <see cref="Block{T}"/> is not found in store, methods calls
        /// <see cref="ReplyPongAsync"/>.</remarks>
        private async Task SendBlockAsync(GetBlocks hashes)
        {
            var block = _context.GetBlockFromStore(hashes.BlockHashes.First());
            if (block == null)
            {
                _logger.Debug(
                    "{MethodName}: Request from {Remote} accepted, " +
                    "However found no matching block {BlockHash} from store",
                    nameof(SendBlockAsync),
                    hashes.Remote,
                    hashes.BlockHashes.First());

                await ReplyPongAsync(hashes);
                return;
            }

            var message = new Messages.Blocks(new List<byte[]>()
            {
                _codec.Encode(block.MarshalBlock()),
            });

            _logger.Debug(
                "{MethodName}: Request from {Remote} accepted, " +
                "found matching block {BlockHash} from store",
                nameof(SendBlockAsync),
                hashes.Remote,
                hashes.BlockHashes.First());

            await _transport.SendMessageAsync(
                _routingTable.GetPeer(hashes.Remote!.Address),
                message,
                TimeSpan.Zero,
                1,
                true,
                CancellationToken.None);
        }

        /// <summary>
        /// Request proposed block <see cref="Block{T}"/> in <see cref="ConsensusPropose"/> from
        /// remote.
        /// </summary>
        /// <param name="consensusPropose">A received block proposal from current round leader.
        /// </param>
        /// <remarks>
        /// <see cref=
        /// "ITransport.SendMessageAsync(BoundPeer,Message,TimeSpan?,int,bool,CancellationToken)"/>
        /// is used for neither waiting for reply nor retrying message.
        /// </remarks>
        private async Task RequestBlockAsync(ConsensusPropose consensusPropose)
        {
            var message = new GetBlocks(new[] { consensusPropose.BlockHash })
            {
                Remote = _transport.AsPeer,
            };

            _logger.Debug(
                "{MethodName}: Requesting corresponding block " +
                "with {@Message} to {Remote}",
                nameof(RequestBlockAsync),
                consensusPropose,
                consensusPropose.Remote);

            await _transport.SendMessageAsync(
                _routingTable.GetPeer(consensusPropose.Remote!.Address),
                message,
                TimeSpan.Zero,
                1,
                true,
                CancellationToken.None);
        }

        private async Task ReplyPongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
