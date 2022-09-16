using Bencodex.Types;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;

namespace Libplanet.Action
{
    /// <summary>
    /// A block action for DPoS that updates <see cref="ValidatorSet"/>.
    /// </summary>
    public sealed class PoSAction : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="PoSAction"/>.
        /// </summary>
        public PoSAction()
        {
        }

       /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => new Boolean(true);

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            // Method intentionally left empty.
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
                states, ctx.NativeTokens, ctx.LastCommit?.Votes, ctx.Miner, ctx.BlockIndex);
            return states;
        }
    }
}
