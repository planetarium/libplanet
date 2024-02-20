using Libplanet.Action.State;
using Libplanet.Types.Assets;

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
            if (_context.BlockIndex == 0 || _context.BlockAction || _gasPrice is null)
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

        public IWorld Mortgage(IWorld world)
        {
            return world;
        }

        public IWorld Refund(IWorld world)
        {
            return world;
        }

        public IWorld Reward(IWorld world)
        {
            return world;
        }

        public IFeeCollector Next(IActionContext context)
        {
            return new FeeCollector(context, _gasPrice, _state);
        }

        private bool CheckState(FeeCollectState state)
        {
            return _state + 1 == state;
        }
    }
}
