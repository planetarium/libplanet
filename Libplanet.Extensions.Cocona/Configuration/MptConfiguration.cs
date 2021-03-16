namespace Libplanet.Extensions.Cocona.Configuration
{
    using System.Collections.Generic;

    public struct MptConfiguration
    {
        public MptConfiguration(Dictionary<string, string> aliases)
        {
            Aliases = aliases;
        }

        public Dictionary<string, string> Aliases { get; set; }
    }
}
