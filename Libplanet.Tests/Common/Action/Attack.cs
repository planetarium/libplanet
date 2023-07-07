using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.State;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("attack")]
    public class Attack : BaseAction
    {
        public override IValue PlainValue => Dictionary.Empty
            .Add("type_id", TypeId)
            .Add("values", Dictionary.Empty
                .Add("weapon", Weapon)
                .Add("target", Target)
                .Add("target_address", TargetAddress.ByteArray));

        public string Weapon { get; set; }

        public string Target { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(IValue plainValue)
        {
            Dictionary values = (Dictionary)GetValues(plainValue);
            Weapon = (Text)values["weapon"];
            Target = (Text)values["target"];
            TargetAddress = new Address(values["target_address"]);
        }

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IImmutableSet<string> usedWeapons = ImmutableHashSet<string>.Empty;
            IImmutableSet<string> targets = ImmutableHashSet<string>.Empty;
            IAccountStateDelta previousState = context.PreviousState;

            object value = previousState.GetState(TargetAddress);
            if (!ReferenceEquals(value, null))
            {
                var previousResult = BattleResult.FromBencodex((Bencodex.Types.Dictionary)value);
                usedWeapons = previousResult.UsedWeapons;
                targets = previousResult.Targets;
            }

            usedWeapons = usedWeapons.Add(Weapon);
            targets = targets.Add(Target);
            var result = new BattleResult(usedWeapons, targets);

            return previousState.SetState(TargetAddress, result.ToBencodex());
        }
    }
}
