using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Execution;
using Libplanet.Explorer.Queries;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;
using Libplanet.Types.Blocks;
using System;
using Libplanet.Tests.Blockchain.Evidence;
using Libplanet.Crypto;
using Libplanet.Types.Evidence;

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
    public async Task ExecuteCommittedEvidenceByHeightAsync()
    {
        var blocks = GetBlocks().ToArray();
        var block = blocks[Random.Shared.Next(blocks.Length)];

        var result = await ExecuteQueryAsync(@$"{{
            committedEvidence(
                index: {block.Index}) {{
                id
                type
                height
                targetAddress
                timestamp
            }}
        }}", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        var resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        var resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData.ToValue());
        var resultEvidence = Assert.IsAssignableFrom<object[]>(resultDict["committedEvidence"]);

        for (var i = 0; i < block.Evidence.Count; i++)
        {
            var evidence = block.Evidence[i];
            var resultEvidenceDict
                = Assert.IsAssignableFrom<IDictionary<string, object>>(resultEvidence[i]);
            Assert.Equal(evidence.Id.ToString(), resultEvidenceDict["id"]);
            Assert.Equal(evidence.GetType().FullName, resultEvidenceDict["type"]);
            Assert.Equal(evidence.Height, resultEvidenceDict["height"]);
            Assert.Equal(evidence.TargetAddress.ToString(), resultEvidenceDict["targetAddress"]);
            Assert.Equal(
                evidence.Timestamp, DateTimeOffset.Parse($"{resultEvidenceDict["timestamp"]}"));
        }
    }

    [Fact]
    public async Task ExecuteCommittedEvidenceByHashAsync()
    {
        var blocks = GetBlocks().ToArray();
        var block = blocks[Random.Shared.Next(blocks.Length)];

        var result = await ExecuteQueryAsync(@$"{{
            committedEvidence(
                hash: ""{block.Hash}"") {{
                id
                type
                height
                targetAddress
                timestamp
            }}
        }}", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        var resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        var resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData.ToValue());
        var resultEvidence = Assert.IsAssignableFrom<object[]>(resultDict["committedEvidence"]);

        for (var i = 0; i < block.Evidence.Count; i++)
        {
            var evidence = block.Evidence[i];
            var resultEvidenceDict
                = Assert.IsAssignableFrom<IDictionary<string, object>>(resultEvidence[i]);
            Assert.Equal(evidence.Id.ToString(), resultEvidenceDict["id"]);
            Assert.Equal(evidence.GetType().FullName, resultEvidenceDict["type"]);
            Assert.Equal(evidence.Height, resultEvidenceDict["height"]);
            Assert.Equal(evidence.TargetAddress.ToString(), resultEvidenceDict["targetAddress"]);
            Assert.Equal(
                evidence.Timestamp, DateTimeOffset.Parse($"{resultEvidenceDict["timestamp"]}"));
        }
    }

    [Fact]
    public async Task ExecutePendingEvidenceAsync()
    {
        var evidenceList = new List<EvidenceBase>
        {
            new TestEvidence(
                height: _fixture.Chain.Count - 3,
                validatorAddress: new PrivateKey().Address,
                timestamp: DateTimeOffset.UtcNow)
        };

        foreach (var evidence in evidenceList)
        {
            _fixture.Chain.AddEvidence(evidence);
        }

        var result = await ExecuteQueryAsync(@$"{{
            pendingEvidence {{
                id
                type
                height
                targetAddress
                timestamp
            }}
        }}", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        var resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        var resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData.ToValue());
        var resultEvidence = Assert.IsAssignableFrom<object[]>(resultDict["pendingEvidence"]);

        for (var i = 0; i < evidenceList.Count; i++)
        {
            var evidence = evidenceList[i];
            var resultEvidenceDict
                = Assert.IsAssignableFrom<IDictionary<string, object>>(resultEvidence[i]);
            Assert.Equal(evidence.Id.ToString(), resultEvidenceDict["id"]);
            Assert.Equal(evidence.GetType().FullName, resultEvidenceDict["type"]);
            Assert.Equal(evidence.Height, resultEvidenceDict["height"]);
            Assert.Equal(evidence.TargetAddress.ToString(), resultEvidenceDict["targetAddress"]);
            Assert.Equal(
                evidence.Timestamp, DateTimeOffset.Parse($"{resultEvidenceDict["timestamp"]}"));
        }
    }

    [Fact]
    public async Task ExecuteEvidenceByIdAsync()
    {
        var blocks = GetBlocks().ToArray();
        var block = blocks[Random.Shared.Next(blocks.Length)];
        var evidence = block.Evidence[Random.Shared.Next(block.Evidence.Count)];

        var result = await ExecuteQueryAsync(@$"{{
            evidence(id: ""{evidence.Id}"") {{
                id
                type
                height
                targetAddress
                timestamp
            }}
        }}", _queryGraph, source: _source);
        Assert.Null(result.Errors);
        var resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        var resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData.ToValue());

        var resultEvidenceDict
            = Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["evidence"]);
        Assert.Equal(evidence.Id.ToString(), resultEvidenceDict["id"]);
        Assert.Equal(evidence.GetType().FullName, resultEvidenceDict["type"]);
        Assert.Equal(evidence.Height, resultEvidenceDict["height"]);
        Assert.Equal(evidence.TargetAddress.ToString(), resultEvidenceDict["targetAddress"]);
        Assert.Equal(
            evidence.Timestamp, DateTimeOffset.Parse($"{resultEvidenceDict["timestamp"]}"));
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
