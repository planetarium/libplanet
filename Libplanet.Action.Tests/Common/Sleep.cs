using Bencodex.Types;
using Libplanet.Action.State;

namespace Libplanet.Action.Tests.Common
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IValue PlainValue => Dictionary.Empty
            .Add("type_id", TypeId)
            .Add("values", Dictionary.Empty
                .Add("zone_id", ZoneId));

        public override IAccount Execute(IActionContext context)
        {
            // No-op.
            return context.PreviousState;
        }

        public override void LoadPlainValue(IValue plainValue)
        {
            Dictionary values = (Dictionary)GetValues(plainValue);
            ZoneId = (Integer)values["zone_id"];
        }
    }
}
