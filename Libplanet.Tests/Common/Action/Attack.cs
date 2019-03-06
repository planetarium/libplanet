using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("attack")]
    public class Attack : BaseAction
    {
        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "weapon", Weapon },
                { "target", Target },
                { "target_address", TargetAddress.ToByteArray() },
            }.ToImmutableDictionary();

        public string Weapon { get; set; }

        public string Target { get; set; }

        public Address TargetAddress { get; set; }

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            Weapon = (string)plainValue["weapon"];
            Target = (string)plainValue["target"];
            TargetAddress = new Address((byte[])plainValue["target_address"]);
        }

        public override AddressStateMap Execute(IActionContext context)
        {
            var result = new BattleResult();
            AddressStateMap previousStates = context.PreviousStates;

            if (previousStates.TryGetValue(TargetAddress, out object value))
            {
                var previousResult = (BattleResult)value;
                result.UsedWeapons = previousResult.UsedWeapons;
                result.Targets = previousResult.Targets;
            }

            result.UsedWeapons.Add(Weapon);
            result.Targets.Add(Target);

            return (AddressStateMap)previousStates.SetItem(TargetAddress, result);
        }
    }
}
