using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxInvoiceTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        public static readonly Address AddressB =
            new Address("B61CE2Ce6d28237C1BC6E114616616762f1a12Ab");

        [Fact]
        public void ConstructorGasConditions()
        {
            var random = new System.Random();
            var genesisHash = random.NextBlockHash();
            var timestamp = DateTimeOffset.UtcNow;
            var actions = new TxActionList(Array.Empty<IValue>());

            _ = new TxInvoice(
                genesisHash: genesisHash,
                timestamp: timestamp,
                actions: actions,
                maxGasPrice: null,
                gasLimit: null);
            _ = new TxInvoice(
                genesisHash: genesisHash,
                timestamp: timestamp,
                actions: actions,
                maxGasPrice: Currency.Uncapped("DUMB", 0, null) * 100,
                gasLimit: 100);

            Assert.Throws<ArgumentException>(() =>
                new TxInvoice(
                    genesisHash: genesisHash,
                    timestamp: timestamp,
                    actions: actions,
                    maxGasPrice: Currency.Uncapped("DUMB", 0, null) * 100,
                    gasLimit: null));
            Assert.Throws<ArgumentException>(() =>
                new TxInvoice(
                    genesisHash: genesisHash,
                    timestamp: timestamp,
                    actions: actions,
                    maxGasPrice: null,
                    gasLimit: 100));
            Assert.Throws<ArgumentException>(() =>
                new TxInvoice(
                    genesisHash: genesisHash,
                    timestamp: timestamp,
                    actions: actions,
                    maxGasPrice: Currency.Uncapped("DUMB", 0, null) * -100,
                    gasLimit: 100));
            Assert.Throws<ArgumentException>(() =>
                new TxInvoice(
                    genesisHash: genesisHash,
                    timestamp: timestamp,
                    actions: actions,
                    maxGasPrice: Currency.Uncapped("DUMB", 0, null) * 100,
                    gasLimit: -100));
        }

        [Fact]
        public void PlainConstructor()
        {
            var random = new System.Random();
            var genesisHash = random.NextBlockHash();
            var updatedAddresses = ImmutableHashSet.Create(
                random.NextAddress(),
                random.NextAddress());
            var timestamp = DateTimeOffset.UtcNow;
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((random.NextAddress(), "foo")),
                DumbAction.Create((random.NextAddress(), "bar")),
            }.ToPlainValues());
            var invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            Assert.Equal(genesisHash, invoice.GenesisHash);
            Assert.True(updatedAddresses.SetEquals(invoice.UpdatedAddresses));
            Assert.Equal(timestamp, invoice.Timestamp);
            Assert.Equal(actions, invoice.Actions);
        }

        [Fact]
        public void ShortcutConstructor()
        {
            var before = DateTimeOffset.UtcNow;
            var invoice = new TxInvoice();
            var after = DateTimeOffset.UtcNow;
            Assert.Null(invoice.GenesisHash);
            Assert.Empty(invoice.UpdatedAddresses);
            Assert.InRange(invoice.Timestamp, before, after);
            Assert.IsType<TxActionList>(invoice.Actions);
            Assert.Empty(invoice.Actions);
        }

        [Fact]
        public void CopyConstructor()
        {
            var random = new System.Random();
            var genesisHash = random.NextBlockHash();
            var updatedAddresses = ImmutableHashSet.Create(
                random.NextAddress(),
                random.NextAddress());
            var timestamp = DateTimeOffset.UtcNow;
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((random.NextAddress(), "foo")),
                DumbAction.Create((random.NextAddress(), "bar")),
            }.ToPlainValues());
            var original = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            var copy = new TxInvoice(original);
            Assert.Equal(genesisHash, copy.GenesisHash);
            Assert.True(updatedAddresses.SetEquals(copy.UpdatedAddresses));
            Assert.Equal(timestamp, copy.Timestamp);
            Assert.Equal(actions, copy.Actions);

            var mock = new MockTxInvoice();
            var copyFromInterface = new TxInvoice(mock);
            Assert.Equal(mock.GenesisHash, copyFromInterface.GenesisHash);
            Assert.True(mock.UpdatedAddresses.SetEquals(copyFromInterface.UpdatedAddresses));
            Assert.Equal(mock.Timestamp, copyFromInterface.Timestamp);
            Assert.Equal(mock.Actions, copyFromInterface.Actions);
            Assert.Equal(mock.MaxGasPrice, copyFromInterface.MaxGasPrice);
            Assert.Equal(mock.GasLimit, copyFromInterface.GasLimit);
        }

        [Fact]
        public void Equality()
        {
            var genesisHash = BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            var updatedAddresses = ImmutableHashSet.Create(AddressA, AddressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((AddressA, "foo")),
                DumbAction.Create((AddressB, "bar")),
            }.ToPlainValues());
            var invoice1 = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            var invoice2 = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            Assert.True(invoice1.Equals(invoice2));
            Assert.True(invoice1.Equals((object)invoice2));
            Assert.Equal(invoice1.GetHashCode(), invoice2.GetHashCode());

            var mock = new MockTxInvoice();
            Assert.True(invoice1.Equals(mock));
            Assert.True(invoice1.Equals((object)mock));

            Assert.False(invoice1.Equals(null));

            for (int i = 0; i < 5; i++)
            {
                // NOTE: Non-null cases for MaxGasPrice and GasLimit are flipped as existing
                // mock object has respective values set to null.
                var invoice = new TxInvoice(
                    i == 0 ? (BlockHash?)null : genesisHash,
                    i == 1 ? (IImmutableSet<Address>)AddressSet.Empty : updatedAddresses,
                    i == 2 ? DateTimeOffset.MinValue : timestamp,
                    i == 3 ? TxActionList.Empty : actions,
                    i == 4
                        ? FungibleAssetValue.FromRawValue(
                            Currency.Uncapped("FOO", 18, new PrivateKey().Address),
                            100)
                        : (FungibleAssetValue?)null,
                    i == 4 ? 10 : (long?)null);
                Assert.False(invoice1.Equals(invoice));
                Assert.False(invoice1.Equals((object)invoice));
                Assert.NotEqual(invoice1.GetHashCode(), invoice.GetHashCode());
            }
        }

        [Fact]
        public void JsonSerialization()
        {
            var genesisHash = BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            var updatedAddresses = ImmutableHashSet.Create(AddressA, AddressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((AddressA, "foo")),
                DumbAction.Create((AddressB, "bar")),
            }.ToPlainValues());
            var invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                new FungibleAssetValue(
                    Currency.Uncapped("FOO", 18, AddressA),
                    1234,
                    5678),
                100
            );
