using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Xunit;
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

        public override IActionContext CreateContext(IWorld world, Address signer)
        {
            return new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                world,
                0,
                0);
        }

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();

            IWorld world = _initWorld.TransferAsset(_initContext, _addr[0], _addr[0], Value(0, 2));
            Assert.Equal(Value(0, 5), world.GetBalance(_addr[0], _currencies[0]));
        }
    }
}
