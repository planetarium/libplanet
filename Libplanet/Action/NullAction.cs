using Bencodex.Types;
using Libplanet.State;

namespace Libplanet.Action
{
    /// <summary>
    /// An action implementation which does nothing for filling type parameter taking of
    /// <see cref="IAction"/>.
    /// </summary>
    public class NullAction : IAction
    {
        public NullAction()
        {
            PlainValue = Null.Value;
        }

        public IValue PlainValue
        {
            get;
            private set;
        }

        public void LoadPlainValue(IValue plainValue)
        {
            PlainValue = plainValue;
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            return context.PreviousState;
        }
    }
}
