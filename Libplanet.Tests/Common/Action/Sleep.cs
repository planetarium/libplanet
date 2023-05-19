using Bencodex.Types;
using Libplanet.Action;
using Libplanet.State;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IValue PlainValue => Dictionary.Empty
            .Add("type_id", TypeId)
            .Add("values", Dictionary.Empty
                .Add("zone_id", ZoneId));

        public override IAccountStateDelta Execute(IActionContext context)
        {
            // No-op.
            return context.PreviousStates;
        }

        public override void LoadPlainValue(IValue plainValue)
        {
            Dictionary values = (Dictionary)GetValues(plainValue);
            ZoneId = (Integer)values["zone_id"];
        }
    }
}
