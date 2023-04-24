using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxCustomActionListTest
    {
        [Fact]
        public void Empty()
        {
            Assert.Empty(TxCustomActionList.Empty);
            Assert.Empty(TxCustomActionList.Empty.CustomActions);
            Assert.Equal(0, TxCustomActionList.Empty.Count);
            Assert.Throws<IndexOutOfRangeException>(() => TxCustomActionList.Empty[0]);
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                TxCustomActionList.Empty.Bencoded);
        }

        [Fact]
        public void Constructor()
        {
            var emptyList = new TxCustomActionList(new IAction[0]);
            Assert.Equal(TxCustomActionList.Empty, emptyList);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxCustomActionList(actions);
            Assert.Equal(2, list.Count);
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Index()
        {
            var emptyList = new TxCustomActionList(new IAction[0]);
            Assert.Throws<ArgumentOutOfRangeException>(() => emptyList[-1]);
            Assert.Throws<IndexOutOfRangeException>(() => emptyList[0]);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxCustomActionList(actions);
            Assert.Throws<ArgumentOutOfRangeException>(() => list[-1]);
            Assert.Equal(actions[0].PlainValue, list[0]);
            Assert.Equal(actions[1].PlainValue, list[1]);
            Assert.Throws<IndexOutOfRangeException>(() => list[2]);
        }

        [Fact]
        public void Enumeration()
        {
            var emptyList = new TxCustomActionList(new IAction[0]);
            Assert.Empty(emptyList);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxCustomActionList(actions);
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Bencoded()
        {
            var emptyList = new TxCustomActionList(new IAction[0]);
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                emptyList.Bencoded);

            // TODO: We should introduce snapshot testing.
            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var actionList = new TxCustomActionList(actions);
            var expected = new List(actions.Select(action => action.PlainValue));
            AssertBencodexEqual(expected, actionList.Bencoded);

            var decoded = new TxCustomActionList(actionList.Bencoded);
            Assert.Equal(actionList, decoded);

            var invalidInput = Dictionary.Empty;
            Assert.Throws<ArgumentException>(() => new TxCustomActionList(invalidInput));
        }
    }
}
