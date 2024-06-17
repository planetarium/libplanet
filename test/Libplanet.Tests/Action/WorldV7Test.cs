using Libplanet.Types.Blocks;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV7Test : WorldTest
    {
        public WorldV7Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } =
            BlockMetadata.CurrencyAccountProtocolVersion;
    }
}
