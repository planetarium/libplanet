using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action.State;
using Libplanet.Blockchain;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// <para>
    /// A class that maintains a collection of <see cref="Context"/>s.
    /// </para>
    /// <para>
    /// Internally, multiple <see cref="Context"/>s may be managed at any given time.
    /// In particular, a <see cref="Context"/> with its <see cref="Context.Height"/> that
    /// is greater than <see cref="Height"/> may be created preemptively to hold
    /// <see cref="ConsensusMsg"/>s to be processed at later time.  Furthermore,
    /// it is guaranteed that no <see cref="Context"/> with its <see cref="Context.Height"/>
    /// less than <see cref="Height"/>, as any such <see cref="Context"/> is disposed
    /// when <see cref="Height"/> is updated.
    /// </para>
    /// </summary>
    public partial class ConsensusContext : IDisposable
    {
        private readonly object _contextLock;
        private readonly ContextOption _contextOption;
        private readonly IConsensusMessageCommunicator _consensusMessageCommunicator;
        private readonly BlockChain _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly TimeSpan _newHeightDelay;
        private readonly ILogger _logger;
        private readonly HashSet<ConsensusMsg> _pendingMessages;
        private readonly EvidenceExceptionCollector _evidenceCollector
            = new EvidenceExceptionCollector();

        private Context _currentContext;
        private CancellationTokenSource? _newHeightCts;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusContext"/> class.
        /// </summary>
        /// <param name="consensusMessageCommunicator">A communicator for receiving
        /// <see cref="ConsensusMsg"/> from or publishing to other validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for signing message and blocks.
        /// </param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block. <seealso cref="OnTipChanged"/>
        /// </param>
        /// <param name="contextOption">A <see cref="ContextOption"/> for
        /// configuring a timeout or delay for each <see cref="Step"/>.</param>
        public ConsensusContext(
            IConsensusMessageCommunicator consensusMessageCommunicator,
            BlockChain blockChain,
            PrivateKey privateKey,
            TimeSpan newHeightDelay,
            ContextOption contextOption)
        {
            _consensusMessageCommunicator = consensusMessageCommunicator;
            _blockChain = blockChain;
            _privateKey = privateKey;
            Running = false;
            _newHeightDelay = newHeightDelay;

            _contextOption = contextOption;
            _currentContext = CreateContext(
                _blockChain.Tip.Index + 1,
                _blockChain.GetBlockCommit(_blockChain.Tip.Index));
            AttachEventHandlers(_currentContext);
            _pendingMessages = new HashSet<ConsensusMsg>();

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusContext")
                .ForContext<ConsensusContext>()
                .ForContext("Source", nameof(ConsensusContext));

            _blockChain.TipChanged += OnTipChanged;
            _contextLock = new object();
        }

        /// <summary>
        /// A value shwoing whether a <see cref="ConsensusContext"/> is in a running state or not.
        /// This determines whether internally handled <see cref="Context"/> gets started or not.
        /// </summary>
        public bool Running { get; private set; }

        /// <summary>
        /// <para>
        /// The height of the current viewing <see cref="Context"/>.
        /// </para>
        /// <para>
        /// This value can only be increased by calling <see cref="NewHeight"/>.
        /// </para>
        /// </summary>
        /// <returns>The height of the current viewing <see cref="Context"/>.</returns>
        /// <seealso cref="NewHeight"/>
        /// <seealso cref="OnTipChanged"/>
        public long Height => CurrentContext.Height;

        /// <summary>
        /// A current round of <see cref="Context"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context"/> for <see cref="Height"/> returns the round
        /// of current <see cref="Context"/>, or otherwise returns -1.
        /// </returns>
        public long Round => CurrentContext.Round;

        /// <summary>
        /// The current step of <see cref="Context"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context"/> for <see cref="Height"/> returns the step
        /// of current <see cref="Context"/>.
        /// </returns>
        public ConsensusStep Step => CurrentContext.Step;

        internal Context CurrentContext
        {
            get
            {
                lock (_contextLock)
                {
                    return _currentContext;
                }
            }
        }

        /// <summary>
        /// Switches <see cref="Running"/> to <see langword="true"/> and also starts
        /// the current highest <see cref="Context"/>, if any.
        /// </summary>
        /// <exception cref="InvalidOperationException">Thrown when
        /// <see cref="Running"/> is already <see langword="true"/>.</exception>
        public void Start()
        {
            if (Running)
            {
                throw new InvalidOperationException(
                    $"Can only start {nameof(ConsensusContext)} if {nameof(Running)} is {false}.");
            }
            else
            {
                lock (_contextLock)
                {
                    Running = true;
                    _currentContext.Start();
                }
            }
        }

        /// <inheritdoc cref="IDisposable.Dispose"/>
        public void Dispose()
        {
            _newHeightCts?.Cancel();
            lock (_contextLock)
            {
                _currentContext.Dispose();
            }

            _blockChain.TipChanged -= OnTipChanged;
        }

        /// <summary>
        /// Starts a new <see cref="Context"/> for given <paramref name="height"/>.
        /// </summary>
        /// <param name="height">The height of a new <see cref="Context"/> to start.</param>
        /// <exception cref="InvalidHeightIncreasingException">Thrown when given
        /// <paramref name="height"/> is less than or equal to <see cref="Height"/>.</exception>
        /// <exception cref="NullReferenceException">Thrown when <see cref="BlockChain"/> does
        /// not have the appropriate next state root hash ready for given <paramref name="height"/>.
        /// </exception>
        /// <remarks>The method is only called with a delay
        /// when <see cref="BlockChain.TipChanged"/> is triggered.
        /// </remarks>
        public void NewHeight(long height)
        {
            lock (_contextLock)
            {
                _logger.Information(
                    "Invoked {FName}() for new height #{NewHeight} from old height #{OldHeight}",
                    nameof(NewHeight),
                    height,
                    Height);

                if (height <= Height)
                {
                    throw new InvalidHeightIncreasingException(
                        $"Given new height #{height} must be greater than " +
                        $"the current height #{Height}.");
                }

                BlockCommit? lastCommit = null;
                if (_currentContext.Height == height - 1 &&
                    _currentContext.GetBlockCommit() is { } prevCommit)
                {
                    lastCommit = prevCommit;
                    _logger.Debug(
                        "Retrieved block commit for Height #{Height} from previous context",
                        lastCommit.Height);
                }

                if (lastCommit is null &&
                    _blockChain.GetBlockCommit(height - 1) is { } storedCommit)
                {
                    lastCommit = storedCommit;
                    _logger.Debug(
                        "Retrieved stored block commit for Height #{Height} from blockchain",
                        lastCommit.Height);
                }

                _logger.Debug(
                    "LastCommit for height #{Height} is {LastCommit}",
                    height,
                    lastCommit);

                _currentContext.Dispose();
                _logger.Information(
                    "Start consensus for height #{Height} with last commit {LastCommit}",
                    height,
                    lastCommit);
                _currentContext = CreateContext(height, lastCommit);
                AttachEventHandlers(_currentContext);

                foreach (var message in _pendingMessages)
                {
                    if (message.Height == height)
                    {
                        _currentContext.ProduceMessage(message);
                    }
                }

                _pendingMessages.RemoveWhere(message => message.Height <= height);
                if (Running)
                {
                    _currentContext.Start();
                }
            }
        }

        /// <summary>
        /// <para>
        /// Handles a received <see cref="ConsensusMsg"/> by either dispatching it to the right
        /// <see cref="Context"/> or discarding it.
        /// </para>
        /// <para>
        /// In particular, this discards <paramref name="consensusMessage"/> with
        /// <see cref="ConsensusMsg.Height"/> less than <see cref="Height"/>.  Otherwise,
        /// given <paramref name="consensusMessage"/> is passed on to a <see cref="Context"/>
        /// with <see cref="Context.Height"/> the same as <see cref="ConsensusMsg.Height"/> of
        /// <paramref name="consensusMessage"/>.  If there is no such <see cref="Context"/>,
        /// then a new <see cref="Context"/> is created for the dispatch.
        /// </para>
        /// </summary>
        /// <param name="consensusMessage">The <see cref="ConsensusMsg"/> received from
        /// any validator.
        /// </param>
        /// <returns>
        /// <see langword="true"/> if <paramref name="consensusMessage"/> is dispatched to
        /// a <see cref="Context"/>, <see langword="false"/> otherwise.
        /// </returns>
        public bool HandleMessage(ConsensusMsg consensusMessage)
        {
            long height = consensusMessage.Height;
            if (height < Height)
            {
                _logger.Debug(
                    "Discarding a received message as its height #{MessageHeight} " +
                    "is lower than the current context's height #{ContextHeight}",
                    height,
                    Height);
                return false;
            }

            lock (_contextLock)
            {
                if (_currentContext.Height == height)
                {
                    _currentContext.ProduceMessage(consensusMessage);
                }
                else
                {
                    _pendingMessages.Add(consensusMessage);
                }

                return true;
            }
        }

        /// <summary>
        /// Handles a received <see cref="Maj23"/> and return message to fetch.
        /// </summary>
        /// <param name="maj23">The <see cref="Maj23"/> received from any validator.
        /// </param>
        /// <returns>
        /// An <see cref="IEnumerable{ConsensusMsg}"/> to reply back.
        /// </returns>
        /// <remarks>This method does not update state of the context.</remarks>
        public VoteSetBits? HandleMaj23(Maj23 maj23)
        {
            long height = maj23.Height;
            if (height < Height)
            {
                _logger.Debug(
                    "Ignore a received VoteSetBits as its height " +
                    "#{Height} is lower than the current context's height #{ContextHeight}",
                    height,
                    Height);
            }
            else
            {
                lock (_contextLock)
                {
                    if (_currentContext.Height == height)
                    {
                        return _currentContext.AddMaj23(maj23);
                    }
                }
            }

            return null;
        }

        /// <summary>
        /// Handles a received <see cref="VoteSetBits"/> and return message to fetch.
        /// </summary>
        /// <param name="voteSetBits">The <see cref="VoteSetBits"/> received from any validator.
        /// </param>
        /// <returns>
        /// An <see cref="IEnumerable{ConsensusMsg}"/> to reply back.
        /// </returns>
        /// <remarks>This method does not update state of the context.</remarks>
        public IEnumerable<ConsensusMsg> HandleVoteSetBits(VoteSetBits voteSetBits)
        {
            long height = voteSetBits.Height;
            if (height < Height)
            {
                _logger.Debug(
                    "Ignore a received VoteSetBits as its height " +
                    "#{Height} is lower than the current context's height #{ContextHeight}",
                    height,
                    Height);
            }
            else
            {
                lock (_contextLock)
                {
                    if (_currentContext.Height == height)
                    {
                        // NOTE: Should check if collected messages have same BlockHash with
                        // VoteSetBit's BlockHash?
                        return _currentContext.GetVoteSetBitsResponse(voteSetBits);
                    }
                }
            }

            return Array.Empty<ConsensusMsg>();
        }

        public Proposal? HandleProposalClaim(ProposalClaim proposalClaim)
        {
            long height = proposalClaim.Height;
            int round = proposalClaim.Round;
            if (height != Height)
            {
                _logger.Debug(
                    "Ignore a received ProposalClaim as its height " +
                    "#{Height} does not match with the current context's height #{ContextHeight}",
                    height,
                    Height);
            }
            else if (round != Round)
            {
                _logger.Debug(
                    "Ignore a received ProposalClaim as its round " +
                    "#{Round} does not match with the current context's round #{ContextRound}",
                    round,
                    Round);
            }
            else
            {
                lock (_contextLock)
                {
                    if (_currentContext.Height == height)
                    {
                        // NOTE: Should check if collected messages have same BlockHash with
                        // VoteSetBit's BlockHash?
                        return _currentContext.Proposal;
                    }
                }
            }

            return null;
        }

        /// <summary>
        /// Returns the summary for <see cref="ConsensusContext"/>.
        /// </summary>
        /// <returns>Returns the current height <see cref="Context"/>. if there's no instance of
        /// <see cref="Context"/> for current height, returns "No context".
        /// </returns>
        public override string ToString()
        {
            lock (_contextLock)
            {
                return _currentContext.ToString();
            }
        }

        /// <summary>
        /// A handler for <see cref="BlockChain.TipChanged"/> event that calls
        /// <see cref="NewHeight"/>.  Starting a new height will be delayed for
        /// <see cref="_newHeightDelay"/> in order to collect remaining delayed votes
        /// and stabilize the consensus process by waiting for Global Stabilization Time.
        /// </summary>
        /// <param name="sender">The source object instance for <see cref="EventHandler"/>.
        /// </param>
        /// <param name="e">The event arguments given by <see cref="BlockChain.TipChanged"/>
        /// as a tuple of the old tip and the new tip.
        /// </param>
        private void OnTipChanged(object? sender, (Block _, Block NewTip) e)
        {
            // TODO: Should set delay by using GST.
            _newHeightCts?.Cancel();
            _newHeightCts?.Dispose();
            _newHeightCts = new CancellationTokenSource();
            Task.Run(
                async () =>
                {
                    await Task.Delay(_newHeightDelay, _newHeightCts.Token);

                    // Delay further until evaluation is ready.
                    while (_blockChain.GetNextStateRootHash(e.NewTip.Index) is null)
                    {
                        // FIXME: Maybe interval should be adjustable?
                        await Task.Delay(100, _newHeightCts.Token);
                    }

                    if (!_newHeightCts.IsCancellationRequested)
                    {
                        try
                        {
                            HandleEvidenceExceptions();
                            AddEvidenceToBlockChain(e.NewTip);
                            NewHeight(e.NewTip.Index + 1);
                        }
                        catch (Exception exc)
                        {
                            _logger.Error(
                                exc,
                                "Unexpected exception occurred during {FName}()",
                                nameof(NewHeight));
                        }
                    }
                    else
                    {
                        _logger.Error(
                            "Did not invoke {FName}() for height " +
                            "#{Height} because cancellation is requested",
                            nameof(NewHeight),
                            e.NewTip.Index + 1);
                    }
                },
                _newHeightCts.Token);
        }

        /// <summary>
        /// Create new context of height of the given <paramref name="height"/>
        /// and attach event handlers to it, and return the created context.
        /// </summary>
        /// <param name="height">The height of the context to create.</param>
        /// <param name="lastCommit">The block commit of the previous <see cref="Block"/>.</param>
        /// <exception cref="NullReferenceException">Thrown when <see cref="BlockChain"/> does
        /// not have the appropriate next state root hash ready for given <paramref name="height"/>.
        /// </exception>
        private Context CreateContext(long height, BlockCommit? lastCommit)
        {
            var nextStateRootHash = _blockChain.GetNextStateRootHash(height - 1) ??
                throw new NullReferenceException(
                    $"Could not find the next state root hash for index {height - 1}");
            ValidatorSet validatorSet = _blockChain
                .GetWorldState(nextStateRootHash)
                .GetValidatorSet();

            Context context = new Context(
                _blockChain,
                height,
                lastCommit,
                _privateKey,
                validatorSet,
                contextOption: _contextOption);
            return context;
        }

        private void HandleEvidenceExceptions()
        {
            var evidenceExceptions = _currentContext.CollectEvidenceExceptions();
            _evidenceCollector.AddRange(evidenceExceptions);
        }

        private void AddEvidenceToBlockChain(Block tip)
        {
            var height = tip.Index;
            var evidenceExceptions
                = _evidenceCollector.Flush().Where(item => item.Height <= height).ToArray();
            foreach (var evidenceException in evidenceExceptions)
            {
                try
                {
                    var validatorSet = _blockChain.GetValidatorSet(evidenceException.Height);
                    var evidenceContext = new EvidenceContext(validatorSet);
                    var evidence = evidenceException.CreateEvidence(evidenceContext);
                    _blockChain.AddEvidence(evidence);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        exception: e,
                        messageTemplate: "Unexpected exception occurred during {FName}()",
                        propertyValue: nameof(BlockChain.AddEvidence));
                }
            }
        }
    }
}
