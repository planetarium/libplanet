#pragma warning disable S125
using System;
using System.Numerics;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Net.Tests.Consensus.ConsensusContextUtils;

namespace Libplanet.Net.Tests.Consensus
{
    public class DuplicateVoteEvidenceTest
    {
        private const int Timeout = 30000;
        private static readonly Codec _codec = new Codec();
        private readonly ILogger _logger;

        public DuplicateVoteEvidenceTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextTest>();

            _logger = Log.ForContext<ConsensusContextTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task Evidence_WithDuplicateVotes_Test()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                null,
                privateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var consensusProposalMsgAt7Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 7,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Single(blockChain.GetPendingEvidence());
            Assert.Equal(4, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);

            blockCommit = blockChain.GetBlockCommit(blockChain.Tip.Hash);
            block = blockChain.ProposeBlock(privateKeys[0], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            block = blockChain.ProposeBlock(privateKeys[1], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            await consensusProposalMsgAt7Task;
            var consensusProposalMsgAt7 = consensusProposalMsgAt7Task.Result;
            Assert.NotNull(consensusProposalMsgAt3?.BlockHash);
            var actualBlock = BlockMarshaler.UnmarshalBlock(
                (Dictionary)_codec.Decode(consensusProposalMsgAt7.Proposal.MarshaledBlock));
            Assert.Single(actualBlock.Evidence);
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreDifferentHeightVote()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                actionLoader: null,
                privateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 4,
                round: 0,
                hash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Empty(blockChain[3].Evidence);
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreDifferentRoundVote()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                actionLoader: null,
                TestUtils.PrivateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 1,
                hash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Empty(blockChain[3].Evidence);
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreDifferentFlagVote()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                actionLoader: null,
                privateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreVoteMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                flag: VoteFlag.PreVote)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Empty(blockChain[3].Evidence);
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreSameBlockHashVote()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                actionLoader: null,
                TestUtils.PrivateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Empty(blockChain[3].Evidence);
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreNillVote()
        {
            var privateKeys = TestUtils.PrivateKeys;
            var (blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                actionLoader: null,
                privateKeys[3]);

            var consensusProposalMsgAt3Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 3,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var block = blockChain.ProposeBlock(privateKeys[1]);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            await consensusProposalMsgAt3Task;
            var consensusProposalMsgAt3 = consensusProposalMsgAt3Task.Result;
            var blockHash = consensusProposalMsgAt3.BlockHash;

            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[0],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: default,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[1],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));
            consensusContext.HandleMessage(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                privateKey: privateKeys[2],
                power: BigInteger.One,
                height: 3,
                round: 0,
                hash: blockHash,
                flag: VoteFlag.PreCommit)));

            await WaitUntilHeightAsync(
                consensusContext: consensusContext,
                height: 4,
                cancellationToken: new CancellationTokenSource(Timeout).Token);

            Assert.Empty(blockChain[3].Evidence);
        }
    }
}
