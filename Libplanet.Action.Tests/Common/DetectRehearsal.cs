using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
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

        public override IAccount Execute(IActionContext context)
        {
            IAccount previousState = context.PreviousState;
            ResultState = context.Rehearsal;
            return previousState.SetState(
                TargetAddress,
                new Bencodex.Types.Boolean(context.Rehearsal)
            );
        }
    }
}
