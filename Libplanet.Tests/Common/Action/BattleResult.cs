using System;
using System.Collections.Generic;

namespace Libplanet.Tests.Common.Action
{
    [Serializable]
    public class BattleResult : IEquatable<BattleResult>
    {
        public BattleResult()
        {
            UsedWeapons = new HashSet<string>();
            Targets = new HashSet<string>();
        }

        public HashSet<string> UsedWeapons { get; internal set; }

        public HashSet<string> Targets { get; internal set; }

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
    }
}
