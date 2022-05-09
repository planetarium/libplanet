using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text;
using System.Text.Json;

namespace Libplanet.Net.Consensus
{
    public class ConsensusContext
    {
        private readonly List<Address> _validators;

        private ConcurrentDictionary<long, RoundContext> _roundContexts;
        private BaseStore<string> _store;

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
    }
}
