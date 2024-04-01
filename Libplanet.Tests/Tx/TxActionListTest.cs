using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxActionListTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void Empty()
        {
            Assert.Empty(TxActionList.Empty);
            Assert.Empty(TxActionList.Empty.Actions);
            Assert.Throws<IndexOutOfRangeException>(() => TxActionList.Empty[0]);
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                TxActionList.Empty.Bencoded);
        }

        [Fact]
        public void Constructor()
        {
            var emptyList = new TxActionList(Array.Empty<IAction>().ToPlainValues());
            Assert.Equal(TxActionList.Empty, emptyList);

            IAction[] actions =
            {
                new DumbAction((default, "foo")),
                new DumbAction((default, "bar")),
            };
            var list = new TxActionList(actions.ToPlainValues());
            Assert.Equal(2, list.Count);
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Index()
        {
            var emptyList = new TxActionList(Array.Empty<IAction>().ToPlainValues());
            Assert.Throws<ArgumentOutOfRangeException>(() => emptyList[-1]);
            Assert.Throws<IndexOutOfRangeException>(() => emptyList[0]);

            IAction[] actions =
            {
                new DumbAction((default, "foo")),
                new DumbAction((default, "bar")),
            };
            var list = new TxActionList(actions.ToPlainValues());
            Assert.Throws<ArgumentOutOfRangeException>(() => list[-1]);
            Assert.Equal(actions[0].PlainValue, list[0]);
            Assert.Equal(actions[1].PlainValue, list[1]);
            Assert.Throws<IndexOutOfRangeException>(() => list[2]);
        }

        [Fact]
        public void Equality()
        {
            IAction[] actions1 =
            {
                new DumbAction((default, "foo")),
                new DumbAction((AddressA, "bar")),
            };
            IAction[] actions2 =
            {
                new DumbAction((default, "foo")),
                new DumbAction((AddressA, "bar")),
            };
            IAction[] actions3 =
            {
                new DumbAction((default, "foo")),
                new DumbAction((AddressA, "baz")),
            };

            AssertEquality(
                new TxActionList(actions1.ToPlainValues()),
                new TxActionList(actions1.ToPlainValues()),
                true);
            AssertEquality(
                new TxActionList(actions1.ToPlainValues()),
                new TxActionList(actions2.ToPlainValues()),
                true);
            AssertEquality(
                new TxActionList(actions1.ToPlainValues()),
                new TxActionList(actions3.ToPlainValues()),
                false);
        }

        [Fact]
        public void Enumeration()
        {
            var emptyList = new TxActionList(Array.Empty<IAction>().ToPlainValues());
            Assert.Empty(emptyList);

            IAction[] actions =
            {
                new DumbAction((default, "foo")),
                new DumbAction((default, "bar")),
            };
            var list = new TxActionList(actions.ToPlainValues());
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Bencoded()
        {
            var emptyList = new TxActionList(Array.Empty<IAction>().ToPlainValues());
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                emptyList.Bencoded);

            // TODO: We should introduce snapshot testing.
            IAction[] actions =
            {
                new DumbAction((default, "foo")),
                new DumbAction((default, "bar")),
            };
            var actionList = new TxActionList(actions.ToPlainValues());
            var expected = new List(actions.Select(action => action.PlainValue));
            AssertBencodexEqual(expected, actionList.Bencoded);

            var decoded = new TxActionList(actionList.Bencoded);
            Assert.Equal(actionList, decoded);

            var invalidInput = Dictionary.Empty;
            Assert.Throws<ArgumentException>(() => new TxActionList(invalidInput));
        }

        [Fact]
        public void JsonSerialize()
        {
            var actionList = new TxActionList(
                new IAction[]
                {
                    new DumbAction((default, "foo")),
                    new DumbAction((AddressA, "bar")),
                }.ToPlainValues());
            var emptyActionList = new TxActionList(Array.Empty<IAction>().ToPlainValues());
            const string actionListJson = @"
                [
                  {
                    ""\uFEFFitem"": ""\uFEFFfoo"",
                    ""\uFEFFtarget_address"": ""0x0000000000000000000000000000000000000000""
                  },
                  {
                    ""\uFEFFitem"": ""\uFEFFbar"",
                    ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9""
                  }
                ]";
            TestUtils.AssertJsonSerializable<TxActionList>(
                actionList,
                actionListJson,
                false);
            TestUtils.AssertJsonSerializable<TxActionList>(
                emptyActionList,
                "[]",
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
