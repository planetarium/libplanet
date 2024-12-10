using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Libplanet.Explorer.Queries;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;
using Libplanet.Action.Loader;
using Libplanet.Types.Evidence;
using Libplanet.Types.Blocks;
using System.Globalization;

namespace Libplanet.Explorer.Tests.Queries;

public class EvidenceQueryTest
{
    private readonly GeneratedBlockChainFixture _fixture;
    private readonly MockBlockChainContext _source;
    private readonly EvidenceQuery _queryGraph;

    public EvidenceQueryTest()
    {
        _fixture = new GeneratedBlockChainFixture(seed: 0);
        _source = new MockBlockChainContext(_fixture.Chain);
        _queryGraph = new EvidenceQuery();
        var _ = new ExplorerQuery(_source);
    }

    [Fact]
    public async Task ExecuteAsync()
    {
        var blocks = GetBlocks().ToArray();
        var block = blocks[System.Random.Shared.Next(blocks.Length)];

        var result = await ExecuteQueryAsync(@$"
        {{
            committedEvidence(
                index: {block.Index}
            ) {{
                id
                type
                height
                targetAddress
                timestamp
            }}
         }}
         ", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        var resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        var resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        var evidenceData = (object[])resultDict["committedEvidence"];
        Assert.Equal(block.Evidence.Count, evidenceData.Length);

        for (var i = 0; i < block.Evidence.Count; i++)
        {
            var evidence = block.Evidence[i];
            var data = (IDictionary<string, object>)evidenceData[i];
            Assert.Equal(evidence.Id.ToString(), data["id"]);
            Assert.Equal(evidence.GetType().FullName, data["type"]);
            Assert.Equal(evidence.Height, data["height"]);
            Assert.Equal(evidence.TargetAddress.ToString(), data["targetAddress"]);
            Assert.Equal(
                new DateTimeOffsetGraphType().Serialize(evidence.Timestamp),
                data["timestamp"]);
            // Assert.Equal(block.Evidence[i].Id.ToString(), ((IList<IDictionary<string, object>>)resultDict["committedEvidence"])[i]["id"]);
        }
    }

    private IEnumerable<Block> GetBlocks()
    {
        for (var i = 0; i < _fixture.Chain.Count; i++)
        {
            var block = _fixture.Chain[i];
            if (block.Evidence.Count > 0)
            {
                yield return block;
            }
        }
    }
}
