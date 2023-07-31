using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.Tests.Common
{
    /// <summary>
    /// An action that promotes given address to the validator.
    /// </summary>
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

        public SetValidator()
        {
            Validator = null;
        }

        public Validator Validator { get; private set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("validator", Validator.Bencoded);

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Validator = new Validator(dict.GetValue<Dictionary>("validator"));
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccount Execute(IActionContext context)
        {
            return context.PreviousState.SetValidator(Validator);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(SetValidator other) =>
            other is SetValidator o && Validator.Equals(o.Validator);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(IAction other) => other is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object obj) => obj is SetValidator o && Equals(o);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() => Validator.GetHashCode();
    }
}
