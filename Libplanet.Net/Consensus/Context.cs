using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Channels;
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
    ///         the <see cref="Start"/> is not called (i.e., round has not been started).
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
    public partial class Context<T> : IDisposable
        where T : IAction, new()
    {
        private readonly ContextTimeoutOption _contextTimeoutOption;

        private readonly BlockChain<T> _blockChain;
        private readonly Codec _codec;
        private readonly ValidatorSet _validatorSet;
        private readonly Channel<ConsensusMsg> _messageRequests;
        private readonly Channel<System.Action> _mutationRequests;
        private readonly MessageLog _messageLog;

        private readonly PrivateKey _privateKey;
        private readonly HashSet<int> _preVoteTimeoutFlags;
        private readonly HashSet<int> _hasTwoThirdsPreVoteFlags;
        private readonly HashSet<int> _preCommitTimeoutFlags;

        private readonly CancellationTokenSource _cancellationTokenSource;

        private readonly ILogger _logger;
        private readonly LRUCache<BlockHash, bool> _blockHashCache;

        private Block<T>? _lockedValue;
        private int _lockedRound;
        private Block<T>? _validValue;
        private int _validRound;
        private Block<T>? _decision;
        private int _committedRound;
        private BlockCommit? _lastCommit;

        /// <summary>
        /// Initializes a new instance of the <see cref="Context{T}"/> class.
        /// </summary>
        /// <param name="consensusContext">A command class for receiving
        /// <see cref="ConsensusMsg"/> from or broadcasts to other validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="height">A target <see cref="Context{T}.Height"/> of the consensus state.
        /// </param>
        /// <param name="privateKey">A private key for signing a block and message.
        /// <seealso cref="GetValue"/>
        /// <seealso cref="ProcessGenericUponRules"/>
        /// <seealso cref="MakeVote"/>
        /// </param>
        /// <param name="validators">The <see cref="ValidatorSet"/> for
        /// given <paramref name="height"/>.</param>
        /// <param name="contextTimeoutOptions">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            ValidatorSet validators,
            ContextTimeoutOption contextTimeoutOptions)
            : this(
                consensusContext,
                blockChain,
                height,
                privateKey,
                validators,
                Step.Default,
                -1,
                128,
                contextTimeoutOptions)
        {
        }

        private Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            ValidatorSet validators,
            Step step,
            int round = -1,
            int cacheSize = 128,
            ContextTimeoutOption? contextTimeoutOptions = null)
        {
            if (height < 1)
            {
                throw new ArgumentException(
                    $"Given {nameof(height)} must be positive: {height}", nameof(height));
            }

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<Context<T>>()
                .ForContext("Source", nameof(Context<T>));

            _privateKey = privateKey;
            Height = height;
            Round = round;
            Step = step;
            _lockedValue = null;
            _lockedRound = -1;
            _validValue = null;
            _validRound = -1;
            _decision = null;
            _committedRound = -1;
            _blockChain = blockChain;
            _codec = new Codec();
            _messageRequests = Channel.CreateUnbounded<ConsensusMsg>();
            _mutationRequests = Channel.CreateUnbounded<System.Action>();
            _messageLog = new MessageLog(height, validators);
            _preVoteTimeoutFlags = new HashSet<int>();
            _hasTwoThirdsPreVoteFlags = new HashSet<int>();
            _preCommitTimeoutFlags = new HashSet<int>();
            _validatorSet = validators;
            _cancellationTokenSource = new CancellationTokenSource();
            ConsensusContext = consensusContext;
            _blockHashCache = new LRUCache<BlockHash, bool>(cacheSize, Math.Max(cacheSize / 64, 8));

            _contextTimeoutOption = contextTimeoutOptions ?? new ContextTimeoutOption();

            _logger.Information(
                "Created Context for height #{Height}, round #{Round}",
                Height,
                Round);
        }

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
        /// A command class for receiving <see cref="ConsensusMsg"/> from or broadcasts to other
        /// validators.
        /// </summary>
        private ConsensusContext<T> ConsensusContext { get; }

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            _cancellationTokenSource.Cancel();
            _messageRequests.Writer.TryComplete();
            _mutationRequests.Writer.TryComplete();
        }

        /// <summary>
        /// Returns a <see cref="Libplanet.Blocks.BlockCommit"/> if the context is committed.
        /// </summary>
        /// <returns>Returns <see cref="Libplanet.Blocks.BlockCommit"/> if the context is committed
        /// otherwise returns <see langword="null"/>.
        /// </returns>
        public BlockCommit? GetBlockCommit()
        {
            var blockCommit = _decision is null
                ? (BlockCommit?)null
                : _messageLog.GetBlockCommit(_committedRound, _decision.Hash);
            _logger.Debug(
                "{FName}: CommittedRound: {CommittedRound}, Decision: {Decision}, " +
                "BlockCommit: {BlockCommit}",
                nameof(GetBlockCommit),
                _committedRound,
                _decision,
                blockCommit);
            return blockCommit;
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
                { "number_of_validators", _validatorSet.TotalCount },
                { "height", Height },
                { "round", Round },
                { "step", Step.ToString() },
                { "locked_value", _lockedValue?.Hash.ToString() ?? "null" },
                { "locked_round", _lockedRound },
                { "valid_value", _validValue?.Hash.ToString() ?? "null" },
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
        private TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.PreVoteSecondBase +
                round * _contextTimeoutOption.PreVoteMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.PreCommitSecondBase +
                round * _contextTimeoutOption.PreCommitMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.Propose"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.ProposeSecondBase +
                round * _contextTimeoutOption.ProposeMultiplier);
        }

        /// <summary>
        /// Creates a new <see cref="Block{T}"/> to propose.
        /// </summary>
        /// <returns>A new <see cref="Block{T}"/> if successfully proposed,
        /// otherwise <see langword="null"/>.</returns>
        private Block<T>? GetValue()
        {
            // NOTE: Block body validation is bypassed due to ProposeBlock calculates the action
            // Evaluations before the block is proposed.
            Block<T> block = _blockChain.ProposeBlock(_privateKey, lastCommit: _lastCommit);
            if (_blockChain.ValidateBlock(block) is { } e)
            {
                _logger.Error(
                    e, "Could not propose a valid block");
                ExceptionOccurred?.Invoke(this, e);
                return null;
            }
            else if (block.Index != Height)
            {
                InvalidBlockIndexException ibie = new InvalidBlockIndexException(
                    $"Proposed block's index {block.Index} must be the same " +
                    $"as context's height {Height}.");
                _logger.Error(
                    ibie, "Could not propose a valid block");
                ExceptionOccurred?.Invoke(this, ibie);
                return null;
            }
            else
            {
                _blockChain.Store.PutBlock(block);
                return block;
            }
        }

        /// <summary>
        /// Broadcasts <see cref="ConsensusMsg"/> to validators.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMsg"/> to broadcast.</param>
        /// <remarks><see cref="ConsensusMsg"/> should be broadcasted to itself. See
        /// <see cref="ConsensusContext{T}.BroadcastMessage"/>.</remarks>
        private void BroadcastMessage(ConsensusMsg message)
        {
            ConsensusContext.BroadcastMessage(message);
            MessageBroadcasted?.Invoke(this, message);
        }

        /// <summary>
        /// Validates the given block.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to validate.</param>
        /// <returns><see langword="true"/> if block is valid, otherwise <see langword="false"/>.
        /// </returns>
        private bool IsValid(Block<T> block)
        {
            if (_blockHashCache.TryGet(block.Hash, out bool isValidCached))
            {
                return isValidCached;
            }
            else
            {
                Exception exception = _blockChain.ValidateBlock(block);
                bool isValid = exception is null;
                _logger.Information(
                    exception,
                    "Block #{Index} {Hash} is valid? {Bool}",
                    block.Index,
                    block.Hash,
                    isValid);

                _blockHashCache.AddReplace(block.Hash, isValid);
                return isValid;
            }
        }

        private bool IsCurrentRoundProposer() =>
            _validatorSet.GetProposer(Height, Round).PublicKey == _privateKey.PublicKey;

        /// <summary>
        /// Creates a signed <see cref="Vote"/> for a <see cref="ConsensusPreVoteMsg"/> or
        /// a <see cref="ConsensusPreCommitMsg"/>.
        /// </summary>
        /// <param name="round">Current context round.</param>
        /// <param name="hash">Current context locked <see cref="BlockHash"/>.</param>
        /// <param name="flag"><see cref="VoteFlag"/> of <see cref="Vote"/> to create.
        /// Set to <see cref="VoteFlag.PreVote"/> if message is <see cref="ConsensusPreVoteMsg"/>.
        /// If message is <see cref="ConsensusPreCommitMsg"/>, Set to
        /// <see cref="VoteFlag.PreCommit"/>.</param>
        /// <returns>Returns a signed <see cref="Vote"/> with consensus private key.</returns>
        /// <exception cref="ArgumentException">If <paramref name="flag"/> is either
        /// <see cref="VoteFlag.Null"/> or <see cref="VoteFlag.Unknown"/>.</exception>
        private Vote MakeVote(int round, BlockHash? hash, VoteFlag flag)
        {
            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    $"{nameof(flag)} must be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}" +
                    $"to create a valid signed vote.");
            }

            return new VoteMetadata(
                Height,
                round,
                hash,
                DateTimeOffset.UtcNow,
                _privateKey.PublicKey,
                flag).Sign(_privateKey);
        }

        /// <summary>
        /// Gets the proposed block and valid round of the given round.
        /// </summary>
        /// <param name="round">A round to get.</param>
        /// <returns>Returns a tuple of proposer and valid round.  If proposal for the round
        /// does not exist, returns <see langword="null"/> instead.
        /// </returns>
        private (Block<T>, int)? GetProposal(int round)
        {
            ConsensusProposalMsg? proposal = _messageLog.GetProposal(round);
            if (proposal is { } p)
            {
                var block = BlockMarshaler.UnmarshalBlock<T>(
                    (Dictionary)_codec.Decode(p.Proposal.MarshaledBlock));
                return (block, p.Proposal.ValidRound);
            }

            return null;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreVoteMsg"/> for
        /// <paramref name="round"/> and <paramref name="predicate"/>.
        /// </summary>
        /// <param name="round">The round to check.</param>
        /// <param name="predicate">An additional predicate for counting votes.</param>
        /// <returns>Returns <see langword="true"/> if the count is +2/3,
        /// otherwise <see langword="false"/>.</returns>
        private bool HasTwoThirdsPreVote(int round, Func<ConsensusPreVoteMsg, bool> predicate)
        {
            var validatorPublicKeys = _messageLog.GetPreVotes(round).FindAll(
                preVote => predicate(preVote)).Select(
                preVote => preVote.PreVote.ValidatorPublicKey).ToList();
            return _validatorSet.GetValidatorsPower(validatorPublicKeys)
                > _validatorSet.TwoThirdsPower;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreCommitMsg"/> for
        /// <paramref name="round"/> and <paramref name="predicate"/>.
        /// </summary>
        /// <param name="round">The round to check.</param>
        /// <param name="predicate">An additional predicate for counting votes.</param>
        /// <returns>Returns <see langword="true"/> if the count is +2/3,
        /// otherwise <see langword="false"/>.</returns>
        private bool HasTwoThirdsPreCommit(int round, Func<ConsensusPreCommitMsg, bool> predicate)
        {
            var validatorPublicKeys = _messageLog.GetPreCommits(round).FindAll(
                preCommit => predicate(preCommit)).Select(
                preCommit => preCommit.PreCommit.ValidatorPublicKey).ToList();
            return _validatorSet.GetValidatorsPower(validatorPublicKeys)
                > _validatorSet.TwoThirdsPower;
        }

        /// <summary>
        /// Checks whether given <paramref name="round"/> has +1/3 distinct validators
        /// already participating in it, i.e. has a <see cref="ConsensusMsg"/> in the
        /// <see cref="MessageLog"/>.
        /// </summary>
        /// <param name="round">The round to check.</param>
        /// <returns><see langword="true"/> if the count is +1/3,
        /// otherwise <see langword="false"/>.</returns>
        private bool HasOneThirdValidators(int round)
        {
            return _validatorSet.GetValidatorsPower(_messageLog.GetValidators(round))
                > _validatorSet.OneThirdPower;
        }
    }
}
