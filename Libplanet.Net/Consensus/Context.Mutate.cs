using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    // NOTE: All methods that can potentially mutate a Context is placed here.
    // Each mutation must be run synchronously either through MutationConsumerTask
    // or as a part of another mutation.  All methods are made intentionally private and
    // Exception free, i.e. any exception that is not thrown explicitly is unintentional and
    // unexpected.
    public partial class Context<T>
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
            Step = Step.Propose;
            if (IsCurrentRoundProposer())
            {
                _logger.Information(
                    "Starting round {NewRound} and is a proposer.",
                    round,
                    ToString());
                if ((_validValue ?? GetValue()) is Block<T> proposalValue)
                {
                    Proposal proposal = new ProposalMetadata(
                        Height,
                        Round,
                        DateTimeOffset.UtcNow,
                        _privateKey.PublicKey,
                        _codec.Encode(proposalValue.MarshalBlock()),
                        _validRound).Sign(_privateKey);

                    BroadcastMessage(new ConsensusProposalMsg(proposal));
                }
                else
                {
                    _logger.Information(
                        "Failed to propose a block for round {Round}.",
                        round);
                    _ = OnTimeoutPropose(Round);
                }
            }
            else
            {
                _logger.Information(
                    "Starting round {NewRound} and is not a proposer.",
                    round);
                _ = OnTimeoutPropose(Round);
            }
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
        /// An <see cref="InvalidConsensusMessageException"/> can be thrown when
        /// the internal <see cref="MessageLog"/> does not accept it, i.e.
        /// <see cref="MessageLog.Add"/> returns <see langword="false"/>.
        /// </remarks>
        /// <seealso cref="MessageLog.Add"/>
        private void AddMessage(ConsensusMsg message)
        {
            try
            {
                _messageLog.Add(message);
                _logger.Debug(
                    "{FName}: Message: {Message} => Height: {Height}, Round: {Round}, " +
                    "Validator Address: {VAddress}, " +
                    "Hash: {BlockHash}, MessageCount: {Count}. (context: {Context})",
                    nameof(AddMessage),
                    message,
                    message.Height,
                    message.Round,
                    message.ValidatorPublicKey.ToAddress(),
                    message.BlockHash,
                    _messageLog.GetTotalCount(),
                    ToString());
            }
            catch (InvalidConsensusMessageException icme)
            {
                _logger.Error(
                    icme,
                    $"Failed to add invalid message {{Message}} to the {nameof(MessageLog)}",
                    message);
                ExceptionOccurred?.Invoke(this, icme);
            }
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="Step"/> and/or schedule timeouts.
        /// </summary>
        private void ProcessGenericUponRules()
        {
            if (Step == Step.Default || Step == Step.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            (Block<T> Block, int ValidRound)? propose = GetProposal(Round);
            if (propose is { } p1 &&
                p1.ValidRound == -1 &&
                Step == Step.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message with " +
                    "valid round -1. (context: {Context})",
                    ToString());
                Step = Step.PreVote;

                if (IsValid(p1.Block) && (_lockedRound == -1 || _lockedValue == p1.Block))
                {
                    BroadcastMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, p1.Block.Hash, VoteFlag.PreVote)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, null, VoteFlag.PreVote)));
                }
            }

            if (propose is { } p2 &&
                p2.ValidRound >= 0 &&
                p2.ValidRound < Round &&
                HasTwoThirdsPreVote(
                    p2.ValidRound, preVote => p2.Block.Hash.Equals(preVote.BlockHash)) &&
                Step == Step.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message and have collected " +
                    "2/3+ PreVote for valid round {ValidRound}. (context: {Context})",
                    p2.ValidRound,
                    ToString());
                Step = Step.PreVote;

                if (IsValid(p2.Block) &&
                    (_lockedRound <= p2.ValidRound || _lockedValue == p2.Block))
                {
                    BroadcastMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, p2.Block.Hash, VoteFlag.PreVote)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusPreVoteMsg(MakeVote(Round, null, VoteFlag.PreVote)));
                }
            }

            if (HasTwoThirdsPreVote(Round, _ => true) &&
                Step == Step.PreVote &&
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
                HasTwoThirdsPreVote(
                    Round, preVote => p3.Block.Hash.Equals(preVote.BlockHash)) &&
                IsValid(p3.Block) &&
                (Step == Step.PreVote || Step == Step.PreCommit) &&
                !_hasTwoThirdsPreVoteFlags.Contains(Round))
            {
                _logger.Debug(
                    "2/3+ PreVotes for the current round {Round} have collected. " +
                    "(context: {Context})",
                    Round,
                    ToString());
                _hasTwoThirdsPreVoteFlags.Add(Round);
                if (Step == Step.PreVote)
                {
                    _logger.Debug(
                        "Entering PreCommit step due to proposal message and have collected " +
                        "2/3+ PreVote for current round {Round}. (context: {Context})",
                        Round,
                        ToString());
                    Step = Step.PreCommit;
                    _lockedValue = p3.Block;
                    _lockedRound = Round;
                    BroadcastMessage(
                        new ConsensusPreCommitMsg(
                            MakeVote(Round, p3.Block.Hash, VoteFlag.PreCommit)));
                }

                _validValue = p3.Block;
                _validRound = Round;
            }

            if (HasTwoThirdsPreVote(Round, preVote => preVote.BlockHash is null) &&
                Step == Step.PreVote)
            {
                _logger.Debug(
                    "PreCommit nil for the round {Round} because 2/3+ PreVotes were collected. " +
                    "(context: {Context})",
                    Round,
                    ToString());
                Step = Step.PreCommit;
                BroadcastMessage(
                    new ConsensusPreCommitMsg(MakeVote(Round, null, VoteFlag.PreCommit)));
            }

            if (HasTwoThirdsPreCommit(Round, preCommit => true) &&
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
        /// by setting <see cref="Step"/> to <see cref="Step.EndCommit"/>.
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMsg"/> to process.
        /// Although this is not strictly needed, this is used for optimization.</param>
        private void ProcessHeightOrRoundUponRules(ConsensusMsg message)
        {
            if (Step == Step.Default || Step == Step.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            int round = message.Round;
            if ((message is ConsensusProposalMsg || message is ConsensusPreCommitMsg) &&
                GetProposal(round) is (Block<T> block4, _) &&
                HasTwoThirdsPreCommit(
                    round, preCommit => block4.Hash.Equals(preCommit.BlockHash)) &&
                IsValid(block4))
            {
                Step = Step.EndCommit;
                _decision = block4;
                _committedRound = round;

                try
                {
                    _logger.Information(
                        "Committing block #{Index} {Hash} (context: {Context})",
                        block4.Index,
                        block4.Hash,
                        ToString());
                    _blockChain.Append(block4, GetBlockCommit());
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

            if (round > Round &&
                HasOneThirdValidators(round))
            {
                _logger.Debug(
                    "1/3+ validators from round {Round} > current round {CurrentRound}. " +
                    "(context: {Context})",
                    round,
                    Round,
                    ToString());
                StartRound(round);
                return;
            }
        }

        /// <summary>
        /// A timeout mutation to run if no <see cref="ConsensusProposalMsg"/> is received in
        /// <see cref="TimeoutPropose"/> and is still in <see cref="Step.Propose"/> step.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPropose(int round)
        {
            if (round == Round && Step == Step.Propose)
            {
                BroadcastMessage(
                    new ConsensusPreVoteMsg(MakeVote(Round, null, VoteFlag.PreVote)));
                Step = Step.PreVote;
                TimeoutProcessed?.Invoke(this, (round, Step.Propose));
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusPreVoteMsg"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="Step.PreVote"/> step
        /// after <see cref="TimeoutPreVote"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreVote(int round)
        {
            if (round == Round && Step == Step.PreVote)
            {
                BroadcastMessage(
                    new ConsensusPreCommitMsg(MakeVote(Round, null, VoteFlag.PreCommit)));
                Step = Step.PreCommit;
                TimeoutProcessed?.Invoke(this, (round, Step.PreVote));
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusPreCommitMsg"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="Step.PreCommit"/> step
        /// after <see cref="TimeoutPreVote"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreCommit(int round)
        {
            if (Step == Step.Default || Step == Step.EndCommit)
            {
                _logger.Debug("Operation will not run in {Step} step", Step);
                return;
            }

            if (round == Round)
            {
                StartRound(Round + 1);
                TimeoutProcessed?.Invoke(this, (round, Step.PreCommit));
            }
        }
    }
}
