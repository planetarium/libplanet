using System.Collections.Generic;

namespace Libplanet.Tools.Configuration
{
    public struct MptConfiguration
    {
        public MptConfiguration(Dictionary<string, string>? aliases = null)
        {
            Aliases = aliases ?? new Dictionary<string, string>();
        }

        public Dictionary<string, string> Aliases { get; set; }
    }
}
