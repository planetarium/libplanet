using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountV1Test : AccountTest
    {
        public AccountV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        public override IActionContext CreateContext(IAccount delta, Address signer)
        {
            IWorld world = new World(new MockWorldState());
            world = world.SetAccount(_accountAddress, delta);
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
        public void TotalSupplyTracking()
        {
            IAccount account = _initAccount;
            IActionContext context = _initContext;

            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                account.GetTotalSupply(_currencies[0]));

            Assert.Equal(Value(4, 0), _initAccount.GetTotalSupply(_currencies[4]));

            account = account.MintAsset(context, _addr[0], Value(0, 10));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                account.GetTotalSupply(_currencies[0]));

            account = account.MintAsset(context, _addr[0], Value(4, 10));
            Assert.Equal(Value(4, 10), account.GetTotalSupply(_currencies[4]));

            account = account.BurnAsset(context, _addr[0], Value(4, 5));
            Assert.Equal(Value(4, 5), account.GetTotalSupply(_currencies[4]));
        }
    }
}
