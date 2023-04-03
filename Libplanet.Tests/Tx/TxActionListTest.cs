using System;
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

        [Fact]
        public void JsonSerialize()
        {
            var systemActionList = new TxSystemActionList(new Mint(AddressA, FOO * 100));
            var customActionList = new TxCustomActionList(
                new IAction[]
                {
                    new DumbAction(default, "foo"),
                    new DumbAction(AddressA, "bar"),
                });
            var emptyCustomActionList = new TxCustomActionList(Array.Empty<IAction>());
#pragma warning disable MEN002  // Long lines are OK for test JSON data.
            var systemActonListJson = @"
                [
                  {
                    ""plainValue"": {
                      ""kind"": 6,
                      ""fingerprint"": {
                        ""kind"": 6,
                        ""encodingLength"": 131,
                        ""digest"": [
                          233,
                          238,
                          22,
                          202,
                          35,
                          133,
                          244,
                          161,
                          82,
                          50,
                          123,
                          59,
                          64,
                          133,
                          111,
                          140,
                          117,
                          217,
                          106,
                          32
                        ]
                      },
                      ""encodingLength"": 131,
                      ""inspection"": ""{\n  \u0022amount\u0022: 10000,\n  \u0022currency\u0022: {\n    \u0022decimals\u0022: 2,\n    \u0022minters\u0022: null,\n    \u0022ticker\u0022: \u0022FOO\u0022,\n    \u0022totalSupplyTrackable\u0022: true,\n  },\n  \u0022recipient\u0022: b\u0022\\xd6\\xd6\\x39\\xda\\x5a\\x58\\xa7\\x8a\\x56\\x4c\\x2c\\xd3\\xdb\\x55\\xfa\\x7c\\xeb\\xe2\\x44\\xa9\u0022,\n}""
                    }
                  }
                ]
            ";
            TestUtils.AssertJsonSerializable<TxActionList>(
                systemActionList,
                systemActonListJson,
                false);
            TestUtils.AssertJsonSerializable<TxActionList>(
                customActionList,
                @"
                    [
                      {
                        ""plainValue"": {
                          ""kind"": 6,
                          ""fingerprint"": {
                            ""kind"": 6,
                            ""encodingLength"": 77,
                            ""digest"": [
                              140,
                              91,
                              77,
                              65,
                              16,
                              32,
                              100,
                              50,
                              163,
                              84,
                              34,
                              47,
                              95,
                              156,
                              249,
                              124,
                              116,
                              160,
                              56,
                              216
                            ]
                          },
                          ""encodingLength"": 77,
                          ""inspection"": ""{\n  \u0022item\u0022: \u0022foo\u0022,\n  \u0022record_rehearsal\u0022: false,\n  \u0022target_address\u0022: b\u0022\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\u0022,\n}""
                        }
                      },
                      {
                        ""plainValue"": {
                          ""kind"": 6,
                          ""fingerprint"": {
                            ""kind"": 6,
                            ""encodingLength"": 77,
                            ""digest"": [
                              212,
                              177,
                              215,
                              156,
                              108,
                              104,
                              218,
                              104,
                              254,
                              181,
                              29,
                              35,
                              51,
                              128,
                              228,
                              195,
                              148,
                              154,
                              79,
                              180
                            ]
                          },
                          ""encodingLength"": 77,
                          ""inspection"": ""{\n  \u0022item\u0022: \u0022bar\u0022,\n  \u0022record_rehearsal\u0022: false,\n  \u0022target_address\u0022: b\u0022\\xd6\\xd6\\x39\\xda\\x5a\\x58\\xa7\\x8a\\x56\\x4c\\x2c\\xd3\\xdb\\x55\\xfa\\x7c\\xeb\\xe2\\x44\\xa9\u0022,\n}""
                        }
                      }
                    ]
                ",
                false);
            TestUtils.AssertJsonSerializable<TxActionList>(emptyCustomActionList, "[]", false);
#pragma warning restore MEN002
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
