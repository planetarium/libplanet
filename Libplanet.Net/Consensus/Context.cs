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
        private const int TimeoutProposeBase = 5;
        private const int TimeoutPreVoteBase = 5;
        private const int TimeoutPreCommitBase = 5;
        private const int TimeoutProposeMultiplier = 1;
        private const int TimeoutPreVoteMultiplier = 1;
        private const int TimeoutPreCommitMultiplier = 1;

        private readonly BlockChain<T> _blockChain;
        private readonly Codec _codec;
        private readonly List<BlsPublicKey> _validators;
        private readonly Channel<ConsensusMessage> _messageRequests;
        private readonly Channel<System.Action> _mutationRequests;
        private readonly MessageLog _messageLog;

        private readonly PrivateKey _privateKey;
        private readonly BlsPrivateKey _consensusPrivateKey;
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
        private BlockCommit? _lastCommit;

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
        /// <param name="privateKey">A private key for signing a block.
        /// <seealso cref="GetValue"/>
        /// </param>
        /// <param name="consensusPrivateKey">A private key for signing a message.
        /// <seealso cref="ProcessGenericUponRules"/>
        /// <seealso cref="Voting"/>
        /// </param>
        /// <param name="validators">A list of <see cref="PublicKey"/> of validators.</param>
        public Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            BlsPrivateKey consensusPrivateKey,
            List<BlsPublicKey> validators)
            : this(
                consensusContext,
                blockChain,
                height,
                privateKey,
                consensusPrivateKey,
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
            BlsPrivateKey consensusPrivateKey,
            List<BlsPublicKey> validators,
            Step step,
            int round = 0,
            int cacheSize = 128)
        {
            _privateKey = privateKey;
            _consensusPrivateKey = consensusPrivateKey;
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
            _mutationRequests = Channel.CreateUnbounded<System.Action>();
            _messageLog = new MessageLog();
            _preVoteTimeoutFlags = new HashSet<int>();
            _hasTwoThirdsPreVoteFlags = new HashSet<int>();
            _preCommitTimeoutFlags = new HashSet<int>();
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

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            _messageRequests.Writer.TryComplete();
            _mutationRequests.Writer.TryComplete();
            _cancellationTokenSource.Cancel();
        }

        /// <summary>
        /// Returns a <see cref="Libplanet.Consensus.VoteSet"/> of the given round.
        /// </summary>
        /// <param name="round">A round to retrieve votes.</param>
        /// <returns>A <see cref="Libplanet.Consensus.VoteSet"/> of given round.</returns>
        public VoteSet VoteSet(int round)
        {
            (Block<T>? block, int? _) = GetPropose(round);
            VoteSet voteSet = new VoteSet(Height, round, block?.Hash, _validators);
            _messageLog.GetVotes(round).ForEach(vote => voteSet.Add(vote.ProposeVote));
            _messageLog.GetCommits(round).ForEach(commit => voteSet.Add(commit.CommitVote));
            return voteSet;
        }

        /// <summary>
        /// Returns the summary of context in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a JSON-formatted string of context state.</returns>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "node_id", _consensusPrivateKey.ToAddress().ToString() },
                { "number_of_validator", _validators.Count },
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
        private static TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(TimeoutPreVoteBase + round + TimeoutPreVoteMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private static TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(TimeoutPreCommitBase + round + TimeoutPreCommitMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.Propose"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private static TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(TimeoutProposeBase + round * TimeoutProposeMultiplier);
        }

        /// <summary>
        /// Creates a new <see cref="Block{T}"/> to propose.
        /// </summary>
        /// <returns>A new <see cref="Block{T}"/>.</returns>
        private Block<T> GetValue()
        {
            Block<T> block = _blockChain.ProposeBlock(_privateKey, lastCommit: _lastCommit);
            _blockChain.Store.PutBlock(block);
            return block;
        }

        /// <summary>
        /// Gets the proposer of the given round.
        /// </summary>
        /// <param name="round">A round to get proposer.</param>
        /// <returns>Returns designated proposer's <see cref="BlsPublicKey"/> for the
        /// <paramref name="round"/>.
        /// </returns>
        private BlsPublicKey Proposer(int round)
        {
            // return designated proposer for the height round pair.
            return _validators[(int)((Height + round) % TotalValidators)];
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
                _consensusPrivateKey.PublicKey,
                flag,
                null).Sign(_consensusPrivateKey);
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
            if (_messageLog.GetPropose(round) is ConsensusPropose propose)
            {
                var block = BlockMarshaler.UnmarshalBlock<T>(
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
            int count = _messageLog.GetVotes(round)
                .Count(vote => (any || vote.BlockHash.Equals(hash)));
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
            int count = _messageLog.GetCommits(round)
                .Count(commit => (any || commit.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }
    }
}
