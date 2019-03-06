using System;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public class DummyAction : BaseAction
    {
        public override IImmutableDictionary<string, object> PlainValue =>
            throw new NotSupportedException();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            throw new NotSupportedException();
        }

        public override void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            throw new NotSupportedException();
        }
    }
}
