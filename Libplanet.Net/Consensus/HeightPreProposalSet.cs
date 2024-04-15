using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class HeightPreProposalSet
    {
        private readonly ILogger _logger;
        private readonly object _lock;
        private long _height;
        private int _round;
        private Proof? _lastProof;
        private ValidatorSet _validatorSet;
        private Dictionary<int, PreProposalSet> _roundPreProposalSets;
        private Dictionary<int, RoundPreEvaluationBlockVoteSet> _roundPreEvaluationBlockVoteSets;
        private int _drawSize;

        public HeightPreProposalSet(long height, ValidatorSet validatorSet)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<HeightPreProposalSet>()
                .ForContext("Source", nameof(HeightPreProposalSet));
            _height = height;
            _validatorSet = validatorSet;
            _drawSize = 10;
            _lock = new object();
            lock (_lock)
            {
                _height = height;
                _validatorSet = validatorSet;
                _roundPreProposalSets = new Dictionary<int, PreProposalSet>();
                _roundPreEvaluationBlockVoteSets
                    = new Dictionary<int, RoundPreEvaluationBlockVoteSet>();
            }
        }

        public void Reset(long height, ValidatorSet validatorSet)
        {
            lock (_lock)
            {
                _height = height;
                _validatorSet = validatorSet;
                _roundPreProposalSets = new Dictionary<int, PreProposalSet>();
                _roundPreEvaluationBlockVoteSets
                    = new Dictionary<int, RoundPreEvaluationBlockVoteSet>();
                AddRound(0);
                _round = 0;
            }
        }

        public long Height()
        {
            lock (_lock)
            {
                return _height;
            }
        }

        public int Round()
        {
            lock (_lock)
            {
                return _round;
            }
        }

        // Create more RoundVoteSets up to round.
        public void SetRound(int round)
        {
            lock (_lock)
            {
                var newRound = _round + 1;
                if (_round != 0 && (round < newRound))
                {
                    throw new ArgumentException("Round must increase");
                }

                for (int r = newRound; r <= round; r++)
                {
                    if (_roundPreProposalSets.ContainsKey(r))
                    {
                        continue; // Already exists because peerCatchupRounds.
                    }

                    AddRound(r);
                }

                _round = round;
            }
        }

        public void AddRound(int round)
        {
            if (_roundPreProposalSets.ContainsKey(round) ||
                _roundPreEvaluationBlockVoteSets.ContainsKey(round))
            {
                throw new ArgumentException($"Add round for an existing round: {round}");
            }

            _logger.Debug("Adding round {Round}", round);

            _roundPreProposalSets[round] = new PreProposalSet(
                _height, round, _lastProof, _validatorSet, _drawSize);

            PreEvaluationBlockVoteSet preVotes = new PreEvaluationBlockVoteSet(
                _height, round, VoteFlag.PreVote, _validatorSet);
            PreEvaluationBlockVoteSet preCommits = new PreEvaluationBlockVoteSet(
                _height, round, VoteFlag.PreCommit, _validatorSet);
            _roundPreEvaluationBlockVoteSets[round] = new RoundPreEvaluationBlockVoteSet(
                preVotes, preCommits);
        }

        public void AddPreProposal(PreProposal preProposal)
        {
            lock (_lock)
            {
                if (preProposal.Height != _height)
                {
                    throw new InvalidPreProposalException(
                        "Height of vote is different from current HeightVoteSet",
                        preProposal);
                }

                PublicKey validatorKey = preProposal.ValidatorPublicKey;

                if (!_validatorSet.ContainsPublicKey(validatorKey))
                {
                    throw new InvalidPreProposalException(
                        "ValidatorKey of the vote is not in the validator set",
                        preProposal);
                }

                if (!_roundPreProposalSets.TryGetValue(
                    preProposal.Round, out PreProposalSet? preProposalSet))
                {
                    AddRound(preProposal.Round);
                    _roundPreProposalSets.TryGetValue(preProposal.Round, out preProposalSet);
                }

                preProposalSet!.AddPreProposal(preProposal);
            }
        }

        public PreEvaluationBlock? DominantPreEvalBlock(int round)
        {
            if (_roundPreProposalSets.TryGetValue(
                round, out PreProposalSet? preProposalSet)
                && preProposalSet.DominantPreEvalBlock is { } dominant)
            {
                return dominant.Item1;
            }

            return null;
        }

        public void UpdateLastProof(int round, Proof lastProof)
        {
            if (!_roundPreProposalSets.TryGetValue(
                round, out PreProposalSet? preProposalSet))
            {
                AddRound(round);
                _roundPreProposalSets.TryGetValue(round, out preProposalSet);
            }

            preProposalSet!.UpdateLastProof(lastProof);
        }

        public void AddVote(PreEvaluationBlockVote vote)
        {
            lock (_lock)
            {
                if (vote.Height != _height)
                {
                    throw new InvalidPreEvaluationBlockVoteException(
                        "Height of vote is different from current HeightVoteSet",
                        vote);
                }

                PublicKey validatorKey = vote.ValidatorPublicKey;

                if (!_validatorSet.ContainsPublicKey(validatorKey))
                {
                    throw new InvalidPreEvaluationBlockVoteException(
                        "ValidatorKey of the vote is not in the validator set",
                        vote);
                }

                if (!vote.Flag.Equals(VoteFlag.PreVote) &&
                    !vote.Flag.Equals(VoteFlag.PreCommit))
                {
                    throw new InvalidPreEvaluationBlockVoteException(
                        $"VoteFlag should be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}",
                        vote);
                }

                PreEvaluationBlockVoteSet voteSet;
                try
                {
                    voteSet = GetVoteSet(vote.Round, vote.Flag);
                }
                catch (KeyNotFoundException)
                {
                    AddRound(vote.Round);
                    voteSet = GetVoteSet(vote.Round, vote.Flag);
                }

                voteSet.AddVote(vote);
            }
        }

        public PreEvaluationBlockVoteSet PreVotes(int round)
        {
            lock (_lock)
            {
                return GetVoteSet(round, VoteFlag.PreVote);
            }
        }

        public PreEvaluationBlockVoteSet PreCommits(int round)
        {
            lock (_lock)
            {
                return GetVoteSet(round, VoteFlag.PreCommit);
            }
        }

        public PreEvaluationBlockVoteSet GetVoteSet(int round, VoteFlag voteFlag)
        {
            RoundPreEvaluationBlockVoteSet roundVoteSet = _roundPreEvaluationBlockVoteSets[round];
            return voteFlag switch
            {
                VoteFlag.PreVote => roundVoteSet.PreVotes,
                VoteFlag.PreCommit => roundVoteSet.PreCommits,
                _ => throw new ArgumentException($"Unexpected vote type: {voteFlag}"),
            };
        }

        public bool SetPeerMaj23(PreEvaluationBlockMaj23 maj23)
        {
            lock (_lock)
            {
                if (!maj23.Flag.Equals(VoteFlag.PreVote) &&
                    !maj23.Flag.Equals(VoteFlag.PreCommit))
                {
                    throw new InvalidPreEvaluationBlockMaj23Exception(
                        $"Maj23 must have either {VoteFlag.PreVote} or {VoteFlag.PreCommit} " +
                        $"(Actual: {maj23.Flag})",
                        maj23);
                }

                PreEvaluationBlockVoteSet voteSet;
                try
                {
                    voteSet = GetVoteSet(maj23.Round, maj23.Flag);
                }
                catch (KeyNotFoundException)
                {
                    AddRound(maj23.Round);
                    voteSet = GetVoteSet(maj23.Round, maj23.Flag);
                }

                return voteSet.SetPeerMaj23(maj23);
            }
        }

        public bool TryGetPreEvaluationBlock(
            int round,
            HashDigest<SHA256> preEvaluationHash,
            out PreEvaluationBlock? preEvaluationBlock)
        {
            preEvaluationBlock = null;
            return _roundPreProposalSets.TryGetValue(round, out PreProposalSet preProposalSet)
                ? preProposalSet.TryGetPreEvaluationBlock(preEvaluationHash, out preEvaluationBlock)
                : false;
        }

        internal class RoundPreEvaluationBlockVoteSet
        {
            public RoundPreEvaluationBlockVoteSet(
                PreEvaluationBlockVoteSet preVotes, PreEvaluationBlockVoteSet preCommits)
            {
                PreVotes = preVotes;
                PreCommits = preCommits;
            }

            public PreEvaluationBlockVoteSet PreVotes { get; set; }

            public PreEvaluationBlockVoteSet PreCommits { get; set; }

            public int Count => PreVotes.TotalCount + PreCommits.TotalCount;
        }
    }
}
