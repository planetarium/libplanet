using System;
using System.Collections.Generic;
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
    public class ConsensusContext<T> : IDisposable
        where T : IAction, new()
    {
        private readonly BlockChain<T> _blockChain;
        private readonly long _nodeId;
        private readonly PrivateKey _privateKey;
        private readonly List<PublicKey> _validators;
        private readonly TimeSpan _newHeightDelay;
        private readonly ILogger _logger;
        private readonly Dictionary<long, Context<T>> _contexts;

        private CancellationTokenSource? _newHeightCts;

        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            BlockChain<T> blockChain,
            long nodeId,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators,
            TimeSpan newHeightDelay)
        {
            BroadcastMessage = broadcastMessage;
            _blockChain = blockChain;
            _nodeId = nodeId;
            _privateKey = privateKey;
            _validators = validators;
            Height = height;
            _newHeightDelay = newHeightDelay;

            _contexts = new Dictionary<long, Context<T>>();
            _blockChain.TipChanged += OnBlockChainTipChanged;

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusContext")
                .ForContext<ConsensusContext<T>>()
                .ForContext("Source", nameof(ConsensusContext<T>));
        }

        public delegate void DelegateBroadcastMessage(ConsensusMessage message);

        public DelegateBroadcastMessage BroadcastMessage { get; }

        public long Height { get; private set; }

        public long Round => _contexts.ContainsKey(Height) ? _contexts[Height].Round : -1;

        public Step Step => _contexts.ContainsKey(Height) ? _contexts[Height].Step : Step.Null;

        public void Dispose()
        {
            _newHeightCts?.Cancel();
            foreach (Context<T> context in _contexts.Values)
            {
                context.Dispose();
            }
        }

        public void NewHeight(long height)
        {
            _newHeightCts?.Cancel();

            if (height != _blockChain.Tip.Index + 1)
            {
                throw new InvalidHeightIncreasingException(
                    $"{nameof(NewHeight)}: Given new height is not increasing monotonically by 1." +
                    $" (expected: {_blockChain.Tip.Index + 1}, actual: {height})");
            }

            if (_contexts.ContainsKey(Height))
            {
                _contexts[Height].Dispose();
                _contexts.Remove(Height);
            }

            Height = height;

            _logger.Debug("Start consensus for height {Height}.", Height);

            if (!_contexts.ContainsKey(height))
            {
                _contexts[height] = new Context<T>(
                    this,
                    _blockChain,
                    _nodeId,
                    height,
                    _privateKey,
                    _validators);
            }

            _contexts[height].Start();
        }

        public void Commit(Block<T> block)
        {
            _logger.Debug("Committing block #{Index} {Block}.", block.Index, block.Hash);
            _blockChain.Append(block);
        }

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
                    _nodeId,
                    height,
                    _privateKey,
                    _validators);
            }

            _contexts[height].HandleMessage(consensusMessage);
        }

        public override string ToString()
        {
            return _contexts.ContainsKey(Height) ? _contexts[Height].ToString() : "No context";
        }

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
    }
}
