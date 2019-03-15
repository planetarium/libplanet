using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "zone_id", ZoneId },
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            // No-op.
            return context.PreviousStates;
        }

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            object serialized = plainValue["zone_id"];

            // FIXME: The reason why the type of the serialized value is not
            // consistent should be analyzed.
            ZoneId = serialized is BigInteger v ? (int)v : (int)serialized;
        }
    }
}
