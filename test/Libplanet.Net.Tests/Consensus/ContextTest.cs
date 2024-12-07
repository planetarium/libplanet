using System;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Numerics;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Policies;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus
{
    public class ContextTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextTest>();

            _logger = Log.ForContext<ContextTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task StartAsProposer()
        {
            var proposalSent = new AsyncAutoResetEvent();
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg)
                {
                    proposalSent.Set();
                }
            };

            context.Start();
            await Task.WhenAll(proposalSent.WaitAsync(), stepChangedToPreVote.WaitAsync());

            Assert.Equal(ConsensusStep.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task StartAsProposerWithLastCommit()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();

            // Assumed that height 1 is already committed.  It will catch a propose to check
            // whether the lastCommit of height 1 is used for propose.  Note that Peer2
            // is the proposer for height 2.
            var blockChain = TestUtils.CreateDummyBlockChain();
            Block heightOneBlock = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var lastCommit = TestUtils.CreateBlockCommit(heightOneBlock);
            blockChain.Append(heightOneBlock, lastCommit);

            var context = TestUtils.CreateDummyContext(
                blockChain,
                height: 2,
                lastCommit: lastCommit,
                privateKey: TestUtils.PrivateKeys[2],
                validatorSet: Libplanet.Tests.TestUtils.ValidatorSet);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalSent.Set();
                }
            };

            context.Start();
            await Task.WhenAll(stepChangedToPreVote.WaitAsync(), proposalSent.WaitAsync());

            Assert.Equal(ConsensusStep.PreVote, context.Step);
            Assert.NotNull(proposal);
            Block proposed = BlockMarshaler.UnmarshalBlock(
                (Dictionary)new Codec().Decode(proposal!.Proposal.MarshaledBlock));
            Assert.NotNull(proposed.LastCommit);
            Assert.Equal(lastCommit, proposed.LastCommit);
        }

        [Fact(Timeout = Timeout)]
        public async Task CannotStartTwice()
        {
            var stepChanged = new AsyncAutoResetEvent();
            var (_, context) = TestUtils.CreateDummyContext();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.Propose)
                {
                    stepChanged.Set();
                }
            };
            context.Start();

            await stepChanged.WaitAsync();
            Assert.Throws<InvalidOperationException>(() => context.Start());
        }

        [Fact(Timeout = Timeout)]
        public async Task CanAcceptMessagesAfterCommitFailure()
        {
            Codec codec = new Codec();
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? proposal = null;
            var proposalSent = new AsyncAutoResetEvent();
            Block? proposedBlock = null;
            var stepChangedToEndCommit = new AsyncAutoResetEvent();
            var exceptionOccurred = new AsyncAutoResetEvent();
            Exception? exceptionThrown = null;

            // Add block #1 so we can start with a last commit for height 2.
            var blockChain = TestUtils.CreateDummyBlockChain();
            Block heightOneBlock = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var lastCommit = TestUtils.CreateBlockCommit(heightOneBlock);
            blockChain.Append(heightOneBlock, lastCommit);

            var context = TestUtils.CreateDummyContext(
                blockChain,
                height: 2,
                lastCommit: lastCommit,
                privateKey: TestUtils.PrivateKeys[2],
                validatorSet: TestUtils.ValidatorSet);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
                else if (eventArgs.Step == ConsensusStep.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposedBlock = BlockMarshaler.UnmarshalBlock(
                        (Dictionary)codec.Decode(proposalMsg!.Proposal.MarshaledBlock));
                    proposalSent.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                exceptionThrown = exception;
                exceptionOccurred.Set();
            };

            context.Start();

            await Task.WhenAll(stepChangedToPreVote.WaitAsync(), proposalSent.WaitAsync());

            // Simulate bypass of context and block sync by swarm by
            // directly appending to the blockchain.
            Assert.NotNull(proposedBlock);
            blockChain.Append(proposedBlock!, TestUtils.CreateBlockCommit(proposedBlock!));
            Assert.Equal(2, blockChain.Tip.Index);

            // Make PreVotes to normally move to PreCommit step.
            foreach (int i in new int[] { 0, 1, 3 })
            {
                context.ProduceMessage(new ConsensusPreVoteMsg(new VoteMetadata(
                    2,
                    0,
                    proposedBlock!.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.PrivateKeys[i].PublicKey,
                    TestUtils.ValidatorSet[i].Power,
                    VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i])));
            }

            // Validator 2 will automatically vote its PreCommit.
            foreach (int i in new int[] { 0, 1 })
            {
                context.ProduceMessage(new ConsensusPreCommitMsg(new VoteMetadata(
                    2,
                    0,
                    proposedBlock!.Hash,
                    DateTimeOffset.UtcNow,
                    TestUtils.PrivateKeys[i].PublicKey,
                    TestUtils.ValidatorSet[i].Power,
                    VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i])));
            }

            await stepChangedToEndCommit.WaitAsync();

            // Check context has only three votes.
            BlockCommit? commit = context.GetBlockCommit();
            Assert.Equal(3, commit?.Votes.Where(vote => vote.Flag == VoteFlag.PreCommit).Count());

            // Context should still accept new votes.
            context.ProduceMessage(new ConsensusPreCommitMsg(new VoteMetadata(
                2,
                0,
                proposedBlock!.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[3].PublicKey,
                TestUtils.ValidatorSet[3].Power,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[3])));

            await Task.Delay(100);  // Wait for the new message to be added to the message log.
            commit = context.GetBlockCommit();
            Assert.Equal(4, commit?.Votes.Where(vote => vote.Flag == VoteFlag.PreCommit).Count());
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowOnInvalidProposerMessage()
        {
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext();
            context.ExceptionOccurred += (_, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[0]));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);
        }

        [Fact(Timeout = Timeout)]
        public async Task ThrowOnDifferentHeightMessage()
        {
            Exception? exceptionThrown = null;
            var exceptionOccurred = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext();
            context.ExceptionOccurred += (_, e) =>
            {
                exceptionThrown = e;
                exceptionOccurred.Set();
            };
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[2]);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[2], 2, 2));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);

            // Reset exception thrown.
            exceptionThrown = null;
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2],
                        TestUtils.ValidatorSet[2].Power,
                        2,
                        0,
                        block.Hash,
                        VoteFlag.PreVote)));
            await exceptionOccurred.WaitAsync();
            Assert.IsType<InvalidConsensusMessageException>(exceptionThrown);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanPreCommitOnEndCommit()
        {
            var enteredPreVote = new AsyncAutoResetEvent();
            var enteredPreCommit = new AsyncAutoResetEvent();
            var enteredEndCommit = new AsyncAutoResetEvent();
            var blockHeightOneAppended = new AsyncAutoResetEvent();
            var enteredHeightTwo = new AsyncAutoResetEvent();

            TimeSpan newHeightDelay = TimeSpan.FromSeconds(1);

            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    endBlockActions: ImmutableArray.Create<IAction>(new MinerReward(1))),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var fx = new MemoryStoreFixture(policy.PolicyActionsRegistry);
            var blockChain = Libplanet.Tests.TestUtils.MakeBlockChain(
                policy,
                fx.Store,
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DelayAction)));

            Context context = new Context(
                blockChain,
                1L,
                null,
                TestUtils.PrivateKeys[0],
                blockChain
                    .GetNextWorldState(0L)
                    .GetValidatorSet(),
                contextOption: new ContextOption());
            context.MessageToPublish += (sender, message) => context.ProduceMessage(message);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    enteredPreVote.Set();
                }

                if (eventArgs.Step == ConsensusStep.PreCommit)
                {
                    enteredPreCommit.Set();
                }

                if (eventArgs.Step == ConsensusStep.EndCommit)
                {
                    enteredEndCommit.Set();
                }
            };

            blockChain.TipChanged += (_, eventArgs) =>
            {
                if (eventArgs.NewTip.Index == 1L)
                {
                    blockHeightOneAppended.Set();
                }
            };

            var action = new DelayAction(100);
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: TestUtils.PrivateKeys[1],
                genesisHash: blockChain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());
            blockChain.StageTransaction(tx);
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            foreach (int i in new int[] { 1, 2, 3 })
            {
                context.ProduceMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            1,
                            0,
                            block.Hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.PrivateKeys[i].PublicKey,
                            TestUtils.ValidatorSet[i].Power,
                            VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i])));
            }

            // Two additional votes should be enough to reach a consensus.
            foreach (int i in new int[] { 1, 2 })
            {
                context.ProduceMessage(
                    new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            1,
                            0,
                            block.Hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.PrivateKeys[i].PublicKey,
                            TestUtils.ValidatorSet[i].Power,
                            VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i])));
            }

            await blockHeightOneAppended.WaitAsync();
            Assert.Equal(
                3,
                context.GetBlockCommit()!.Votes.Count(vote => vote.Flag == VoteFlag.PreCommit));

            Assert.True(enteredPreVote.IsSet);
            Assert.True(enteredPreCommit.IsSet);
            Assert.True(enteredEndCommit.IsSet);

            // Add the last vote and wait for it to be consumed.
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    new VoteMetadata(
                        1,
                        0,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.PrivateKeys[3].PublicKey,
                        BigInteger.One,
                        VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[3])));
            Thread.Sleep(10);
            Assert.Equal(
                4,
                context.GetBlockCommit()!.Votes.Count(vote => vote.Flag == VoteFlag.PreCommit));
        }

        /// <summary>
        /// <para>
        /// This test tests whether a validator can discard received proposal
        /// when another proposal has +2/3 votes and maj23 information.
        /// This Can be happen in following scenario.
        /// </para>
        /// <para>
        /// There exists 4 validators A B C and D, where D is attacker.
        /// <list type="bullet">
        /// <item><description>
        ///     Validator D sends the block X's proposal to validator A, and block Y's proposal to
        ///     validator B and C, both blocks are valid.
        /// </description></item>
        /// <item><description>
        ///     The validator A will broadcast block X's pre-vote and the validator C and D
        ///     will broadcast block Y's pre-vote.
        /// </description></item>
        /// <item><description>
        ///     The validator D sends block X's pre-vote to the validator A and B,
        ///     and sends block Y's pre-vote to the validator C.
        /// </description></item>
        /// <item><description>
        ///     The validator C will lock block Y and change its state to pre-commit state
        ///     since 2/3+ pre-vote messages are collected.
        /// </description></item>
        ///     Round is increased and other validator proposes valid block, but there are no
        ///     2/3+ validator to vote to the new valid block since 1/3 of them are locked in
        ///     block Y.
        /// <item><description>
        /// </description></item>
        /// </list>
        /// </para>
        /// <para>
        /// So this test make one single candidate which is validator A in scenario above,
        /// to check the validator A can replace its proposal from block X to block Y when
        /// receiving <see cref="ConsensusMaj23Msg"/> message from peer C or D.
        /// </para>
        /// </summary>
        [Fact(Timeout = Timeout)]
        public async Task CanReplaceProposal()
        {
            var codec = new Codec();
            var privateKeys = Enumerable.Range(0, 4).Select(_ => new PrivateKey()).ToArray();
            // Order keys as validator set's order to run test as intended.
            privateKeys = privateKeys.OrderBy(key => key.Address).ToArray();
            var proposer = privateKeys[1];
            var key1 = privateKeys[2];
            var key2 = privateKeys[3];
            BigInteger proposerPower = TestUtils.ValidatorSet[1].Power;
            BigInteger power1 = TestUtils.ValidatorSet[2].Power;
            BigInteger power2 = TestUtils.ValidatorSet[3].Power;
            var stepChanged = new AsyncAutoResetEvent();
            var proposalModified = new AsyncAutoResetEvent();
            var prevStep = ConsensusStep.Default;
            BlockHash? prevProposal = null;
            var validatorSet = new ValidatorSet(
                new[]
                {
                    new Validator(privateKeys[0].PublicKey, 1),
                    new Validator(proposer.PublicKey, 1),
                    new Validator(key1.PublicKey, 1),
                    new Validator(key2.PublicKey, 1),
                }.ToList());

            var (blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: privateKeys[0],
                validatorSet: validatorSet);
            var blockA = blockChain.ProposeBlock(
                proposer,
                lastCommit: blockChain.GetBlockCommit(blockChain.Tip.Hash));
            var blockB = blockChain.ProposeBlock(
                proposer,
                lastCommit: blockChain.GetBlockCommit(blockChain.Tip.Hash));
            context.StateChanged += (sender, state) =>
            {
                if (state.Step != prevStep)
                {
                    prevStep = state.Step;
                    stepChanged.Set();
                }

                if (!state.Proposal.Equals(prevProposal))
                {
                    prevProposal = state.Proposal;
                    proposalModified.Set();
                }
            };
            context.Start();
            await stepChanged.WaitAsync();
            Assert.Equal(ConsensusStep.Propose, context.Step);

            var proposalA = new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                codec.Encode(blockA.MarshalBlock()),
                -1).Sign(proposer);
            var preVoteA2 = new ConsensusPreVoteMsg(
                new VoteMetadata(
                    1,
                    0,
                    blockA.Hash,
                    DateTimeOffset.UtcNow,
                    key2.PublicKey,
                    power2,
                    VoteFlag.PreVote).Sign(key2));
            var proposalB = new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                proposer.PublicKey,
                codec.Encode(blockB.MarshalBlock()),
                -1).Sign(proposer);
            var proposalAMsg = new ConsensusProposalMsg(proposalA);
            var proposalBMsg = new ConsensusProposalMsg(proposalB);
            context.ProduceMessage(proposalAMsg);
            await proposalModified.WaitAsync();
            Assert.Equal(proposalA, context.Proposal);

            // Proposal B is ignored because proposal A is received first.
            context.ProduceMessage(proposalBMsg);
            Assert.Equal(proposalA, context.Proposal);
            context.ProduceMessage(preVoteA2);

            // Validator 1 (key1) collected +2/3 pre-vote messages,
            // sends maj23 message to context.
            var maj23 = new Maj23Metadata(
                1,
                0,
                blockB.Hash,
                DateTimeOffset.UtcNow,
                key1.PublicKey,
                VoteFlag.PreVote).Sign(key1);
            context.AddMaj23(maj23);

            var preVoteB0 = new ConsensusPreVoteMsg(
                new VoteMetadata(
                    1,
                    0,
                    blockB.Hash,
                    DateTimeOffset.UtcNow,
                    proposer.PublicKey,
                    proposerPower,
                    VoteFlag.PreVote).Sign(proposer));
            var preVoteB1 = new ConsensusPreVoteMsg(
                new VoteMetadata(
                    1,
                    0,
                    blockB.Hash,
                    DateTimeOffset.UtcNow,
                    key1.PublicKey,
                    power1,
                    VoteFlag.PreVote).Sign(key1));
            var preVoteB2 = new ConsensusPreVoteMsg(
                new VoteMetadata(
                    1,
                    0,
                    blockB.Hash,
                    DateTimeOffset.UtcNow,
                    key2.PublicKey,
                    power2,
                    VoteFlag.PreVote).Sign(key2));
            context.ProduceMessage(preVoteB0);
            context.ProduceMessage(preVoteB1);
            context.ProduceMessage(preVoteB2);
            await proposalModified.WaitAsync();
            Assert.Null(context.Proposal);
            context.ProduceMessage(proposalBMsg);
            await proposalModified.WaitAsync();
            Assert.Equal(
                context.Proposal,
                proposalBMsg.Proposal);
            await stepChanged.WaitAsync();
            await stepChanged.WaitAsync();
            Assert.Equal(ConsensusStep.PreCommit, context.Step);
            Assert.Equal(
                blockB.Hash.ToString(),
                JsonSerializer.Deserialize<ContextJson>(context.ToString()).valid_value);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanCreateContextWithLastingEvaluation()
        {
            var onTipChanged = new AsyncAutoResetEvent();
            var enteredHeightTwo = new AsyncAutoResetEvent();

            TimeSpan newHeightDelay = TimeSpan.FromMilliseconds(100);
            int actionDelay = 2000;

            var fx = new MemoryStoreFixture();
            var blockChain = Libplanet.Tests.TestUtils.MakeBlockChain(
                new BlockPolicy(),
                fx.Store,
                fx.StateStore,
                new SingleActionLoader(typeof(DelayAction)));

            var consensusContext = new ConsensusContext(
                new TestUtils.DummyConsensusMessageHandler(message => { }),
                blockChain,
                TestUtils.PrivateKeys[0],
                newHeightDelay,
                new ContextOption());
            Context context = consensusContext.CurrentContext;
            context.MessageToPublish += (sender, message) => context.ProduceMessage(message);

            blockChain.TipChanged += (_, eventArgs) =>
            {
                if (eventArgs.NewTip.Index == 1L)
                {
                    onTipChanged.Set();
                }
            };

            consensusContext.StateChanged += (_, eventArgs) =>
            {
                if (consensusContext.Height == 2L)
                {
                    enteredHeightTwo.Set();
                }
            };

            var action = new DelayAction(actionDelay);
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: TestUtils.PrivateKeys[1],
                genesisHash: blockChain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());
            blockChain.StageTransaction(tx);
            var block = blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);

            consensusContext.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            foreach (int i in new int[] { 1, 2, 3 })
            {
                context.ProduceMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            1,
                            0,
                            block.Hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.PrivateKeys[i].PublicKey,
                            TestUtils.ValidatorSet[i].Power,
                            VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i])));
            }

            foreach (int i in new int[] { 1, 2, 3 })
            {
                context.ProduceMessage(
                    new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            1,
                            0,
                            block.Hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.PrivateKeys[i].PublicKey,
                            TestUtils.ValidatorSet[i].Power,
                            VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[i])));
            }

            Assert.Equal(1, consensusContext.Height);
            var watch = Stopwatch.StartNew();
            await onTipChanged.WaitAsync();
            Assert.True(watch.ElapsedMilliseconds < (actionDelay * 0.5));
            watch.Restart();

            await enteredHeightTwo.WaitAsync();
            Assert.Equal(
                4,
                context.GetBlockCommit()!.Votes.Count(
                    vote => vote.Flag.Equals(VoteFlag.PreCommit)));
            Assert.True(watch.ElapsedMilliseconds > (actionDelay * 0.5));
            Assert.Equal(2, consensusContext.Height);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(0)]
        [InlineData(100)]
        [InlineData(500)]
        public async Task CanCollectPreVoteAfterMajority(int delay)
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            Block? proposedBlock = null;
            int numPreVotes = 0;
            var (_, context) = TestUtils.CreateDummyContext(
                contextOption: new ContextOption(
                    enterPreCommitDelay: delay));
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == ConsensusStep.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
                else if (eventArgs.Step == ConsensusStep.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            context.MessageToPublish += (_, message) =>
            {
                if (message is ConsensusProposalMsg proposalMsg)
                {
                    proposedBlock = BlockMarshaler.UnmarshalBlock(
                        (Dictionary)new Codec().Decode(proposalMsg!.Proposal.MarshaledBlock));
                }
            };
            context.VoteSetModified += (_, tuple) =>
            {
                if (tuple.Flag == VoteFlag.PreVote)
                {
                    numPreVotes = tuple.Votes.Count();
                }
            };
            context.Start();
            await stepChangedToPreVote.WaitAsync();
            Assert.Equal(ConsensusStep.PreVote, context.Step);
            if (proposedBlock is not { } block)
            {
                throw new XunitException("No proposal is made");
            }

            for (int i = 0; i < 3; i++)
            {
                context.ProduceMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            block.Index,
                            0,
                            block.Hash,
                            DateTimeOffset.UtcNow,
                            TestUtils.PrivateKeys[i].PublicKey,
                            TestUtils.ValidatorSet[i].Power,
                            VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[i])));
            }

            // Send delayed PreVote message after sending preCommit message
            var cts = new CancellationTokenSource();
            const int preVoteDelay = 300;
            _ = Task.Run(
                async () =>
                {
                    await Task.Delay(preVoteDelay, cts.Token);
                    context.ProduceMessage(
                        new ConsensusPreVoteMsg(
                            new VoteMetadata(
                                block.Index,
                                0,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                TestUtils.PrivateKeys[3].PublicKey,
                                TestUtils.ValidatorSet[3].Power,
                                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[3])));
                }, cts.Token);

            await stepChangedToPreCommit.WaitAsync();
            cts.Cancel();
            Assert.Equal(delay < preVoteDelay ? 3 : 4, numPreVotes);
        }

        public struct ContextJson
        {
#pragma warning disable SA1300
#pragma warning disable IDE1006
            public string locked_value { get; set; }

            public int locked_round { get; set; }

            public string valid_value { get; set; }

            public int valid_round { get; set; }
#pragma warning restore IDE1006
#pragma warning restore SA1300
        }
    }
}
