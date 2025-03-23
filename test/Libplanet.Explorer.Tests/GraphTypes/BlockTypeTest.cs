using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Tests.Queries;
using Libplanet.Store;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes;

public class BlockTypeTest
{
    [Fact]
    public async void Query()
    {
        var privateKey = new PrivateKey();
        var lastBlockHash = new BlockHash(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
        var lastVotes = ImmutableArray.Create(
            new VoteMetadata(
                1,
                0,
                lastBlockHash,
                DateTimeOffset.Now,
                privateKey.PublicKey,
                BigInteger.One,
                VoteFlag.PreCommit).Sign(privateKey));
        var lastBlockCommit = new BlockCommit(1, 0, lastBlockHash, lastVotes);
        var preEval = new BlockContent(
            new BlockMetadata(
                index: 2,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: privateKey.PublicKey,
                previousHash: lastBlockHash,
                txHash: null,
                lastCommit: lastBlockCommit,
                evidenceHash: null)).Propose();
        var stateRootHash =
            new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
        var signature = preEval.Header.MakeSignature(privateKey, stateRootHash);
        var hash = preEval.Header.DeriveBlockHash(stateRootHash, signature);
        var block = new Block(preEval, (stateRootHash, signature, hash));

        // FIXME We need to test for `previousBlock` field too.
        var query =
            @"{
                    index
                    hash
                    miner
                    publicKey
                    timestamp
                    stateRootHash
                    signature
                    preEvaluationHash
                    lastCommit
                    {
                        height
                        round
                        blockHash
                        votes
                        {
                            height
                            round
                            blockHash
                            timestamp
                            validatorPublicKey
                            validatorPower
                            flag
                            signature
                        }
                    }
                    protocolVersion
                    raw
                }";

        var store = new MemoryStore();
        var blockType = new BlockType(new MockBlockChainContext(store));
        ExecutionResult result = await ExecuteQueryAsync(
            query,
            blockType,
            source: block
        );
        Dictionary<string, object> resultData =
            (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
        Assert.Null(result.Errors);
        Assert.Equal(block.Index, resultData["index"]);
        Assert.Equal(
            ByteUtil.Hex(block.Hash.ToByteArray()),
            resultData["hash"]);
        Assert.Equal(
            block.Miner.ToString(),
            resultData["miner"]);
        Assert.Equal(
            new DateTimeOffsetGraphType().Serialize(block.Timestamp),
            resultData["timestamp"]);
        Assert.Equal(
            ByteUtil.Hex(block.StateRootHash.ToByteArray()),
            resultData["stateRootHash"]);
        Assert.Equal(
            ByteUtil.Hex(block.PreEvaluationHash.ToByteArray()),
            resultData["preEvaluationHash"]);

        var expectedLastCommit = new Dictionary<string, object>()
        {
            { "height", lastBlockCommit.Height },
            { "round", lastBlockCommit.Round },
            { "blockHash", lastBlockCommit.BlockHash.ToString() },
            {
                "votes",
                new object[]
                {
                    new Dictionary<string, object>()
                    {
                        { "height", lastVotes[0].Height },
                        { "round", lastVotes[0].Round },
                        { "blockHash", lastVotes[0].BlockHash.ToString() },
                        {
                            "timestamp",
                            new DateTimeOffsetGraphType().Serialize(lastVotes[0].Timestamp)
                        },
                        { "validatorPublicKey", lastVotes[0].ValidatorPublicKey.ToString() },
                        { "validatorPower", lastVotes[0].ValidatorPower?.ToString() },
                        { "flag", lastVotes[0].Flag.ToString() },
                        { "signature", ByteUtil.Hex(lastVotes[0].Signature) },
                    }
                }
            },
        };

        Assert.Equal(expectedLastCommit, resultData["lastCommit"]);

        Assert.Equal(
            block.ProtocolVersion,
            resultData["protocolVersion"]);

        Assert.Equal(
            block,
            BlockMarshaler.UnmarshalBlock(
                (Dictionary)new Codec().Decode(ByteUtil.ParseHex((string)resultData["raw"]))));
    }
}
