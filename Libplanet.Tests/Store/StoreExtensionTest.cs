using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Blockchain;
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
            Block<DumbAction> block4 = TestUtils.MineNext(fx.Block3, new[] { tx4 });

            Transaction<DumbAction> tx5 = fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "bar") }
            );
            Block<DumbAction> block5 = TestUtils.MineNext(block4, new[] { tx5 });

            Block<DumbAction> block6 = TestUtils.MineNext(block5, new Transaction<DumbAction>[0]);

            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, fx.Block3));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block4));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block5));
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, block6));

            fx.Store.StoreStateReference(fx.StoreNamespace, tx4.UpdatedAddresses, block4);
            Assert.Null(fx.Store.LookupStateReference(fx.StoreNamespace, address, fx.Block3));
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block4)
            );
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block5)
            );
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block6)
            );

            fx.Store.StoreStateReference(fx.StoreNamespace, tx5.UpdatedAddresses, block5);
            Assert.Null(fx.Store.LookupStateReference(
                fx.StoreNamespace, address, fx.Block3));
            Assert.Equal(
                Tuple.Create(block4.Hash, block4.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block4)
            );
            Assert.Equal(
                Tuple.Create(block5.Hash, block5.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block5)
            );
            Assert.Equal(
                Tuple.Create(block5.Hash, block5.Index),
                fx.Store.LookupStateReference(fx.StoreNamespace, address, block6)
            );
        }

        [Theory]
        [MemberData(nameof(StoreFixtures))]
        public void ListAllStateReferences(StoreFixture fx)
        {
            Address address1 = fx.Address1;
            Address address2 = fx.Address2;
            Address address3 = new PrivateKey().PublicKey.ToAddress();

            Transaction<DumbAction> tx4 = fx.MakeTransaction(
                new[]
                {
                    new DumbAction(address1, "foo1"),
                    new DumbAction(address2, "foo2"),
                }
            );
            Block<DumbAction> block4 = TestUtils.MineNext(fx.Block3, new[] { tx4 });

            Transaction<DumbAction> tx5 = fx.MakeTransaction(
                new[]
                {
                    new DumbAction(address1, "bar1"),
                    new DumbAction(address3, "bar3"),
                }
            );
            Block<DumbAction> block5 = TestUtils.MineNext(block4, new[] { tx5 });

            Block<DumbAction> block6 = TestUtils.MineNext(block5, new Transaction<DumbAction>[0]);

            var chain = new BlockChain<DumbAction>(new NullPolicy<DumbAction>(), fx.Store);
            chain.Append(fx.Block1);
            chain.Append(fx.Block2);
            chain.Append(fx.Block3);
            chain.Append(block4);
            chain.Append(block5);
            chain.Append(block6);

            string chainId = chain.Id.ToString();
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>> refs;

            refs = fx.Store.ListAllStateReferences(chainId);
            Assert.Equal(
                new HashSet<Address> { address1, address2, address3 },
                refs.Keys.ToHashSet()
            );
            Assert.Equal(new[] { block4.Hash, block5.Hash }, refs[address1]);
            Assert.Equal(new[] { block4.Hash }, refs[address2]);
            Assert.Equal(new[] { block5.Hash }, refs[address3]);

            refs = fx.Store.ListAllStateReferences(chainId, onlyAfter: block4.Hash);
            Assert.Equal(new HashSet<Address> { address1, address3 }, refs.Keys.ToHashSet());
            Assert.Equal(new[] { block5.Hash }, refs[address1]);
            Assert.Equal(new[] { block5.Hash }, refs[address3]);

            refs = fx.Store.ListAllStateReferences(chainId, ignoreAfter: block4.Hash);
            Assert.Equal(new HashSet<Address> { address1, address2, }, refs.Keys.ToHashSet());
            Assert.Equal(new[] { block4.Hash }, refs[address1]);
            Assert.Equal(new[] { block4.Hash }, refs[address2]);
        }
    }
}
