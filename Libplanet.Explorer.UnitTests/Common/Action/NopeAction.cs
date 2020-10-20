using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Explorer.UnitTests.Common.Action
{
    public class NopeAction : IAction
    {
        public void LoadPlainValue(IValue plainValue)
        {
        }

        public IAccountStateDelta Execute(IActionContext context)
            => context.PreviousStates;

        public IValue PlainValue => default(Null);
    }
}
