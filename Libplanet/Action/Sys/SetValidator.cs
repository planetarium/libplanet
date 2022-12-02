using System;
using System.Numerics;
using System.Text.Json.Serialization;
using Bencodex.Types;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that promotes given address to the validator.
    /// </summary>
    [JsonConverter(typeof(SysActionJsonConverter))]
    public sealed class SetValidator : IAction, IEquatable<SetValidator>, IEquatable<IAction>
    {
        /// <summary>
        /// Creates a new instance of <see cref="SetValidator"/> action.
        /// </summary>
        /// <param name="validatorPublicKey">The public key of the validator operator
        /// to be set.</param>
        /// <param name="power">The power of the validator to be set.</param>
        public SetValidator(PublicKey validatorPublicKey, BigInteger power)
        {
            ValidatorPublicKey = validatorPublicKey;
            Power = power;
        }

        public SetValidator(Validator validator)
            : this(validator.PublicKey, validator.Power)
        {
        }

        internal SetValidator()
        {
            ValidatorPublicKey = default!;
            Power = default!;

            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// >The public key of the node to be promoted to the validator.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; private set; }

        /// <summary>
        /// The <see langword="Power"/> of the target operator promoting to a validator.
        /// </summary>
        public BigInteger Power { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator_public_key", ValidatorPublicKey.Format(false))
            .Add("power", Power.ToByteArray());

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            ValidatorPublicKey = new PublicKey(
                dict.GetValue<Binary>("validator_public_key").ByteArray);
            Power = new BigInteger(dict.GetValue<Binary>("power").ToByteArray());
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            return context.PreviousStates.SetValidator(ValidatorPublicKey, Power);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(SetValidator? other) =>
            other is { } o
            && ValidatorPublicKey!.Equals(o.ValidatorPublicKey)
            && Power.Equals(o.Power);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(IAction? other) => other is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) => obj is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() => ValidatorPublicKey.GetHashCode();
    }
}
