using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action for DPoS that <see cref="Redelegate"/> specified <see cref="ShareAmount"/>
    /// of shared tokens to <see cref="DstValidator"/> from <see cref="SrcValidator"/>.
    /// </summary>
    public sealed class Redelegate : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="Redelegate"/> action.
        /// </summary>
        /// <param name="src">The <see cref="Address"/> of the validator that
        /// delegated previously.</param>
        /// <param name="dst">The <see cref="Address"/> of the validator
        /// to be newly delegated.</param>
        /// <param name="amount">The amount of the shared asset to be re-delegated.</param>
        public Redelegate(Address src, Address dst, FungibleAssetValue amount)
        {
            SrcValidator = src;
            DstValidator = dst;
            ShareAmount = amount;
        }

        internal Redelegate()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The <see cref="Address"/> of the validator that was previously delegated to.
        /// </summary>
        public Address SrcValidator { get; set; }

        /// <summary>
        /// The <see cref="Address"/> of the validator as a destination of moved voting power.
        /// </summary>
        public Address DstValidator { get; set; }

        /// <summary>
        /// The amount of the shared token to move delegation.
        /// </summary>
        public FungibleAssetValue ShareAmount { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("src", SrcValidator.Serialize())
            .Add("dst", DstValidator.Serialize())
            .Add("amount", ShareAmount.Serialize());

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            SrcValidator = dict["src"].ToAddress();
            DstValidator = dict["dst"].ToAddress();
            ShareAmount = dict["amount"].ToFungibleAssetValue();
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            states = RedelegateCtrl.Execute(
                states,
                ctx.Signer,
                SrcValidator,
                DstValidator,
                ShareAmount,
                ctx.BlockIndex);

            return states;
        }
    }
}
