using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;
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
        internal WithdrawValidator()
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
            FungibleAssetValue withdrawAmount = states.GetBalance(ctx.Signer, Asset.ConsensusToken);
            states = states.MintAsset(ctx.Signer, Asset.GovernanceFromConsensus(withdrawAmount));
            states = states.BurnAsset(ctx.Signer, withdrawAmount);

            return states;
        }
    }
}
