using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action for DPoS that withdraws reward tokens from given <see cref="Validator"/>.
    /// </summary>
    public sealed class WithdrawDelegator : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="WithdrawDelegator"/> action.
        /// </summary>
        /// <param name="validator">The <see cref="Address"/> of the validator
        /// from which to withdraw the tokens.</param>
        public WithdrawDelegator(Address validator)
        {
            Validator = validator;
        }

        internal WithdrawDelegator()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The <see cref="Address"/> of the validator to withdraw.
        /// </summary>
        public Address Validator { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Validator.Serialize();

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            Validator = plainValue.ToAddress();
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            states = DelegateCtrl.Distribute(
                states,
                ctx.NativeTokens,
                Delegation.DeriveAddress(ctx.Signer, Validator),
                ctx.BlockIndex);

            foreach (Currency nativeToken in context.NativeTokens)
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
