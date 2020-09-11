#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Blockchain
{
    internal class BlockEvaluator<T>
        where T : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly IAction? _blockAction;
        private readonly Func<Address, HashDigest<SHA256>?, StateCompleter<T>, IValue?>
            _stateGetter;

        private readonly Func<Address, Currency, HashDigest<SHA256>?,
                FungibleAssetStateCompleter<T>, FungibleAssetValue>
            _balanceGetter;

        internal BlockEvaluator(
            IAction? blockAction,
            Func<Address, HashDigest<SHA256>?, StateCompleter<T>, IValue?> stateGetter,
            Func<Address, Currency, HashDigest<SHA256>?,
                FungibleAssetStateCompleter<T>, FungibleAssetValue> balanceGetter)
        {
            _logger = Log.ForContext(typeof(BlockEvaluator<T>));
            _blockAction = blockAction;
            _stateGetter = stateGetter;
            _balanceGetter = balanceGetter;
        }

        internal IReadOnlyList<ActionEvaluation> EvaluateActions(
            Block<T> block,
            StateCompleterSet<T> stateCompleters
        )
        {
            AccountStateGetter stateGetter;
            AccountBalanceGetter balanceGetter;
            if (block.PreviousHash is null)
            {
                stateGetter = _ => null;
                balanceGetter = (a, c) => new FungibleAssetValue(c);
            }
            else
            {
                stateGetter = a => _stateGetter(
                    a,
                    block.PreviousHash,
                    stateCompleters.StateCompleter
                );
                balanceGetter = (address, currency) => _balanceGetter(
                    address,
                    currency,
                    block.PreviousHash,
                    stateCompleters.FungibleAssetStateCompleter
                );
            }

            ImmutableList<ActionEvaluation> txEvaluations = block
                .Evaluate(DateTimeOffset.UtcNow, stateGetter, balanceGetter)
                .ToImmutableList();
            return _blockAction is null
                ? txEvaluations
                : txEvaluations.Add(
                    EvaluateBlockAction(block, txEvaluations, stateCompleters));
        }

        internal ActionEvaluation EvaluateBlockAction(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> txActionEvaluations,
            StateCompleterSet<T> stateCompleters
        )
        {
            if (block == null)
            {
                throw new ArgumentNullException(nameof(block));
            }

            if (_blockAction is null)
            {
                var message = "To evaluate block action, Policy.BlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Debug(
                "Evaluating block action in block {blockIndex}: {block}", block?.Index, block);

            IAccountStateDelta? lastStates = null;

            if (!(txActionEvaluations is null) && txActionEvaluations.Count > 0)
            {
                lastStates = txActionEvaluations[txActionEvaluations.Count - 1].OutputStates;
            }

            Address miner = block!.Miner.GetValueOrDefault();

            if (lastStates is null)
            {
                lastStates = new AccountStateDeltaImpl(
                    a => _stateGetter(a, block.PreviousHash, stateCompleters.StateCompleter),
                    (address, currency) => _balanceGetter(
                        address,
                        currency,
                        block.PreviousHash,
                        stateCompleters.FungibleAssetStateCompleter
                    ),
                    miner
                );
            }

            return ActionEvaluation.EvaluateActionsGradually(
                block.Hash,
                block.Index,
                null,
                lastStates,
                miner,
                miner,
                Array.Empty<byte>(),
                new[] { _blockAction }.ToImmutableList()).First();
        }
    }
}
