using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Action
{
    public static class ActionsExtensions
    {
        public static IEnumerable<IValue> ToPlainValues(this IEnumerable<IAction> actions)
            => actions.Select(x => x.PlainValue);
    }
}
