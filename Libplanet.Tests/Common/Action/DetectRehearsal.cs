using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("detect_rehearsal")]
    public class DetectRehearsal : BaseAction
    {
        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "target_address", TargetAddress.ToByteArray() },
            }.ToImmutableDictionary();

        public bool ResultState { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            TargetAddress = new Address((byte[])plainValue["target_address"]);
        }

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IAccountStateDelta previousStates = context.PreviousStates;
            ResultState = context.Rehearsal;
            return previousStates.SetState(TargetAddress, context.Rehearsal);
        }
    }
}
