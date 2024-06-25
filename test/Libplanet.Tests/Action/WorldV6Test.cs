using Libplanet.Types.Blocks;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV6Test : WorldTest
    {
        public WorldV6Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } =
            BlockMetadata.ValidatorSetAccountProtocolVersion;
    }
}
