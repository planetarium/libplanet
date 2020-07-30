using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests
{
    public class CurrencyTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        public static readonly Address AddressB =
            new Address("5003712B63baAB98094aD678EA2B24BcE445D076");

        [Fact]
        public void Constructor()
        {
            var foo = new Currency("FOO", ImmutableHashSet<Address>.Empty);
            Assert.Equal("FOO", foo.Ticker);
            Assert.Empty(foo.Minters);

            var bar = new Currency("\t BAR \n", ImmutableHashSet.Create(AddressA, AddressB));
            Assert.Equal("BAR", bar.Ticker);
            Assert.True(bar.Minters.SetEquals(new[] { AddressA, AddressB }));

            var baz = new Currency("baz", AddressA);
            Assert.Equal("baz", baz.Ticker);
            Assert.True(baz.Minters.SetEquals(new[] { AddressA }));

            var qux = new Currency("QUX", minters: null);
            Assert.Equal("QUX", qux.Ticker);
            Assert.Null(qux.Minters);

            var quux = new Currency("QUUX", minter: null);
            Assert.Equal("QUUX", quux.Ticker);
            Assert.Null(quux.Minters);

            Assert.Throws<ArgumentException>(() =>
                new Currency(string.Empty, ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                new Currency("   \n", ImmutableHashSet<Address>.Empty)
            );
        }

        [Fact]
        public void Hash()
        {
            Currency currency = new Currency(ticker: "GOLD", minter: AddressA);
            HashDigest<SHA1> expected =
                HashDigest<SHA1>.FromString("2ce0b92ff1c5e5631d73370ad2c45920c1ba9755");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(
                ticker: "NCG",
                minters: ImmutableHashSet.Create(AddressA, AddressB)
            );
            expected = HashDigest<SHA1>.FromString("1c978d2f95370e73ffe640e85baa51a6514122a3");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(
                ticker: "FOO",
                minters: ImmutableHashSet<Address>.Empty
            );
            expected = HashDigest<SHA1>.FromString("fccaa58d80d8388190ece63718af395d14857f88");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(ticker: "BAR", minter: null);
            expected = HashDigest<SHA1>.FromString("fd19100c874c062b73b9a93dbffeae7ae506ecd4");
            AssertBytesEqual(expected, currency.Hash);
        }

        [Fact]
        public void AllowsToMint()
        {
            Address addressC = new PrivateKey().ToAddress();
            Currency currency = new Currency(ticker: "FOO", minter: AddressA);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(
                ticker: "BAR",
                minters: ImmutableHashSet.Create(AddressA, AddressB)
            );
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(ticker: "BAZ", minters: ImmutableHashSet<Address>.Empty);
            Assert.False(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(ticker: "QUX", minter: null);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.True(currency.AllowsToMint(addressC));
        }

        [Fact]
        public void String()
        {
            Currency currency = new Currency(ticker: "GOLD", minter: AddressA);
            Assert.Equal("GOLD (2ce0b92ff1c5e5631d73370ad2c45920c1ba9755)", currency.ToString());
        }

        [Fact]
        public void Serializable()
        {
            var currency = new Currency(ticker: "GOLD", minter: AddressA);

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, currency);
                ms.Seek(0, SeekOrigin.Begin);

                var deserialized = (Currency)formatter.Deserialize(ms);
                Assert.Equal(currency.Hash, deserialized.Hash);
            }
        }
    }
}
