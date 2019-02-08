using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Action
{
    public interface IAction
    {
        IImmutableDictionary<string, object> PlainValue { get; }

        void LoadPlainValue(IImmutableDictionary<string, object> plainValue);

        ISet<Address> RequestStates(Address from, Address to);

        AddressStateMap Execute(IActionContext context);
    }
}
