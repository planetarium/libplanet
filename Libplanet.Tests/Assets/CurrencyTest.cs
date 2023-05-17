using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Bencodex.Types;
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
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            var foo = Currency.Legacy("FOO", 2, ImmutableHashSet<Address>.Empty);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            Assert.Equal("FOO", foo.Ticker);
            Assert.Equal(2, foo.DecimalPlaces);
            Assert.Null(foo.MaximumSupply);
            Assert.Empty(foo.Minters);
            Assert.False(foo.TotalSupplyTrackable);

            var bar = Currency.Capped(
                "\t BAR \n",
                0,
                (100, 0),
                ImmutableHashSet.Create(AddressA, AddressB));
            Assert.Equal("BAR", bar.Ticker);
            Assert.Equal(0, bar.DecimalPlaces);
            Assert.Equal(new FungibleAssetValue(bar, 100, 0), bar.MaximumSupply);
            Assert.True(bar.Minters.SetEquals(new[] { AddressA, AddressB }));
            Assert.True(bar.TotalSupplyTrackable);

            var baz = Currency.Uncapped("baz", 1, AddressA);
            Assert.Equal("baz", baz.Ticker);
            Assert.Equal(1, baz.DecimalPlaces);
            Assert.Null(baz.MaximumSupply);
            Assert.True(baz.Minters.SetEquals(new[] { AddressA }));
            Assert.True(baz.TotalSupplyTrackable);

            var qux = Currency.Uncapped("QUX", 0, null);
            Assert.Equal("QUX", qux.Ticker);
            Assert.Null(qux.MaximumSupply);
            Assert.Equal(0, qux.DecimalPlaces);
            Assert.Null(qux.Minters);
            Assert.True(qux.TotalSupplyTrackable);

            var quux = Currency.Capped("QUUX", 3, (100, 0), null);
            Assert.Equal("QUUX", quux.Ticker);
            Assert.Equal(3, quux.DecimalPlaces);
            Assert.Equal(new FungibleAssetValue(quux, 100, 0), quux.MaximumSupply);
            Assert.Null(quux.Minters);
            Assert.True(qux.TotalSupplyTrackable);

            Assert.Throws<ArgumentException>(() =>
                Currency.Uncapped(string.Empty, 0, ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                Currency.Uncapped("   \n", 1, ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                Currency.Capped("TEST", 0, (100, 1), ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                Currency.Capped("TEST", 1, (-100, 1), ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                Currency.Capped("TEST", 1, (100, -1), ImmutableHashSet<Address>.Empty)
            );
            Assert.Throws<ArgumentException>(() =>
                Currency.Capped("TEST", 1, (-100, -1), ImmutableHashSet<Address>.Empty)
            );
        }

        [Fact]
        public void Hash()
        {
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            Currency currency = Currency.Legacy("GOLD", 2, AddressA);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            HashDigest<SHA1> expected =
                HashDigest<SHA1>.FromString("81446cd346c1be9e686835742bfd3772194dea21");
            AssertBytesEqual(expected, currency.Hash);

#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            currency = Currency.Legacy("NCG", 8, ImmutableHashSet.Create(AddressA, AddressB));
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            expected = HashDigest<SHA1>.FromString("42ce3a098fe14084e89d3d4449f56126693aeed1");
            AssertBytesEqual(expected, currency.Hash);

#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            currency = Currency.Legacy("FOO", 0, ImmutableHashSet<Address>.Empty);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            expected = HashDigest<SHA1>.FromString("801990ea2885bd51eebca0e826cc0e27f0917a9b");
            AssertBytesEqual(expected, currency.Hash);

#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            currency = Currency.Legacy("BAR", 1, null);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            expected = HashDigest<SHA1>.FromString("da42781871890f1e1b7d6f49c7f2733d3ba7b8bd");
            AssertBytesEqual(expected, currency.Hash);

            currency = Currency.Uncapped("BAZ", 1, null);
            expected = HashDigest<SHA1>.FromString("d7fe111cae5b2503939c9bce864ca3b64d575e8d");
            AssertBytesEqual(expected, currency.Hash);

            currency = Currency.Capped("BAZ", 1, (100, 0), null);
            expected = HashDigest<SHA1>.FromString("38bd85ea71c09ca7ed82b61fe91bc205101db191");
            AssertBytesEqual(expected, currency.Hash);
        }

        [Fact]
        public void AllowsToMint()
        {
            Address addressC = new PrivateKey().ToAddress();
            Currency currency = Currency.Uncapped("FOO", 0, AddressA);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = Currency.Uncapped("BAR", 2, ImmutableHashSet.Create(AddressA, AddressB));
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = Currency.Uncapped("BAZ", 0, ImmutableHashSet<Address>.Empty);
            Assert.False(currency.AllowsToMint(AddressA));
            Assert.False(currency.AllowsToMint(AddressB));
            Assert.False(currency.AllowsToMint(addressC));

            currency = Currency.Uncapped("QUX", 3, null);
            Assert.True(currency.AllowsToMint(AddressA));
            Assert.True(currency.AllowsToMint(AddressB));
            Assert.True(currency.AllowsToMint(addressC));
        }

        [Fact]
        public void String()
        {
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            Currency currency = Currency.Legacy("GOLD", 0, AddressA);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            Assert.Equal("GOLD (688ded7b7ae6e551e14e58ec23fef3540d442a35)", currency.ToString());

            currency = Currency.Uncapped("GOLD", 0, AddressA);
            Assert.Equal("GOLD (a418b63455695d932ed154d5ce59575ea7cbb1f0)", currency.ToString());

            currency = Currency.Capped("GOLD", 0, (100, 0), AddressA);
            Assert.Equal("GOLD (f0fd50b87b39d9f24c0922551e59914dbbeb3544)", currency.ToString());
        }

        [Fact]
        public void Serializable()
        {
            var currencies = new[]
            {
                Currency.Uncapped("GOLD", 2, AddressA),
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
                Currency.Legacy("GOLD", 2, AddressA),
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
                Currency.Capped("GOLD", 2, (100, 0), AddressA),
            };

            var formatter = new BinaryFormatter();
            foreach (var currency in currencies)
            {
                using (var ms = new MemoryStream())
                {
                    formatter.Serialize(ms, currency);
                    ms.Seek(0, SeekOrigin.Begin);

                    var deserialized = (Currency)formatter.Deserialize(ms);
                    Assert.Equal(currency.Hash, deserialized.Hash);
                }
            }
        }

        [Fact]
        public void Equal()
        {
            var currencyA = Currency.Uncapped("GOLD", 0, AddressA);
            var currencyB = Currency.Uncapped("GOLD", 0, AddressA);
            var currencyC = Currency.Uncapped("GOLD", 1, AddressA);
            var currencyD = Currency.Uncapped("GOLD", 0, AddressB);
            var currencyE = Currency.Uncapped("SILVER", 2, AddressA);
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            var currencyF = Currency.Legacy("GOLD", 0, AddressA);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            var currencyG = Currency.Capped("GOLD", 0, (100, 0), AddressA);
            var currencyH = Currency.Capped("GOLD", 0, (200, 0), AddressA);
            var currencyI = Currency.Capped("SILVER", 0, (200, 0), AddressA);

            Assert.Equal(currencyA, currencyA);
            Assert.Equal(currencyA, currencyB);
            Assert.NotEqual(currencyA, currencyC);
            Assert.NotEqual(currencyA, currencyD);
            Assert.NotEqual(currencyA, currencyE);
            Assert.NotEqual(currencyA, currencyF);
            Assert.NotEqual(currencyA, currencyG);
            Assert.NotEqual(currencyG, currencyH);
            Assert.NotEqual(currencyH, currencyI);
        }

        [Fact]
        public void GetFungibleAssetValue()
        {
            var foo = Currency.Uncapped("FOO", 0, null);
            Assert.Equal(new FungibleAssetValue(foo, 123, 0), 123 * foo);
            Assert.Equal(new FungibleAssetValue(foo, -123, 0), foo * -123);
        }

        [Fact]
        public void Serialize()
        {
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            var foo = Currency.Legacy("FOO", 2,  null);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility

            Assert.Equal(
                Dictionary.Empty
                    .Add("ticker", "FOO")
                    .Add("decimalPlaces", new byte[] { 2 })
                    .Add("minters", Null.Value),
                foo.Serialize());
            Assert.Equal(
                Dictionary.Empty
                    .Add("ticker", "FOO")
                    .Add("decimals", 2)
                    .Add("minters", Null.Value),
                foo.Serialize(hash: true));

            Assert.Equal(foo, new Currency(foo.Serialize()));

            var bar =
                Currency.Capped("BAR", 0, (100, 0), ImmutableHashSet.Create(AddressA, AddressB));

            Assert.Equal(
                Dictionary.Empty
                    .Add("ticker", "BAR")
                    .Add("decimalPlaces", new byte[] { 0 })
                    .Add("maximumSupplyMajor", 100)
                    .Add("maximumSupplyMinor", 0)
                    .Add(
                        "minters",
                        List.Empty.Add(AddressB.ToByteArray()).Add(AddressA.ToByteArray()))
                    .Add("totalSupplyTrackable", true),
                bar.Serialize());
            Assert.Equal(
                Dictionary.Empty
                    .Add("ticker", "BAR")
                    .Add("decimals", 0)
                    .Add("maximumSupplyMajor", 100)
                    .Add("maximumSupplyMinor", 0)
                    .Add(
                        "minters",
                        List.Empty.Add(AddressB.ToByteArray()).Add(AddressA.ToByteArray()))
                    .Add("totalSupplyTrackable", true),
                bar.Serialize(hash: true));

            Assert.Equal(bar, new Currency(bar.Serialize()));
        }

        [SkippableFact]
        public void JsonSerialization()
        {
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            var foo = Currency.Legacy("FOO", 2, null);
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
            AssertJsonSerializable(foo, @"
                {
                    ""hash"": ""8db87f973776e2218113202e00e09e185fff8971"",
                    ""ticker"": ""FOO"",
                    ""decimalPlaces"": 2,
                    ""minters"": null,
                    ""maximumSupply"": null,
                    ""totalSupplyTrackable"": false,
                }
            ");

            var bar =
                Currency.Capped("BAR", 0, (100, 0), ImmutableHashSet.Create(AddressA, AddressB));
            AssertJsonSerializable(bar, @"
                {
                    ""hash"": ""e4ee30562819a9e74be40098c76f84209d05da5e"",
                    ""ticker"": ""BAR"",
                    ""decimalPlaces"": 0,
                    ""minters"": [
                        ""5003712B63baAB98094aD678EA2B24BcE445D076"",
                        ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9"",
                    ],
                    ""maximumSupply"": ""100.0"",
                    ""totalSupplyTrackable"": true,
                }
            ");
        }
    }
}
