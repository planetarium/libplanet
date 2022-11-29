using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A action that promotes operator to validator.
    /// </summary>
    public class PromoteValidator : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="PromoteValidator"/> action.
        /// </summary>
        /// <param name="validatorPublicKey">The public key of the validator operator.
        /// </param>
        /// <param name="power">The power of the validator.</param>
        public PromoteValidator(PublicKey validatorPublicKey, BigInteger power)
        {
            ValidatorPublicKey = validatorPublicKey;
            Power = power;
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the operator promoting to a validator.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; set; }

        /// <summary>
        /// The <see langword="Power"/> of the target operator promoting to a validator.
        /// </summary>
        public BigInteger Power { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Dictionary.Empty
            .Add("validator_public_key", ValidatorPublicKey.Format(false))
            .Add("power", Power.ToByteArray());

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Dictionary)plainValue;
            ValidatorPublicKey = new PublicKey(
                dict.GetValue<Binary>("validator_public_key").ByteArray);
            Power = new BigInteger(dict.GetValue<Binary>("power"));
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            states = states.PromoteValidator(ValidatorPublicKey, Power);
            return states;
        }
    }
}
