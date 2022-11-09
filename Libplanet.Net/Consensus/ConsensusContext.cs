using System;
using System.Collections.Generic;
using System.Linq;
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
        /// <param name="lastCommitClearThreshold">A maximum size of cached
        /// <see cref="BlockCommit"/>. See <see cref="LastCommitClearThreshold"/>.
        /// The value must bigger than <c>0</c>.</param>
        /// <param name="contextTimeoutOption">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            TimeSpan newHeightDelay,
            Func<long, ValidatorSet> getValidatorSet,
            long lastCommitClearThreshold,
            ContextTimeoutOption contextTimeoutOption)
        {
            BroadcastMessage = broadcastMessage;
            _blockChain = blockChain;
            _privateKey = privateKey;
            Height = -1;
            _newHeightDelay = newHeightDelay;
            _getValidatorSet = getValidatorSet;
            LastCommitClearThreshold = lastCommitClearThreshold;

            _contextTimeoutOption = contextTimeoutOption;

            _contexts = new Dictionary<long, Context<T>>();
            _blockChain.TipChanged += OnBlockChainTipChanged;

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

        /// <inheritdoc cref="ConsensusReactorOption.LastCommitClearThreshold"/>
        private long LastCommitClearThreshold { get; }

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
                        "LastCommit of height #{Height} is: {@LastCommit}",
                        Height,
                        lastCommit);

                    if (lastCommit == null)
                    {
                        // Note: Attempting to save a BlockCommit is in Commit() method.
                        BlockCommit? storedCommit = _blockChain.Store.GetLastCommit(height - 1);
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
                ClearOldLastCommitCache(maxSize: LastCommitClearThreshold);

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

                    _contexts[height].Start(lastCommit);
                }
            }
        }

        /// <summary>
        /// Committing the block to the <see cref="BlockChain{T}"/> and saves
        /// <see cref="BlockCommit"/> of currently committed height.
        /// </summary>
        /// <param name="lastCommit">A <see cref="BlockCommit"/> created from committed height.
        /// </param>
        /// <param name="block">A <see cref="Block{T}"/> to committing to the
        /// <see cref="BlockChain{T}"/>.
        /// </param>
        /// <remarks>the method is called when a block is voted by <see cref="Context{T}"/>
        /// in <see cref="Libplanet.Net.Consensus.Step.EndCommit"/>.
        /// </remarks>
        public void Commit(BlockCommit? lastCommit, Block<T> block)
        {
            _logger.Debug("Committing block #{Index} {Block}.", block.Index, block.Hash);
            _blockChain.Append(block);
            if (lastCommit is null)
            {
                return;
            }

            _logger.Debug(
                "Saving LastCommit of height #{Height} and round #{Round}.",
                lastCommit.Height,
                lastCommit.Round);
            _blockChain.Store.PutLastCommit(lastCommit);
        }

        /// <summary>
        /// Handling the received <see cref="ConsensusMsg"/>.
        /// </summary>
        /// <param name="consensusMessage">a received <see cref="ConsensusMsg"/> from any
        /// bounding validator.
        /// </param>
        /// <exception cref="InvalidConsensusMessageException"> Thrown if the given message is
        /// lower than the current <see cref="Height"/>.
        /// </exception>
        public void HandleMessage(ConsensusMsg consensusMessage)
        {
            long height = consensusMessage.Height;
            if (height < Height)
            {
                throw new InvalidConsensusMessageException(
                    $"Received message's height {height} is lower than " +
                    $"current context's height {Height}.",
                    consensusMessage);
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
        /// A handler for <see cref="BlockChain{T}.TipChanged"/> event that calls the
        /// <see cref="NewHeight"/>. Starting a new height will be delayed for
        /// <see cref="_newHeightDelay"/> to collecting remaining votes and stabilize the
        /// consensus process by waiting for Global Stabilization Time.
        /// </summary>
        /// <param name="sender">the object instance for <see cref="EventHandler"/>.
        /// </param>
        /// <param name="e">the tuple of <see cref="Block{T}"/>s that are OldTip and NewTip
        /// respectively.
        /// </param>
        private void OnBlockChainTipChanged(object? sender, (Block<T> OldTip, Block<T> NewTip) e)
        {
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
        /// Removes old last commit (<see cref="BlockCommit"/>) cache in store, if the cache count
        /// is over <paramref name="maxSize"/>. The removal starts from lowest height cache and
        /// keep the last commit cache count in <paramref name="maxSize"/>.
        /// </summary>
        /// <param name="maxSize">A maximum count value of <see cref="BlockCommit"/> cache.</param>
        private void ClearOldLastCommitCache(long maxSize = 30)
        {
            IEnumerable<long> indices = _blockChain.Store.GetLastCommitIndices().ToArray();

            if (indices.Count() < maxSize)
            {
                return;
            }

            _logger.Debug(
                "Removing old LastCommit caches at height {PreviousTip}...",
                _blockChain.Tip.Index);

            foreach (var height in indices.OrderBy(x => x).Take((int)(indices.Count() - maxSize)))
            {
                _blockChain.Store.DeleteLastCommit(height);
            }
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
