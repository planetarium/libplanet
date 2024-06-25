using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.State;

namespace Libplanet.Action.Tests.Common
{
    public abstract class BaseAction : IAction
    {
        public IValue TypeId => this
            .GetType()
            .GetCustomAttribute<ActionTypeAttribute>() is ActionTypeAttribute attribute
                ? attribute.TypeIdentifier
                : throw new NullReferenceException(
                    $"Given type {this.GetType()} is missing {nameof(ActionTypeAttribute)}.");

        public abstract IValue PlainValue { get; }

        public abstract IWorld Execute(IActionContext context);

        public abstract void LoadPlainValue(IValue plainValue);

        /// <summary>
        /// <para>
        /// Extracts the <c>"values"</c> value from <paramref name="plainValue"/>.
        /// </para>
        /// <para>
        /// While extracting, this also does a basic sanity check for <paramref name="plainValue"/>
        /// for those inheriting this <see langword="class"/>.
        /// This checks and throws an <see cref="ArgumentException"/> for
        /// any of the following reasons:
        /// <list type="bullet">
        ///     <item><description>
        ///         <paramref name="plainValue"/> is not a <see cref="Dictionary"/>.
        ///     </description></item>
        ///     <item><description>
        ///         <paramref name="plainValue"/> does not have a <c>"type_id"</c> field.
        ///     </description></item>
        ///     <item><description>
        ///         <paramref name="plainValue"/>'s <c>"type_id"</c> value does not match
        ///         the <see cref="TypeId"/>.
        ///     </description></item>
        ///     <item><description>
        ///         <paramref name="plainValue"/> does not have a <c>"values"</c> field.
        ///     </description></item>
        /// </list>
        /// </para>
        /// This does not actually load <see cref="plainValue"/> for the object in question.
        /// <para>
        /// </para>
        /// </summary>
        /// <param name="plainValue">The <see cref="IValue"/> to check.</param>
        /// <exception cref="ArgumentException">Thrown for any of the reasons mentioned in
        /// the method description.
        /// </exception>
        /// <returns>
        /// The <c>"values"</c> value from <paramref name="plainValue"/>.
        /// </returns>
        protected IValue GetValues(IValue plainValue)
        {
            if (!(plainValue is Dictionary dictionary))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} must be a dictionary.");
            }
            else if (!dictionary.TryGetValue((Text)"type_id", out IValue typeId))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} is missing type id.");
            }
            else if (!typeId.Equals(TypeId))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)}'s expected type id is {TypeId}: {typeId}");
            }
            else if (!dictionary.TryGetValue((Text)"values", out IValue values))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} is missing values.");
            }
            else
            {
                return values;
            }
        }
    }
}
