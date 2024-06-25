using Libplanet.Types.Blocks;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV5Test : WorldTest
    {
        public WorldV5Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = BlockMetadata.WorldStateProtocolVersion;
    }
}
