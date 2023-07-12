using System;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Threading;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Tx;
using Libplanet.State;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public static readonly AsyncLocal<Stopwatch> GetStateTimer = new AsyncLocal<Stopwatch>();
        public static readonly AsyncLocal<int> GetStateCount = new AsyncLocal<int>();
        public static readonly AsyncLocal<GasMeter> GetGasMeter = new AsyncLocal<GasMeter>();

        private readonly int _randomSeed;
        private readonly long _gasLimit;

        public ActionContext(
            Address signer,
            TxId? txid,
            Address miner,
            long blockIndex,
            int blockProtocolVersion,
            IAccountStateDelta previousState,
            int randomSeed,
            long gasLimit,
            bool rehearsal = false)
        {
            Signer = signer;
            TxId = txid;
            Miner = miner;
            BlockIndex = blockIndex;
            BlockProtocolVersion = blockProtocolVersion;
            Rehearsal = rehearsal;
            PreviousState = previousState;
            Random = new Random(randomSeed);
            _randomSeed = randomSeed;
            _gasLimit = gasLimit;

            GetStateTimer.Value = new Stopwatch();
            GetStateCount.Value = 0;
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

        /// <inheritdoc cref="IActionContext.Rehearsal"/>
        public bool Rehearsal { get; }

        /// <inheritdoc cref="IActionContext.PreviousState"/>
        public IAccountStateDelta PreviousState { get; }

        /// <inheritdoc cref="IActionContext.Random"/>
        public IRandom Random { get; }

        /// <inheritdoc cref="IActionContext.BlockAction"/>
        public bool BlockAction => TxId is null;

        /// <inheritdoc cref="IActionContext.UseGas(long)"/>
        public void UseGas(long gas) => GetGasMeter.Value?.UseGas(gas);

        [Pure]
        public IActionContext GetUnconsumedContext() =>
            new ActionContext(
                Signer,
                TxId,
                Miner,
                BlockIndex,
                BlockProtocolVersion,
                PreviousState,
                _randomSeed,
                _gasLimit,
                Rehearsal);

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
