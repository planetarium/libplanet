using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Queries;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries
{
    public class VoteQueryTest
    {
        private readonly MockBlockChainContext<NullAction> _source;
        private readonly VoteQuery<NullAction> _queryGraph;

        public VoteQueryTest()
        {
            _source = new MockBlockChainContext<NullAction>();
            _queryGraph = new VoteQuery<NullAction>(_source);
        }

        [Fact]
        public async void VotesQuery()
        {
            var query =
                $@"{{
                    votes
                    {{
                        height
                        round
                        blockHash
                        timestamp
                        validator
                        flag
                        signature
                    }}
                }}";

            ExecutionResult result = await ExecuteQueryAsync(
                query,
                _queryGraph
            );
            var resultData = (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            var actualResult = ((object[])resultData["votes"]).ToList();
            var votes = _source.BlockChain.GetBlockCommit(1).Votes.Concat(_source.BlockChain.GetBlockCommit(2).Votes);
            var expectedResult = votes.Select(vote => new Dictionary<string, object>
            {
                ["height"] = vote.Height,
                ["round"] = vote.Round,
                ["blockHash"] = vote.BlockHash.ToString(),
                ["timestamp"] = new DateTimeOffsetGraphType().Serialize(vote.Timestamp),
                ["validator"] = vote.Validator.ToString(),
                ["flag"] = vote.Flag.ToString(),
                ["signature"] = ByteUtil.Hex(vote.Signature)
            });

            Assert.Null(result.Errors);
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public async void ValidatorVotesQuery(int validatorIdx)
        {
            var queryValidator = _source.ValidatorPrivateKeys[validatorIdx];
            var query =
                $@"{{
                    validatorVotes(
                        validator: ""{queryValidator.PublicKey}"")
                    {{
                        height
                        round
                        blockHash
                        timestamp
                        validator
                        flag
                        signature
                    }}
                }}";

            ExecutionResult result = await ExecuteQueryAsync(
                query,
                _queryGraph
            );
            var resultData = (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            var actualResult = ((object[])resultData["validatorVotes"]).ToList();
            var votes = _source.BlockChain.GetBlockCommit(1).Votes.Concat(
                _source.BlockChain.GetBlockCommit(2).Votes).Where(
                vote => vote.Validator.Equals(queryValidator.PublicKey));
            var expectedResult = votes.Select(vote => new Dictionary<string, object>
            {
                ["height"] = vote.Height,
                ["round"] = vote.Round,
                ["blockHash"] = vote.BlockHash.ToString(),
                ["timestamp"] = new DateTimeOffsetGraphType().Serialize(vote.Timestamp),
                ["validator"] = vote.Validator.ToString(),
                ["flag"] = vote.Flag.ToString(),
                ["signature"] = ByteUtil.Hex(vote.Signature)
            });

            Assert.Null(result.Errors);
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        public async void CountVotesQuery()
        {
            var query =
                $@"{{
                    countVotes
                    {{
                        validator
                        countNull
                        countPreCommit
                        countTotal
                    }}
                }}";

            ExecutionResult result = await ExecuteQueryAsync(
                query,
                _queryGraph
            );
            var resultData = (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            var actualResult = ((object[])resultData["countVotes"]).ToList();
            var expectedResult = new List<Dictionary<string, object>>{
                new Dictionary<string, object> {
                    ["validator"] = _source.ValidatorPrivateKeys[0].PublicKey.ToString(),
                    ["countNull"] = 0,
                    ["countPreCommit"] = 2,
                    ["countTotal"] = 2,
                },
                new Dictionary<string, object> {
                    ["validator"] = _source.ValidatorPrivateKeys[1].PublicKey.ToString(),
                    ["countNull"] = 0,
                    ["countPreCommit"] = 2,
                    ["countTotal"] = 2,
                },
                new Dictionary<string, object> {
                    ["validator"] = _source.ValidatorPrivateKeys[2].PublicKey.ToString(),
                    ["countNull"] = 0,
                    ["countPreCommit"] = 2,
                    ["countTotal"] = 2,
                },
                new Dictionary<string, object> {
                    ["validator"] = _source.ValidatorPrivateKeys[3].PublicKey.ToString(),
                    ["countNull"] = 2,
                    ["countPreCommit"] = 0,
                    ["countTotal"] = 2,
                },
            };

            Assert.Null(result.Errors);
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public async void CountValidatorVotesQuery(int validatorIdx)
        {
            var queryValidator = _source.ValidatorPrivateKeys[validatorIdx];
            var query =
                $@"{{
                    countValidatorVotes(
                        validator: ""{queryValidator.PublicKey}"")
                    {{
                        validator
                        countNull
                        countPreCommit
                        countTotal
                    }}
                }}";

            ExecutionResult result = await ExecuteQueryAsync(
                query,
                _queryGraph
            );
            var resultData = (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            var actualResult = resultData["countValidatorVotes"];
            var isNullVal = queryValidator.Equals(_source.NullCommitValidator);
            var expectedResult = new Dictionary<string, object>
            {
                ["validator"] = queryValidator.PublicKey.ToString(),
                ["countNull"] = isNullVal ? 2 : 0,
                ["countPreCommit"] = isNullVal? 0 : 2,
                ["countTotal"] = 2,
            }.ToArray();

            Assert.Null(result.Errors);
            Assert.Equal(expectedResult, actualResult);
        }


        private class MockBlockChainContext<T> : IBlockChainContext<T>
            where T : IAction, new()
        {
            public bool Preloaded => true;
            public BlockChain<T> BlockChain { get; }
            public IStore Store { get; }
            public List<PrivateKey> ValidatorPrivateKeys = Libplanet.Tests.TestUtils.ValidatorPrivateKeys;
            public PrivateKey ProposerGenesis => ValidatorPrivateKeys[0];
            public PrivateKey ProposerPrevBlock => ValidatorPrivateKeys[1];
            public PrivateKey ProposerNextBlock => ValidatorPrivateKeys[2];
            public PrivateKey NullCommitValidator => ValidatorPrivateKeys[3];

            public MockBlockChainContext()
            {
                Store = new MemoryStore();
                var stateStore = new TrieStateStore(new MemoryKeyValueStore());
                var genesisContent = new BlockContent<T>(
                    new BlockMetadata(
                        index: 0L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: ProposerGenesis.PublicKey,
                        previousHash: null,
                        txHash: null,
                        lastCommit: null));
                Block<T> genesis = genesisContent.Propose().Evaluate(
                    ProposerGenesis,
                    null,
                    _ => true,
                    stateStore);
                BlockChain = new BlockChain<T>(
                    new BlockPolicy<T>(
                        getValidatorSet: index => Libplanet.Tests.TestUtils.ValidatorSet),
                    new VolatileStagePolicy<T>(),
                    Store,
                    stateStore,
                    genesis
                );

                BlockAppender(ProposerPrevBlock);
                BlockAppender(ProposerNextBlock);
            }

            public void BlockAppender(PrivateKey miner)
            {
                var preEval = new BlockContent<T>(
                    new BlockMetadata(
                        index: BlockChain.Tip.Index + 1,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: miner.PublicKey,
                        previousHash: BlockChain.Tip.Hash,
                        txHash: null,
                        lastCommit: BlockChain.GetBlockCommit(BlockChain.Tip.Index))).Propose();
                var block = preEval.Evaluate(miner, BlockChain);
                var votes = Libplanet.Tests.TestUtils.ValidatorPrivateKeys.Select(
                    pk => pk.PublicKey.Equals(NullCommitValidator.PublicKey)
                    ? new VoteMetadata(
                            block.Index,
                            0,
                            block.Hash,
                            block.Timestamp,
                            pk.PublicKey,
                            VoteFlag.Null).Sign(null)
                    : new VoteMetadata(
                            block.Index,
                            0,
                            block.Hash,
                            block.Timestamp,
                            pk.PublicKey,
                            VoteFlag.PreCommit).Sign(pk)).ToImmutableArray();
                var commit = new BlockCommit(
                    height: block.Index,
                    round: 0,
                    blockHash: block.Hash,
                    votes: votes);
                BlockChain.Append(block, commit);
            }
        }
    }
}
