using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusReactor : IReactor
    {
        private RoutingTable _routingTable;
        private ITransport _transport;
        private ConsensusContext _context;
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable routingTable,
            ITransport transport,
            BaseStore<string> store,
            long nodeId,
            List<Address> validators)
        {
            _routingTable = routingTable;
            _transport = transport;
            _logger = Log
                .ForContext<ConsensusReactor>()
                .ForContext("Source", nameof(ConsensusReactor));
            _context = new ConsensusContext(nodeId, validators, store);
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

        public void Propose(byte[] data)
        {
            if (_context.CurrentRoundContext.LeaderElection() != _context.NodeId)
            {
                return;
            }

            Log.Debug(
                "Propose Data: {Data}, Proposer: {NodeId}, Height: {Height}, Round: {Round}",
                data,
                _context.NodeId,
                _context.Height,
                _context.Round);
            _context.CurrentRoundContext.Data = data;
            var propose = new ConsensusPropose(
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.Data)
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
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    var pong = new Pong { Identity = message.Identity };
                    await _transport.ReplyMessageAsync(pong, CancellationToken.None);
                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }
    }
}
