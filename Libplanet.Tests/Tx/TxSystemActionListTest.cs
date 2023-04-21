using System;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxSystemActionListTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void Constructor()
        {
            var sysAction = new Mint(AddressA, FOO * 100);
            var list = new TxSystemActionList(sysAction);

            // FIXME: DumbAction is used as a placeholder.
            Mint mint = Assert.IsType<Mint>(
                Transaction<DumbAction>.ToSystemAction(list.SystemAction));
            Assert.Equal(sysAction, mint);
            Assert.Equal(1, list.Count);

            var nonSysAction = new DumbAction(AddressA, "foo");
            Assert.Throws<ArgumentException>(() => new TxSystemActionList(nonSysAction));
        }

        [Fact]
        public void Index()
        {
            var sysAction = new Mint(AddressA, FOO * 100);
            var list = new TxSystemActionList(sysAction);

            // FIXME: DumbAction is only used as a placeholder
            Mint mint = Assert.IsType<Mint>(
                Transaction<DumbAction>.ToSystemAction(list[0]));
            Assert.Equal(sysAction, mint);

            Assert.Throws<ArgumentOutOfRangeException>(() => list[-1]);
            Assert.Throws<IndexOutOfRangeException>(() => list[1]);
        }

        [Fact]
        public void Enumeration()
        {
            var sysAction = new Mint(AddressA, FOO * 100);
            var list = new TxSystemActionList(sysAction);
            var item = Assert.Single(list);
            Assert.Equal(list.SystemAction, item);
        }

        [Fact]
        public void Bencoded()
        {
            var systemAction = new Mint(AddressA, FOO * 100);
            var actionList = new TxSystemActionList(systemAction);

            // TODO: We should introduce snapshot testing.
            var expected = Registry.Serialize(systemAction);
            AssertBencodexEqual(expected, actionList.Bencoded);

            // FIXME: DumbAction is used as a placeholder.
            var concretized = Assert.IsType<Mint>(
                Transaction<DumbAction>.ToSystemAction(actionList.SystemAction));
            Assert.Equal(systemAction, concretized);

            var decoded = new TxSystemActionList(actionList.Bencoded);
            Assert.Equal(actionList, decoded);

            var invalidInput = List.Empty;
            Assert.Throws<ArgumentException>(() => new TxSystemActionList(invalidInput));
        }
    }
}
