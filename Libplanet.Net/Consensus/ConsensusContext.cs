using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text;
using System.Text.Json;
using System.Timers;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusContext
    {
        public const long TimeoutMillisecond = 10 * 1000;

        private readonly TimeoutTicker _timoutTicker;
        private readonly List<Address> _validators;

        private ConcurrentDictionary<long, RoundContext> _roundContexts;
        private BaseStore<string> _store;
        private ILogger _logger;

        public ConsensusContext(
            long nodeId,
            List<Address> validators,
            BaseStore<string> store)
        {
            if (validators.Count <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validators),
                    $"Number of validator should be greater than 0. ({validators.Count}is given)");
            }

            NodeId = nodeId;
            _store = store;
            _validators = validators;
            _roundContexts = new ConcurrentDictionary<long, RoundContext>
            {
                [0] = new RoundContext(NodeId, validators, Height, Round),
            };

            _timoutTicker = new TimeoutTicker(TimeoutMillisecond, TimerTimeoutCallback);
            _logger = Log
                .ForContext<ConsensusReactor>()
                .ForContext("Source", nameof(ConsensusReactor));
        }

        /// <summary>
        /// Indicates current height of block.
        /// </summary>
        public long Height { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long Round { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long NodeId { get; internal set; }

        public RoundContext CurrentRoundContext => RoundContextOf(Round);

        // TODO: Add block to its argument.
        public void CommitBlock()
        {
            Height++;
            StoreData(CurrentRoundContext.Data);
            Round = 0;
            _roundContexts = new ConcurrentDictionary<long, RoundContext>();
        }

        public void StoreData(byte[] data)
        {
            _store.Add(Encoding.Default.GetString(data).TrimEnd('\0'));
        }

        public ImmutableArray<string> LoadData() => _store.ToImmutableArray();

        public long NextRound()
        {
            Round += 1;

            // NOTE: Reusing existing round context is valid?
            // FIXME: Should not re-create RoundContext. Instead, use new vote set.
            if (!_roundContexts.ContainsKey(Round))
            {
                _roundContexts[Round] = new RoundContext(
                    NodeId,
                    _validators,
                    Height,
                    Round);
            }

            return Round;
        }

        public RoundContext RoundContextOf(long round)
        {
            if (!_roundContexts.ContainsKey(round))
            {
                _roundContexts[round] = new RoundContext(
                    NodeId,
                    _validators,
                    Height,
                    round);
            }

            return _roundContexts[round];
        }

        public ConsensusMessage? HandleMessage(ConsensusMessage message)
        {
            var beforeRoundContext = CurrentRoundContext.State;

            ConsensusMessage? res = null;
            try
            {
                res = CurrentRoundContext.State.Handle(this, message);
            }
            catch (Exception e)
            {
                Log.Error(e, "Handle throws exception: {E}", e);
            }

            SetTimeoutByState(beforeRoundContext);
            return res;
        }

        public override string ToString()
        {
            var message = new Dictionary<string, object>
            {
                { "node_id", NodeId },
                { "number_of_validator", _validators.Count },
                { "height", Height },
                { "round", Round },
                { "step", CurrentRoundContext.State.GetType().Name },
            };
            return JsonSerializer.Serialize(message);
        }

        private void TimerTimeoutCallback(object? sender, ElapsedEventArgs eventArgs)
        {
            _logger.Debug(
                "NodeId: {Id}, Height: {RHeight}, Round: {RRound}, " +
                          "State: {State}, TimeoutTicker: " +
                          "Timeout occurred. Considering NIL in " +
                          "Round #{Round} of Height #{Height}.",
                NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.GetType().Name,
                Round,
                Height);

            switch (CurrentRoundContext.State)
            {
                case PreVoteState _:
                    CurrentRoundContext.State = new PreCommitState();
                    StartTimeout();
                    break;
                case PreCommitState _:
                    NextRound();
                    StopTimeout();
                    break;
            }
        }

        private void SetTimeoutByState(IState beforeRoundContext)
        {
            switch (beforeRoundContext)
            {
                case DefaultState _
                    when CurrentRoundContext.State is PreVoteState:
                case PreVoteState _
                    when CurrentRoundContext.State is PreCommitState:
                    StartTimeout();
                    break;
                case PreCommitState _
                    when CurrentRoundContext.State is DefaultState:
                    StopTimeout();
                    break;
            }
        }

        private void StartTimeout()
        {
            _logger.Debug(
                "NodeId: {Id}, Height: {Height}, Round: {Round}, " +
                          "State: {State}, TimeoutTicker: Timer Started. " +
                          "Timeout will be occurred in {Time}",
                CurrentRoundContext.NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.GetType().Name,
                DateTimeOffset.UtcNow.AddMilliseconds(TimeoutMillisecond));
            _timoutTicker.Set();
        }

        private void StopTimeout()
        {
            _logger.Debug(
                "NodeId: {Id}, Height: {Height}, Round: {Round}, " +
                          "State: {State}, TimeoutTicker: Timer Stopped.",
                NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.GetType().Name);
            _timoutTicker.Stop();
        }
    }
}
