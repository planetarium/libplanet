using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
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

        public override IWorld Execute(IActionContext context)
        {
            IImmutableSet<string> usedWeapons = ImmutableHashSet<string>.Empty;
            IImmutableSet<string> targets = ImmutableHashSet<string>.Empty;
            IWorld previousState = context.PreviousState;
            IAccount legacyAccount = previousState.GetAccount(ReservedAddresses.LegacyAccount);

            object value = legacyAccount.GetState(TargetAddress);
            if (!ReferenceEquals(value, null))
            {
                var previousResult = BattleResult.FromBencodex((Bencodex.Types.Dictionary)value);
                usedWeapons = previousResult.UsedWeapons;
                targets = previousResult.Targets;
            }

            usedWeapons = usedWeapons.Add(Weapon);
            targets = targets.Add(Target);
            var result = new BattleResult(usedWeapons, targets);
            legacyAccount = legacyAccount.SetState(TargetAddress, result.ToBencodex());

            return previousState.SetAccount(legacyAccount);
        }
    }
}
