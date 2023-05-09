using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Tests.Queries;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    // TODO: test `blockRef`.
    public class TransactionTypeTest
    {
        [Fact]
        public async Task Query()
        {
            var privateKey = new PrivateKey();
            var transaction = Transaction.Create(
                0,
                privateKey,
                new BlockHash(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new[] { new NullAction() });
            var query =
                @"{
                    id
                    nonce
                    signer
                    publicKey
                    updatedAddresses
                    signature
                    timestamp
                }";

            ExecutionResult result =
                await ExecuteQueryAsync(
                    query,
                    new TransactionType<NullAction>(new MockBlockChainContext<NullAction>()),
                    source: transaction);
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode) result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(transaction.Id.ToHex(), resultData["id"]);
            Assert.Equal(
                ByteUtil.Hex(transaction.PublicKey.Format(true)),
                resultData["publicKey"]);
            Assert.Equal(transaction.Signer.ToString(), resultData["signer"]);
            Assert.Equal(ByteUtil.Hex(transaction.Signature), resultData["signature"]);
            Assert.Equal(transaction.Nonce, resultData["nonce"]);
            Assert.Equal(
                new DateTimeOffsetGraphType().Serialize(transaction.Timestamp),
                resultData["timestamp"]);
        }
    }
}
