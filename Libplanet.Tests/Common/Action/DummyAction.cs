using System;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public class DummyAction : BaseAction
    {
        public override IImmutableDictionary<string, object> PlainValue => throw new NotImplementedException();

        public override AddressStateMap Execute(
            Address sender,
            Address recipient,
            AddressStateMap requestedStates,
            IActionContext context)
        {
            throw new NotImplementedException();
        }

        public override void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            throw new NotImplementedException();
        }
    }
}
