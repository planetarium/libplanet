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
        private Vote[] _votes;

        public VoteSet(
            long height,
            long round,
            BlockHash blockHash,
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
                    x,
                    null))
                .ToArray();

            // TODO: Fill Votes with null Signature?
            Sum = 0;

            _lock = new object();
        }

        public long Height { get; }

        public long Round { get; }

        public ImmutableArray<PublicKey> ValidatorSet { get; }

        public long Sum { get; }

        public bool Add(Vote vote)
        {
            lock (_lock)
            {
                if (!IsVoteValid(vote))
                {
                    return false;
                }

                _votes[vote.NodeId] = vote;
                return true;
            }
        }

        public bool HasTwoThirdAny()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x => !(x.Signature is null)) > twoThird;
        }

        public bool HasTwoThirdPrevote()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x =>
                !(x.Signature is null) && x.Flag == VoteFlag.Absent) > twoThird;
        }

        public bool HasTwoThirdCommit()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _votes.Count(x =>
                !(x.Signature is null) && x.Flag == VoteFlag.Commit) > twoThird;
        }

        private bool IsVoteValid(Vote vote)
        {
            if (vote.Height != Height)
            {
                return false;
            }

            if (vote.Round != Round)
            {
                return false;
            }

            if (!ValidatorSet.Contains(vote.Validator))
            {
                // The voter is not a validator.
                return false;
            }

            if (vote.Flag < _votes[vote.NodeId].Flag)
            {
                return false;
            }

            // TODO: Should check signature :)
            return true;
        }
    }
}
