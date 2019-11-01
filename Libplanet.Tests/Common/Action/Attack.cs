using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("attack")]
    public class Attack : BaseAction
    {
        public override IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
            {
                [(Text)"weapon"] = (Text)Weapon,
                [(Text)"target"] = (Text)Target,
                [(Text)"target_address"] = new Binary(TargetAddress.ToByteArray()),
            });

        public string Weapon { get; set; }

        public string Target { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(
            IValue plainValue)
        {
            LoadPlainValue((Bencodex.Types.Dictionary)plainValue);
        }

        public void LoadPlainValue(Bencodex.Types.Dictionary plainValue)
        {
            Weapon = (Text)plainValue[(Text)"weapon"];
            Target = (Text)plainValue[(Text)"target"];
            TargetAddress = new Address((Binary)plainValue[(Text)"target_address"]);
        }

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IImmutableSet<string> usedWeapons = ImmutableHashSet<string>.Empty;
            IImmutableSet<string> targets = ImmutableHashSet<string>.Empty;
            IAccountStateDelta previousStates = context.PreviousStates;

            object value = previousStates.GetState(TargetAddress);
            if (!ReferenceEquals(value, null))
            {
                var previousResult = BattleResult.FromBencodex((Bencodex.Types.Dictionary)value);
                usedWeapons = previousResult.UsedWeapons;
                targets = previousResult.Targets;
            }

            usedWeapons = usedWeapons.Add(Weapon);
            targets = targets.Add(Target);
            var result = new BattleResult(usedWeapons, targets);

            return previousStates.SetState(TargetAddress, result.ToBencodex());
        }
    }
}
