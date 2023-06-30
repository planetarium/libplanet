using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A class that maintains the states of a <see cref="Context"/> for block
    /// indices now in consensus.
    /// </summary>
    public partial class ConsensusContext : IDisposable
    {
        private readonly object _contextLock;
        private readonly object _newHeightLock;
        private readonly ContextTimeoutOption _contextTimeoutOption;

        private readonly BlockChain _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly TimeSpan _newHeightDelay;
        private readonly ILogger _logger;
        private readonly Dictionary<long, Context> _contexts;

        private CancellationTokenSource? _newHeightCts;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusContext"/> class.
        /// </summary>
        /// <param name="broadcastMessage">A delegate method that will broadcasting given
        /// <see cref="ConsensusMsg"/> to validators.</param>
        /// <param name="clearGossip">A delegate method for using as clear
        /// <see cref="Gossip"/> cache.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for signing message and blocks.
        /// </param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block. <seealso cref="OnTipChanged"/>
        /// </param>
        /// <param name="contextTimeoutOption">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            DelegateClearGossip clearGossip,
            BlockChain blockChain,
            PrivateKey privateKey,
            TimeSpan newHeightDelay,
            ContextTimeoutOption contextTimeoutOption)
        {
            BroadcastMessage = broadcastMessage;
            ClearGossip = clearGossip;
            _blockChain = blockChain;
            _privateKey = privateKey;
            Height = -1;
            _newHeightDelay = newHeightDelay;

            _contextTimeoutOption = contextTimeoutOption;

            _contexts = new Dictionary<long, Context>();
            _blockChain.TipChanged += OnTipChanged;

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusContext")
                .ForContext<ConsensusContext>()
                .ForContext("Source", nameof(ConsensusContext));

            _contextLock = new object();
            _newHeightLock = new object();
        }

        /// <summary>
        /// A delegate method for using as broadcasting a <see cref="Message"/> to
        /// validators.
        /// </summary>
        /// <param name="message">A message to broadcast.</param>
        public delegate void DelegateBroadcastMessage(ConsensusMsg message);

        /// <summary>
        /// A delegate method for using as clear <see cref="Gossip"/> cache.
        /// </summary>
        public delegate void DelegateClearGossip();

        public DelegateBroadcastMessage BroadcastMessage { get; }

        public DelegateClearGossip ClearGossip { get; }

        /// <summary>
        /// The index of block that <see cref="ConsensusContext"/> is watching. The value can be
        /// changed by starting a consensus or appending a block.
        /// </summary>
        /// <seealso cref="NewHeight"/>  <seealso cref="OnTipChanged"/>
        /// <returns>If <see cref="NewHeight"/> or <see cref="OnTipChanged"/> is called
        /// before, returns current working height, otherwise returns <c>-1</c>.</returns>
        public long Height { get; private set; }

        /// <summary>
        /// A current round of <see cref="Context"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context"/> for <see cref="Height"/> returns the round
        /// of current <see cref="Context"/>, or otherwise returns -1.
        /// </returns>
        public long Round
        {
            get
            {
                lock (_contextLock)
                {
                    return _contexts.ContainsKey(Height) ? _contexts[Height].Round : -1;
                }
            }
        }

        /// <summary>
        /// The current step of <see cref="Context"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context"/> for <see cref="Height"/> returns the step
        /// of current <see cref="Context"/>, or otherwise returns
        /// <see cref="ConsensusStep.Null"/>.
        /// </returns>
        public ConsensusStep Step
        {
            get
            {
                lock (_contextLock)
                {
                    return _contexts.ContainsKey(Height)
                        ? _contexts[Height].Step
                        : ConsensusStep.Null;
                }
            }
        }

        /// <summary>
        /// A dictionary of <see cref="Context"/> for each heights. Each key represents the
        /// height of value, and value is the <see cref="Context"/>.
        /// </summary>
        internal Dictionary<long, Context> Contexts => _contexts;

        /// <inheritdoc cref="IDisposable.Dispose"/>
        public void Dispose()
        {
            _newHeightCts?.Cancel();
            lock (_contextLock)
            {
                foreach (Context context in _contexts.Values)
                {
                    context.Dispose();
                }
            }

            _blockChain.TipChanged -= OnTipChanged;
        }

        /// <summary>
        /// Starts a new <see cref="Context"/> for given <paramref name="height"/>.
        /// </summary>
        /// <param name="height">The height of a new <see cref="Context"/> to start.</param>
        /// <exception cref="InvalidHeightIncreasingException">Thrown if given
        /// <paramref name="height"/> is less than or equal to <see cref="Height"/>.</exception>
        /// <remarks>The method is also called when the tip of the <see cref="BlockChain"/> is
        /// changed (i.e., committed, synchronized).
        /// </remarks>
        public void NewHeight(long height)
        {
            lock (_newHeightLock)
            {
                _newHeightCts?.Cancel();

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
                lock (_contextLock)
                {
                    lastCommit = _contexts.ContainsKey(height - 1)
                        ? _contexts[height - 1].GetBlockCommit()
                        : null;
                    _logger.Debug(
                        "LastCommit of height #{Height} is: {LastCommit}",
                        Height,
                        lastCommit);

                    if (lastCommit == null)
                    {
                        BlockCommit? storedCommit = _blockChain.GetBlockCommit(height - 1);
                        if (storedCommit != null)
                        {
                            lastCommit = storedCommit;
                            _logger.Debug(
                                "Found cached LastCommit of Height #{Height} " +
                                "and Round #{Round}",
                                lastCommit.Height,
                                lastCommit.Round);
                        }
                    }
                }

                RemoveOldContexts(height);
                Height = height;

                _logger.Information("Start consensus for height #{Height}", Height);

                lock (_contextLock)
                {
                    if (!_contexts.ContainsKey(height))
                    {
                        _contexts[height] = CreateContext(height);
                    }

                    _contexts[height].Start(lastCommit);
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
                if (!_contexts.ContainsKey(height))
                {
                    _contexts[height] = CreateContext(height);
                }

                _contexts[height].ProduceMessage(consensusMessage);
                return true;
            }
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
                return _contexts.ContainsKey(Height)
                    ? _contexts[Height].ToString()
                    : "No context";
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
        private void OnTipChanged(object? sender, (Block OldTip, Block NewTip) e)
        {
            // TODO: Should set delay by using GST.
            _newHeightCts?.Cancel();
            _newHeightCts?.Dispose();
            _newHeightCts = new CancellationTokenSource();
            Task.Run(
                async () =>
                {
                    await Task.Delay(_newHeightDelay, _newHeightCts.Token);
                    if (!_newHeightCts.IsCancellationRequested)
                    {
                        try
                        {
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
        private Context CreateContext(long height)
        {
            // blockchain may not contain block of Height - 1?
            var context = new Context(
                this,
                _blockChain,
                height,
                _privateKey,
                _blockChain.GetValidatorSet(_blockChain[Height - 1].Hash),
                contextTimeoutOptions: _contextTimeoutOption);
            AttachEventHandlers(context);
            return context;
        }

        /// <summary>
        /// Discard and remove all contexts that has lower height with
        /// the given <paramref name="height"/>.
        /// </summary>
        /// <param name="height">The upper bound of height of the contexts to be discarded.</param>
        private void RemoveOldContexts(long height)
        {
            lock (_contextLock)
            {
                foreach (var ctx in _contexts.Values)
                {
                    if (ctx.Height < height)
                    {
                        _logger.Debug("Removing context for height {Height}", ctx.Height);

                        ctx.Dispose();
                        _contexts.Remove(ctx.Height);
                    }
                }
            }
        }
    }
}
