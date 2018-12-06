using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Store
{
    public class DummyAction : IAction
    {
        public IImmutableDictionary<string, object> PlainValue => throw new NotImplementedException();

        public AddressStateMap Execute(Address sender, Address recipient, AddressStateMap requestedStates)
        {
            throw new NotImplementedException();
        }

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            throw new NotImplementedException();
        }

        public ISet<Address> RequestStates(Address sender, Address recipient)
        {
            throw new NotImplementedException();
        }
    }
}
