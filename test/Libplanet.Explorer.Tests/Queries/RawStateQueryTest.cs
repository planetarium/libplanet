using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.Queries;
using Libplanet.Mocks;
using Libplanet.Types.Consensus;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class RawStateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task StateValue()
    {
        // Check value at address path.
        IBlockChainStates source = new StateQueryTest.MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<RawStateQuery>(@"
        {
            trie(stateRootHash: ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"") {
                value(key: ""35303033373132623633626161623938303934616436373865613262323462636534343564303736"") {
                    hex
                }
            }
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> trie =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["trie"]);
        IDictionary<string, object> value =
            Assert.IsAssignableFrom<IDictionary<string, object>>(trie["value"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(value["hex"]));

        // Check value at validator set path.
        ValidatorSet validatorSet = new ValidatorSet(new List<Validator>()
        {
            new Validator(
                PublicKey.FromHex(
                    "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                new BigInteger(1))
        });
        result = await ExecuteQueryAsync<RawStateQuery>(@"
        {
            trie(stateRootHash: ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"") {
                value(key: ""5f5f5f"") {
                    hex
                }
            }
        }
        ", source: source);
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        trie =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["trie"]);
        value =
            Assert.IsAssignableFrom<IDictionary<string, object>>(trie["value"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(validatorSet.Bencoded)),
            Assert.IsAssignableFrom<string>(value["hex"]));
    }
}
