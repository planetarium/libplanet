using System.Collections.Generic;
using System.Threading.Tasks;
using Bencodex;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using Libplanet.Explorer.Queries;
using Xunit;
using Fixture = Libplanet.Explorer.Tests.Fixtures.BlockChainStatesFixture;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class RawStateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task StateValue()
    {
        // Check value at address path.
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(0);
        var key
            = "35303033373132623633626161623938303934616436373865613262323462636534343564303736";
        ExecutionResult result = await ExecuteQueryAsync<RawStateQuery>($@"
        {{
            trie(stateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                value(key: ""{key}"") {{
                    hex
                }}
            }}
        }}
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
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(value["hex"]));

        result = await ExecuteQueryAsync<RawStateQuery>($@"
        {{
            trie(stateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                value(key: ""5f5f5f"") {{
                    hex
                }}
            }}
        }}
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
            ByteUtil.Hex(_codec.Encode(Fixture.ValidatorSet.Bencoded)),
            Assert.IsAssignableFrom<string>(value["hex"]));
    }
}
