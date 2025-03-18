using System;
using System.Collections.Immutable;
using System.Text;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
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
                DumbAction.Create((AddressA, "foo")),
                DumbAction.Create((AddressB, "bar")),
            }.ToPlainValues());
            _invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
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
            byte[] message = Encoding.UTF8.GetBytes(unsignedTx.SerializeUnsignedTxToJson());
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
            var signature = ByteUtil.ParseHexToImmutable(
                "6624cbd4281c0fb29d73f7912f8bec6a9bf4be4b73538148e5ef0352885906c54" +
                "f05d12acbe0cf6afd8665b744db99a2a4a54cb473f9ac0077b93cc614e806a91c");
            var wrongSignature = ByteUtil.ParseHexToImmutable(
                "3045022100e4df322ba35e0e5ed96043b1c214e4a0f23734a7491b5db4c4a88834d3f47" +
                "48a0220691b0972641a8759ac921b731e5750c20505f05fd993d45b24eb989de33018b1");
            Assert.True(unsignedTx.VerifySignature(signature));
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
                    i == 1 ? AddressSet.Empty : _invoice.UpdatedAddresses,
                    i == 2 ? DateTimeOffset.MinValue : _invoice.Timestamp,
                    i == 3 ? TxActionList.Empty : _invoice.Actions,
                    null,
                    null);
                var diffSigningMetadata = new TxSigningMetadata(
                    i == 4 ? wrongKey.Address : _signingMetadata.Signer,
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
                          ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        },
                        {
                          ""\uFEFFitem"": ""\uFEFFbar"",
                          ""\uFEFFtarget_address"": ""0xb61ce2ce6d28237c1bc6e114616616762f1a12ab"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        }
                      ],
                      ""nonce"": 123,
                      ""signer"": ""89F0eE48e8BeaE3131B17Dc79A1282A0D7EdC6b9"",
                      ""maxGasPrice"": null,
                      ""gasLimit"": null,
                    }
                ",
                false);
        }
#pragma warning restore MEN002
    }
}
