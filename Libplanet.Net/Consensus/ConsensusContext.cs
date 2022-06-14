using System;
using System.Collections.Generic;
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

        public ConsensusContext(
            DelegateBroadcastMessage broadcastMessage,
            BlockChain<T> blockChain,
            long nodeId,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators)
        {
            BroadcastMessage = broadcastMessage;
            _blockChain = blockChain;
            _nodeId = nodeId;
            _privateKey = privateKey;
            _validators = validators;
            Height = height;

            HeightContext = new Context<T>(
                this,
                _blockChain,
                _nodeId,
                Height,
                _privateKey,
                validators);
        }

        public delegate void DelegateBroadcastMessage(ConsensusMessage message);

        public DelegateBroadcastMessage BroadcastMessage { get; }

        public long Height { get; private set; }

        public long Round => HeightContext.Round;

        public Step Step => HeightContext.Step;

        internal Context<T> HeightContext { get; private set; }

        public void Dispose()
        {
            HeightContext.Dispose();
        }

        public void NewHeight(long height)
        {
            Height = height;

            Log.Debug(
                "New Height: {Height}",
                Height);

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
            _blockChain.Append(block);
            HeightContext.Dispose();
            Task.Run(async () =>
            {
                await Task.Delay(10000);
                NewHeight(Height + 1);
            });
        }

        public void HandleMessage(ConsensusMessage consensusMessage) =>
            HeightContext.HandleMessage(consensusMessage);
    }
}
