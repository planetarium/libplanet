using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// Starts a new round.
        /// </summary>
        /// <param name="round">The round to start.</param>
        internal void StartRound(int round)
        {
            _logger.Debug(
                "Starting round {NewRound} (was {PrevRound}). (context: {Context})",
                round,
                Round,
                ToString());
            Round = round;
            Step = Step.Propose;
            if (Proposer(Round) == _privateKey.PublicKey)
            {
                _logger.Debug(
                    "Starting round {NewRound} and is a proposer. (context: {Context})",
                    round,
                    ToString());
                Block<T> proposal = _validValue ?? GetValue();

                BroadcastMessage(
                    new ConsensusPropose(
                        _privateKey.PublicKey,
                        Height,
                        Round,
                        proposal.Hash,
                        _codec.Encode(proposal.MarshalBlock()),
                        _validRound));
            }
            else
            {
                _logger.Debug(
                    "Starting round {NewRound} and is not a proposer. (context: {Context})",
                    round,
                    ToString());
                _ = OnTimeoutPropose(Round);
            }
        }

        /// <summary>
        /// Validates given <paramref name="message"/> and add it to the message queue.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to be added.
        /// </param>
        /// <exception cref="InvalidHeightMessageException">Thrown when the Height of message and
        /// context height does not match.
        /// </exception>
        /// <exception cref="InvalidProposerProposeMessageException">Thrown when the
        /// <see cref="ConsensusPropose"/> message has proposer that is not proposer of the current
        /// round.
        /// </exception>
        /// <exception cref="InvalidBlockProposeMessageException">Thrown when the
        /// <see cref="ConsensusPropose"/> message has invalid blockHash (i.e., NIL).
        /// </exception>
        /// <exception cref="InvalidValidatorVoteMessageException">Thrown when the signature of
        /// <see cref="Vote"/> is invalid or the <see cref="Vote"/> is not signed by any validator
        /// of this context.
        /// </exception>
        internal void AddMessage(ConsensusMessage message)
        {
            if (message.Height != Height)
            {
                throw new InvalidHeightMessageException(
                    "Height of message differs with working height.  " +
                    $"(expected: {Height}, actual: {message.Height})",
                    message);
            }

            if (message is ConsensusPropose propose)
            {
                if (!propose.Validator.Equals(Proposer(message.Round)))
                {
                    throw new InvalidProposerProposeMessageException(
                        "Proposer for the height " +
                        $"{message.Height} and round {message.Round} is invalid.  " +
                        $"(expected: Height: {message.Height}, Round: {message.Round}, " +
                        $"Proposer: {message.Validator} / " +
                        $"actual: Height: {Height}, Round: {Round}, " +
                        $"Proposer: {Proposer(message.Round)})",
                        message);
                }

                if (message.BlockHash.Equals(default(BlockHash)))
                {
                    throw new InvalidBlockProposeMessageException(
                        "Cannot propose a null block.",
                        message);
                }
            }

            if (message is ConsensusVote vote &&
                (!vote.Validator.Equals(vote.ProposeVote.Validator) ||
                 !vote.ProposeVote.Verify(vote.Validator) ||
                 !_validators.Contains(vote.Validator)))
            {
                throw new InvalidValidatorVoteMessageException(
                    "Received ConsensusVote message is made by invalid validator.",
                    vote);
            }

            if (message is ConsensusCommit commit &&
                (!commit.Validator.Equals(commit.CommitVote.Validator) ||
                 !commit.CommitVote.Verify(commit.Validator) ||
                 !_validators.Contains(commit.Validator)))
            {
                throw new InvalidValidatorVoteMessageException(
                    "Received ConsensusCommit message is made by invalid validator.",
                    commit);
            }

            lock (_messagesInRoundLock)
            {
                if (!_messagesInRound.ContainsKey(message.Round))
                {
                    _messagesInRound.TryAdd(message.Round, new HashSet<ConsensusMessage>());
                }

                // TODO: Prevent duplicated messages adding.
                _messagesInRound[message.Round].Add(message);
                _logger.Debug(
                    "{FName}: Message: {Message} => Height: {Height}, Round: {Round}, " +
                    "Validator Address: {VAddress}, Remote Address: {RAddress}, " +
                    "Hash: {BlockHash}, MessageCount: {Count}. (context: {Context})",
                    nameof(AddMessage),
                    message,
                    message.Height,
                    message.Round,
                    message.Validator.ToAddress(),
                    message.Remote!.Address,
                    message.BlockHash,
                    _messagesInRound.Sum(x => x.Value.Count),
                    ToString());
            }
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="Step"/> and/or schedule timeouts.
        /// </summary>
        private void ProcessGenericUponRules()
        {
            if (Step == Step.Default || Step == Step.EndCommit)
            {
                _logger.Debug("Operation will not run in {State} state.", Step.ToString());
                return;
            }

            if (GetPropose(Round) is (Block<T> block1, int validRound1) &&
                validRound1 == -1 &&
                Step == Step.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message with " +
                    "valid round -1. (context: {Context})",
                    ToString());
                Step = Step.PreVote;

                if (IsValid(block1) && (_lockedRound == -1 || _lockedValue == block1))
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Round, block1.Hash, VoteFlag.Absent)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Round, null, VoteFlag.Absent)));
                }
            }

            if (GetPropose(Round) is (Block<T> block2, int validRound2) &&
                validRound2 >= 0 &&
                validRound2 < Round &&
                HasTwoThirdsPreVote(validRound2, block2.Hash) &&
                Step == Step.Propose)
            {
                _logger.Debug(
                    "Entering PreVote step due to proposal message and have collected " +
                    "2/3+ PreVote for valid round {ValidRound}. (context: {Context})",
                    validRound2,
                    ToString());
                Step = Step.PreVote;

                if (IsValid(block2) && (_lockedRound <= validRound2 || _lockedValue == block2))
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Round, block2.Hash, VoteFlag.Absent)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Round, null, VoteFlag.Absent)));
                }
            }

            if (HasTwoThirdsPreVote(Round, null, true) &&
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

            if (GetPropose(Round) is (Block<T> block3, _) &&
                HasTwoThirdsPreVote(Round, block3.Hash) &&
                IsValid(block3) &&
                Step >= Step.PreVote &&
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
                    _lockedValue = block3;
                    _lockedRound = Round;
                    BroadcastMessage(
                        new ConsensusCommit(Voting(Round, block3.Hash, VoteFlag.Commit)));
                }

                _validValue = block3;
                _validRound = Round;
            }

            if (HasTwoThirdsPreVote(Round, null) && Step == Step.PreVote)
            {
                _logger.Debug(
                    "PreCommit nil for the round {Round} because 2/3+ PreVotes were collected. " +
                    "(context: {Context})",
                    Round,
                    ToString());
                Step = Step.PreCommit;
                BroadcastMessage(
                    new ConsensusCommit(Voting(Round, null, VoteFlag.Commit)));
            }

            if (HasTwoThirdsPreCommit(Round, null, true) && !_preCommitTimeoutFlags.Contains(Round))
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
        /// <param name="message">The <see cref="ConsensusMessage"/> to process.
        /// Although this is not strictly needed, this is used for optimization.</param>
        private void ProcessHeightOrRoundUponRules(ConsensusMessage message)
        {
            int round = message.Round;
            if ((message is ConsensusPropose || message is ConsensusCommit) &&
                GetPropose(round) is (Block<T> block4, _) &&
                HasTwoThirdsPreCommit(round, block4.Hash) &&
                Step != Step.EndCommit &&
                IsValid(block4))
            {
                Step = Step.EndCommit;
                CommittedRound = round;
                _logger.Debug(
                    "Committed block in round {Round}. (context: {Context})",
                    Round,
                    ToString());

                ConsensusContext.Commit(block4);
                return;
            }

            // FIXME: _messagesInRound should not contain any duplicated messages for this.
            if (round > Round &&
                _messagesInRound[round].Count > TotalValidators / 3)
            {
                _logger.Debug(
                    "1/3+ messages from the round {Round} > current round {CurrentRound}. " +
                    "(context: {Context})",
                    round,
                    Round,
                    ToString());
                StartRound(round);
                return;
            }
        }

        /// <summary>
        /// A timeout mutation to run if no <see cref="ConsensusPropose"/> is received in
        /// <see cref="TimeoutPropose"/> and is still in <see cref="Step.Propose"/> step.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPropose(int round)
        {
            if (round == Round && Step == Step.Propose)
            {
                BroadcastMessage(
                    new ConsensusVote(Voting(Round, null, VoteFlag.Absent)));
                Step = Step.PreVote;
                TimeoutProcessed?.Invoke(this, round);
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusVote"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="Step.PreVote"/> step
        /// after <see cref="TimeoutPreVote"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreVote(int round)
        {
            if (round == Round && Step == Step.PreVote)
            {
                BroadcastMessage(
                    new ConsensusCommit(Voting(Round, null, VoteFlag.Commit)));
                Step = Step.PreCommit;
                TimeoutProcessed?.Invoke(this, round);
            }
        }

        /// <summary>
        /// A timeout mutation to run if +2/3 <see cref="ConsensusCommit"/>s were received but
        /// is still in <paramref name="round"/> round and <see cref="Step.PreCommit"/> step
        /// after <see cref="TimeoutPreVote"/>.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreCommit(int round)
        {
            if (round == Round && Step < Step.EndCommit)
            {
                StartRound(Round + 1);
                TimeoutProcessed?.Invoke(this, round);
            }
        }
    }
}
