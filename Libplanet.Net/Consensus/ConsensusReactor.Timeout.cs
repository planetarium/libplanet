using System;
using System.Timers;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusReactor
    {
        private void TimerTimeoutCallback(object? sender, ElapsedEventArgs eventArgs)
        {
            _logger.Debug(
                "NodeId {Id}, Height : {Height}, Round : {Round}, " +
                          "State : {State}, TimeoutTicker : " +
                          "Timeout occurred. Considering NIL in " +
                          "Round #{Round} of Height #{Height}.",
                _context.NodeId,
                _context.CurrentRoundContext.Height,
                _context.CurrentRoundContext.Round,
                _context.CurrentRoundContext.State.GetType().Name,
                _context.Round,
                _context.Height);

            switch (_context.CurrentRoundContext.State)
            {
                case PreVoteState _:
                    _context.CurrentRoundContext.State = new PreCommitState();
                    StartTimeout();
                    break;
                case PreCommitState _:
                    _context.NextRound();
                    StopTimeout();
                    break;
            }
        }

        private void HandleTimeout(IState beforeRoundContext)
        {
            switch (beforeRoundContext)
            {
                case DefaultState _
                    when _context.CurrentRoundContext.State is PreVoteState:
                case PreVoteState _
                    when _context.CurrentRoundContext.State is PreCommitState:
                    StartTimeout();
                    break;
                case PreCommitState _
                    when _context.CurrentRoundContext.State is DefaultState:
                    StopTimeout();
                    break;
            }
        }

        private void StartTimeout()
        {
            _logger.Debug(
                "NodeId : {Id}, Height : {Height}, Round : {Round}, " +
                          "State : {State}, TimeoutTicker : Timer Started. " +
                          "Timeout will be occurred in {Time}",
                _context.CurrentRoundContext.NodeId,
                _context.CurrentRoundContext.Height,
                _context.CurrentRoundContext.Round,
                _context.CurrentRoundContext.State.GetType().Name,
                DateTimeOffset.UtcNow.AddMilliseconds(TimeoutMillisecond));
            _timoutTicker.Set();
        }

        private void StopTimeout()
        {
            _logger.Debug(
                "NodeId : {Id}, Height : {Height}, Round : {Round}, " +
                          "State : {State}, TimeoutTicker : Timer Stopped.",
                _context.NodeId,
                _context.CurrentRoundContext.Height,
                _context.CurrentRoundContext.Round,
                _context.CurrentRoundContext.State.GetType().Name);
            _timoutTicker.Stop();
        }
    }
}
