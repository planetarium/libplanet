using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public abstract class BaseAction : IAction
    {
        public abstract IImmutableDictionary<string, object> PlainValue { get; }

        public abstract AddressStateMap Execute(IActionContext context);

        public abstract void LoadPlainValue(IImmutableDictionary<string, object> plainValue);

        public IImmutableSet<Address> RequestStates(Address from, Address to)
        {
            return new HashSet<Address> { from, to }.ToImmutableHashSet();
        }
    }
}
