using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Unity
{
    /// <summary>
    /// A base class for <see cref="IAction"/>s.  Inherit this class when implementing
    /// concrete game actions.
    /// </summary>
    public abstract class ActionBase : IAction
    {
        /// <inheritdoc/>
        public abstract IValue PlainValue { get; }

        /// <inheritdoc/>
        public abstract void LoadPlainValue(IValue plainValue);

        /// <inheritdoc/>
        public abstract IAccountStateDelta Execute(IActionContext context);
    }
}
