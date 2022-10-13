using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
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
        private readonly ContextTimeoutOption _contextTimeoutOption;

        private readonly BlockChain<T> _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly TimeSpan _newHeightDelay;
        private readonly ILogger _logger;
        private readonly Func<long, IEnumerable<PublicKey>> _getValidators;
        private readonly Dictionary<long, Context<T>> _contexts;

        private CancellationTokenSource? _newHeightCts;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusContext{T}"/> class.
        /// </summary>
        /// <param name="broadcastMessage">A delegate method that will broadcasting given
        /// <see cref="ConsensusMessage"/> to validators.
        /// </param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="height">The current height of consensus. this value should be same as the
        /// index of <see cref="BlockChain{T}.Tip"/> + 1.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for signing message and blocks.
        /// </param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block. <seealso cref="OnBlockChainTipChanged"/>
        /// </param>
        /// <param name="getValidators">The function determining the set of validators
        /// for a <see cref="Block{T}"/> given the <see cref="Block{T}"/>'s index.</param>
        /// <param name="lastCommitClearThreshold">A maximum size of cached
        /// <see cref="BlockCommit"/>. See <see cref="LastCommitClearThreshold"/>.
        /// The value must bigger than <c>0</c>.</param>
        /// <param name="contextTimeoutOption">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            TimeSpan newHeightDelay,
            Func<long, IEnumerable<PublicKey>> getValidators,
            long lastCommitClearThreshold,
            ContextTimeoutOption contextTimeoutOption)
        {
            BroadcastMessage = broadcastMessage;
            _blockChain = blockChain;
            _privateKey = privateKey;
            Height = height;
            _newHeightDelay = newHeightDelay;
            _getValidators = getValidators;
            LastCommitClearThreshold = lastCommitClearThreshold;

            _contextTimeoutOption = contextTimeoutOption;

            _contexts = new Dictionary<long, Context<T>>();
            _blockChain.TipChanged += OnBlockChainTipChanged;

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusContext")
                .ForContext<ConsensusContext<T>>()
                .ForContext("Source", nameof(ConsensusContext<T>));
        }

        /// <summary>
        /// A delegate method for using as broadcasting a <see cref="ConsensusMessage"/> to
        /// validators.
        /// </summary>
        /// <param name="message">A message to broadcast.</param>
        public delegate void DelegateBroadcastMessage(ConsensusMessage message);

        public DelegateBroadcastMessage BroadcastMessage { get; }

        /// <summary>
        /// Index of the block that is now under consensus. this value should be same as the index
        /// of <see cref="BlockChain{T}.Tip"/> + 1.
        /// </summary>
        public long Height { get; private set; }

        /// <summary>
        /// A current round of <see cref="Context{T}"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context{T}"/> for <see cref="Height"/> returns the round
        /// of current <see cref="Context{T}"/>, or otherwise returns -1.
        /// </returns>
        public long Round => _contexts.ContainsKey(Height) ? _contexts[Height].Round : -1;

        /// <summary>
        /// The current step of <see cref="Context{T}"/> in current <see cref="Height"/>.
        /// </summary>
        /// <returns>If there is <see cref="Context{T}"/> for <see cref="Height"/> returns the step
        /// of current <see cref="Context{T}"/>, or otherwise returns
        /// <see cref="Libplanet.Net.Consensus.Step.Null"/>.
        /// </returns>
        public Step Step => _contexts.ContainsKey(Height) ? _contexts[Height].Step : Step.Null;

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
            foreach (Context<T> context in _contexts.Values)
            {
                context.Dispose();
            }
        }

        /// <summary>
        /// Starts a consensus for a block of index <paramref name="height"/>.
        /// </summary>
        /// <param name="height">The height of new consensus process. this should be increasing
        /// monotonically by 1.
        /// </param>
        /// <exception cref="InvalidHeightIncreasingException">Thrown if given height is not same as
        /// the index of <see cref="BlockChain{T}.Tip"/> + 1.
        /// </exception>
        /// <remarks>The method is also called when the tip of the <see cref="BlockChain{T}"/> is
        /// changed (i.e., committed, synchronized).
        /// </remarks>
        public void NewHeight(long height)
        {
            _newHeightCts?.Cancel();

            if (height != _blockChain.Tip.Index + 1)
            {
                throw new InvalidHeightIncreasingException(
                    $"{nameof(NewHeight)}: Given new height is not increasing monotonically by 1." +
                    $" (expected: {_blockChain.Tip.Index + 1}, actual: {height})");
            }

            BlockCommit? lastCommit = null;
            if (_contexts.ContainsKey(Height))
            {
                lastCommit = _contexts[Height].CommittedRound == -1
                    ? (BlockCommit?)null
                    : new BlockCommit(
                        _contexts[Height].VoteSet(_contexts[Height].CommittedRound),
                        _blockChain.Tip.Hash);

                _contexts[Height].Dispose();
                _contexts.Remove(Height);
            }

            ClearOldLastCommitCache(maxSize: LastCommitClearThreshold);

            if (lastCommit != null)
            {
                _logger.Debug(
                    "Caching LastCommit of Height {Height}...", Height);
                _blockChain.Store.PutLastCommit(lastCommit.Value);
            }
            else
            {
                BlockCommit? storedCommit = _blockChain.Store.GetLastCommit(Height);
                if (storedCommit != null)
                {
                    lastCommit = storedCommit;
                    _logger.Debug(
                        "Found cached LastCommit of Height #{Height} " +
                        "and Round #{Round}",
                        lastCommit.Value.Height,
                        lastCommit.Value.Round);
                }
            }

            Height = height;

            _logger.Debug("Start consensus for height {Height}.", Height);

            if (!_contexts.ContainsKey(height))
            {
                _contexts[height] = new Context<T>(
                    this,
                    _blockChain,
                    height,
                    _privateKey,
                    _getValidators(height).ToList(),
                    Step.Default,
                    contextTimeoutOptions: _contextTimeoutOption);

                AttachEventHandlers(_contexts[height]);
            }

            _contexts[height].Start(lastCommit);
        }

        /// <summary>
        /// Committing the block to the <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to committing to the
        /// <see cref="BlockChain{T}"/>.
        /// </param>
        /// <remarks>the method is called when a block is voted by <see cref="Context{T}"/>
        /// in <see cref="Libplanet.Net.Consensus.Step.EndCommit"/>.
        /// </remarks>
        public void Commit(Block<T> block)
        {
            _logger.Debug("Committing block #{Index} {Block}.", block.Index, block.Hash);
            _blockChain.Append(block);
        }

        /// <summary>
        /// Handling the received <see cref="ConsensusMessage"/>.
        /// </summary>
        /// <param name="consensusMessage">a received <see cref="ConsensusMessage"/> from any
        /// bounding validator.
        /// </param>
        /// <exception cref="InvalidHeightMessageException"> Thrown if the given message is lower
        /// than current <see cref="Height"/>.
        /// </exception>
        public void HandleMessage(ConsensusMessage consensusMessage)
        {
            long height = consensusMessage.Height;
            if (height < Height)
            {
                throw new InvalidHeightMessageException(
                    $"Received message's height {height} is lower than " +
                    $"current context's height {Height}.",
                    consensusMessage);
            }

            if (!_contexts.ContainsKey(height))
            {
                _contexts[height] = new Context<T>(
                    this,
                    _blockChain,
                    height,
                    _privateKey,
                    _getValidators(height).ToList(),
                    _contextTimeoutOption);

                AttachEventHandlers(_contexts[height]);
            }

            _contexts[height].ProduceMessage(consensusMessage);
        }

        /// <summary>
        /// Returns the summary for <see cref="ConsensusContext{T}"/>.
        /// </summary>
        /// <returns>Returns the current height <see cref="Context{T}"/>. if there's no instance of
        /// <see cref="Context{T}"/> for current height, returns "No context".
        /// </returns>
        public override string ToString() => _contexts.ContainsKey(Height)
            ? _contexts[Height].ToString()
            : "No context";

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
                        NewHeight(e.NewTip.Index + 1);
                    }
                },
                _newHeightCts.Token);
        }

        private void ClearOldLastCommitCache(long maxSize = 30)
        {
            IEnumerable<long> indices = _blockChain.Store.GetLastCommitIndices().ToArray();

            if (indices.Count() < maxSize)
            {
                return;
            }

            _logger.Debug(
                "Pruning old LastCommit caches at height {PreviousTip}...",
                _blockChain.Tip.Index);

            foreach (var height in indices)
            {
                _blockChain.Store.DeleteLastCommit(height);
            }
        }
    }
}
