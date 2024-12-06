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
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A state machine class of PBFT consensus algorithm. The state machine is responsible for
    /// proposing, validating, voting a block and committing the voted block to the blockchain.
    /// There are five states:
    /// <list type="bullet">
    ///     <item>
    ///         <see cref="ConsensusStep.Default"/> which is the initial state when
    ///         the <see cref="Start"/> is not called (i.e., round has not been started).
    ///     </item>
    ///     <item>
    ///         <see cref="ConsensusStep.Propose"/>, which is the state when
    ///         the round has been started and waiting for the block proposal. If a validator is a
    ///         proposer of the round, it will propose a block to the other validators and to
    ///         itself.
    ///     </item>
    ///     <item>
    ///         <see cref="ConsensusStep.PreVote"/>, which is the state when a block
    ///         proposal for a round has been received. While translating to this step, state
    ///         machine votes for the block whether block is valid or not, and waiting for any +2/3
    ///         votes from other validators.
    ///     </item>
    ///     <item>
    ///         <see cref="ConsensusStep.PreCommit"/>, which is the state received
    ///         any +2/3 votes in <see cref="ConsensusStep.PreVote"/>. While
    ///         translating to this step, state machine votes for whether the block should be
    ///         committed or not, and waiting for any +2/3 committing votes from other validators.
    ///         If <see cref="ConsensusStep.PreCommit"/>
    ///         receives +2/3 commit votes with NIL, starts new round <see cref="StartRound"/> and
    ///         moves step to <see cref="ConsensusStep.Propose"/>.
    ///     </item>
    ///     <item>
    ///         <see cref="ConsensusStep.EndCommit"/>, which is the state represents
    ///         committing vote has been received from other validators. Block will be committed
    ///         to the blockchain and consensus for this height is stopped. (responsibility of next
    ///         height handling is at <see cref="ConsensusContext"/>).
    ///     </item>
    ///     <item>
    ///         In the above states, <see cref="ConsensusStep.Propose"/>, If
    ///         receiving proposal fails in <see cref="TimeoutPropose"/>, then step is moved to
    ///         <see cref="ConsensusStep.PreVote"/> and vote NIL.
    ///     </item>
    ///     <item>
    ///         Similar to Propose, <see cref="ConsensusStep.PreVote"/> and
    ///         <see cref="ConsensusStep.PreCommit"/> also wait for
    ///         <see cref="TimeoutPreVote"/> or <see cref="TimeoutPreCommit"/> respectively,
    ///         if +2/3 vote received but neither NIL nor Block is not +2/3. If still +2/3 vote is
    ///         not received neither NIL nor Block after timeout runs out, then move to next step
    ///         and vote NIL.
    ///     </item>
    /// </list>
    /// Validators are bonding/bonded nodes that participate in the consensus.
    /// </summary>
    /// <remarks>
    /// A <see cref="Context"/> represents a consensus of a single height and its multiple
    /// rounds.
    /// </remarks>
    public partial class Context : IDisposable
    {
        private readonly ContextOption _contextOption;

        private readonly BlockChain _blockChain;
        private readonly Codec _codec;
        private readonly ValidatorSet _validatorSet;
        private readonly Channel<ConsensusMsg> _messageRequests;
        private readonly Channel<System.Action> _mutationRequests;
        private readonly HeightVoteSet _heightVoteSet;
        private readonly PrivateKey _privateKey;
        private readonly HashSet<int> _hasTwoThirdsPreVoteFlags;
        private readonly HashSet<int> _preVoteTimeoutFlags;
        private readonly HashSet<int> _preCommitTimeoutFlags;
        private readonly HashSet<int> _preCommitWaitFlags;
        private readonly HashSet<int> _endCommitWaitFlags;
        private readonly EvidenceExceptionCollector _evidenceCollector
            = new EvidenceExceptionCollector();

        private readonly CancellationTokenSource _cancellationTokenSource;

        private readonly ILogger _logger;
        private readonly LRUCache<BlockHash, bool> _blockValidationCache;

        private Block? _proposalBlock;
        private Block? _lockedValue;
        private int _lockedRound;
        private Block? _validValue;
        private int _validRound;
        private Block? _decision;
        private int _committedRound;
        private BlockCommit? _lastCommit;

        /// <summary>
        /// Initializes a new instance of the <see cref="Context"/> class.
        /// </summary>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="height">A target <see cref="Context.Height"/> of the consensus state.
        /// </param>
        /// <param name="lastCommit">The last commit for the previous <see cref="Block"/>.</param>
        /// <param name="privateKey">A private key for signing a block and message.
        /// <seealso cref="GetValue"/>
        /// <seealso cref="ProcessGenericUponRules"/>
        /// <seealso cref="MakeVote"/>
        /// </param>
        /// <param name="validators">The <see cref="ValidatorSet"/> for
        /// given <paramref name="height"/>.</param>
        /// <param name="contextOption">A <see cref="ContextOption"/> for
        /// configuring a timeout and delay for each <see cref="ConsensusStep"/>.</param>
        public Context(
            BlockChain blockChain,
            long height,
            BlockCommit? lastCommit,
            PrivateKey privateKey,
            ValidatorSet validators,
            ContextOption contextOption)
            : this(
                blockChain,
                height,
                lastCommit,
                privateKey,
                validators,
                ConsensusStep.Default,
                -1,
                128,
                contextOption)
        {
        }

        private Context(
            BlockChain blockChain,
            long height,
            BlockCommit? lastCommit,
            PrivateKey privateKey,
            ValidatorSet validators,
            ConsensusStep consensusStep,
            int round = -1,
            int cacheSize = 128,
            ContextOption? contextOption = null)
        {
            if (height < 1)
            {
                throw new ArgumentException(
                    $"Given {nameof(height)} must be positive: {height}", nameof(height));
            }

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<Context>()
                .ForContext("Source", nameof(Context));

            _privateKey = privateKey;
            Height = height;
            Round = round;
            Step = consensusStep;
            _lastCommit = lastCommit;
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
            _heightVoteSet = new HeightVoteSet(height, validators);
            _hasTwoThirdsPreVoteFlags = new HashSet<int>();
            _preVoteTimeoutFlags = new HashSet<int>();
            _preCommitTimeoutFlags = new HashSet<int>();
            _preCommitWaitFlags = new HashSet<int>();
            _endCommitWaitFlags = new HashSet<int>();
            _validatorSet = validators;
            _cancellationTokenSource = new CancellationTokenSource();
            _blockValidationCache =
                new LRUCache<BlockHash, bool>(cacheSize, Math.Max(cacheSize / 64, 8));

            _contextOption = contextOption ?? new ContextOption();

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
        /// A step represents of this consensus state. See <see cref="Context"/> for more detail.
        /// </summary>
        public ConsensusStep Step { get; private set; }

        public Proposal? Proposal { get; private set; }

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            _cancellationTokenSource.Cancel();
            _messageRequests.Writer.TryComplete();
            _mutationRequests.Writer.TryComplete();
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> if the context is committed.
        /// </summary>
        /// <returns>Returns <see cref="BlockCommit"/> if the context is committed
        /// otherwise returns <see langword="null"/>.
        /// </returns>
        public BlockCommit? GetBlockCommit()
        {
            try
            {
                var blockCommit = _heightVoteSet.PreCommits(Round)?.ToBlockCommit();
                _logger.Debug(
                    "{FName}: CommittedRound: {CommittedRound}, Decision: {Decision}, " +
                    "BlockCommit: {BlockCommit}",
                    nameof(GetBlockCommit),
                    _committedRound,
                    _decision,
                    blockCommit);
                return blockCommit;
            }
            catch (KeyNotFoundException)
            {
                return null;
            }
        }

        public VoteSetBits GetVoteSetBits(int round, BlockHash blockHash, VoteFlag flag)
        {
            // If executed in correct manner (called by Maj23),
            // _heightVoteSet.PreVotes(round) on below cannot throw KeyNotFoundException,
            // since RoundVoteSet has been already created on SetPeerMaj23.
            bool[] voteBits = flag switch
            {
                VoteFlag.PreVote => _heightVoteSet.PreVotes(round).BitArrayByBlockHash(blockHash),
                VoteFlag.PreCommit
                    => _heightVoteSet.PreCommits(round).BitArrayByBlockHash(blockHash),
                _ => throw new ArgumentException(
                    "VoteFlag should be either PreVote or PreCommit.",
                    nameof(flag)),
            };

            return new VoteSetBitsMetadata(
                Height,
                round,
                blockHash,
                DateTimeOffset.UtcNow,
                _privateKey.PublicKey,
                flag,
                voteBits).Sign(_privateKey);
        }

        /// <summary>
        /// Add a <see cref="ConsensusMsg"/> to the context.
        /// </summary>
        /// <param name="maj23">A <see cref="ConsensusMsg"/> to add.</param>
        /// <returns>A <see cref="VoteSetBits"/> if given <paramref name="maj23"/> is valid and
        /// required.</returns>
        public VoteSetBits? AddMaj23(Maj23 maj23)
        {
            try
            {
                if (_heightVoteSet.SetPeerMaj23(maj23))
                {
                    var voteSetBits = GetVoteSetBits(maj23.Round, maj23.BlockHash, maj23.Flag);
                    return voteSetBits.VoteBits.All(b => b) ? null : voteSetBits;
                }

                return null;
            }
            catch (InvalidMaj23Exception ime)
            {
                var msg = $"Failed to add invalid maj23 {ime} to the " +
                          $"{nameof(HeightVoteSet)}";
                _logger.Error(ime, msg);
                ExceptionOccurred?.Invoke(this, ime);
                return null;
            }
        }

        public IEnumerable<ConsensusMsg> GetVoteSetBitsResponse(VoteSetBits voteSetBits)
        {
            IEnumerable<Vote> votes;
            try
            {
                votes = voteSetBits.Flag switch
                {
                    VoteFlag.PreVote =>
                    _heightVoteSet.PreVotes(voteSetBits.Round).MappedList().Where(
                        (vote, index)
                        => !voteSetBits.VoteBits[index]
                        && vote is { }
                        && vote.Flag == VoteFlag.PreVote).Select(vote => vote!),
                    VoteFlag.PreCommit =>
                    _heightVoteSet.PreCommits(voteSetBits.Round).MappedList().Where(
                        (vote, index)
                        => !voteSetBits.VoteBits[index]
                        && vote is { }
                        && vote.Flag == VoteFlag.PreCommit).Select(vote => vote!),
                    _ => throw new ArgumentException(
                        "VoteFlag should be PreVote or PreCommit.",
                        nameof(voteSetBits.Flag)),
                };
            }
            catch (KeyNotFoundException)
            {
                votes = Array.Empty<Vote>();
            }

            return from vote in votes
                   select vote.Flag switch
                   {
                       VoteFlag.PreVote => (ConsensusMsg)new ConsensusPreVoteMsg(vote),
                       VoteFlag.PreCommit => (ConsensusMsg)new ConsensusPreCommitMsg(vote),
                       _ => throw new ArgumentException(
                           "VoteFlag should be PreVote or PreCommit.",
                           nameof(vote.Flag)),
                   };
        }

        /// <summary>
        /// Returns the summary of context in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a JSON-formatted string of context state.</returns>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "node_id", _privateKey.Address.ToString() },
                { "number_of_validators", _validatorSet.TotalCount },
                { "height", Height },
                { "round", Round },
                { "step", Step.ToString() },
                { "proposal", Proposal?.ToString() ?? "null" },
                { "locked_value", _lockedValue?.Hash.ToString() ?? "null" },
                { "locked_round", _lockedRound },
                { "valid_value", _validValue?.Hash.ToString() ?? "null" },
                { "valid_round", _validRound },
            };
            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// Collects <see cref="EvidenceException"/>s that are occurred during the consensus.
        /// </summary>
        /// <returns>A list of <see cref="EvidenceException"/>s.</returns>
        public EvidenceException[] CollectEvidenceExceptions() => _evidenceCollector.Flush();

        /// <summary>
        /// Gets the timeout of <see cref="ConsensusStep.PreVote"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromMilliseconds(
                _contextOption.PreVoteTimeoutBase +
                round * _contextOption.PreVoteTimeoutDelta);
        }

        /// <summary>
        /// Gets the timeout of <see cref="ConsensusStep.PreCommit"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromMilliseconds(
                _contextOption.PreCommitTimeoutBase +
                round * _contextOption.PreCommitTimeoutDelta);
        }

        /// <summary>
        /// Gets the timeout of <see cref="ConsensusStep.Propose"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromMilliseconds(
                _contextOption.ProposeTimeoutBase +
                round * _contextOption.ProposeTimeoutDelta);
        }

        /// <summary>
        /// Creates a new <see cref="Block"/> to propose.
        /// </summary>
        /// <returns>A new <see cref="Block"/> if successfully proposed,
        /// otherwise <see langword="null"/>.</returns>
        private Block? GetValue()
        {
            try
            {
                var evidence = _blockChain.GetPendingEvidence();
                Block block = _blockChain.ProposeBlock(_privateKey, _lastCommit, evidence);
                _blockChain.Store.PutBlock(block);
                return block;
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Could not propose a block for height {Height} and round {Round}",
                    Height,
                    Round);
                ExceptionOccurred?.Invoke(this, e);
                return null;
            }
        }

        /// <summary>
        /// Publish <see cref="ConsensusMsg"/> to validators.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMsg"/> to publish.</param>
        /// <remarks><see cref="ConsensusMsg"/> should be published to itself.</remarks>
        private void PublishMessage(ConsensusMsg message) =>
            MessageToPublish?.Invoke(this, message);

        /// <summary>
        /// Validates the given block.
        /// </summary>
        /// <param name="block">A <see cref="Block"/> to validate.</param>
        /// <returns><see langword="true"/> if block is valid, otherwise <see langword="false"/>.
        /// </returns>
        private bool IsValid(Block block)
        {
            if (_blockValidationCache.TryGet(block.Hash, out var isValid))
            {
                return isValid;
            }
            else
            {
                // Need to get txs from store, lock?
                // TODO: Remove ChainId, enhancing lock management.
                _blockChain._rwlock.EnterUpgradeableReadLock();

                if (block.Index != Height)
                {
                    _blockValidationCache.AddReplace(block.Hash, false);
                    return false;
                }

                try
                {
                    _blockChain.ValidateBlock(block);
                    _blockChain.ValidateBlockNonces(
                        block.Transactions
                            .Select(tx => tx.Signer)
                            .Distinct()
                            .ToDictionary(
                                signer => signer,
                                signer => _blockChain.Store.GetTxNonce(
                                    _blockChain.Id, signer)),
                        block);

                    if (_blockChain.Policy.ValidateNextBlock(
                        _blockChain, block) is { } bpve)
                    {
                        throw bpve;
                    }

                    foreach (var tx in block.Transactions)
                    {
                        if (_blockChain.Policy.ValidateNextBlockTx(
                            _blockChain, tx) is { } txve)
                        {
                            throw txve;
                        }
                    }

                    _blockChain.ValidateBlockStateRootHash(block);
                }
                catch (Exception e) when (
                    e is InvalidBlockException ||
                    e is InvalidTxException ||
                    e is InvalidActionException)
                {
                    _logger.Debug(
                        e,
                        "Block #{Index} {Hash} is invalid",
                        block.Index,
                        block.Hash);
                    _blockValidationCache.AddReplace(block.Hash, false);
                    return false;
                }
                finally
                {
                    _blockChain._rwlock.ExitUpgradeableReadLock();
                }

                _blockValidationCache.AddReplace(block.Hash, true);
                return true;
            }
        }

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
        private Vote MakeVote(int round, BlockHash hash, VoteFlag flag)
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
                _validatorSet.GetValidator(_privateKey.PublicKey).Power,
                flag).Sign(_privateKey);
        }

        /// <summary>
        /// Creates a signed <see cref="Maj23"/> for a <see cref="ConsensusMaj23Msg"/>.
        /// </summary>
        /// <param name="round">Current context round.</param>
        /// <param name="hash">Current context locked <see cref="BlockHash"/>.</param>
        /// <param name="flag"><see cref="VoteFlag"/> of <see cref="Maj23"/> to create.
        /// Set to <see cref="VoteFlag.PreVote"/> if +2/3 <see cref="ConsensusPreVoteMsg"/>
        /// messages that votes to the same block with proposal are collected.
        /// If +2/3 <see cref="ConsensusPreCommitMsg"/> messages that votes to the same block
        /// with proposal are collected, Set to <see cref="VoteFlag.PreCommit"/>.</param>
        /// <returns>Returns a signed <see cref="Maj23"/> with consensus private key.</returns>
        /// <exception cref="ArgumentException">If <paramref name="flag"/> is either
        /// <see cref="VoteFlag.Null"/> or <see cref="VoteFlag.Unknown"/>.</exception>
        private Maj23 MakeMaj23(int round, BlockHash hash, VoteFlag flag)
        {
            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    $"{nameof(flag)} must be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}" +
                    $"to create a valid signed maj23.");
            }

            return new Maj23Metadata(
                Height,
                round,
                hash,
                DateTimeOffset.UtcNow,
                _privateKey.PublicKey,
                flag).Sign(_privateKey);
        }

        /// <summary>
        /// Sets the proposal for the round.
        /// </summary>
        private void SetProposal(Proposal? proposal)
        {
            if (proposal is { } p)
            {
                Proposal = proposal;
                _proposalBlock =
                    BlockMarshaler.UnmarshalBlock((Dictionary)_codec.Decode(p.MarshaledBlock));
            }
            else
            {
                Proposal = null;
                _proposalBlock = null;
            }
        }

        /// <summary>
        /// Gets the proposed block and valid round of the given round.
        /// </summary>
        /// <returns>Returns a tuple of proposer and valid round.  If proposal for the round
        /// does not exist, returns <see langword="null"/> instead.
        /// </returns>
        private (Block, int)? GetProposal() =>
            Proposal is { } p && _proposalBlock is { } b ? (b, p.ValidRound) : null;
    }
}
