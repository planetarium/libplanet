using System;
using Libplanet.Assets;

namespace Libplanet.Action
{
    internal enum FeeCollectState
    {
        /// <summary>
        /// The state of the fee collector is not determined.
        /// </summary>
        None = 0,

        /// <summary>
        /// The fee collector is called to collect the fee from the sender of the transaction.
        /// </summary>
        Mortgage = 1,

        /// <summary>
        /// The fee collector is called to refund the fee to the sender of the transaction.
        /// </summary>
        Refund = 2,

        /// <summary>
        /// The fee collector is called to reward the proposer of the block.
        /// </summary>
        Reward = 3,

        /// <summary>
        /// The fee collector is called but the action is not collectible.
        /// </summary>
        CannotCollectible = 4,
    }

    internal class FeeCollector : IFeeCollector
    {
        private readonly IActionContext _context;
        private readonly FungibleAssetValue? _gasPrice;
        private FeeCollectState _state = FeeCollectState.None;

        public FeeCollector(IActionContext context, FungibleAssetValue? gasPrice = null)
        {
            _context = context;
            _gasPrice = gasPrice;
            if (_context.BlockIndex == 0 || _context.BlockAction)
            {
                _state = FeeCollectState.CannotCollectible;
            }
        }

        private FeeCollector(
            IActionContext context,
            FungibleAssetValue? gasPrice,
            FeeCollectState state)
        {
            _context = context;
            _gasPrice = gasPrice;
            _state = state;
        }

        public IAccountStateDelta Mortgage(IAccountStateDelta state)
        {
            if (_state == FeeCollectState.CannotCollectible)
            {
                return state;
            }

            CheckState(FeeCollectState.Mortgage);

            if (!(_gasPrice is { } realGasPrice))
            {
                _state = FeeCollectState.Mortgage;
                return state;
            }

            var balance = state.GetBalance(_context.Signer, realGasPrice.Currency);
            if (balance < realGasPrice * _context.GasLimit())
            {
                var msg =
                    $"The account {_context.Signer}'s balance of {realGasPrice.Currency} is" +
                    $"insufficient to pay gas fee: " +
                    $"{balance} < {realGasPrice * _context.GasLimit()}.";
                throw new InsufficientBalanceException(msg, _context.Signer, balance);
            }

            IAccountStateDelta nextState = state.BurnAsset(
                _context.Signer,
                realGasPrice * _context.GasLimit());
            _state = FeeCollectState.Mortgage;
            return nextState;
        }

        public IAccountStateDelta Refund(IAccountStateDelta state)
        {
            if (_state == FeeCollectState.CannotCollectible)
            {
                return state;
            }

            CheckState(FeeCollectState.Refund);

            if (!(_gasPrice is { } realGasPrice))
            {
                _state = FeeCollectState.Refund;
                return state;
            }

            if (_context.GasLimit() - _context.GasUsed() <= 0)
            {
                _state = FeeCollectState.Refund;
                return state;
            }

            IAccountStateDelta nextState = state.MintAsset(
                _context.Signer,
                (_context.GasLimit() - _context.GasUsed()) * realGasPrice);
            _state = FeeCollectState.Refund;
            return nextState;
        }

        public IAccountStateDelta Reward(IAccountStateDelta state)
        {
            if (_state == FeeCollectState.CannotCollectible)
            {
                return state;
            }

            CheckState(FeeCollectState.Reward);

            if (!(_gasPrice is { } realGasPrice))
            {
                _state = FeeCollectState.Reward;
                return state;
            }

            if (_context.GasUsed() <= 0)
            {
                _state = FeeCollectState.Reward;
                return state;
            }

            IAccountStateDelta nextState = state.MintAsset(
                _context.Miner,
                realGasPrice * _context.GasUsed());
            _state = FeeCollectState.Reward;
            return nextState;
        }

        public IFeeCollector Next(IActionContext context)
        {
            return new FeeCollector(context, _gasPrice, _state);
        }

        private void CheckState(FeeCollectState state)
        {
            if (_state + 1 != state)
            {
                throw new InvalidOperationException();
            }
        }
    }
}
