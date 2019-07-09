using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

using static Libplanet.Store.StoreExtension;

namespace Libplanet.Tests.Store
{
    public class StoreExtensionTest
    {
        public static IEnumerable<object[]> StoreFixtures
        {
            get
            {
                yield return new object[] { new FileStoreFixture() };
                yield return new object[] { new LiteDBStoreFixture() };
            }
        }

        [Theory]
        [MemberData(nameof(StoreFixtures))]
        public void LookupStateReference(StoreFixture fx)
        {
            Address address = fx.Address1;

            Transaction<DumbAction> tx4 = fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "foo") }
            );
            Block<DumbAction, DumbAction> block4 = TestUtils.MineNext(fx.Block3, new[] { tx4 });

            Transaction<DumbAction> tx5 = fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "bar") }
            );
            Block<DumbAction, DumbAction> block5 = TestUtils.MineNext(block4, new[] { tx5 });

            Block<DumbAction, DumbAction> block6 =
                TestUtils.MineNext(block5, new Transaction<DumbAction>[0]);

            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, fx.Block3));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block4));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block5));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block6));

            fx.Store.StoreStateReference(fx.StoreNamespace, tx4.UpdatedAddresses, block4);
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, fx.Block3));
            Assert.Equal(
                block4.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block4)
            );
            Assert.Equal(
                block4.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block5)
            );
            Assert.Equal(
                block4.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block6)
            );

            fx.Store.StoreStateReference(fx.StoreNamespace, tx5.UpdatedAddresses, block5);
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, fx.Block3));
            Assert.Equal(
                block4.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block4)
            );
            Assert.Equal(
                block5.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block5)
            );
            Assert.Equal(
                block5.Hash,
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block6)
            );
        }
    }
}
