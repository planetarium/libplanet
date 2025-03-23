using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TransactionExtensionsTest
    {
        private static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Address AddressB =
            new Address("B61CE2Ce6d28237C1BC6E114616616762f1a12Ab");

        [Fact]
        public void Sign()
        {
            var genesisHash = BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            var updatedAddresses = ImmutableHashSet.Create(AddressA, AddressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((AddressA, "foo")),
                DumbAction.Create((AddressB, "bar")),
            }.Select(x => x.PlainValue));
            var invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            var privateKey =
                new PrivateKey("51fb8c2eb261ed761429c297dd1f8952c8ce327d2ec2ec5bcc7728e3362627c2");
            Transaction tx = invoice.Sign(privateKey, 123L);
            Assert.Equal<ITxInvoice>(invoice, tx);
            Assert.Equal<ITxSigningMetadata>(new TxSigningMetadata(privateKey.PublicKey, 123L), tx);
            Assert.True(new UnsignedTx(tx).VerifySignature(tx.Signature.ToImmutableArray()));
        }
    }
}
