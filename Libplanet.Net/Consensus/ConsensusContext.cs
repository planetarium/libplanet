using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
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
    /// A class that maintains the states of a <see cref="Context{T}"/> for block
    /// indices now in consensus.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type of <see cref="BlockChain{T}"/>.
    /// </typeparam>
    public partial class ConsensusContext<T> : IDisposable
        where T : IAction, new()
    {
        private readonly object _contextLock;
        private readonly object _newHeightLock;
        private readonly ContextTimeoutOption _contextTimeoutOption;

        private readonly BlockChain<T> _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly TimeSpan _newHeightDelay;
        private readonly ILogger _logger;
        private readonly Func<long, ValidatorSet> _getValidatorSet;
        private readonly Dictionary<long, Context<T>> _contexts;

        private CancellationTokenSource? _newHeightCts;
        private bool _bootstrapping;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusContext{T}"/> class.
        /// </summary>
        /// <param name="broadcastMessage">A delegate method that will broadcasting given
        /// <see cref="ConsensusMsg"/> to validators.
        /// </param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for signing message and blocks.
        /// </param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block. <seealso cref="OnBlockChainTipChanged"/>
        /// </param>
        /// <param name="getValidatorSet">The function determining the set of validators
        /// for a <see cref="Block{T}"/> given the <see cref="Block{T}"/>'s index.</param>
        /// <param name="contextTimeoutOption">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            TimeSpan newHeightDelay,
            Func<long, ValidatorSet> getValidatorSet,
            ContextTimeoutOption contextTimeoutOption)
        {
            BroadcastMessage = broadcastMessage;
            _blockChain = blockChain;
            _privateKey = privateKey;
            Height = -1;
            _newHeightDelay = newHeightDelay;
            _getValidatorSet = getValidatorSet;

            _contextTimeoutOption = contextTimeoutOption;

            _contexts = new Dictionary<long, Context<T>>();
            _blockChain.TipChanged += OnBlockChainTipChanged;
            _bootstrapping = true;

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusContext")
                .ForContext<ConsensusContext<T>>()
                .ForContext("Source", nameof(ConsensusContext<T>));

            _contextLock = new object();
            _newHeightLock = new object();
        }

        /// <summary>
        /// A delegate method for using as broadcasting a <see cref="ConsensusMsg"/> to
        /// validators.
        /// </summary>
        /// <param name="message">A message to broadcast.</param>
        public delegate void DelegateBroadcastMessage(ConsensusMsg message);

        public DelegateBroadcastMessage BroadcastMessage { get; }

        /// <summary>
        /// The index of block that <see cref="ConsensusContext{T}"/> is watching. The value can be
        /// changed by starting a consensus or appending a block.
        /// </summary>
        /// <seealso cref="NewHeight"/>  <seealso cref="OnBlockChainTipChanged"/>
        /// <returns>If <see cref="NewHeight"/> or <see cref="OnBlockChainTipChanged"/> is called
        /// before, returns current working height, otherwise returns <c>-1</c>.</returns>
        public long Height { get; private set; }

        /// <summary>
        /// A current round of <see cref="Context{T}"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context{T}"/> for <see cref="Height"/> returns the round
        /// of current <see cref="Context{T}"/>, or otherwise returns -1.
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
        /// The current step of <see cref="Context{T}"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context{T}"/> for <see cref="Height"/> returns the step
        /// of current <see cref="Context{T}"/>, or otherwise returns
        /// <see cref="Libplanet.Net.Consensus.Step.Null"/>.
        /// </returns>
        public Step Step
        {
            get
            {
                lock (_contextLock)
                {
                    return _contexts.ContainsKey(Height) ? _contexts[Height].Step : Step.Null;
                }
            }
        }

        /// <summary>
        /// A dictionary of <see cref="Context{T}"/> for each heights. Each key represents the
        /// height of value, and value is the <see cref="Context{T}"/>.
        /// </summary>
        internal Dictionary<long, Context<T>> Contexts => _contexts;

        /// <inheritdoc cref="IDisposable.Dispose"/>
        public void Dispose()
        {
            _newHeightCts?.Cancel();
            lock (_contextLock)
            {
                foreach (Context<T> context in _contexts.Values)
                {
                    context.Dispose();
                }
            }

            _blockChain.TipChanged -= OnBlockChainTipChanged;
        }

        /// <summary>
        /// Starts a consensus for a block of index <paramref name="height"/>.
        /// </summary>
        /// <param name="height">The height of new consensus process. this should be increasing
        /// monotonically by 1.
        /// </param>
        /// <exception cref="InvalidHeightIncreasingException">Thrown if given
        /// <paramref name="height"/> is not the same as the index of
        /// <see cref="BlockChain{T}.Tip"/> + 1, or a context corresponding to
        /// <paramref name="height"/> is already running.</exception>
        /// <remarks>The method is also called when the tip of the <see cref="BlockChain{T}"/> is
        /// changed (i.e., committed, synchronized).
        /// </remarks>
        public void NewHeight(long height)
        {
            lock (_newHeightLock)
            {
                _newHeightCts?.Cancel();

                _logger.Debug(
                    "Invoked {FName}() for new height #{NewHeight} from old height #{OldHeight}",
                    nameof(NewHeight),
                    height,
                    Height);

                if (height == Height)
                {
                    throw new InvalidHeightIncreasingException(
                        $"Context of height #{height} is already running.");
                }

                if (height != _blockChain.Tip.Index + 1)
                {
                    throw new InvalidHeightIncreasingException(
                        $"Given height #{height} must be equal to " +
                        $"the tip's index #{_blockChain.Tip.Index} + 1.");
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

                _logger.Debug("Start consensus for height #{Height}.", Height);

                lock (_contextLock)
                {
                    if (!_contexts.ContainsKey(height))
                    {
                        _contexts[height] = new Context<T>(
                            this,
                            _blockChain,
                            height,
                            _privateKey,
                            _getValidatorSet(height),
                            contextTimeoutOptions: _contextTimeoutOption);

                        AttachEventHandlers(_contexts[height]);
                    }

                    _contexts[height].Start(lastCommit, _bootstrapping);
                }
            }
        }

        /// <summary>
        /// Committing the block to the <see cref="BlockChain{T}"/> and saves
        /// <see cref="BlockCommit"/> of currently committed height.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to committing to the
        /// <see cref="BlockChain{T}"/>.
        /// </param>
        /// <param name="commit">A <see cref="BlockCommit"/> created from committed height.
        /// </param>
        /// <remarks>the method is called when a block is voted by <see cref="Context{T}"/>
        /// in <see cref="Libplanet.Net.Consensus.Step.EndCommit"/>.
        /// </remarks>
        public void Commit(Block<T> block, BlockCommit? commit)
        {
            _bootstrapping = false;
            _logger.Debug("Committing block #{Index} {Block}.", block.Index, block.Hash);
            _blockChain.Append(block, commit);
        }

        /// <summary>
        /// <para>
        /// Handles a received <see cref="ConsensusMsg"/> by either dispatching it to the right
        /// <see cref="Context{T}"/> or discarding it.
        /// </para>
        /// <para>
        /// In particular, this discards <paramref name="consensusMessage"/> with
        /// <see cref="ConsensusMsg.Height"/> less than <see cref="Height"/>.  Otherwise,
        /// given <paramref name="consensusMessage"/> is passed on to a <see cref="Context{T}"/>
        /// with <see cref="Context{T}.Height"/> the same as <see cref="ConsensusMsg.Height"/> of
        /// <paramref name="consensusMessage"/>.  If there is no such <see cref="Context{T}"/>,
        /// then a new <see cref="Context{T}"/> is created for the dispatch.
        /// </para>
        /// </summary>
        /// <param name="consensusMessage">The <see cref="ConsensusMsg"/> received from
        /// any validator.
        /// </param>
        /// <returns>
        /// <see langword="true"/> if <paramref name="consensusMessage"/> is dispatched to
        /// a <see cref="Context{T}"/>, <see langword="false"/> otherwise.
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
                    _contexts[height] = new Context<T>(
                        this,
                        _blockChain,
                        height,
                        _privateKey,
                        _getValidatorSet(height),
                        _contextTimeoutOption);

                    AttachEventHandlers(_contexts[height]);
                }

                _contexts[height].ProduceMessage(consensusMessage);
                return true;
            }
        }

        /// <summary>
        /// Returns the summary for <see cref="ConsensusContext{T}"/>.
        /// </summary>
        /// <returns>Returns the current height <see cref="Context{T}"/>. if there's no instance of
        /// <see cref="Context{T}"/> for current height, returns "No context".
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
        /// A handler for <see cref="BlockChain{T}.TipChanged"/> event that calls
        /// <see cref="NewHeight"/>.  Starting a new height will be delayed for
        /// <see cref="_newHeightDelay"/> in order to collect remaining delayed votes
        /// and stabilize the consensus process by waiting for Global Stabilization Time.
        /// </summary>
        /// <param name="sender">The source object instance for <see cref="EventHandler"/>.
        /// </param>
        /// <param name="e">The event arguments given by <see cref="BlockChain{T}.TipChanged"/>
        /// as a tuple of the old tip and the new tip.
        /// </param>
        private void OnBlockChainTipChanged(object? sender, (Block<T> OldTip, Block<T> NewTip) e)
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
