using System;
using Libplanet.Action;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplV3Test : AccountStateDeltaTest
    {
        public AccountStateDeltaImplV3Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion => 3;

        public override IAccountStateDelta CreateInstance(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            Address signer
        ) =>
            new AccountStateDeltaImplV3(accountStateGetter, accountBalanceGetter, signer);

        [Fact]
        public void TotalSupplyTracking()
        {
            var delta = _init;
            foreach (var currency in _currencies)
            {
                Assert.Throws<NotSupportedException>(() => delta.GetTotalSupply(currency));
                Assert.Null(delta.GetTotalSupplyImpl(currency));
            }
        }

        [Fact]
        public override void MintAsset()
        {
            base.MintAsset();
            var delta = _init;
            Assert.Throws<NotSupportedException>(() => delta.MintAsset(_addr[0], Value(3, 5)));
            Assert.Throws<NotSupportedException>(() => delta.MintAsset(_addr[0], Value(4, 5)));
            Assert.Throws<NotSupportedException>(() => delta.MintAsset(_addr[0], Value(4, 200)));
        }

        [Fact]
        public override void BurnAsset()
        {
            base.BurnAsset();
            var delta = _init;
            Assert.Throws<NotSupportedException>(() => delta.BurnAsset(_addr[0], Value(3, 5)));
            Assert.Throws<NotSupportedException>(() => delta.BurnAsset(_addr[0], Value(3, 100)));
            Assert.Throws<NotSupportedException>(() => delta.BurnAsset(_addr[0], Value(4, 5)));
        }
    }
}
