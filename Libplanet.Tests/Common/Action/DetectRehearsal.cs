using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("detect_rehearsal")]
    public class DetectRehearsal : BaseAction
    {
        public override IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
            {
                { (Text)"target_address", new Binary(TargetAddress.ToByteArray()) },
            });

        public bool ResultState { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(
            IValue plainValue)
        {
            LoadPlainValue((Bencodex.Types.Dictionary)plainValue);
        }

        public void LoadPlainValue(Bencodex.Types.Dictionary plainValue)
        {
            TargetAddress = new Address(plainValue.GetValue<Binary>("target_address").Value);
        }

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IAccountStateDelta previousStates = context.PreviousStates;
            ResultState = context.Rehearsal;
            return previousStates.SetState(
                TargetAddress,
                new Bencodex.Types.Boolean(context.Rehearsal)
            );
        }
    }
}
