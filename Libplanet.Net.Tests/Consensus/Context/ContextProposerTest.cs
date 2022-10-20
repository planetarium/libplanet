using System;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextProposerTest>();

            _logger = Log.ForContext<ContextProposerTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreCommitNil()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();

            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckCommit,
                startStep: Step.Propose);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CheckCommit(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusPreCommitMsg commit)
                {
                    Assert.Null(commit.PreCommit.BlockHash);
                    commitSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv, 1, hash: null, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer0,
                });
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv, 1, hash: null, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer2,
                });
            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv, 1, hash: null, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer3,
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var commitSent = new AsyncAutoResetEvent();
            BlockHash? targetHash = null;

            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckCommit,
                startStep: Step.Propose);

            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            targetHash = block.Hash;

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            void CheckCommit(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusPreCommitMsg commit)
                {
                    Assert.Equal(commit.PreCommit.BlockHash, targetHash);
                    commitSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer0Priv, 1, hash: block.Hash, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer2Priv, 1, hash: block.Hash, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.Peer3Priv, 1, hash: block.Hash, flag: VoteFlag.PreVote))
                {
                    Remote = TestUtils.Peer3,
                });

            await Task.WhenAll(commitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                startStep: Step.Propose,
                contextTimeoutOptions: new ContextTimeoutOption(preCommitSecondBase: 1));

            var roundChangedToOne = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Round == 1)
                {
                    roundChangedToOne.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: null, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: null, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, hash: null, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer3,
                });

            await roundChangedToOne.WaitAsync();
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EndCommitBlock()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                startStep: Step.Propose);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: block.Hash, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer0,
                });

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, hash: block.Hash, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer2,
                });

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, hash: block.Hash, flag: VoteFlag.PreCommit))
                {
                    Remote = TestUtils.Peer3,
                });

            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();
            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckVote,
                startStep: Step.Propose);

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CheckVote(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusPreVoteMsg vote && vote.PreVote.BlockHash is null)
                {
                    voteSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            var invalidBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: blockChain.Tip.Index + 1,
                    timestamp: blockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                    miner: fx.Miner.PublicKey.ToAddress(),
                    publicKey: fx.Miner.PublicKey,
                    previousHash: blockChain.Tip.Hash,
                    txHash: null,
                    lastCommit: null))
                .Propose().Evaluate(fx.Miner, blockChain);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, TestUtils.Peer1Priv));

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            BlockHash? targetHash = null;
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var voteSent = new AsyncAutoResetEvent();
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                consensusMessageSent: CheckVote,
                startStep: Step.Propose);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            targetHash = block.Hash;

            context.StateChanged += (sender, state) =>
            {
                if (state.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            void CheckVote(object? observer, ConsensusMsg? message)
            {
                if (message is ConsensusPreVoteMsg vote)
                {
                    Assert.Equal(vote.PreVote.BlockHash, targetHash);
                    voteSent.Set();
                }
            }

            // Bypass StartAsync() to avoid StartRound(0).
            _ = context.MessageConsumerTask(default);
            _ = context.MutationConsumerTask(default);

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            await Task.WhenAll(voteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }
    }
}
