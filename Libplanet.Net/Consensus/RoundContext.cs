using System;
using System.Collections.Generic;
using System.Text.Json;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class RoundContext<T>
        where T : IAction, new()
    {
        private readonly object _lock;
        private readonly long _numberOfValidator;
        private readonly List<Address> _validators;

        // FIXME: Should be thread-safe
        private List<Address> _votes;

        public RoundContext(
            long nodeId,
            List<Address> validators,
            long height,
            long round)
        {
            _validators = validators;
            if (validators.Count <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validators),
                    $"Number of validator should be greater than 0. ({validators.Count}is given)");
            }

            NodeId = nodeId;
            _numberOfValidator = validators.Count;
            State = new DefaultState<T>();
            BlockHash = default;
            Height = height;
            Round = round;
            _votes = new List<Address>();
            _lock = new object();
        }

        public IState<T> State { get; internal set; }

        public long NodeId { get; }

        // Height we are working on
        public long Height { get; }

        public long Round { get; }

        public BlockHash BlockHash { get; internal set; }

        public long VoteCount
        {
            get
            {
                lock (_lock)
                {
                    return _votes.Count;
                }
            }
        }

        public long Vote(Address? address)
        {
            Log.Debug(
                "Vote({Before}/{Total}) NodeID: {Id}, Height: {Height}, Round: {Round}",
                _votes.Count,
                _numberOfValidator,
                NodeId,
                Height,
                Round);

            if (address is null)
            {
                throw new ArgumentNullException(nameof(address));
            }

            lock (_lock)
            {
                if (!_votes.Contains(address.Value))
                {
                    _votes.Add(address.Value);
                    Log.Debug(
                        "Vote Success({After}/{Total}) NodeID: {Id}, " +
                        "Height: {Height}, Round: {Round}",
                        _votes.Count,
                        _numberOfValidator,
                        NodeId,
                        Height,
                        Round);
                }
            }

            return VoteCount;
        }

        public void ResetVote()
        {
            lock (_lock)
            {
                _votes = new List<Address>();
            }
        }

        public bool HasTwoThirdsAny()
        {
            lock (_lock)
            {
                return VoteCount > _numberOfValidator * 2.0 / 3.0;
            }
        }

        public long LeaderElection()
        {
            // FIXME: Not correct, should be changed
            return (Height + Round) % _numberOfValidator;
        }

        public Address Proposer()
        {
            return _validators[(int)LeaderElection()];
        }

        public override string ToString()
        {
            var message = new Dictionary<string, object>
            {
                { "node_id", NodeId },
                { "number_of_validator", _numberOfValidator },
                { "height", Height },
                { "round", Round },
                { "step", State.Name },
                { "target_block", BlockHash.ToString() },
                { "vote_count", VoteCount },
                { "current_election", LeaderElection() },
            };
            return JsonSerializer.Serialize(message);
        }
    }
}
