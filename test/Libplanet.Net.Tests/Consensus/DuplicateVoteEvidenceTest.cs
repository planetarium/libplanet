#pragma warning disable S125
using System;
using System.Numerics;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;
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
            var consensusProposalMsgAt5Task = WaitUntilPublishedAsync<ConsensusProposalMsg>(
                consensusContext: consensusContext,
                height: 5,
                cancellationToken: new CancellationTokenSource(Timeout).Token);
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[0]);
            block = blockChain.ProposeBlock(privateKeys[0], blockCommit, proof);
            blockCommit = TestUtils.CreateBlockCommit(block);
            blockChain.Append(block, blockCommit);

            lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

            await consensusProposalMsgAt5Task;
            var consensusProposalMsgAt5 = consensusProposalMsgAt5Task.Result;
            Assert.NotNull(consensusProposalMsgAt3?.BlockHash);
            var actualBlock = BlockMarshaler.UnmarshalBlock(
                (Dictionary)_codec.Decode(consensusProposalMsgAt5.Proposal.MarshaledBlock));
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
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
            var proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[1]);
            var block = blockChain.ProposeBlock(privateKeys[1], proof: proof);
            var blockCommit = TestUtils.CreateBlockCommit(block);
            consensusContext.Start();
            blockChain.Append(block, blockCommit);
            proof = TestUtils.CreateZeroRoundProof(blockChain.Tip, privateKeys[2]);
            block = blockChain.ProposeBlock(privateKeys[2], blockCommit, proof);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            var lotSet = new LotSet(
                blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof, TestUtils.ValidatorSet, 20);
            var lot = lotSet.GenerateLot(TestUtils.PrivateKeys[3]);
            foreach (int i in new int[] { 0, 1, 2 })
            {
                consensusContext.HandleMessage(
                    new ConsensusDominantLotMsg(
                        TestUtils.CreateDominantLot(
                            TestUtils.PrivateKeys[i], lot)));
            }

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
