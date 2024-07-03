using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {

        private readonly IReadOnlyList<ITransaction> _txs;

        public ActionContext(
            Address signer,
            TxId? txid,
            Address miner,
            long blockIndex,
            int blockProtocolVersion,
            BlockCommit? lastCommit,
            IWorld previousState,
            int randomSeed,
            bool isBlockAction,
            FungibleAssetValue? maxGasPrice,
            IReadOnlyList<ITransaction>? txs = null)
        {
            Signer = signer;
            TxId = txid;
            Miner = miner;
            BlockIndex = blockIndex;
            BlockProtocolVersion = blockProtocolVersion;
            LastCommit = lastCommit;
            PreviousState = previousState;
            RandomSeed = randomSeed;
            IsBlockAction = isBlockAction;
            MaxGasPrice = maxGasPrice;
            _txs = txs ?? ImmutableList<Transaction>.Empty;
        }

        /// <inheritdoc cref="IActionContext.Signer"/>
        public Address Signer { get; }

        /// <inheritdoc cref="IActionContext.TxId"/>
        public TxId? TxId { get; }

        /// <inheritdoc cref="IActionContext.Miner"/>
        public Address Miner { get; }

        /// <inheritdoc cref="IActionContext.BlockIndex"/>
        public long BlockIndex { get; }

        /// <inheritdoc cref="IActionContext.BlockProtocolVersion"/>
        public int BlockProtocolVersion { get; }

        /// <inheritdoc cref="IActionContext.LastCommit"/>
        public BlockCommit? LastCommit { get;  }

        /// <inheritdoc cref="IActionContext.PreviousState"/>
        public IWorld PreviousState { get; }

        /// <inheritdoc cref="IActionContext.RandomSeed"/>
        public int RandomSeed { get; }

        /// <inheritdoc cref="IActionContext.IsBlockAction"/>
        public bool IsBlockAction { get; }

        /// <inheritdoc cref="IActionContext.MaxGasPrice"/>
        [Pure]
        public FungibleAssetValue? MaxGasPrice { get; }

        /// <inheritdoc cref="IActionContext.Txs"/>
        public IReadOnlyList<ITransaction> Txs => IsBlockAction
            ? _txs
            : ImmutableList<ITransaction>.Empty;

       /// <inheritdoc cref="IActionContext.GetRandom"/>
        public IRandom GetRandom() => new Random(RandomSeed);
    }
}
