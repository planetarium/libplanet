using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<string, Integer>
            {
                { "zone_id", ZoneId },
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
            ZoneId = plainValue.GetValue<Integer>("zone_id");
        }
    }
}
