using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action for DPoS that cancels <see cref="Delegate"/> specified
    /// <see cref="ShareAmount"/> of shared tokens to a given <see cref="Validator"/>.
    /// </summary>
    public sealed class Undelegate : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="Undelegate"/> action.
        /// </summary>
        /// <param name="validator">The <see cref="Address"/> of the validator
        /// to undelegate tokens.</param>
        /// <param name="amount">The amount of the asset to be undelegated.</param>
        public Undelegate(Address validator, FungibleAssetValue amount)
        {
            Validator = validator;
            ShareAmount = amount;
        }

        internal Undelegate()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The <see cref="Address"/> of the validator to cancel the <see cref="Delegate"/>.
        /// </summary>
        public Address Validator { get; set; }

        /// <summary>
        /// The amount of the asset to be undelegated.
        /// </summary>
        public FungibleAssetValue ShareAmount { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator", Validator.Serialize())
            .Add("amount", ShareAmount.Serialize());

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Validator = dict["validator"].ToAddress();
            ShareAmount = dict["amount"].ToFungibleAssetValue();
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            states = UndelegateCtrl.Execute(
                states, ctx.Signer, Validator, ShareAmount, ctx.BlockIndex);

            return states;
        }
    }
}
