using System;
using System.Threading;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public static readonly AsyncLocal<GasMeter> GetGasMeter = new AsyncLocal<GasMeter>();

        private readonly ITxContext _txContext;

        private readonly long _gasLimit;

        public ActionContext(
            ITxContext txContext,
            IAccount previousState,
            int randomSeed,
            long gasLimit)
        {
            _txContext = txContext;
            PreviousState = previousState;
            RandomSeed = randomSeed;
            _gasLimit = gasLimit;

            GetGasMeter.Value = new GasMeter(_gasLimit);
        }

        /// <inheritdoc cref="IActionContext.Signer"/>
        public Address Signer => _txContext.Signer;

        /// <inheritdoc cref="IActionContext.TxId"/>
        public TxId? TxId => _txContext.TxId;

        /// <inheritdoc cref="IActionContext.Miner"/>
        public Address Miner => _txContext.Miner;

        /// <inheritdoc cref="IActionContext.BlockIndex"/>
        public long BlockIndex => _txContext.BlockIndex;

        /// <inheritdoc cref="IActionContext.BlockProtocolVersion"/>
        public int BlockProtocolVersion => _txContext.BlockProtocolVersion;

        /// <inheritdoc cref="IActionContext.PreviousState"/>
        public IAccount PreviousState { get; }

        /// <inheritdoc cref="IActionContext.RandomSeed"/>
        public int RandomSeed { get; }

        /// <inheritdoc cref="IActionContext.BlockAction"/>
        public bool BlockAction => TxId is null;

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
