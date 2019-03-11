using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Tests.Common.Action
{
    [Serializable]
    public class BattleResult : IEquatable<BattleResult>, ISerializable
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

        private BattleResult(SerializationInfo info, StreamingContext context)
            : this(
                info.GetValue<string[]>("used_weapons").ToImmutableHashSet(),
                info.GetValue<string[]>("targets").ToImmutableHashSet()
            )
        {
        }

        public IImmutableSet<string> UsedWeapons { get; }

        public IImmutableSet<string> Targets { get; }

        public override bool Equals(object other)
        {
            return other != null && other is IEquatable<BattleResult> o &&
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

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("used_weapons", UsedWeapons.ToArray());
            info.AddValue("targets", Targets.ToArray());
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
