using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Caching;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A state machine class of PBFT consensus algorithm. The state machine is responsible for
    /// proposing, validating, voting a block and committing the voted block to the blockchain.
    /// There are five states:
    /// <list type="bullet">
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.Default"/> which is the initial state when
    ///         the <see cref="StartAsync"/> is not called (i.e., round has not been started).
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.Propose"/>, which is the state when
    ///         the round has been started and waiting for the block proposal. If a validator is a
    ///         proposer of the round, it will propose a block to the other validators and to
    ///         itself.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.PreVote"/>, which is the state when a block
    ///         proposal for a round has been received. While translating to this step, state
    ///         machine votes for the block whether block is valid or not, and waiting for any +2/3
    ///         votes from other validators.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>, which is the state received
    ///         any +2/3 votes in <see cref="Libplanet.Net.Consensus.Step.PreVote"/>. While
    ///         translating to this step, state machine votes for whether the block should be
    ///         committed or not, and waiting for any +2/3 committing votes from other validators.
    ///         If <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>
    ///         receives +2/3 commit votes with NIL, starts new round <see cref="StartRound"/> and
    ///         moves step to <see cref="Libplanet.Net.Consensus.Step.Propose"/>.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.EndCommit"/>, which is the state represents
    ///         committing vote has been received from other validators. Block will be committed
    ///         to the blockchain and consensus for this height is stopped. (responsibility of next
    ///         height handling is at <see cref="ConsensusContext"/>).
    ///     </item>
    ///     <item>
    ///         In the above states, <see cref="Libplanet.Net.Consensus.Step.Propose"/>, If
    ///         receiving proposal fails in <see cref="TimeoutPropose"/>, then step is moved to
    ///         <see cref="Libplanet.Net.Consensus.Step.PreVote"/> and vote NIL.
    ///     </item>
    ///     <item>
    ///         Similar to Propose, <see cref="Libplanet.Net.Consensus.Step.PreVote"/> and
    ///         <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> also wait for
    ///         <see cref="TimeoutPreVote"/> or <see cref="TimeoutPreCommit"/> respectively,
    ///         if +2/3 vote received but neither NIL nor Block is not +2/3. If still +2/3 vote is
    ///         not received neither NIL nor Block after timeout runs out, then move to next step
    ///         and vote NIL.
    ///     </item>
    /// </list>
    /// Validators are bonding/bonded nodes that participate in the consensus.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type of <see cref="BlockChain{T}"/>.
    /// </typeparam>
    /// <remarks>
    /// A <see cref="Context{T}"/> represents a consensus of a single height and its multiple
    /// rounds.
    /// </remarks>
    public class Context<T> : IDisposable
        where T : IAction, new()
    {
        private const int TimeoutProposeBase = 5;
        private const int TimeoutPreVoteBase = 5;
        private const int TimeoutPreCommitBase = 5;
        private const int TimeoutProposeMultiplier = 1;
        private const int TimeoutPreVoteMultiplier = 1;
        private const int TimeoutPreCommitMultiplier = 1;

        private readonly BlockChain<T> _blockChain;
        private readonly Codec _codec;
        private readonly List<PublicKey> _validators;
        private readonly Channel<ConsensusMessage> _messageRequests;
        private readonly ConcurrentDictionary<int, ConcurrentBag<ConsensusMessage>>
            _messagesInRound;

        private readonly PrivateKey _privateKey;
        private readonly ConcurrentBag<int> _preVoteFlags;
        private readonly ConcurrentBag<int> _hasTwoThirdsPreVoteFlags;
        private readonly ConcurrentBag<int> _preCommitFlags;

        private readonly CancellationTokenSource _cancellationTokenSource;

        private readonly ILogger _logger;
        private readonly LRUCache<BlockHash, bool> _blockHashCache;

        private Block<T>? _lockedValue;
        private int _lockedRound;
        private Block<T>? _validValue;
        private int _validRound;
        private BlockCommit? _lastCommit;
        private int _requestCount;

        /// <summary>
        /// Initializes a new instance of the <see cref="Context{T}"/> class.
        /// </summary>
        /// <param name="consensusContext">A command class for receiving
        /// <see cref="ConsensusMessage"/> from or broadcasts to other validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="height">A target <see cref="Context{T}.Height"/> of the consensus state.
        /// </param>
        /// <param name="privateKey">A private key for signing a block and message.
        /// <seealso cref="GetValue"/><seealso cref="ProcessMessage"/><seealso cref="Voting"/>
        /// </param>
        /// <param name="validators">A list of <see cref="PublicKey"/> of validators.</param>
        public Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators)
            : this(
                consensusContext,
                blockChain,
                height,
                privateKey,
                validators,
                Step.Default,
                0)
        {
        }

        internal Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators,
            Step step,
            int round = 0,
            int cacheSize = 128)
        {
            _privateKey = privateKey;
            Height = height;
            Round = round;
            Step = step;
            _lockedValue = null;
            _lockedRound = -1;
            _validValue = null;
            _validRound = -1;
            _blockChain = blockChain;
            _codec = new Codec();
            _messageRequests = Channel.CreateUnbounded<ConsensusMessage>();
            _messagesInRound = new ConcurrentDictionary<int, ConcurrentBag<ConsensusMessage>>();
            _preVoteFlags = new ConcurrentBag<int>();
            _hasTwoThirdsPreVoteFlags = new ConcurrentBag<int>();
            _preCommitFlags = new ConcurrentBag<int>();
            _validators = validators;
            _cancellationTokenSource = new CancellationTokenSource();
            ConsensusContext = consensusContext;
            _blockHashCache = new LRUCache<BlockHash, bool>(cacheSize, Math.Max(cacheSize / 64, 8));

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<Context<T>>()
                .ForContext("Source", nameof(Context<T>));
        }

        /// <summary>
        /// A event that invoked when any timeout occurs.
        /// </summary>
        internal event EventHandler<(Step, TimeSpan)>? TimeoutOccurred;

        /// <summary>
        /// A event that invoked when any step is changed.
        /// </summary>
        internal event EventHandler<Step>? StepChanged;

        /// <summary>
        /// A event that invoked when new round is started.
        /// </summary>
        internal event EventHandler<int>? RoundStarted;

        /// <summary>
        /// A event that invoked when any received <see cref="ConsensusMessage"/> from
        /// <see cref="ConsensusContext{T}"/> is processed.
        /// </summary>
        internal event EventHandler<ConsensusMessage>? MessageProcessed;

        /// <summary>
        /// A target height of this consensus state. This is also a block index now in consensus.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round represents of this consensus state.
        /// </summary>
        public int Round { get; private set; }

        /// <summary>
        /// A step represents of this consensus state. See <see cref="Context{T}"/> for more detail.
        /// </summary>
        public Step Step { get; private set; }

        /// <summary>
        /// A round where block is successfully committed.
        /// </summary>
        public int CommittedRound { get; private set; } = -1;

        /// <summary>
        /// A command class for receiving <see cref="ConsensusMessage"/> from or broadcasts to other
        /// validators.
        /// </summary>
        private ConsensusContext<T> ConsensusContext { get; }

        /// <summary>
        /// The total count of validators.
        /// </summary>
        private int TotalValidators => _validators.Count;

        /// <summary>
        /// Starts the round #0 of consensus for <see cref="Height"/>.
        /// </summary>
        /// <param name="lastCommit">A <see cref="Block{T}.LastCommit"/> from previous block.
        /// </param>
        /// <returns>An awaitable task without value. This task
        /// awaits <see cref="StartRound"/> and starts <see cref="MessageConsumerTask"/>.
        /// </returns>
        public async Task StartAsync(BlockCommit? lastCommit = null)
        {
            _lastCommit = lastCommit;
            await StartRound(0);
            if (Proposer(0) != _privateKey.PublicKey &&
                _messagesInRound.ContainsKey(0) &&
                _messagesInRound[0].FirstOrDefault(msg => msg is ConsensusPropose) is
                    ConsensusPropose propose)
            {
                ProcessMessage(propose);
            }

            _ = MessageConsumerTask(_cancellationTokenSource.Token);
        }

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            _messageRequests.Writer.TryComplete();
            _cancellationTokenSource.Cancel();
        }

        /// <summary>
        /// Returns a <see cref="Libplanet.Consensus.VoteSet"/> of the given round.
        /// </summary>
        /// <param name="round">A round to retrieve votes.</param>
        /// <exception cref="KeyNotFoundException">Thrown if the given round does not exists in the
        /// context.</exception>
        /// <returns>A <see cref="Libplanet.Consensus.VoteSet"/> of given round.</returns>
        public VoteSet VoteSet(int round)
        {
            var (block, _) = GetPropose(round);
            var voteSet = new VoteSet(Height, round, block?.Hash, _validators);
            var roundVotes =
                _messagesInRound[round].Where(
                    x => x is ConsensusVote).Cast<ConsensusVote>().ToList();
            var roundCommits =
                _messagesInRound[round].Where(
                    x => x is ConsensusCommit).Cast<ConsensusCommit>().ToList();

            foreach (var vote in roundVotes)
            {
                voteSet.Add(vote.ProposeVote);
            }

            foreach (var commit in roundCommits)
            {
                voteSet.Add(commit.CommitVote);
            }

            return voteSet;
        }

        /// <summary>
        /// Add received message to the message queue.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to be processed.</param>
        public void ProduceMessage(ConsensusMessage message)
        {
            Interlocked.Increment(ref _requestCount);
            _messageRequests.Writer.WriteAsync(message);
        }

        /// <summary>
        /// Returns the summary of context in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a JSON-formatted string of context state.</returns>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "node_id", _privateKey.ToAddress().ToString() },
                { "number_of_validator", _validators!.Count },
                { "height", Height },
                { "round", Round },
                { "step", Step.ToString() },
                { "locked_value", _lockedValue?.Hash.ToString() ?? string.Empty },
                { "locked_round", _lockedRound },
                { "valid_value", _validValue?.Hash.ToString() ?? string.Empty },
                { "valid_round", _validRound },
            };
            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreVote"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        internal static TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(TimeoutPreVoteBase + round + TimeoutPreVoteMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        internal static TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(TimeoutPreCommitBase + round + TimeoutPreCommitMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.Propose"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        internal TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(TimeoutProposeBase + round * TimeoutProposeMultiplier);
        }

        /// <summary>
        /// Validates and Add a <see cref="ConsensusMessage"/> and handle the message.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> that will be handled.
        /// </param>
        /// <remarks>This isn't thread-safe, use carefully in tests.</remarks>
        internal void HandleMessage(ConsensusMessage message)
        {
            try
            {
                AddMessage(message);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An error occurred during handling message {Message}. {E}",
                    message,
                    e);
                throw;
            }

            ProcessMessage(message);
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
                _messagesInRound.TryAdd(message.Round, new ConcurrentBag<ConsensusMessage>());
            }

            // TODO: Prevent duplicated messages adding.
            _messagesInRound[message.Round].Add(message);
        }

        /// <summary>
        /// Processes a message and translate the <see cref="Step"/> or <see cref="Round"/>.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to be processed.</param>
        private void ProcessMessage(ConsensusMessage message)
        {
            _logger.Debug(
                "{FName}: Message: {Message} => " +
                "Height: {Height}, Round: {Round}, Address: {Address}, Hash: {BlockHash}. " +
                "MessageCount: {Count}. (context: {Context})",
                nameof(ProcessMessage),
                message,
                message.Height,
                message.Round,
                message.Remote!.Address,
                message.BlockHash,
                _messagesInRound[Round].Count,
                ToString());
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
                _ = StartRound(message.Round);
            }

            MessageProcessed?.Invoke(this, message);
        }

        /// <summary>
        /// Creates a new <see cref="Block{T}"/> to propose.
        /// </summary>
        /// <returns>A new <see cref="Block{T}"/>.</returns>
        private async Task<Block<T>> GetValue()
        {
            Block<T> block = await _blockChain.ProposeBlock(
                _privateKey,
                lastCommit: _lastCommit,
                cancellationToken: _cancellationTokenSource.Token);
            _blockChain.Store.PutBlock(block);
            return block;
        }

        /// <summary>
        /// Gets the proposer of the given round.
        /// </summary>
        /// <param name="round">A round to get proposer.</param>
        /// <returns>Returns designated proposer's <see cref="PublicKey"/> for the
        /// <paramref name="round"/>.
        /// </returns>
        private PublicKey Proposer(int round)
        {
            // return designated proposer for the height round pair.
            return _validators[(int)((Height + round) % TotalValidators)];
        }

        /// <summary>
        /// Start a new round.
        /// </summary>
        /// <param name="round">A round to start.</param>
        private async Task StartRound(int round)
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
                Block<T> proposal;
                if (_validValue is null)
                {
                    proposal = await GetValue();
                }
                else
                {
                    proposal = _validValue;
                }

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
        /// Broadcasts <see cref="ConsensusMessage"/> to validators.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to broadcast.</param>
        /// <remarks><see cref="ConsensusMessage"/> should be broadcasted to itself. See
        /// <see cref="ConsensusContext{T}.BroadcastMessage"/>.</remarks>
        private void BroadcastMessage(ConsensusMessage message) =>
            ConsensusContext.BroadcastMessage(message);

        /// <summary>
        /// Validates the given block.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to validate.</param>
        /// <returns>Returns <c>true</c> if block is valid, or otherwise returns <c>false</c>.
        /// </returns>
        private bool IsValid(Block<T> block)
        {
            if (_blockHashCache.TryGet(block.Hash, out bool isValidCached))
            {
                return isValidCached;
            }
            else
            {
                var exception = _blockChain.ValidateNextBlock(block);
                bool isValid = exception is null;
                _blockHashCache.AddReplace(block.Hash, isValid);
                return isValid;
            }
        }

        /// <summary>
        /// Creates a <see cref="Vote"/> for <see cref="ConsensusVote"/> or
        /// <see cref="ConsensusCommit"/>.
        /// </summary>
        /// <param name="round">Current context round.</param>
        /// <param name="hash">Current context locked <see cref="BlockHash"/>.</param>
        /// <param name="flag"><see cref="VoteFlag"/> of Vote. Set <see cref="VoteFlag.Absent"/> if
        /// message is <see cref="ConsensusVote"/>. If message is <see cref="ConsensusCommit"/>,
        /// Set <see cref="VoteFlag.Commit"/>.
        /// </param>
        /// <returns>Returns a signed <see cref="Vote"/> with consensus private key.</returns>
        private Vote Voting(int round, BlockHash? hash, VoteFlag flag)
        {
            return new Vote(
                Height,
                round,
                hash,
                DateTimeOffset.UtcNow,
                _privateKey.PublicKey,
                flag,
                null).Sign(_privateKey);
        }

        /// <summary>
        /// Changes the step of the consensus.
        /// </summary>
        /// <param name="step">A new step to set.</param>
        private void SetStep(Step step)
        {
            _logger.Debug(
                "Translate step from {Before} to {After}. {Info}",
                Step.ToString(),
                step.ToString(),
                ToString());
            Step = step;
            StepChanged?.Invoke(this, step);
        }

        /// <summary>
        /// Consumes the every <see cref="ConsensusMessage"/> in the message queue.
        /// </summary>
        /// <param name="ctx">A cancellation token for reading message from message queue.</param>
        private async Task MessageConsumerTask(CancellationToken ctx)
        {
#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
            await foreach (ConsensusMessage message in _messageRequests.Reader.ReadAllAsync(ctx))
            {
#else
            while (!ctx.IsCancellationRequested)
            {
                ConsensusMessage message = await _messageRequests.Reader.ReadAsync(ctx);
#endif
                long left = Interlocked.Decrement(ref _requestCount);
                try
                {
                    HandleMessage(message);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {FName}. {E}",
                        nameof(HandleMessage),
                        e);
                }
            }
        }

        /// <summary>
        /// Gets the proposed block and valid round of the given round.
        /// </summary>
        /// <param name="round">A round to get.</param>
        /// <returns>Returns a tuple of proposer and valid round. If proposal for the round does not
        /// exist returns a tuple of <c>null</c> and <c>null</c>.
        /// </returns>
        private (Block<T>?, int?) GetPropose(int round)
        {
            ConsensusMessage? msg = _messagesInRound[round].FirstOrDefault(
                msg =>
                    msg is ConsensusPropose);

            if (msg is ConsensusPropose propose)
            {
                var block = BlockMarshaler.UnmarshalBlock<T>(
                    _blockChain.Policy.GetHashAlgorithm,
                    (Dictionary)_codec.Decode(propose.Payload));
                return (block, propose.ValidRound);
            }

            return (null, null);
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusVote"/> for the
        /// <see cref="Block{T}"/> of <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">A round to check.</param>
        /// <param name="hash">A <see cref="BlockHash"/> of proposed block.</param>
        /// <param name="any">If <c>true</c>, check for all <see cref="ConsensusVote"/> in round
        /// (i.e., includes NIL and Block), else check for only Block.
        /// </param>
        /// <returns>Returns <c>true</c> if the block is voted +2/3, or otherwise returns
        /// <c>false</c>.
        /// </returns>
        private bool HasTwoThirdsPreVote(int round, BlockHash? hash, bool any = false)
        {
            int count = _messagesInRound[round].Count(
                msg => msg is ConsensusVote preVote &&
                       (any || preVote.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusCommit"/> for the
        /// <see cref="Block{T}"/> of <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">A round to check.</param>
        /// <param name="hash">A <see cref="BlockHash"/> of proposed block.</param>
        /// <param name="any">If <c>true</c>, check for all <see cref="ConsensusCommit"/> in round
        /// (i.e., includes NIL and Block), else check for only Block.
        /// </param>
        /// <returns>Returns <c>true</c> if the block is voted +2/3, or otherwise returns
        /// <c>false</c>.
        /// </returns>
        private bool HasTwoThirdsPreCommit(int round, BlockHash? hash, bool any = false)
        {
            int count = _messagesInRound[round].Count(
                msg => msg is ConsensusCommit preCommit &&
                       (any || preCommit.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }

        /// <summary>
        /// A timeout task for a round if no <see cref="ConsensusPropose"/> is received in
        /// <see cref="TimeoutPropose"/> and <see cref="Libplanet.Net.Consensus.Step.Propose"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPropose(long height, int round)
        {
            TimeSpan timeout = TimeoutPropose(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.Propose)
            {
                _logger.Debug(
                    "TimeoutPropose has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.Propose, TimeoutPropose(round)));
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
        private async Task OnTimeoutPreVote(long height, int round)
        {
            TimeSpan timeout = TimeoutPreVote(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.PreVote)
            {
                _logger.Debug(
                    "TimeoutPreVote has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.PreVote, TimeoutPreVote(round)));
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
        private async Task OnTimeoutPreCommit(long height, int round)
        {
            TimeSpan timeout = TimeoutPreCommit(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step < Step.EndCommit)
            {
                _logger.Debug(
                    "TimeoutPreCommit has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.PreCommit, TimeoutPreCommit(round)));
                _ = StartRound(Round + 1);
            }
        }
    }
}
