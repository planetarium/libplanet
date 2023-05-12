using System;
using System.Collections.Immutable;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class UnsignedTxTest
    {
        private static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Address AddressB =
            new Address("B61CE2Ce6d28237C1BC6E114616616762f1a12Ab");

        private static readonly PublicKey PublicKey = new PublicKey(
            ByteUtil.ParseHex(
                "03f804c12768bf9e05978ee37c56d037f68523fd9079642691eec82e233e1559bf"));

        private readonly TxInvoice _invoice;
        private readonly TxSigningMetadata _signingMetadata;

        public UnsignedTxTest()
        {
            var genesisHash = BlockHash.FromString(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            var updatedAddresses = ImmutableHashSet.Create(AddressA, AddressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                new DumbAction(AddressA, "foo"),
                new DumbAction(AddressB, "bar"),
            });
            _invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions
            );
            _signingMetadata = new TxSigningMetadata(PublicKey, 123L);
        }

        [Fact]
        public void Constructor()
        {
            var unsignedTx = new UnsignedTx(_invoice, _signingMetadata);
            Assert.Equal<ITxInvoice>(_invoice, unsignedTx);
            Assert.Equal<ITxSigningMetadata>(_signingMetadata, unsignedTx);

            unsignedTx = new UnsignedTx(
                (ITxInvoice)_invoice,
                (ITxSigningMetadata)_signingMetadata);
            Assert.Equal<ITxInvoice>(_invoice, unsignedTx);
            Assert.Equal<ITxSigningMetadata>(_signingMetadata, unsignedTx);
        }

        [Fact]
        public void CopyConstructor()
        {
            var original = new UnsignedTx(_invoice, _signingMetadata);
            var copy = new UnsignedTx(original);
            Assert.Equal<ITxInvoice>(_invoice, copy);
            Assert.Equal<ITxSigningMetadata>(_signingMetadata, copy);
        }

        [Fact]
        public void CreateSignature()
        {
            var unsignedTx = new UnsignedTx(_invoice, _signingMetadata);
            var privateKey =
                new PrivateKey("51fb8c2eb261ed761429c297dd1f8952c8ce327d2ec2ec5bcc7728e3362627c2");
            var wrongKey = new PrivateKey();
            ImmutableArray<byte> signature = unsignedTx.CreateSignature(privateKey);
            byte[] message = new Codec().Encode(unsignedTx.MarshalUnsignedTx());
            Assert.True(privateKey.PublicKey.Verify(message, signature));
            Assert.False(wrongKey.PublicKey.Verify(message, signature));

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => unsignedTx.CreateSignature(wrongKey));
            Assert.Equal("privateKey", e.ParamName);
        }

        [Fact]
        public void VerifySignature()
        {
            var unsignedTx = new UnsignedTx(_invoice, _signingMetadata);
            var privateKey =
                new PrivateKey("51fb8c2eb261ed761429c297dd1f8952c8ce327d2ec2ec5bcc7728e3362627c2");
            ImmutableArray<byte> signature = ByteUtil.ParseHexToImmutable(
                "304302206354e82d2cb88d63a1fd2fac0f458ce869b72bdc330cdc59d0ebebbea896c" +
                "80f021f5a0ba3a5b7a90c541c29ee52cf111d061e130c4141c1e2a67356bd81b4c0e8");
            Assert.True(unsignedTx.VerifySignature(signature));

            var wrongSignature = ByteUtil.ParseHexToImmutable(
                "304302206354e82d2cb88d63a1fd2fac0f458ce869b72bdc330cdc59d0ebebbea896c" +
                "80f021f5a0ba3a5b7a90c541c29ee52cf111d061e130c4141c1e2a67356bd81b4c0e9");
            Assert.False(unsignedTx.VerifySignature(wrongSignature));
        }

        [Fact]
        public void Equality()
        {
            var unsignedTx = new UnsignedTx(_invoice, _signingMetadata);
            Assert.Equal<ITxInvoice>(_invoice, unsignedTx);
            Assert.Equal<ITxSigningMetadata>(_signingMetadata, unsignedTx);
            var copy = new UnsignedTx(unsignedTx);
            Assert.Equal<IUnsignedTx>(unsignedTx, copy);
            Assert.Equal<UnsignedTx>(unsignedTx, copy);
            Assert.True(unsignedTx.Equals((object)copy));
            Assert.Equal(unsignedTx.GetHashCode(), copy.GetHashCode());

            var wrongKey = new PrivateKey();
            for (int i = 0; i < 6; i++)
            {
                var diffInvoice = new TxInvoice(
                    i == 0 ? (BlockHash?)null : _invoice.GenesisHash,
                    i == 1 ? null : _invoice.UpdatedAddresses,
                    i == 2 ? (DateTimeOffset?)DateTimeOffset.MinValue : _invoice.Timestamp,
                    i == 3 ? null : _invoice.Actions
                );
                var diffSigningMetadata = new TxSigningMetadata(
                    i == 4 ? wrongKey.PublicKey : _signingMetadata.PublicKey,
                    i == 5 ? 456L : _signingMetadata.Nonce
                );

                if (i < 4)
                {
                    Assert.NotEqual<ITxInvoice>(diffInvoice, unsignedTx);
                    Assert.Equal<ITxSigningMetadata>(diffSigningMetadata, unsignedTx);
                }
                else
                {
                    Assert.Equal<ITxInvoice>(diffInvoice, unsignedTx);
                    Assert.NotEqual<ITxSigningMetadata>(diffSigningMetadata, unsignedTx);
                }

                var diffUnsignedTx = new UnsignedTx(diffInvoice, diffSigningMetadata);
                Assert.NotEqual<IUnsignedTx>(unsignedTx, diffUnsignedTx);
                Assert.NotEqual<UnsignedTx>(unsignedTx, diffUnsignedTx);
                Assert.False(unsignedTx.Equals((object)diffUnsignedTx));
                Assert.NotEqual(unsignedTx.GetHashCode(), diffUnsignedTx.GetHashCode());
            }
        }

#pragma warning disable MEN002  // Long lines are OK for test JSON data.
        [Fact]
        public void JsonSerialization()
        {
            TestUtils.AssertJsonSerializable(
                new UnsignedTx(_invoice, _signingMetadata),
                @"
                    {
                      ""updatedAddresses"": [
                        ""B61CE2Ce6d28237C1BC6E114616616762f1a12Ab"",
                        ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9""
                      ],
                      ""timestamp"": ""2023-03-29T01:02:03.456\u002B00:00"",
                      ""genesisHash"": ""92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265"",
                      ""actions"": [
                        {
                          ""\uFEFFitem"": ""\uFEFFfoo"",
                          ""\uFEFFrecord_rehearsal"": false,
                          ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9""
                        },
                        {
                          ""\uFEFFitem"": ""\uFEFFbar"",
                          ""\uFEFFrecord_rehearsal"": false,
                          ""\uFEFFtarget_address"": ""0xb61ce2ce6d28237c1bc6e114616616762f1a12ab""
                        }
                      ],
                      ""nonce"": 123,
                      ""signer"": ""89F0eE48e8BeaE3131B17Dc79A1282A0D7EdC6b9"",
                      ""publicKey"": ""03f804c12768bf9e05978ee37c56d037f68523fd9079642691eec82e233e1559bf"",
                      ""maxGasPrice"": null, 
                      ""gasLimit"": null, 
                    }
                ",
                false);
        }
#pragma warning restore MEN002
    }
}
