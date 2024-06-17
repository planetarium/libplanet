using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class WorldV0Test : WorldTest
    {
        public WorldV0Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = 0;
    }
}
