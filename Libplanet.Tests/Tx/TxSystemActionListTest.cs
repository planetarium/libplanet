using System;
using Bencodex;
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
            Mint mint = Assert.IsType<Mint>(list.SystemAction);
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
            Mint mint = Assert.IsType<Mint>(list[0]);
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
            Assert.Equal(sysAction, item);
        }

        [Fact]
        public void ToBencodex()
        {
            var sysAction = new Mint(AddressA, FOO * 100);
            var list = new TxSystemActionList(sysAction);

            // TODO: We should introduce snapshot testing.
            var expected = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x41 },
                Bencodex.Types.Dictionary.Empty
                    .Add("type_id", 0)
                    .Add("values", Bencodex.Types.Dictionary.Empty
                        .Add(
                            "recipient",
                            Binary.FromHex("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9"))
                        .Add("currency", FOO.Serialize())
                        .Add("amount", (FOO * 100).RawValue)));
            AssertBencodexEqual(expected, list.ToBencodex());
        }

        [Fact]
        public void FromBencodex()
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

            var list = TxSystemActionList.FromBencodex(input);
            var sysAction = Assert.IsType<Mint>(list.SystemAction);
            var expected = new Mint(AddressA, FOO * 100);
            Assert.Equal(expected, sysAction);

            var invalidInput = Bencodex.Types.Dictionary.Empty.Add(
                new byte[] { 0x61 },
                Bencodex.Types.List.Empty);
            Assert.Throws<DecodingException>(
                () => TxSystemActionList.FromBencodex(invalidInput));
        }
    }
}
