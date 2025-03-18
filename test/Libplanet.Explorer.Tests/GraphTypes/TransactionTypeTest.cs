using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Tests.Queries;
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
                new[] { new NullAction() }.ToPlainValues());
            var query =
                @"{
                    id
                    nonce
                    signer
                    updatedAddresses
                    signature
                    timestamp
                    actions {
                      inspection
                    }
                }";

            ExecutionResult result =
                await ExecuteQueryAsync(
                    query,
                    new TransactionType(new MockBlockChainContext()),
                    source: transaction);
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode) result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(transaction.Id.ToHex(), resultData["id"]);
            Assert.Equal(transaction.Signer.ToString(), resultData["signer"]);
            Assert.Equal(ByteUtil.Hex(transaction.Signature), resultData["signature"]);
            Assert.Equal(transaction.Nonce, resultData["nonce"]);
            Assert.Equal(
                new DateTimeOffsetGraphType().Serialize(transaction.Timestamp),
                resultData["timestamp"]);
            var actions = Assert.IsType<Dictionary<string, object>>(
                ((object[])resultData["actions"])[0]);
            Assert.Equal(
                transaction.Actions[0].Inspect(),
                actions["inspection"]);
        }
    }
}
