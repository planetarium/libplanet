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

            HeightContext = new Context<T>(
                this,
                _blockChain,
                _nodeId,
                Height,
                _privateKey,
                validators);

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

        public long Round => HeightContext.Round;

        public Step Step => HeightContext.Step;

        internal Context<T> HeightContext { get; private set; }

        public void Dispose()
        {
            _newHeightCts?.Cancel();
            HeightContext.Dispose();
        }

        public void NewHeight(long height)
        {
            HeightContext.Dispose();
            Height = height;

            _logger.Debug("Start consensus for height {Height}.", Height);

            HeightContext = new Context<T>(
                this,
                _blockChain,
                _nodeId,
                Height,
                _privateKey,
                _validators);

            HeightContext.Start();
        }

        public void Commit(Block<T> block)
        {
            _logger.Debug("Committing block #{Index} {Block}.", block.Index, block.Hash);
            _blockChain.Append(block);
        }

        public void HandleMessage(ConsensusMessage consensusMessage) =>
            HeightContext.HandleMessage(consensusMessage);

        public override string ToString()
        {
            return HeightContext.ToString();
        }

        private void OnBlockChainTipChanged(object? sender, (Block<T> OldTip, Block<T> NewTip) e)
        {
            HeightContext.Dispose();

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
