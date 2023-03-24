using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxActionListTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void CustomActionListFromBencodex()
        {
            IAction[] customActions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "bar"),
            };
            var input = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x61 },
                Bencodex.Types.List.Empty
                    .Add(customActions[0].PlainValue)
                    .Add(customActions[1].PlainValue));
            var list = Assert.IsType<TxCustomActionList>(
                TxActionList.FromBencodex<DumbAction>(input));
            Assert.Equal(2, list.Count);
            Assert.Equal(customActions[0], list[0]);
            Assert.Equal(customActions[1], list[1]);
        }

        [Fact]
        public void SystemActionListFromBencodex()
        {
            var input = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x41 },
                Bencodex.Types.Dictionary.Empty
                    .Add("type_id", 0)
                    .Add("values", Bencodex.Types.Dictionary.Empty
                        .Add(
                            "recipient",
                            Binary.FromHex("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9"))
                        .Add("currency", FOO.Serialize())
                        .Add("amount", (FOO * 100).RawValue)));

            var list = Assert.IsType<TxSystemActionList>(
                TxActionList.FromBencodex<DumbAction>(input));
            var sysAction = Assert.IsType<Mint>(list.SystemAction);
            var expected = new Mint(AddressA, FOO * 100);
            Assert.Equal(expected, sysAction);
        }

        [Fact]
        public void FromBencodexError()
        {
            Assert.Throws<DecodingException>(() =>
                TxActionList.FromBencodex<DumbAction>(Bencodex.Types.Dictionary.Empty));
        }

        [Fact]
        public void Equality()
        {
            var mint = new Mint(AddressA, FOO * 100);
            var mint2 = new Mint(AddressA, FOO * 100);
            var transfer = new Transfer(AddressA, FOO * 100);
            IAction[] customActions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "bar"),
            };
            IAction[] customActions2 =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "bar"),
            };
            IAction[] customActions3 =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "baz"),
            };

            AssertEquality(new TxSystemActionList(mint), new TxSystemActionList(mint), true);
            AssertEquality(new TxSystemActionList(mint), new TxSystemActionList(mint2), true);
            AssertEquality(new TxSystemActionList(mint), new TxSystemActionList(transfer), false);
            AssertEquality(
                new TxSystemActionList(mint),
                new TxCustomActionList(customActions),
                false);
            AssertEquality(
                new TxCustomActionList(customActions),
                new TxCustomActionList(customActions),
                true);
            AssertEquality(
                new TxCustomActionList(customActions),
                new TxCustomActionList(customActions2),
                true);
            AssertEquality(
                new TxCustomActionList(customActions),
                new TxCustomActionList(customActions3),
                false);
        }

        private static void AssertEquality(TxActionList a, TxActionList b, bool equal)
        {
            if (equal)
            {
                Assert.True(a.Equals(b));
                Assert.True(((object)a).Equals(b));
                Assert.Equal(a.GetHashCode(), b.GetHashCode());
            }
            else
            {
                Assert.False(a.Equals(b));
                Assert.False(((object)a).Equals(b));
                Assert.NotEqual(a.GetHashCode(), b.GetHashCode());
            }

            Assert.False(a.Equals(null));
            Assert.False(((object)a).Equals(null));
            Assert.False(b.Equals(null));
            Assert.False(((object)b).Equals(null));
        }
    }
}
