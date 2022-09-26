using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action for DPoS that withdraws commission tokens from <see cref="Validator"/>.
    /// </summary>
    public sealed class WithdrawValidator : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="WithdrawValidator"/> action.
        /// </summary>
        public WithdrawValidator()
        {
        }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty;

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
            foreach (Currency nativeToken in context.NativeTokens ?? Enumerable.Empty<Currency>())
            {
                FungibleAssetValue reward = states.GetBalance(
                    AllocateReward.RewardAddress(ctx.Signer), nativeToken);
                if (reward.Sign > 0)
                {
                    states = states.TransferAsset(
                    AllocateReward.RewardAddress(ctx.Signer),
                    ctx.Signer,
                    reward);
                }
            }

            return states;
        }
    }
}
