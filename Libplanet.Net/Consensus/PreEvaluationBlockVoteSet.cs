using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class PreEvaluationBlockVoteSet
    {
        private readonly ILogger _logger;
        private readonly long _height;
        private readonly int _round;
        private readonly VoteFlag _voteType;
        private readonly ValidatorSet _validatorSet;
        private readonly object _lock;
        private readonly Dictionary<PublicKey, PreEvaluationBlockVote> _votes;
        private readonly Dictionary<HashDigest<SHA256>, PreEvaluationBlockVotes> _votesByBlock;
        private readonly Dictionary<PublicKey, HashDigest<SHA256>> _peerMaj23s;
        private HashDigest<SHA256>? _maj23; // First 2/3 majority seen

        public PreEvaluationBlockVoteSet(
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
            _votes = new Dictionary<PublicKey, PreEvaluationBlockVote>();
            _votesByBlock = new Dictionary<HashDigest<SHA256>, PreEvaluationBlockVotes>();
            _peerMaj23s = new Dictionary<PublicKey, HashDigest<SHA256>>();
        }

        public IEnumerable<Validator> Validators => _validatorSet.Validators;

        public BigInteger Sum => _validatorSet.GetValidatorsPower(
            _votes.Values.Select(vote => vote.ValidatorPublicKey).ToList());

        public int Count => _votes.Count;

        public int TotalCount => _votesByBlock.Values.Sum(votes => votes.Votes.Count);

        public bool Contains(PublicKey publicKey, HashDigest<SHA256> preEvaluationBlockHash)
        {
            return _votes.Values.Any(
                vote => vote.ValidatorPublicKey.Equals(publicKey)
                && vote.PreEvaluationBlockHash.Equals(preEvaluationBlockHash));
        }

        public PreEvaluationBlockVote? GetVote(
            PublicKey publicKey, HashDigest<SHA256> preEvaluationBlockHash)
        {
            PreEvaluationBlockVote vote;
            try
            {
                vote = _votes[publicKey];
                if (vote.PreEvaluationBlockHash.Equals(preEvaluationBlockHash))
                {
                    return vote;
                }
            }
            catch (KeyNotFoundException)
            {
            }

            try
            {
                return _votesByBlock[preEvaluationBlockHash].Votes[publicKey];
            }
            catch (KeyNotFoundException)
            {
            }

            return null;
        }

        public IEnumerable<PreEvaluationBlockVote> GetVotes(
            HashDigest<SHA256> preEvaluationBlockHash) =>
            _votesByBlock[preEvaluationBlockHash].Votes.Values;

        public IEnumerable<PreEvaluationBlockVote> GetAllVotes()
        {
            var list = new List<PreEvaluationBlockVote>();
            foreach (var votes in _votesByBlock.Values)
            {
                list.AddRange(votes.Votes.Values);
            }

            return list;
        }

        public bool SetPeerMaj23(PreEvaluationBlockMaj23 maj23)
        {
            // TODO: implement ability to remove peers too
            lock (_lock)
            {
                PublicKey publicKey = maj23.ValidatorPublicKey;
                HashDigest<SHA256> preEvaluationBlockHash = maj23.PreEvaluationBlockHash;

                // Make sure peer hasn't already told us something.
                if (_peerMaj23s.ContainsKey(publicKey))
                {
                    HashDigest<SHA256> hash = _peerMaj23s[publicKey];
                    if (hash.Equals(preEvaluationBlockHash))
                    {
                        return false;
                    }

                    throw new InvalidPreEvaluationBlockMaj23Exception(
                        $"Received conflicting BlockHash from peer {publicKey} " +
                        $"(Expected: {hash}, Actual: {preEvaluationBlockHash})",
                        maj23);
                }

                _peerMaj23s[publicKey] = preEvaluationBlockHash;

                if (!_votesByBlock.ContainsKey(preEvaluationBlockHash))
                {
                    _votesByBlock[preEvaluationBlockHash]
                        = new PreEvaluationBlockVotes(preEvaluationBlockHash);
                }

                PreEvaluationBlockVotes votesByBlock = _votesByBlock[preEvaluationBlockHash];
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

        public bool[] BitArrayByBlockHash(HashDigest<SHA256> preEvaluationBlockHash)
        {
            lock (_lock)
            {
                if (_votesByBlock.ContainsKey(preEvaluationBlockHash))
                {
                    return _validatorSet.Validators.Select(validator =>
                        _votesByBlock[preEvaluationBlockHash].Votes.ContainsKey(validator.PublicKey)
                        ).ToArray();
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
        public List<PreEvaluationBlockVote> List()
            => _votes.Values.OrderBy(vote => vote.ValidatorPublicKey.Address).ToList();

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
        public List<PreEvaluationBlockVote> MappedList()
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
        public PreEvaluationBlockVote GetByPublicKey(PublicKey publicKey)
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
        public bool TwoThirdsMajority(out HashDigest<SHA256> blockHash)
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

        internal void AddVote(PreEvaluationBlockVote vote)
        {
            if (vote.Round != _round ||
                vote.Flag != _voteType)
            {
                throw new InvalidPreEvaluationBlockVoteException(
                    "Round, flag of the vote mismatches",
                    vote);
            }

            PublicKey validatorKey = vote.ValidatorPublicKey;
            HashDigest<SHA256> preEvaluationBlockHash = vote.PreEvaluationBlockHash;

            PreEvaluationBlockVote? conflicting = null;
            _logger.Debug("Adding verified vote {Vote}", vote);

            // Already exists in voteSet.votes?
            if (_votes.ContainsKey(validatorKey))
            {
                var existing = _votes[validatorKey];
                if (existing.PreEvaluationBlockHash.Equals(vote.PreEvaluationBlockHash))
                {
                    throw new InvalidPreEvaluationBlockVoteException(
                        $"{nameof(AddVote)}() does not expect duplicate votes",
                        vote);
                }
                else
                {
                    conflicting = existing;
                }

                // Replace vote if blockKey matches voteSet.maj23.
                if (_maj23 is { } maj23NotNull && maj23NotNull.Equals(preEvaluationBlockHash))
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

            if (_votesByBlock.ContainsKey(preEvaluationBlockHash))
            {
                if (!(conflicting is null) && !_votesByBlock[preEvaluationBlockHash].PeerMaj23)
                {
                    // There's a conflict and no peer claims that this block is special.
                    throw new InvalidPreEvaluationBlockVoteException(
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
                    throw new InvalidPreEvaluationBlockVoteException(
                        "There's a conflicting vote", vote);
                }

                // ... and there's no conflicting vote.
                // Start tracking this blockKey
                _votesByBlock[preEvaluationBlockHash]
                    = new PreEvaluationBlockVotes(preEvaluationBlockHash);

                // We'll add the vote in a bit.
            }

            PreEvaluationBlockVotes votesByBlock = _votesByBlock[preEvaluationBlockHash];

            // Before adding to votesByBlock, see if we'll exceed quorum
            BigInteger origSum = votesByBlock.Sum;
            BigInteger quorum = _validatorSet.TwoThirdsPower + 1;

            // Add vote to votesByBlock
            votesByBlock.AddVerifiedVote(vote, _validatorSet.GetValidator(validatorKey).Power);

            // If we just crossed the quorum threshold and have 2/3 majority...
            if (origSum < quorum && quorum <= votesByBlock.Sum && _maj23 is null)
            {
                _maj23 = vote.PreEvaluationBlockHash;

                // And also copy votes over to voteSet.votes
                foreach (var pair in votesByBlock.Votes)
                {
                    _votes[pair.Key] = pair.Value;
                }
            }
        }

        internal class PreEvaluationBlockVotes
        {
            public PreEvaluationBlockVotes(HashDigest<SHA256> preEvaluationBlockHash)
            {
                PreEvaluationBlockHash = preEvaluationBlockHash;
                PeerMaj23 = false;
                Votes = new Dictionary<PublicKey, PreEvaluationBlockVote>();
                Sum = BigInteger.Zero;
            }

            public HashDigest<SHA256> PreEvaluationBlockHash { get; }

            public bool PeerMaj23 { get; set; }

            public Dictionary<PublicKey, PreEvaluationBlockVote> Votes { get; set; }

            public BigInteger Sum { get; set; }

            public void AddVerifiedVote(PreEvaluationBlockVote vote, BigInteger power)
            {
                if (Votes.ContainsKey(vote.ValidatorPublicKey))
                {
                    return;
                }

                Votes[vote.ValidatorPublicKey] = vote;
                Sum += power;
            }

            public List<PreEvaluationBlockVote> MappedList(
                long height, int round, ValidatorSet validatorSet) =>
                validatorSet.PublicKeys.Select(
                    key => Votes.ContainsKey(key)
                        ? Votes[key]
                        : new PreEvaluationBlockVoteMetadata(
                            height,
                            round,
                            PreEvaluationBlockHash,
                            key,
                            VoteFlag.Null).Sign(null))
                    .ToList();
        }
    }
}