#pragma warning disable MEN002  // Long lines are OK for test JSON data.
            TestUtils.AssertJsonSerializable(
                invoice,
                $@"
                    {{
                      ""genesisHash"": ""92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265"",
                      ""updatedAddresses"": [
                        ""B61CE2Ce6d28237C1BC6E114616616762f1a12Ab"",
                        ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9""
                      ],
                      ""timestamp"": ""2023-03-29T01:02:03.456\u002B00:00"",
                      ""actions"": [
                        {{
                          ""\uFEFFitem"": ""\uFEFFfoo"",
                          ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        }},
                        {{
                          ""\uFEFFitem"": ""\uFEFFbar"",
                          ""\uFEFFtarget_address"": ""0xb61ce2ce6d28237c1bc6e114616616762f1a12ab"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        }}
                      ],
                      ""maxGasPrice"": {{
                        ""quantity"": ""1234.000000000000005678"",
                        ""currency"": {{
                          ""maximumSupply"": null,
                          ""ticker"": ""FOO"",
                          ""decimalPlaces"": 18,
                          ""minters"": [
                            ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9""
                          ],
                          ""hash"": ""a0d19219acb8d69815b3d299393c48bc8a93e0ec"",
                          ""totalSupplyTrackable"": true
                        }}
                      }},
                      ""gasLimit"": 100,
                    }}
                ",
                false);
#pragma warning restore MEN002
        }

        private class MockTxInvoice : ITxInvoice
        {
            public IImmutableSet<Address> UpdatedAddresses =>
                ImmutableHashSet.Create(AddressA, AddressB);

            public DateTimeOffset Timestamp =>
                new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);

            public BlockHash? GenesisHash => BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");

            public TxActionList Actions => new TxActionList(new IAction[]
            {
                DumbAction.Create((AddressA, "foo")),
                DumbAction.Create((AddressB, "bar")),
            }.ToPlainValues());

            public FungibleAssetValue? MaxGasPrice => null;

            public long? GasLimit => null;

            bool IEquatable<ITxInvoice>.Equals(ITxInvoice other) => false;
        }
    }
}
