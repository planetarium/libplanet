using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action for DPoS that promotes non-validator node to a validator.
    /// </summary>
    public sealed class PromoteValidator : IAction
    {
        /// <summary>
        /// Create a new instance of <see cref="PromoteValidator"/> action.
        /// </summary>
        /// <param name="validator">The <see cref="PublicKey"/> of the target
        /// to promote validator.</param>
        /// <param name="amount">The amout of the asset to be initialize delegation.</param>
        public PromoteValidator(PublicKey validator, FungibleAssetValue amount)
        {
            Validator = validator;
            Amount = amount;
        }

        internal PromoteValidator()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
            // FIXME: do not fill ambiguous validator field.
            // Suggestion: https://gist.github.com/riemannulus/7405e0d361364c6afa0ab433905ae81c
            Validator = new PrivateKey().PublicKey;
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the target promoting to a validator.
        /// </summary>
        public PublicKey Validator { get; set; }

        /// <summary>
        /// The amount of the asset to be initially delegated.
        /// </summary>
        public FungibleAssetValue Amount { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator", Validator.Serialize())
            .Add("amount", Amount.Serialize());

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Validator = dict["validator"].ToPublicKey();
            Amount = dict["amount"].ToFungibleAssetValue();
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            if (!ctx.Signer.Equals(Validator.ToAddress()))
            {
                throw new PublicKeyAddressMatchingException(ctx.Signer, Validator);
            }

            var states = ctx.PreviousStates;

            states = ValidatorCtrl.Create(
                states, ctx.Signer, Validator, Amount);

            return states;
        }
    }
}
