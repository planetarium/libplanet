using System;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class ConsensusReactor : IConsensusReactor
    {
        private readonly IConsensusBroadcaster _broadcaster;
        private readonly ConsensusState _state;
        private readonly Channel<ConsensusMessage> _messageQueue;
        private readonly ReaderWriterLockSlim _lock;
        private readonly long _threshold;

        public ConsensusReactor(long nodeId, IConsensusBroadcaster broadcaster)
        {
            _broadcaster = broadcaster;
            _state = new ConsensusState(nodeId);
            _messageQueue = Channel.CreateUnbounded<ConsensusMessage>(
                new UnboundedChannelOptions { SingleReader = false, SingleWriter = false });
            _lock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);
            _threshold = 3;
        }

        public bool AppendMessage(ConsensusMessage message)
        {
            return _messageQueue.Writer.TryWrite(message);
        }

        public void ProposeAsync(byte[] data)
        {
            if (_state.NodeId == LeaderElection())
            {
                var msg = new ConsensusPropose(_state.NodeId, _state.Round, data);
                AppendMessage(msg);
            }
        }

        public async Task ReactConsensusAsync(int tick, CancellationToken token)
        {
            while (!token.IsCancellationRequested)
            {
                await Task.Delay(TimeSpan.FromSeconds(tick), token);
                ConsensusMessage msg = await _messageQueue.Reader.ReadAsync(token);
                BroadcastMessage(msg);
                ProcessMessage(msg);
            }
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _broadcaster.BroadcastMessage(message);
        }

        private void ProcessMessage(ConsensusMessage message)
        {
            switch (message)
            {
                case ConsensusPropose propose:
                    Propose(propose);
                    break;
                case ConsensusVote consensusVote:
                    Vote(consensusVote);
                    break;
                case ConsensusVote23 consensusVote23:
                    Vote23(consensusVote23);
                    break;
                default:
                    throw new Exception($"Failed to handle message: {message}");
            }
        }

        private void Propose(ConsensusPropose propose)
        {
            switch (propose)
            {
                case var msg when msg.Round != _state.Round:
                    return;
                case var msg when _state.Step != ConsensusState.RoundStep.RoundStepNewRound:
                    return;
                case var msg when msg.NodeId != LeaderElection():
                    return;
            }

            _lock.EnterWriteLock();
            _lock.EnterReadLock();
            _state.Data = propose.Data;
            _state.Vote23Count = _state.VoteCount = 0;
            _state.Step = ConsensusState.RoundStep.RoundStepPrevote;

            var voteMsg = new ConsensusVote(_state.NodeId, _state.Round, _state.Data);
            try
            {
                AppendMessage(voteMsg);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return;
            }

            _state.Step = ConsensusState.RoundStep.RoundStepPrevoteWait;
            _lock.EnterReadLock();
            _lock.ExitWriteLock();
        }

        private void Vote(ConsensusVote vote)
        {
             switch (vote)
             {
                 case var msg when msg.Round != _state.Round:
                     return;
                 case var msg when _state.Step != ConsensusState.RoundStep.RoundStepPrevoteWait:
                     return;
             }

             _lock.EnterWriteLock();
             _state.VoteCount += 1;

             if (_state.VoteCount >= _threshold)
             {
                 _state.VoteCount = 0;
                 _state.Step = ConsensusState.RoundStep.RoundStepPreCommit;

                 var voteMsg = new ConsensusVote23(_state.NodeId, _state.Round, _state.Data);
                 AppendMessage(voteMsg);
                 _state.Step = ConsensusState.RoundStep.RoundStepPreCommitWait;
             }

             _lock.EnterWriteLock();
        }

        private void Vote23(ConsensusVote23 vote23)
        {
              switch (vote23)
              {
                  case var msg when msg.Round != _state.Round:
                      return;
                  case var msg when _state.Step != ConsensusState.RoundStep.RoundStepPreCommitWait:
                      return;
              }

              _lock.EnterWriteLock();
              _state.Vote23Count += 1;
              if (_state.Vote23Count >= _threshold)
              {
                  _state.Vote23Count = 0;
                  _state.Step = ConsensusState.RoundStep.RoundStepCommit;

                  _state.Round += 1;
                  _state.Step = ConsensusState.RoundStep.RoundStepNewRound;
              }
        }

        private long LeaderElection()
        {
            return _state.Round % 4;
        }
    }
}
