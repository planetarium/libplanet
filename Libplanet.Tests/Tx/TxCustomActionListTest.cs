using System;
using System.Collections.Generic;
using Bencodex;
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
                Bencodex.Types.Dictionary.Empty.Add(
                    new byte[] { 0x61 },
                    Bencodex.Types.List.Empty
                ),
                TxCustomActionList.Empty.ToBencodex()
            );
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
            Assert.Equal<IEnumerable<IAction>>(actions, list);
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
            Assert.Equal(actions[0], list[0]);
            Assert.Equal(actions[1], list[1]);
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
            Assert.Equal<IEnumerable<IAction>>(actions, list);
        }

        [Fact]
        public void ToBencodex()
        {
            var emptyList = new TxCustomActionList(new IAction[0]);
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty.Add(
                    new byte[] { 0x61 },
                    Bencodex.Types.List.Empty),
                emptyList.ToBencodex()
            );

            // TODO: We should introduce snapshot testing.
            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxCustomActionList(actions);
            AssertBencodexEqual(
                Bencodex.Types.Dictionary.Empty.Add(
                    new byte[] { 0x61 },
                    Bencodex.Types.List.Empty
                        .Add(actions[0].PlainValue)
                        .Add(actions[1].PlainValue)),
                list.ToBencodex()
            );
        }

        [Fact]
        public void FromBencodex()
        {
            var emptyInput = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x61 },
                Bencodex.Types.List.Empty);
            Assert.Equal(
                TxCustomActionList.Empty,
                TxCustomActionList.FromBencodex<DumbAction>(emptyInput));

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var input = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x61 },
                Bencodex.Types.List.Empty
                    .Add(actions[0].PlainValue)
                    .Add(actions[1].PlainValue));
            var list = TxCustomActionList.FromBencodex<DumbAction>(input);
            Assert.Equal(2, list.Count);
            Assert.Equal(actions[0], list[0]);
            Assert.Equal(actions[1], list[1]);

            var invalidInput = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x41 },
                Bencodex.Types.Dictionary.Empty);
            Assert.Throws<DecodingException>(
                () => TxCustomActionList.FromBencodex<DumbAction>(invalidInput));
        }
    }
}
