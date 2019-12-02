using System;
using System.Collections.Generic;
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
                yield return new object[] { new DefaultStoreFixture() };
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
            Block<DumbAction> block4 = TestUtils.MineNext(fx.Block3, new[] { tx4 });

            Transaction<DumbAction> tx5 = fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "bar") }
            );
            Block<DumbAction> block5 = TestUtils.MineNext(block4, new[] { tx5 });

            Block<DumbAction> block6 = TestUtils.MineNext(block5, new Transaction<DumbAction>[0]);

            Assert.Null(fx.Store.LookupStateReference(fx.StoreChainId, address, fx.Block3));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreChainId, address, block4));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreChainId, address, block5));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreChainId, address, block6));

            fx.Store.StoreStateReference(
                fx.StoreChainId,
                tx4.UpdatedAddresses,
                block4.Hash,
                block4.Index
            );
            Assert.Null(fx.Store.LookupStateReference(fx.StoreChainId, address, fx.Block3));
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block4)
            );
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block5)
            );
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block6)
            );

            fx.Store.StoreStateReference(
                fx.StoreChainId,
                tx5.UpdatedAddresses,
                block5.Hash,
                block5.Index
            );
            Assert.Null(fx.Store.LookupStateReference(
                fx.StoreChainId, address, fx.Block3));
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block4)
            );
            Assert.Equal(
                Tuple.Create(block5.Hash, block5.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block5)
            );
            Assert.Equal(
                Tuple.Create(block5.Hash, block5.Index),
                fx.Store.LookupStateReference(fx.StoreChainId, address, block6)
            );
        }
    }
}
