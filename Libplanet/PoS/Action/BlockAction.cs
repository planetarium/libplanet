using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;

namespace Libplanet.Action
{
    /// <summary>
    /// A block action for DPoS that updates <see cref="ValidatorSet"/>,
    /// and <see cref="AllocateReward"/>
    /// specified <see cref="BlockReward"/>
    /// of tokens to Proposer and each <see cref="Validator"/>s.
    /// </summary>
    public sealed class BlockAction : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="BlockAction"/>.
        /// </summary>
        /// <param name="blockReward">The amount of the rewards to be distributed.</param>
        public BlockAction(FungibleAssetValue blockReward)
        {
            BlockReward = blockReward;
        }

        internal BlockAction()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The Block reward to be distributed.
        /// </summary>
        public FungibleAssetValue BlockReward { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => BlockReward.Serialize();

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            BlockReward = plainValue.ToFungibleAssetValue();
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            states = ValidatorSetCtrl.Update(states, ctx.BlockIndex);
            states = AllocateReward.Execute(
                states, BlockReward, ctx.LastCommit?.Votes, ctx.Miner, ctx.BlockIndex);

            return states;
        }
    }
}
