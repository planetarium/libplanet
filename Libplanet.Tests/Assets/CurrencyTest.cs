using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Assets;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Assets
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
            var foo = new Currency("FOO", 2, ImmutableHashSet<Address>.Empty);
            Assert.Equal("FOO", foo.Ticker);
            Assert.Equal(2, foo.DecimalPlaces);
            Assert.Empty(foo.Minters);

            var bar = new Currency("\t BAR \n", 0, ImmutableHashSet.Create(AddressA, AddressB));
            Assert.Equal("BAR", bar.Ticker);
            Assert.Equal(0, bar.DecimalPlaces);
            Assert.True(bar.Minters.SetEquals(new[] { AddressA, AddressB }));

            var baz = new Currency("baz", 1, AddressA);
            Assert.Equal("baz", baz.Ticker);
            Assert.Equal(1, baz.DecimalPlaces);
            Assert.True(baz.Minters.SetEquals(new[] { AddressA }));

            var qux = new Currency("QUX", decimalPlaces: 0, minters: null);
            Assert.Equal("QUX", qux.Ticker);
            Assert.Equal(0, qux.DecimalPlaces);
            Assert.Null(qux.Minters);

            var quux = new Currency("QUUX", decimalPlaces: 3, minter: null);
            Assert.Equal("QUUX", quux.Ticker);
            Assert.Equal(3, quux.DecimalPlaces);
            Assert.Null(quux.Minters);

            Assert.Throws<ArgumentException>(() =>
                new Currency(string.Empty, 0, ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                new Currency("   \n", 1, ImmutableHashSet<Address>.Empty)
            );
        }

        [Fact]
        public void Hash()
        {
            Currency currency = new Currency(ticker: "GOLD", decimalPlaces: 2, minter: AddressA);
            HashDigest<SHA1> expected =
                HashDigest<SHA1>.FromString("81446cd346c1be9e686835742bfd3772194dea21");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(
                ticker: "NCG",
                decimalPlaces: 8,
                minters: ImmutableHashSet.Create(AddressA, AddressB)
            );
            expected = HashDigest<SHA1>.FromString("42ce3a098fe14084e89d3d4449f56126693aeed1");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(
                ticker: "FOO",
                decimalPlaces: 0,
                minters: ImmutableHashSet<Address>.Empty
            );
            expected = HashDigest<SHA1>.FromString("801990ea2885bd51eebca0e826cc0e27f0917a9b");
            AssertBytesEqual(expected, currency.Hash);

            currency = new Currency(ticker: "BAR", decimalPlaces: 1, minter: null);
            expected = HashDigest<SHA1>.FromString("da42781871890f1e1b7d6f49c7f2733d3ba7b8bd");
            AssertBytesEqual(expected, currency.Hash);
        }

        [Fact]
        public void AllowsToMint()
        {
            Address addressC = new PrivateKey().ToAddress();
            Currency currency = new Currency(ticker: "FOO", decimalPlaces: 0, minter: AddressA);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(
                ticker: "BAR",
                decimalPlaces: 2,
                minters: ImmutableHashSet.Create(AddressA, AddressB)
            );
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(
                ticker: "BAZ",
                decimalPlaces: 0,
                minters: ImmutableHashSet<Address>.Empty
            );
            Assert.False(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = new Currency(ticker: "QUX", decimalPlaces: 3, minter: null);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.True(currency.AllowsToMint(addressC));
        }

        [Fact]
        public void String()
        {
            Currency currency = new Currency(ticker: "GOLD", decimalPlaces: 0, minter: AddressA);
            Assert.Equal("GOLD (688ded7b7ae6e551e14e58ec23fef3540d442a35)", currency.ToString());
        }

        [Fact]
        public void Serializable()
        {
            var currency = new Currency(ticker: "GOLD", decimalPlaces: 2, minter: AddressA);

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, currency);
                ms.Seek(0, SeekOrigin.Begin);

                var deserialized = (Currency)formatter.Deserialize(ms);
                Assert.Equal(currency.Hash, deserialized.Hash);
            }
        }

        [Fact]
        public void Equal()
        {
            var currencyA = new Currency(ticker: "GOLD", decimalPlaces: 0, minter: AddressA);
            var currencyB = new Currency(ticker: "GOLD", decimalPlaces: 0, minter: AddressA);
            var currencyC = new Currency(ticker: "GOLD", decimalPlaces: 1, minter: AddressA);
            var currencyD = new Currency(ticker: "GOLD", decimalPlaces: 0, minter: AddressB);
            var currencyE = new Currency(ticker: "SILVER", decimalPlaces: 2, minter: AddressA);

            Assert.Equal(currencyA, currencyA);
            Assert.Equal(currencyA, currencyB);
            Assert.NotEqual(currencyA, currencyC);
            Assert.NotEqual(currencyA, currencyD);
            Assert.NotEqual(currencyA, currencyE);
        }

        [Fact]
        public void GetFungibleAssetValue()
        {
            var foo = new Currency(ticker: "FOO", decimalPlaces: 0, minter: null);
            Assert.Equal(new FungibleAssetValue(foo, 123, 0), 123 * foo);
            Assert.Equal(new FungibleAssetValue(foo, -123, 0), foo * -123);
        }
    }
}
