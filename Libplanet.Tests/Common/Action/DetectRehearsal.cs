using Bencodex.Types;
using Libplanet.Action;
using Libplanet.State;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("detect_rehearsal")]
    public class DetectRehearsal : BaseAction
    {
        public override IValue PlainValue => Dictionary.Empty
            .Add("type_id", TypeId)
            .Add("values", Dictionary.Empty
                .Add("target_address", TargetAddress.ByteArray));

        public bool ResultState { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(IValue plainValue)
        {
            Dictionary values = (Dictionary)GetValues(plainValue);
            TargetAddress = new Address(values["target_address"]);
        }

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IAccountStateDelta previousState = context.PreviousState;
            ResultState = context.Rehearsal;
            return previousState.SetState(
                TargetAddress,
                new Bencodex.Types.Boolean(context.Rehearsal)
            );
        }
    }
}
