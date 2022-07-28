using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// Start a new round.
        /// </summary>
        /// <param name="round">A round to start.</param>
        internal void StartRound(int round)
        {
            RoundStarted?.Invoke(this, round);
            _logger.Debug(
                "Starting round {NewRound} (was {PrevRound}). (context: {Context})",
                round,
                Round,
                ToString());
            Round = round;
            SetStep(Step.Propose);
            if (Proposer(Round) == _privateKey.PublicKey)
            {
                _logger.Debug(
                    "Starting round {NewRound} and is a proposer. (context: {Context})",
                    round,
                    ToString());
                Block<T> proposal = _validValue ?? GetValue();

                BroadcastMessage(
                    new ConsensusPropose(
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
                _ = OnTimeoutPropose(Height, Round);
            }
        }

        /// <summary>
        /// Validates the given <paramref name="message"/> and add into the message queue.
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
                if (!propose.Remote!.PublicKey.Equals(Proposer(message.Round)))
                {
                    throw new InvalidProposerProposeMessageException(
                        "Proposer for the height " +
                        $"{message.Height} and round {message.Round} is invalid.  " +
                        $"(expected: Height: {message.Height}, Round: {message.Round}, " +
                        $"Proposer: {message.Remote!.PublicKey} / " +
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
                (!vote.ProposeVote.Verify(vote.Remote!.PublicKey) ||
                 !_validators.Contains(vote.ProposeVote.Validator)))
            {
                throw new InvalidValidatorVoteMessageException(
                    "Received ConsensusVote message is made by invalid validator.",
                    vote);
            }

            if (message is ConsensusCommit commit &&
                (!commit.CommitVote.Verify(commit.Remote!.PublicKey) ||
                 !_validators.Contains(commit.CommitVote.Validator)))
            {
                throw new InvalidValidatorVoteMessageException(
                    "Received ConsensusCommit message is made by invalid validator.",
                    commit);
            }

            if (!_messagesInRound.ContainsKey(message.Round))
            {
                _messagesInRound.TryAdd(message.Round, new HashSet<ConsensusMessage>());
            }

            // TODO: Prevent duplicated messages adding.
            _messagesInRound[message.Round].Add(message);
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="Step"/> or schedule timeouts.
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
                SetStep(Step.PreVote);

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
                SetStep(Step.PreVote);

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
                !_preVoteFlags.Contains(Round))
            {
                _logger.Debug(
                    "PreVote step in round {Round} is scheduled to be timed out because " +
                    "2/3+ PreVotes are collected for the round. (context: {Context})",
                    Round,
                    ToString());
                _preVoteFlags.Add(Round);
                _ = OnTimeoutPreVote(Height, Round);
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
                    SetStep(Step.PreCommit);
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
                SetStep(Step.PreCommit);
                BroadcastMessage(
                    new ConsensusCommit(Voting(Round, null, VoteFlag.Commit)));
            }

            if (HasTwoThirdsPreCommit(Round, null, true) && !_preCommitFlags.Contains(Round))
            {
                _logger.Debug(
                    "PreCommit step in round {Round} is scheduled to be timed out because " +
                    "2/3+ PreCommits are collected for the round. (context: {Context})",
                    Round,
                    ToString());
                _preCommitFlags.Add(Round);
                _ = OnTimeoutPreCommit(Height, Round);
            }
        }

        /// <summary>
        /// Checks the current state to mutate <see cref="Round"/> or terminate
        /// by setting <see cref="Step"/> to <see cref="Step.EndCommit"/>.
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMessage"/> to process.
        /// Although this is not strictly needed, this is used for optimization.</param>
        private void ProcessHeightOrRoundUponRules(ConsensusMessage message)
        {
            if (message is ConsensusPropose || message is ConsensusCommit)
            {
                int round = message.Round;
                if (GetPropose(round) is (Block<T> block4, _) &&
                    HasTwoThirdsPreCommit(round, block4.Hash) &&
                    Step != Step.EndCommit &&
                    IsValid(block4))
                {
                    SetStep(Step.EndCommit);
                    CommittedRound = round;
                    _logger.Debug(
                        "Committed block in round {Round}. (context: {Context})",
                        Round,
                        ToString());

                    ConsensusContext.Commit(block4);
                }
            }

            // FIXME: _messagesInRound should not contain any duplicated messages for this.
            if (message.Round > Round &&
                _messagesInRound[message.Round].Count > TotalValidators / 3)
            {
                _logger.Debug(
                    "1/3+ messages from the round {Round} > current round {CurrentRound}. " +
                    "(context: {Context})",
                    message.Round,
                    Round,
                    ToString());
                Task.Run(() => StartRound(message.Round));
            }
        }

        /// <summary>
        /// A timeout task for a round if no <see cref="ConsensusPropose"/> is received in
        /// <see cref="TimeoutPropose"/> and <see cref="Libplanet.Net.Consensus.Step.Propose"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPropose(long height, int round)
        {
            if (height == Height && round == Round && Step == Step.Propose)
            {
                BroadcastMessage(
                    new ConsensusVote(Voting(Round, null, VoteFlag.Absent)));
                SetStep(Step.PreVote);
            }
        }

        /// <summary>
        /// A timeout task for a round if <see cref="ConsensusVote"/> is received +2/3 any but has
        /// no majority neither Block nor NIL in
        /// <see cref="TimeoutPreVote"/> and <see cref="Libplanet.Net.Consensus.Step.PreVote"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreVote(long height, int round)
        {
            if (height == Height && round == Round && Step == Step.PreVote)
            {
                BroadcastMessage(
                    new ConsensusCommit(Voting(Round, null, VoteFlag.Commit)));
                SetStep(Step.PreCommit);
            }
        }

        /// <summary>
        /// A timeout task for a round if <see cref="ConsensusCommit"/> is received +2/3 any but has
        /// no majority neither Block or NIL in
        /// <see cref="TimeoutPreCommit"/> and <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private void ProcessTimeoutPreCommit(long height, int round)
        {
            if (height == Height && round == Round && Step < Step.EndCommit)
            {
                StartRound(Round + 1);
            }
        }
    }
}
