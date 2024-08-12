using System;
using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Consensus
{
    // NOTE: All methods that can potentially mutate a Context is placed here.
    // Each mutation must be run synchronously either through MutationConsumerTask
    // or as a part of another mutation.  All methods are made intentionally private and
    // Exception free, i.e. any exception that is not thrown explicitly is unintentional and
    // unexpected.
    public partial class Context
    {
        /// <summary>
        /// Starts a new round.
        /// </summary>
        /// <param name="round">The round to start.</param>
        private void StartRound(int round)
        {
            _logger.Information(
                "Starting round {NewRound} (was {PrevRound}). (context: {Context})",
                round,
                Round,
                ToString());

            Round = round;
            RoundStarted?.Invoke(this, Round);

            // TODO: Update last proof by peers.
            // Last proof is not a parameter of StartRound()
            // for its update by peers developed in future.
            // It's crucial, to prevent network partition.
            _lotSet.SetRound(round, _lastProof);
            _heightVoteSet.SetRound(round);

            Proposal = null;
            Step = ConsensusStep.Sortition;

            PublishMessage(new ConsensusLotMsg(_lotSet.GenerateLot(_privateKey)));
            _ = OnTimeoutSortition(Round);
            _ = VoteLotAfterGathering();
        }

        /// <summary>
        /// Validates given <paramref name="message"/> and add it to the message log.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMsg"/> to be added.
        /// </param>
        /// <remarks>
        /// If an invalid <see cref="ConsensusMsg"/> is given, this method throws
        /// an <see cref="InvalidConsensusMessageException"/> and handles it <em>internally</em>
        /// while invoking <see cref="ExceptionOccurred"/> event.
        /// An <see cref="InvalidVoteException"/> can be thrown when
        /// the internal <see cref="HeightVoteSet"/> does not accept it, i.e.
        /// <see cref="HeightVoteSet.AddVote"/> returns <see langword="false"/>.
        /// An <see cref="InvalidLotException"/> or <see cref="InvalidDominantLotException"/>
        /// can be thrown when the internal <see cref="LotSet"/> does not accept it, i.e.
        /// <see cref="LotSet.AddLot"/> or <see cref="LotSet.AddDominantLot"/>
        /// returns <see langword="false"/>.
        /// </remarks>
        /// <seealso cref="HeightVoteSet.AddVote"/>
        private bool AddMessage(ConsensusMsg message)
        {
            try
            {
                if (message.Height != Height)
                {
                    throw new InvalidConsensusMessageException(
                        $"Given message's height {message.Height} is invalid",
                        message);
                }

                if (!_validatorSet.ContainsPublicKey(message.ValidatorPublicKey))
                {
                    throw new InvalidConsensusMessageException(
                        $"Given message's validator {message.ValidatorPublicKey} is invalid",
                        message);
                }

                if (message is ConsensusLotMsg lot)
                {
                    _lotSet.AddLot(lot.Lot);
                    LotSetModified?.Invoke(this, (_lotSet.Lots, _lotSet.DominantLots));
                    _logger.Debug(
                        "{FName}: Message: {Message} => Height: {Height}, Round: {Round}, " +
                        "Public key: {PublicKey}, " +
                        "Lot: {Lot}. (context: {Context})",
                        nameof(AddMessage),
                        lot,
                        lot.Height,
                        lot.Round,
                        lot.ValidatorPublicKey,
                        lot.Lot,
                        ToString());
                    return true;
                }

                if (message is ConsensusDominantLotMsg dominantLot)
                {
                    _lotSet.AddDominantLot(dominantLot.DominantLot);
                    LotSetModified?.Invoke(this, (_lotSet.Lots, _lotSet.DominantLots));
                    _logger.Debug(
                        "{FName}: Message: {Message} => Height: {Height}, Round: {Round}, " +
                        "Public key: {PublicKey}, " +
                        "Dominant lot: {Lot}. (context: {Context})",
                        nameof(AddMessage),
                        dominantLot,
                        dominantLot.Height,
                        dominantLot.Round,
                        dominantLot.ValidatorPublicKey,
                        dominantLot.DominantLot.Lot,
                        ToString());
                    return true;
                }

                if (message is ConsensusProposalMsg proposal)
                {
                    AddProposal(proposal.Proposal);
                    return true;
                }

                if (message is ConsensusVoteMsg voteMsg)
                {
                    switch (voteMsg)
                    {
                        case ConsensusPreVoteMsg preVote:
                        {
                            _heightVoteSet.AddVote(preVote.PreVote);
                            var args = (preVote.Round, VoteFlag.PreVote,
                                _heightVoteSet.PreVotes(preVote.Round).GetAllVotes());
                            VoteSetModified?.Invoke(this, args);
                            break;
                        }

                        case ConsensusPreCommitMsg preCommit:
                        {
                            _heightVoteSet.AddVote(preCommit.PreCommit);
                            var args = (preCommit.Round, VoteFlag.PreCommit,
                                _heightVoteSet.PreCommits(preCommit.Round).GetAllVotes());
                            VoteSetModified?.Invoke(this, args);
                            break;
                        }
                    }

                    _logger.Debug(
                        "{FName}: Message: {Message} => Height: {Height}, Round: {Round}, " +
                        "Validator Address: {VAddress}, " +
                        "Hash: {BlockHash}. (context: {Context})",
                        nameof(AddMessage),
                        voteMsg,
                        voteMsg.Height,
                        voteMsg.Round,
                        voteMsg.ValidatorPublicKey.Address,
                        voteMsg.BlockHash,
                        ToString());
                    return true;
                }

                return false;
            }
            catch (InvalidLotException ile)
            {
                var icme = new InvalidConsensusMessageException(
                    ile.Message,
                    message);
                var msg = $"Failed to add invalid message {message} to the " +
                          $"{nameof(LotSet)}";
                _logger.Error(icme, msg);
                ExceptionOccurred?.Invoke(this, icme);
                return false;
            }
            catch (InvalidDominantLotException idle)
            {
                var icme = new InvalidConsensusMessageException(
                    idle.Message,
                    message);
                var msg = $"Failed to add invalid message {message} to the " +
                          $"{nameof(LotSet)}";
                _logger.Error(icme, msg);
                ExceptionOccurred?.Invoke(this, icme);
                return false;
            }
            catch (InvalidProposalException ipe)
            {
                var icme = new InvalidConsensusMessageException(
                    ipe.Message,
                    message);
                var msg = $"Failed to add invalid message {message} to the " +
                          $"{nameof(HeightVoteSet)}";
                _logger.Error(icme, msg);
                ExceptionOccurred?.Invoke(this, icme);
                return false;
            }
            catch (InvalidVoteException ive)
            {
                var icme = new InvalidConsensusMessageException(
                    ive.Message,
                    message);
                var msg = $"Failed to add invalid message {message} to the " +
                          $"{nameof(HeightVoteSet)}";
                _logger.Error(icme, msg);
                ExceptionOccurred?.Invoke(this, icme);
                return false;
            }
            catch (InvalidConsensusMessageException icme)
            {
                var msg = $"Failed to add invalid message {message} to the " +
                          $"{nameof(HeightVoteSet)}";
                _logger.Error(icme, msg);
                ExceptionOccurred?.Invoke(this, icme);
                return false;
            }
        }

        private void AddProposal(Proposal proposal)
        {
            if (!Proposer!.Equals(proposal.ValidatorPublicKey))
            {
                throw new InvalidProposalException(
                    $"Given proposal's proposer {proposal.ValidatorPublicKey} is not the " +
                    $"proposer for the current height {Height} and round {Round}",
                    proposal);
            }

            if (proposal.Round != Round)
            {
                throw new InvalidProposalException(
                    $"Given proposal's round {proposal.Round} does not match" +
                    $" with the current round {Round}",
                    proposal);
            }

            // Should check if +2/3 votes already collected and the proposal does not match
            if (_heightVoteSet.PreVotes(Round).TwoThirdsMajority(out var preVoteMaj23) &&
                !proposal.BlockHash.Equals(preVoteMaj23))
            {
                throw new InvalidProposalException(
                    $"Given proposal's block hash {proposal.BlockHash} does not match" +
                    $" with the collected +2/3 preVotes' block hash {preVoteMaj23}",
                    proposal);
            }

            if (_heightVoteSet.PreCommits(Round).TwoThirdsMajority(out var preCommitMaj23) &&
                !proposal.BlockHash.Equals(preCommitMaj23))
            {
                throw new InvalidProposalException(
                    $"Given proposal's block hash {proposal.BlockHash} does not match" +
                    $" with the collected +2/3 preCommits' block hash {preCommitMaj23}",
                    proposal);
            }

            if (Proposal is null)
            {
                Proposal = proposal;
                _logger.Debug("Proposal {BlockHash} is set", proposal.BlockHash);
            }
            else
            {
                throw new InvalidProposalException(
                    $"Proposal already exists for height {Height} and round {Round}",
                    proposal);
            }
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="ConsensusStep"/> and/or schedule timeouts.
        /// </summary>
        private void ProcessGenericUponRules()
        {
            if (Step == ConsensusStep.Default || Step == ConsensusStep.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            if (Proposer is { } proposer &&
                Step == ConsensusStep.Sortition)
            {
                Step = ConsensusStep.Propose;
                if (proposer == _privateKey.PublicKey)
                {
                    _logger.Information(
                        "Entering propose step for round {NewRound} and is a proposer.",
                        Round,
                        ToString());
                    if ((_validValue ?? GetValue()) is Block proposalValue)
                    {
                        Proposal proposal = new ProposalMetadata(
                            Height,
                            Round,
                            DateTimeOffset.UtcNow,
                            _privateKey.PublicKey,
                            _codec.Encode(proposalValue.MarshalBlock()),
                            _validRound).Sign(_privateKey);

                        PublishMessage(new ConsensusProposalMsg(proposal));
                    }
                    else
                    {
                        _logger.Information(
                            "Failed to propose a block for round {Round}.",
                            Round);
                        _ = OnTimeoutPropose(Round);
                    }
                }
                else
                {
                    _logger.Information(
                        "Entering propose step for round {NewRound} and is not a proposer.",
                        Round);
                    _ = OnTimeoutPropose(Round);
                }
            }

            (Block Block, int ValidRound)? propose = GetProposal();

            if (propose is { } p1 &&
                p1.ValidRound == -1 &&
                Step == ConsensusStep.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message with " +
                    "valid round -1. (context: {Context})",
                    ToString());
                Step = ConsensusStep.PreVote;

                if (IsValid(p1.Block) && (_lockedRound == -1 || _lockedValue == p1.Block))
                {
                    PublishMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, p1.Block.Hash, VoteFlag.PreVote)));
                }
                else
                {
                    PublishMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, default, VoteFlag.PreVote)));
                }
            }

            if (propose is { } p2 &&
                p2.ValidRound >= 0 &&
                p2.ValidRound < Round &&
                _heightVoteSet.PreVotes(p2.ValidRound).TwoThirdsMajority(out BlockHash hash1) &&
                hash1.Equals(p2.Block.Hash) &&
                Step == ConsensusStep.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message and have collected " +
                    "2/3+ PreVote for valid round {ValidRound}. (context: {Context})",
                    p2.ValidRound,
                    ToString());
                Step = ConsensusStep.PreVote;

                if (IsValid(p2.Block) &&
                    (_lockedRound <= p2.ValidRound || _lockedValue == p2.Block))
                {
                    PublishMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, p2.Block.Hash, VoteFlag.PreVote)));
                }
                else
                {
                    PublishMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, default, VoteFlag.PreVote)));
                }
            }

            if (_heightVoteSet.PreVotes(Round).HasTwoThirdsAny() &&
                Step == ConsensusStep.PreVote &&
                !_preVoteTimeoutFlags.Contains(Round))
            {
                _logger.Debug(
                    "PreVote step in round {Round} is scheduled to be timed out because " +
                    "2/3+ PreVotes are collected for the round. (context: {Context})",
                    Round,
                    ToString());
                _preVoteTimeoutFlags.Add(Round);
                _ = OnTimeoutPreVote(Round);
            }

            if (propose is { } p3 &&
                _heightVoteSet.PreVotes(Round).TwoThirdsMajority(out BlockHash hash2) &&
                hash2.Equals(p3.Block.Hash) &&
                IsValid(p3.Block) &&
                (Step == ConsensusStep.PreVote || Step == ConsensusStep.PreCommit) &&
                !_hasTwoThirdsPreVoteFlags.Contains(Round))
            {
                _logger.Debug(
                    "2/3+ PreVotes for the current round {Round} have collected. " +
                    "(context: {Context})",
                    Round,
                    ToString());
                _hasTwoThirdsPreVoteFlags.Add(Round);
                if (Step == ConsensusStep.PreVote)
                {
                    _logger.Debug(
                        "Entering PreCommit step due to proposal message and have collected " +
                        "2/3+ PreVote for current round {Round}. (context: {Context})",
                        Round,
                        ToString());
                    Step = ConsensusStep.PreCommit;
                    _lockedValue = p3.Block;
                    _lockedRound = Round;
                    PublishMessage(
                        new ConsensusPreCommitMsg(
                            MakeVote(Round, p3.Block.Hash, VoteFlag.PreCommit)));

                    // Maybe need to broadcast periodically?
                    PublishMessage(
                        new ConsensusMaj23Msg(
                            MakeMaj23(Round, p3.Block.Hash, VoteFlag.PreVote)));
                }

                _validValue = p3.Block;
                _validRound = Round;
            }

            if (_heightVoteSet.PreVotes(Round).TwoThirdsMajority(out BlockHash hash3) &&
                Step == ConsensusStep.PreVote)
            {
                if (hash3.Equals(default))
                {
                    _logger.Debug(
                        "PreCommit nil for the round {Round} because 2/3+ PreVotes " +
                        "were collected. (context: {Context})",
                        Round,
                        ToString());
                    Step = ConsensusStep.PreCommit;
                    PublishMessage(
                        new ConsensusPreCommitMsg(MakeVote(Round, default, VoteFlag.PreCommit)));
                }
                else if (Proposal is { } proposal && !proposal.BlockHash.Equals(hash3))
                {
                    // +2/3 votes were collected and is not equal to proposal's,
                    // remove invalid proposal.
                    _logger.Debug(
                        "Remove invalid proposal {Proposal} because 2/3+ PreVotes " +
                        "for hash {BlockHash} were collected. (context: {Context})",
                        Round,
                        hash3,
                        ToString());
                    Proposal = null;
                    PublishMessage(
                        new ConsensusProposalClaimMsg(
                            new ProposalClaimMetadata(
                                Height,
                                Round,
                                hash3,
                                DateTimeOffset.UtcNow,
                                _privateKey.PublicKey).Sign(_privateKey)));
                }
            }

            if (_heightVoteSet.PreCommits(Round).HasTwoThirdsAny() &&
                !_preCommitTimeoutFlags.Contains(Round))
            {
                _logger.Debug(
                    "PreCommit step in round {Round} is scheduled to be timed out because " +
                    "2/3+ PreCommits are collected for the round. (context: {Context})",
                    Round,
                    ToString());
                _preCommitTimeoutFlags.Add(Round);
                _ = OnTimeoutPreCommit(Round);
            }
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="Round"/> or to terminate
        /// by setting <see cref="ConsensusStep"/> to <see cref="ConsensusStep.EndCommit"/>.
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMsg"/> to process.
        /// Although this is not strictly needed, this is used for optimization.</param>
        private void ProcessHeightOrRoundUponRules(ConsensusMsg message)
        {
            if (Step == ConsensusStep.Default || Step == ConsensusStep.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            int round = message.Round;
            if ((message is ConsensusProposalMsg || message is ConsensusPreCommitMsg) &&
                GetProposal() is(Block block4, _) &&
                _heightVoteSet.PreCommits(Round).TwoThirdsMajority(out BlockHash hash) &&
                block4.Hash.Equals(hash) &&
                IsValid(block4))
            {
                Step = ConsensusStep.EndCommit;
                _decision = block4;
                _committedRound = round;

                // Maybe need to broadcast periodically?
                PublishMessage(
                    new ConsensusMaj23Msg(
                        MakeMaj23(round, block4.Hash, VoteFlag.PreCommit)));

                try
                {
                    _logger.Information(
                        "Committing block #{Index} {Hash} (context: {Context})",
                        block4.Index,
                        block4.Hash,
                        ToString());

                    IsValid(block4);

                    AppendBlock(block4);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Failed to commit block #{Index} {Hash}",
                        block4.Index,
                        block4.Hash);
                    ExceptionOccurred?.Invoke(this, e);
                    return;
                }

                _logger.Information(
                    "Committed block #{Index} {Hash}",
                    block4.Index,
                    block4.Hash);
                return;
            }

            // NOTE: +1/3 prevote received, skip round
            // FIXME: Tendermint uses +2/3, should fixed?
            if (round > Round &&
                _heightVoteSet.PreVotes(round).HasOneThirdsAny())
            {
                _logger.Debug(
                    "1/3+ validators from round {Round} > current round {CurrentRound}. " +
                    "(context: {Context})",
                    round,
                    Round,
                    ToString());

                // TODO: This have to be modified with
                // Update by peers
                if (_lotSet.Maj23 is { } lotMaj23)
                {
                    _lastProof = lotMaj23.Proof;
                }

                StartRound(round);
                return;
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusDominantLotMsg"/>s were
        /// not gathered in <see cref="TimeoutSortition"/> and is still in
        /// <see cref="ConsensusStep.Sortition"/> step.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutSortition(int round)
        {
            if (round == Round && Step == ConsensusStep.Sortition)
            {
                Step = ConsensusStep.Propose;
                TimeoutProcessed?.Invoke(this, (round, ConsensusStep.Sortition));
                ProcessTimeoutPropose(round);
            }
        }

        /// <summary>
        /// A timeout mutation to run if no <see cref="ConsensusProposalMsg"/> is received in
        /// <see cref="TimeoutPropose"/> and is still in <see cref="ConsensusStep.Propose"/> step.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPropose(int round)
        {
            if (round == Round && Step == ConsensusStep.Propose)
            {
                PublishMessage(
                    new ConsensusPreVoteMsg(MakeVote(Round, default, VoteFlag.PreVote)));
                Step = ConsensusStep.PreVote;
                TimeoutProcessed?.Invoke(this, (round, ConsensusStep.Propose));
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusPreVoteMsg"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="ConsensusStep.PreVote"/> step
        /// after <see cref="TimeoutPreVote"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreVote(int round)
        {
            if (round == Round && Step == ConsensusStep.PreVote)
            {
                PublishMessage(
                    new ConsensusPreCommitMsg(MakeVote(Round, default, VoteFlag.PreCommit)));
                Step = ConsensusStep.PreCommit;
                TimeoutProcessed?.Invoke(this, (round, ConsensusStep.PreVote));
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusPreCommitMsg"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="ConsensusStep.PreCommit"/>
        /// step after <see cref="TimeoutPreCommit"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreCommit(int round)
        {
            if (Step == ConsensusStep.Default || Step == ConsensusStep.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            if (round == Round)
            {
                if (_lotSet.Maj23 is { } lotMaj23)
                {
                    _lastProof = lotMaj23.Proof;
                }

                StartRound(Round + 1);
                TimeoutProcessed?.Invoke(this, (round, ConsensusStep.PreCommit));
            }
        }
    }
}
