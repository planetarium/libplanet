using System;
using System.Text.Json.Serialization;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that promotes given address to the validator.
    /// </summary>
    [JsonConverter(typeof(SysActionJsonConverter))]
    public sealed class Promote : IAction, IEquatable<Promote>, IEquatable<IAction>
    {
        /// <summary>
        /// Creates a new instance of <see cref="Promote"/> action.
        /// </summary>
        /// <param name="validatorKey">The public key of the node to be promoted to the validator.
        /// </param>
        public Promote(PublicKey validatorKey)
        {
            ValidatorKey = validatorKey;
        }

        internal Promote()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// >The public key of the node to be promoted to the validator.
        /// </summary>
        public PublicKey? ValidatorKey { get; private set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator_key", ValidatorKey!.Format(false));

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            ValidatorKey = new PublicKey(dict.GetValue<Binary>("validator_key").ByteArray);
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            if (ValidatorKey is null)
            {
                throw new ArgumentNullException(nameof(ValidatorKey));
            }

            return context.PreviousStates.PromoteValidator(ValidatorKey);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Promote? other) =>
            other is { } o && ValidatorKey!.Equals(o.ValidatorKey);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(IAction? other) => other is Promote o && Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) => obj is Promote o && Equals(o);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() => ValidatorKey!.GetHashCode();
    }
}
