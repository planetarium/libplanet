using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class VoteSet
    {
        private readonly ILogger _logger;
        private readonly long _height;
        private readonly int _round;
        private readonly VoteFlag _voteType;
        private readonly ValidatorSet _validatorSet;
        private readonly object _lock;
        private readonly Dictionary<PublicKey, Vote> _votes; // Primary votes to share
        private readonly Dictionary<BlockHash, BlockVotes> _votesByBlock;
        private readonly Dictionary<PublicKey, BlockHash> _peerMaj23s;
        private BlockHash? _maj23; // First 2/3 majority seen

        public VoteSet(
            long height,
            int round,
            VoteFlag voteType,
            ValidatorSet validatorSet)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<VoteSet>()
                .ForContext("Source", nameof(VoteSet));
            _height = height;
            _round = round;
            _voteType = voteType;
            _validatorSet = validatorSet;
            _lock = new object();
            _votes = new Dictionary<PublicKey, Vote>();
            _votesByBlock = new Dictionary<BlockHash, BlockVotes>();
            _peerMaj23s = new Dictionary<PublicKey, BlockHash>();
        }

        public IEnumerable<Validator> Validators => _validatorSet.Validators;

        public BigInteger Sum => _validatorSet.GetValidatorsPower(
            _votes.Values.Select(vote => vote.ValidatorPublicKey).ToList());

        /// <summary>
        /// Count of the canonical <see cref="Vote"/>s.
        /// </summary>
        public int Count => _votes.Count;

        /// <summary>
        /// Count of the all <see cref="Vote"/>s.
        /// </summary>
        public int TotalCount => _votesByBlock.Values.Sum(votes => votes.Votes.Count);

        /// <summary>
        /// Predicate indicates where the <see cref="VoteSet"/> have collected a vote with
        /// given <paramref name="publicKey"/> and <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the <see cref="Vote"/>.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> of the <see cref="Vote"/>.</param>
        /// <returns> <see langword="true"/> when a vote with given params exits,
        /// else <see langword="false"/>.
        /// </returns>
        public bool Contains(PublicKey publicKey, BlockHash blockHash)
        {
            return _votes.Values.Any(
                vote => vote.ValidatorPublicKey.Equals(publicKey)
                && vote.BlockHash.Equals(blockHash));
        }

        /// <summary>
        /// Gets a <see cref="Vote"/> signed by <paramref name="publicKey"/> and of hash
        /// <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the <see cref="Vote"/>.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> of the <see cref="Vote"/>.</param>
        /// <returns>A <see cref="Vote"/> signed by <paramref name="publicKey"/> and of hash
        /// <paramref name="blockHash"/> if exists. Else, <see langword="null"/>.</returns>
        public Vote? GetVote(PublicKey publicKey, BlockHash blockHash)
        {
            Vote vote;
            try
            {
                vote = _votes[publicKey];
                if (vote.BlockHash.Equals(blockHash))
                {
                    return vote;
                }
            }
            catch (KeyNotFoundException)
            {
            }

            try
            {
                return _votesByBlock[blockHash].Votes[publicKey];
            }
            catch (KeyNotFoundException)
            {
            }

            return null;
        }

        /// <summary>
        /// Gets all collected <see cref="Vote"/>s that voted to block with hash
        /// <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">
        /// <see cref="BlockHash"/> of the <see cref="Vote"/>s to collect.</param>
        /// <returns><see cref="IEnumerable{T}"/> of <see cref="Vote"/>.</returns>
        public IEnumerable<Vote> GetVotes(BlockHash blockHash) =>
            _votesByBlock[blockHash].Votes.Values;

        /// <summary>
        /// If a peer claims that it has 2/3 majority for given <see cref="BlockHash"/>,
        /// modify state by calling this method.
        /// </summary>
        /// <param name="maj23">A <see cref="Maj23"/> received by other validator.</param>
        /// <returns><see langword="true"/> when given <paramref name="maj23"/> actually modified
        /// state of the <see cref="VoteSet"/>, else <see langword="false"/>.</returns>
        /// <exception cref="InvalidMaj23Exception">
        /// Thrown when given <paramref name="maj23"/> has conflicting <see cref="BlockHash"/>.
        /// </exception>
        /// <remarks>if there are too many peers, or too much peer churn,
        /// this can cause memory issues.</remarks>
        public bool SetPeerMaj23(Maj23 maj23)
        {
            // TODO: implement ability to remove peers too
            lock (_lock)
            {
                PublicKey publicKey = maj23.ValidatorPublicKey;
                BlockHash blockHash = maj23.BlockHash;

                // Make sure peer hasn't already told us something.
                if (_peerMaj23s.ContainsKey(publicKey))
                {
                    BlockHash hash = _peerMaj23s[publicKey];
                    if (hash.Equals(blockHash))
                    {
                        return false;
                    }

                    throw new InvalidMaj23Exception(
                        $"Received conflicting BlockHash from peer {publicKey} " +
                        $"(Expected: {hash}, Actual: {blockHash})",
                        maj23);
                }

                _peerMaj23s[publicKey] = blockHash;

                if (!_votesByBlock.ContainsKey(blockHash))
                {
                    _votesByBlock[blockHash] = new BlockVotes(blockHash);
                }

                BlockVotes votesByBlock = _votesByBlock[blockHash];
                if (votesByBlock.PeerMaj23)
                {
                    return false;
                }
                else
                {
                    votesByBlock.PeerMaj23 = true;
                    return true;
                }
            }
        }

        public bool[] BitArray()
        {
            lock (_lock)
            {
                return _validatorSet.Validators.Select(validator =>
                     _votes.ContainsKey(validator.PublicKey)).ToArray();
            }
        }

        public bool[] BitArrayByBlockHash(BlockHash blockHash)
        {
            lock (_lock)
            {
                if (_votesByBlock.ContainsKey(blockHash))
                {
                    return _validatorSet.Validators.Select(validator =>
                        _votesByBlock[blockHash].Votes.ContainsKey(validator.PublicKey)).ToArray();
                }

                return _validatorSet.Validators.Select(_ => false).ToArray();
            }
        }

        /// <summary>
        /// Returns a copy of the list of <see cref="Vote"/>s stored by the <see cref="VoteSet"/>.
        /// </summary>
        /// <returns>
        /// A copy of the list of <see cref="Vote"/>s stored by the <see cref="VoteSet"/>.
        /// </returns>
        public List<Vote> List()
            => _votes.Values.OrderBy(vote => vote.ValidatorPublicKey.ToAddress()).ToList();

        /// <summary>
        /// Returns a copy of the list of <see cref="Vote"/>s stored by the <see cref="VoteSet"/>.
        /// If failed to collect <see cref="Vote"/> from certain peer,
        /// fill it with nil <see cref="Vote"/>.
        /// </summary>
        /// <returns>
        /// A copy of the list of <see cref="Vote"/>s stored by the <see cref="VoteSet"/>.
        /// If failed to collect <see cref="Vote"/> from certain peer,
        /// fill it with nil <see cref="Vote"/>.
        /// </returns>
        /// <exception cref="NullReferenceException">
        /// Thrown when there are no +2/3 majority <see cref="Vote"/>s.</exception>
        public List<Vote> MappedList()
        {
            if (_maj23 is { } maj23NotNull)
            {
                return _votesByBlock[maj23NotNull].MappedList(_height, _round, _validatorSet);
            }

            throw new NullReferenceException();
        }

        /// <summary>
        /// Gets the <see cref="Vote"/> signed by given <paramref name="publicKey"/>.
        /// If given validator has conflicting votes, returns "canonical" <see cref="Vote"/>.
        /// </summary>
        /// <param name="publicKey">
        /// A <see cref="PublicKey"/> of the validator signed <see cref="Vote"/>.</param>
        /// <returns>A <see cref="Vote"/> signed by given <paramref name="publicKey"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when there's no <see cref="Vote"/>
        /// signed by given <paramref name="publicKey"/>.</exception>
        public Vote GetByPublicKey(PublicKey publicKey)
        {
            lock (_lock)
            {
                if (_votes.ContainsKey(publicKey))
                {
                    return _votes[publicKey];
                }

                throw new KeyNotFoundException(nameof(publicKey));
            }
        }

        /// <summary>If there is a +2/3 majority for certain <see cref="BlockHash"/>,
        /// return <see langword="true"/>. Else, return <see langword="false"/>.</summary>
        /// <returns><see langword="true"/> if +2/3 majority exists,
        /// else <see langword="false"/>.</returns>
        public bool HasTwoThirdsMajority()
        {
            lock (_lock)
            {
                return !(_maj23 is null);
            }
        }

        /// <summary>
        /// A predicate indicates whether the <see cref="VoteSet"/> collected +2/3 majority commits.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="VoteSet"/> collected +2/3 majority
        /// commits, else <see langword="false"/>.</returns>
        public bool IsCommit()
        {
            if (_voteType != VoteFlag.PreCommit)
            {
                return false;
            }

            return HasTwoThirdsMajority();
        }

        /// <summary>If there is a +1/3 majority for any <see cref="BlockHash"/>,
        /// return <see langword="true"/>. Else, return <see langword="false"/>.</summary>
        /// <returns><see langword="true"/> if +1/3 majority exists,
        /// else <see langword="false"/>.</returns>
        public bool HasOneThirdsAny()
        {
            lock (_lock)
            {
                return Sum > _validatorSet.OneThirdPower;
            }
        }

        /// <summary>If there is a +2/3 majority for any <see cref="BlockHash"/>,
        /// return <see langword="true"/>. Else, return <see langword="false"/>.</summary>
        /// <returns><see langword="true"/> if +2/3 majority exists,
        /// else <see langword="false"/>.</returns>
        public bool HasTwoThirdsAny()
        {
            lock (_lock)
            {
                return Sum > _validatorSet.TwoThirdsPower;
            }
        }

        /// <summary>
        /// Predicate which returns <see langword="true"/> when collected all <see cref="Vote"/>s.
        /// Else, return <see langword="false"/>.
        /// </summary>
        /// <returns><see langword="true"/> when collected all <see cref="Vote"/>s.
        /// Else, <see langword="false"/>.</returns>
        public bool HasAll()
        {
            lock (_lock)
            {
                return Sum == _validatorSet.TotalPower;
            }
        }

        /// <summary>If there is a +2/3 majority for certain <see cref="BlockHash"/>,
        /// return <see cref="BlockHash"/> and <see langword="true"/>.
        /// Else, return the <see langword="default"/> <see cref="BlockHash"/> and
        /// <see langword="false"/>.</summary>
        /// <param name="blockHash"><see cref="BlockHash"/> of the +2/3 majority vote.
        /// If not exists, it will have <see langword="default"/>.</param>
        /// <returns><see langword="true"/> if +2/3 majority exists,
        /// else <see langword="false"/>.</returns>
        public bool TwoThirdsMajority(out BlockHash blockHash)
        {
            lock (_lock)
            {
                if (_maj23 is { } maj23)
                {
                    blockHash = maj23;
                    return true;
                }

                blockHash = default;
                return false;
            }
        }

        /// <summary>
        /// Create a <see cref="BlockCommit"/> instance if <see cref="VoteSet"/> has +2/3 majority
        /// commits.
        /// </summary>
        /// <returns>A <see cref="BlockCommit"/> instance made by collected commits. If failed
        /// to collect +2/3 majority commits, return <see langword="null"/>.</returns>
        public BlockCommit? ToBlockCommit()
        {
            if (!IsCommit())
            {
                _logger.Information("Failed to create block commit since no +2/3 votes collected");
                return null;
            }

            return new BlockCommit(
                _height, _round, _maj23!.Value, MappedList().ToImmutableArray());
        }

        internal void AddVote(Vote vote)
        {
            if (vote.Round != _round ||
                vote.Flag != _voteType)
            {
                throw new InvalidVoteException(
                    "Round, flag of the vote mismatches",
                    vote);
            }

            PublicKey validatorKey = vote.ValidatorPublicKey;
            BlockHash blockHash = vote.BlockHash;

            Vote? conflicting = null;
            _logger.Debug("Adding verified vote {Vote}", vote);

            // Already exists in voteSet.votes?
            if (_votes.ContainsKey(validatorKey))
            {
                var existing = _votes[validatorKey];
                if (existing.BlockHash.Equals(vote.BlockHash))
                {
                    throw new InvalidVoteException(
                        $"{nameof(AddVote)}() does not expect duplicate votes",
                        vote);
                }
                else
                {
                    conflicting = existing;
                }

                // Replace vote if blockKey matches voteSet.maj23.
                if (_maj23 is { } maj23NotNull && maj23NotNull.Equals(blockHash))
                {
                    _votes[validatorKey] = vote;
                }

                // Otherwise don't add it to voteSet.votes
            }
            else
            {
                // Add to voteSet.votes and incr .sum
                _votes[validatorKey] = vote;
            }

            if (_votesByBlock.ContainsKey(blockHash))
            {
                if (!(conflicting is null) && !_votesByBlock[blockHash].PeerMaj23)
                {
                    // There's a conflict and no peer claims that this block is special.
                    throw new InvalidVoteException(
                        "There's a conflict and no peer claims that this block is special",
                        vote);
                }

                // We'll add the vote in a bit.
            }
            else
            {
                // .votesByBlock doesn't exist...
                if (!(conflicting is null))
                {
                    // ... and there's a conflicting vote.
                    // We're not even tracking this blockKey, so just forget it.
                    throw new InvalidVoteException("There's a conflicting vote", vote);
                }

                // ... and there's no conflicting vote.
                // Start tracking this blockKey
                _votesByBlock[blockHash] = new BlockVotes(blockHash);

                // We'll add the vote in a bit.
            }

            BlockVotes votesByBlock = _votesByBlock[blockHash];

            // Before adding to votesByBlock, see if we'll exceed quorum
            BigInteger origSum = votesByBlock.Sum;
            BigInteger quorum = _validatorSet.TwoThirdsPower + 1;

            // Add vote to votesByBlock
            votesByBlock.AddVerifiedVote(vote, _validatorSet.GetValidator(validatorKey).Power);

            // If we just crossed the quorum threshold and have 2/3 majority...
            if (origSum < quorum && quorum <= votesByBlock.Sum && _maj23 is null)
            {
                _maj23 = vote.BlockHash;

                // And also copy votes over to voteSet.votes
                foreach (var pair in votesByBlock.Votes)
                {
                    _votes[pair.Key] = pair.Value;
                }
            }
        }

        internal class BlockVotes
        {
            public BlockVotes(BlockHash blockHash)
            {
                BlockHash = blockHash;
                PeerMaj23 = false;
                Votes = new Dictionary<PublicKey, Vote>();
                Sum = BigInteger.Zero;
            }

            public BlockHash BlockHash { get; }

            public bool PeerMaj23 { get; set; }

            public Dictionary<PublicKey, Vote> Votes { get; set; }

            public BigInteger Sum { get; set; }

            public void AddVerifiedVote(Vote vote, BigInteger power)
            {
                if (Votes.ContainsKey(vote.ValidatorPublicKey))
                {
                    return;
                }

                Votes[vote.ValidatorPublicKey] = vote;
                Sum += power;
            }

            public List<Vote> MappedList(long height, int round, ValidatorSet validatorSet) =>
                validatorSet.PublicKeys.Select(
                        key => Votes.ContainsKey(key)
                            ? Votes[key]
                            : new VoteMetadata(
                                height,
                                round,
                                BlockHash,
                                DateTimeOffset.UtcNow,
                                key,
                                VoteFlag.Null).Sign(null))
                    .ToList();
        }
    }
}
