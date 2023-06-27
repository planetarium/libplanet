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

        public int Count => _votes.Count;

        public int TotalCount => _votesByBlock.Values.Sum(votes => votes.Votes.Count);

        public bool Contains(PublicKey publicKey, BlockHash blockHash)
        {
            return _votes.Values.Any(
                vote => vote.ValidatorPublicKey.Equals(publicKey)
                && vote.BlockHash.Equals(blockHash));
        }

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

        public IEnumerable<Vote> GetVotes(BlockHash blockHash) => _votes.Values;

        // If a peer claims that it has 2/3 majority for given blockKey, call this.
        // NOTE: if there are too many peers, or too much peer churn,
        // this can cause memory issues.
        // TODO: implement ability to remove peers too
        // NOTE: VoteSet must not be nil
        public bool SetPeerMaj23(Maj23 maj23)
        {
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

        // Implements VoteSetReader.
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

        // List returns a copy of the list of votes stored by the VoteSet.
        public List<Vote> List()
            => _votes.Values.OrderBy(vote => vote.ValidatorPublicKey.ToAddress()).ToList();

        // List returns a copy of the list of votes stored by the VoteSet.
        public List<Vote> MappedList()
        {
            if (_maj23 is { } maj23NotNull)
            {
                return _votesByBlock[maj23NotNull].MappedList(_height, _round, _validatorSet);
            }

            throw new NullReferenceException();
        }

        // NOTE: if validator has conflicting votes, returns "canonical" vote
        // Implements VoteSetReader.
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

        public bool HasTwoThirdsMajority()
        {
            lock (_lock)
            {
                return !(_maj23 is null);
            }
        }

        // Implements VoteSetReader.
        public bool IsCommit()
        {
            if (_voteType != VoteFlag.PreCommit)
            {
                return false;
            }

            return HasTwoThirdsMajority();
        }

        public bool HasOneThirdsAny()
        {
            lock (_lock)
            {
                return Sum > _validatorSet.OneThirdPower;
            }
        }

        public bool HasTwoThirdsAny()
        {
            lock (_lock)
            {
                return Sum > _validatorSet.TwoThirdsPower;
            }
        }

        public bool HasAll()
        {
            lock (_lock)
            {
                return Sum == _validatorSet.TotalPower;
            }
        }

        // If there was a +2/3 majority for blockID, return blockID and true.
        // Else, return the empty BlockID{} and false.
        public bool TwoThirdsMajority(out BlockHash blockHash)
        {
            lock (_lock)
            {
                if (_maj23 is { } maj23)
                {
                    blockHash = maj23;
                    return true;
                }

                return false;
            }
        }

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

        internal void AddVerifiedVote(Vote vote)
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
                        $"{nameof(AddVerifiedVote)}() does not expect duplicate votes",
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
