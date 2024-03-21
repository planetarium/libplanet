using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public static readonly AsyncLocal<GasMeter> GetGasMeter = new AsyncLocal<GasMeter>();

        private readonly long _gasLimit;

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
            bool isPolicyAction,
            long gasLimit,
            IReadOnlyList<ITransaction>? txs = null,
            IReadOnlyList<EvidenceBase>? evidence = null)
        {
            Signer = signer;
            TxId = txid;
            Miner = miner;
            BlockIndex = blockIndex;
            BlockProtocolVersion = blockProtocolVersion;
            LastCommit = lastCommit;
            PreviousState = previousState;
            RandomSeed = randomSeed;
            IsPolicyAction = isPolicyAction;
            _gasLimit = gasLimit;
            _txs = txs ?? ImmutableList<Transaction>.Empty;
            Evidence = evidence ?? ImmutableList<EvidenceBase>.Empty;

            GetGasMeter.Value = new GasMeter(_gasLimit);
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

        /// <inheritdoc cref="IActionContext.IsPolicyAction"/>
        public bool IsPolicyAction { get; }

        /// <inheritdoc cref="IActionContext.Txs"/>
        public IReadOnlyList<ITransaction> Txs => IsPolicyAction
            ? _txs
            : ImmutableList<ITransaction>.Empty;

        /// <inheritdoc cref="IActionContext.Evidence"/>
        public IReadOnlyList<EvidenceBase> Evidence { get; }

        /// <inheritdoc cref="IActionContext.UseGas(long)"/>
        public void UseGas(long gas) => GetGasMeter.Value?.UseGas(gas);

        /// <inheritdoc cref="IActionContext.GetRandom"/>
        public IRandom GetRandom() => new Random(RandomSeed);

        /// <summary>
        /// Returns the elapsed gas of the current action.
        /// </summary>
        /// <returns>
        /// The elapsed gas of the current action.
        /// </returns>
        /// <exception cref="InvalidOperationException">
        /// Thrown when <see cref="GetGasMeter"/> is not initialized.
        /// </exception>
        public long GasUsed()
        {
            if (GetGasMeter.Value is { } gasMeter)
            {
                return gasMeter.GasUsed;
            }

            throw new InvalidOperationException($"{nameof(GetGasMeter)} is not initialized.");
        }

        /// <summary>
        /// Returns the gas limit of the current action.
        /// </summary>
        /// <returns>
        /// The gas limit of the current action.
        /// </returns>
        public long GasLimit()
        {
            return _gasLimit;
        }
    }
}
