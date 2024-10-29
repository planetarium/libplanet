using System.Collections.Immutable;
using System.Globalization;
using Bencodex.Types;

namespace Libplanet.Action.Tests.Common
{
    [Serializable]
    public sealed class BattleResult : IEquatable<BattleResult>
    {
        public BattleResult(
            IEnumerable<string> usedWeapons,
            IEnumerable<string> targets
        )
        {
            IEqualityComparer<string> comparer =
                StringComparer.Create(CultureInfo.InvariantCulture, false);
            UsedWeapons = usedWeapons.ToImmutableHashSet(comparer);
            Targets = targets.ToImmutableHashSet(comparer);
        }

        public IImmutableSet<string> UsedWeapons { get; }

        public IImmutableSet<string> Targets { get; }

        public static BattleResult FromBencodex(Bencodex.Types.Dictionary dictionary)
        {
            return new BattleResult(
                ((List)dictionary["used_weapons"]).Select(x => ((Text)x).Value),
                ((List)dictionary["targets"]).Select(x => ((Text)x).Value));
        }

        public Bencodex.Types.Dictionary ToBencodex() =>
            new Bencodex.Types.Dictionary(new Dictionary<string, IValue>
            {
                ["used_weapons"] = new List(UsedWeapons),
                ["targets"] = new List(Targets),
            });

        public override bool Equals(object other)
        {
            return other is IEquatable<BattleResult> o &&
                   o.Equals(this);
        }

        public bool Equals(BattleResult other)
        {
            return other != null &&
                UsedWeapons.SetEquals(other.UsedWeapons) &&
                Targets.SetEquals(other.Targets);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((UsedWeapons?.GetHashCode() ?? 0) * 397) ^
                    (Targets?.GetHashCode() ?? 0);
            }
        }

        public override string ToString()
        {
            string ListItems(IEnumerable<string> items) =>
                string.Join(
                    string.Empty,
                    items.OrderBy(x => x).Select(a => "\n    " + a)
                );

            return $@"{nameof(BattleResult)}
  {nameof(UsedWeapons)} = {ListItems(UsedWeapons)}
  {nameof(Targets)} = {ListItems(Targets)}";
        }
    }
}
