using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
        private Vote[] _prevotes;
        private Vote[] _commits;

        public VoteSet(long height, long round, IEnumerable<PublicKey> validatorSet)
        {
            Height = height;
            Round = round;
            ValidatorSet = validatorSet.ToImmutableArray();
            _prevotes = new Vote[ValidatorSet.Length];
            _commits = new Vote[ValidatorSet.Length];

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

                return vote.Flag switch
                {
                    VoteFlag.Absent => AddVote(vote),
                    VoteFlag.Commit => AddCommit(vote),
                    _ => false,
                };
            }
        }

        public bool HasTwoThirdAny()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            if (_prevotes.Count(x => !(x.Signature is null)) > twoThird)
            {
                return true;
            }

            if (_commits.Count(x => !(x.Signature is null)) > twoThird)
            {
                return true;
            }

            return false;
        }

        public bool HasTwoThirdPrevote()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _prevotes.Count(x => !(x.Signature is null)) > twoThird;
        }

        public bool HasTwoThirdCommit()
        {
            var twoThird = ValidatorSet.Length * 2.0 / 3.0;
            return _commits.Count(x => !(x.Signature is null)) > twoThird;
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

            // TODO: Should check signature :)
            return true;
        }

        private bool AddVote(Vote vote)
        {
            if (_prevotes[vote.NodeId].Signature is null)
            {
                _prevotes[vote.NodeId] = vote;
                return true;
            }

            return false;
        }

        private bool AddCommit(Vote vote)
        {
            if (_commits[vote.NodeId].Signature is null)
            {
                _commits[vote.NodeId] = vote;
                return true;
            }

            return false;
        }
    }
}
