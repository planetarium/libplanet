using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public static readonly AsyncLocal<Stopwatch> GetStateTimer = new AsyncLocal<Stopwatch>();
        public static readonly AsyncLocal<int> GetStateCount = new AsyncLocal<int>();
        public static readonly AsyncLocal<GasMeter> GetGasMeter = new AsyncLocal<GasMeter>();

        private readonly int _randomSeed;
        private readonly ITrie? _previousBlockStatesTrie;
        private readonly Predicate<Currency>? _nativeTokenPredicate;
        private readonly long _gasLimit;
        private HashDigest<SHA256>? _previousStateRootHash;

        public ActionContext(
            BlockHash? genesisHash,
            Address signer,
            TxId? txid,
            Address miner,
            long blockIndex,
            IAccountStateDelta previousStates,
            int randomSeed,
            long gasLimit,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false,
            Predicate<Currency>? nativeTokenPredicate = null,
            List<string>? logs = null)
        {
            GenesisHash = genesisHash;
            Signer = signer;
            TxId = txid;
            Miner = miner;
            BlockIndex = blockIndex;
            Rehearsal = rehearsal;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
            _randomSeed = randomSeed;
            _gasLimit = gasLimit;
            _previousBlockStatesTrie = previousBlockStatesTrie;
            BlockAction = blockAction;
            _nativeTokenPredicate = nativeTokenPredicate;
            Logs = logs ?? new List<string>();

            GetStateTimer.Value = new Stopwatch();
            GetStateCount.Value = 0;
            GetGasMeter.Value = new GasMeter(_gasLimit);
        }

        public BlockHash? GenesisHash { get; }

        public Address Signer { get; }

        public TxId? TxId { get; }

        public Address Miner { get; }

        public long BlockIndex { get; }

        public bool Rehearsal { get; }

        public IAccountStateDelta PreviousStates { get; }

        public IRandom Random { get; }

        public HashDigest<SHA256>? PreviousStateRootHash
        {
            get
            {
                return _previousStateRootHash ??= _previousBlockStatesTrie?
                    .Set(PreviousStates.GetUpdatedRawStates())
                    .Commit()
                    .Hash;
            }
        }

        public bool BlockAction { get; }

        internal List<string> Logs { get; }

        /// <inheritdoc cref="IActionContext.PutLog(string)"/>
        public void PutLog(string log) => Logs.Add(log);

        public bool IsNativeToken(Currency currency) =>
            _nativeTokenPredicate is { } && _nativeTokenPredicate(currency);

        [Pure]
        public IActionContext GetUnconsumedContext() =>
            new ActionContext(
                GenesisHash,
                Signer,
                TxId,
                Miner,
                BlockIndex,
                PreviousStates,
                _randomSeed,
                _gasLimit,
                Rehearsal,
                _previousBlockStatesTrie,
                BlockAction,
                _nativeTokenPredicate,
                new List<string>());

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
