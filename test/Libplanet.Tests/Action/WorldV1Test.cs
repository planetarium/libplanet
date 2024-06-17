using Libplanet.Types.Blocks;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV1Test : WorldTest
    {
        public WorldV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = BlockMetadata.TransferFixProtocolVersion;
    }
}
