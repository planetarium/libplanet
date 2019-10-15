using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
            {
                { (Text)"zone_id", (Integer)ZoneId },
            });

        public override IAccountStateDelta Execute(IActionContext context)
        {
            // No-op.
            return context.PreviousStates;
        }

        public override void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(
            Dictionary plainValue)
        {
            ZoneId = (int)plainValue.GetValue<Integer>("zone_id").Value;
        }
    }
}
