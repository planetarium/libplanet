using System;
using System.Text.Json.Serialization;
using Bencodex.Types;
using Libplanet.Consensus;

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
        /// <param name="validator">The <see cref="Validator"/> to be set.</param>
        public SetValidator(Validator validator)
        {
            Validator = validator;
        }

        internal SetValidator()
        {
            Validator = null!;

            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        public Validator Validator { get; private set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator", Validator.Encoded);

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Validator = new Validator(dict.GetValue<Dictionary>("validator"));
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            return context.PreviousStates.SetValidator(Validator);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(SetValidator? other) => other is { } o && Validator.Equals(o.Validator);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(IAction? other) => other is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) => obj is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() => Validator.GetHashCode();
    }
}
