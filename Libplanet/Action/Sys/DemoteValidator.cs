using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A action that demotes validator.
    /// </summary>
    public class DemoteValidator : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="DemoteValidator"/> action.
        /// </summary>
        /// <param name="validatorPublicKey">The public key of the validator operator.
        /// </param>
        public DemoteValidator(PublicKey validatorPublicKey)
        {
            ValidatorPublicKey = validatorPublicKey;
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the target validator to be demoted.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Dictionary.Empty
            .Add("validator_public_key", ValidatorPublicKey.Format(false));

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Dictionary)plainValue;
            ValidatorPublicKey = new PublicKey(
                dict.GetValue<Binary>("validator_public_key").ByteArray);
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            states = states.DemoteValidator(ValidatorPublicKey);
            return states;
        }
    }
}
