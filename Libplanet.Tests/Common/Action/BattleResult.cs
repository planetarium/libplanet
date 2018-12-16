using System;
using System.Collections.Generic;

namespace Libplanet.Tests.Common.Action
{
    [Serializable]
    public class BattleResult
    {
        public BattleResult()
        {
            UsedWeapons = new HashSet<string>();
            Targets = new HashSet<string>();
        }

        public HashSet<string> UsedWeapons { get; }

        public HashSet<string> Targets { get; }
    }
}
