using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A set of <see cref="Vote"/>.
    /// <see cref="VoteSet"/> is storing some <see cref="Vote"/> for elect vote.
    /// </summary>
    public class VoteSet
    {
        // FIXME: Should separate prevote lock and commit vote lock?
        private readonly object _lock;
        private Dictionary<PublicKey, Vote> _votes;

        public VoteSet(
            long height,
            int round,
            BlockHash? blockHash,
            IEnumerable<PublicKey> validatorSet)
        {
            Height = height;
            Round = round;
            ValidatorSet = validatorSet.ToImmutableArray();
            _votes = Enumerable.Range(0, ValidatorSet.Length)
                .Select(x => new Vote(
                    height,
                    round,
                    blockHash,
                    DateTimeOffset.Now,
                    ValidatorSet[x],
                    VoteFlag.Null,
                    null))
                .ToDictionary(keySelector: x => x.Validator, elementSelector: x => x);

            // TODO: Fill Votes with null Signature?
            Sum = 0;

            _lock = new object();
        }

        public long Height { get; }

        public long Round { get; }

        public ImmutableArray<PublicKey> ValidatorSet { get; }

        public long Sum { get; }

        public ImmutableArray<Vote> Votes
        {
            // ToDictionary() does not keep the order of the source. Creates a new list that will be
            // same as the order of ValidatorSet.
            get => ValidatorSet.Select(publicKey => _votes[publicKey]).ToImmutableArray();
        }

        public bool Add(Vote vote)
        {
            lock (_lock)
            {
                if (!IsVoteValid(vote))
                {
                    return false;
                }

                _votes[vote.Validator] = vote;
                return true;
            }
        }

        public bool HasTwoThirdAny()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x => !(x.Value.Signature is null)) > twoThird;
        }

        public bool HasTwoThirdPrevote()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x =>
                !(x.Value.Signature is null) && x.Value.Flag == VoteFlag.Absent) > twoThird;
        }

        public bool HasTwoThirdCommit()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x =>
                !(x.Value.Signature is null) && x.Value.Flag == VoteFlag.Commit) > twoThird;
        }

        private bool IsVoteValid(Vote vote)
        {
            if (vote.Signature is null)
            {
                return false;
            }

            if (!vote.Verify(vote.Validator))
            {
                return false;
            }

            if (!ValidatorSet.Contains(vote.Validator))
            {
                // The voter is not a validator.
                return false;
            }

            if (vote.Height != Height)
            {
                return false;
            }

            if (vote.Round != Round)
            {
                return false;
            }

            if (vote.Flag < _votes[vote.Validator].Flag)
            {
                return false;
            }

            return true;
        }
    }
}
