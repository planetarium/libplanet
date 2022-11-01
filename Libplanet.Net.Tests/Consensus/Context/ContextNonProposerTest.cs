using System;
using System.Collections.Generic;
using System.Text.Json;
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
    public class ContextNonProposerTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ContextNonProposerTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ContextNonProposerTest>();

            _logger = Log.ForContext<ContextNonProposerTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteBlockOneThird()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stateChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Round == 1 && eventArgs.Step == Step.PreVote)
                {
                    stateChangedToRoundOnePreVote.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer2Priv, round: 1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, 1, hash: block.Hash, flag: VoteFlag.PreVote)));

            // Wait for round 1 prevote step.
            await stateChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreCommitBlockTwoThird()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            ConsensusPreCommitMsg? preCommit = null;
            var preCommitSent = new AsyncAutoResetEvent();
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusPreCommitMsg preCommitMsg)
                {
                    preCommit = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.Peer1Priv));

            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: block.Hash, VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: block.Hash, VoteFlag.PreVote)));

            await Task.WhenAll(preCommitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(block.Hash, preCommit?.BlockHash);
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);

            var json =
                JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(context.ToString())
                    ?? throw new NullReferenceException("Failed to deserialize context");

            Assert.Equal(0, json["locked_round"].GetInt64());
            Assert.Equal(0, json["valid_round"].GetInt64());
            Assert.Equal(block.Hash.ToString(), json["locked_value"].GetString());
            Assert.Equal(block.Hash.ToString(), json["valid_value"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNilTwoThird()
        {
            var stepChangedToPreCommit = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();

            var (fx, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var invalidBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: blockChain.Tip.Index + 1,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: fx.Miner.PublicKey,
                    previousHash: blockChain.Tip.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(fx.Miner, blockChain);

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreCommit)
                {
                    stepChangedToPreCommit.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusPreCommitMsg preCommitMsg && preCommitMsg.BlockHash is null)
                {
                    preCommitSent.Set();
                }
            };

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(invalidBlock, TestUtils.Peer1Priv));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: null, VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, VoteFlag.PreVote)));

            await Task.WhenAll(preCommitSent.WaitAsync(), stepChangedToPreCommit.WaitAsync());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteNilOnInvalidBlock()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var timeoutProcessed = false;
            var nilPreVoteSent = new AsyncAutoResetEvent();

            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);
            context.StateChanged += (_, evnetArgs) =>
            {
                if (evnetArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.TimeoutProcessed += (_, __) =>
            {
                timeoutProcessed = true;
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusPreVoteMsg vote && vote.PreVote.BlockHash is null)
                {
                    nilPreVoteSent.Set();
                }
            };
            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var invalidBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: blockChain.Tip.Index + 1,
                    timestamp: blockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                    miner: TestUtils.Peer1Priv.PublicKey.ToAddress(),
                    publicKey: TestUtils.Peer1Priv.PublicKey,
                    previousHash: blockChain.Tip.Hash,
                    txHash: null,
                    lastCommit: null))
                .Propose().Evaluate(TestUtils.Peer1Priv, blockChain);

            context.Start();
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, TestUtils.Peer1Priv));

            await Task.WhenAll(nilPreVoteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.False(timeoutProcessed); // Check step transition isn't by timeout.
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterPreVoteNilOneThird()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv);

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var stepChangedToRoundOnePreVote = new AsyncAutoResetEvent();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Round == 1 && eventArgs.Step == Step.PreVote)
                {
                    stepChangedToRoundOnePreVote.Set();
                }
            };
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer2Priv, round: 1));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer3Priv, 1, 1, hash: null, flag: VoteFlag.PreVote)));

            await stepChangedToRoundOnePreVote.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPropose()
        {
            var stepChangedToPreVote = new AsyncAutoResetEvent();
            var preVoteSent = new AsyncAutoResetEvent();

            var (_, _, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                contextTimeoutOptions: new ContextTimeoutOption(proposeSecondBase: 1));

            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Step == Step.PreVote)
                {
                    stepChangedToPreVote.Set();
                }
            };
            context.MessageBroadcasted += (_, message) =>
            {
                if (message is ConsensusPreVoteMsg)
                {
                    preVoteSent.Set();
                }
            };

            context.Start();
            await Task.WhenAll(preVoteSent.WaitAsync(), stepChangedToPreVote.WaitAsync());
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task UponRulesCheckAfterTimeout()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                contextTimeoutOptions: new ContextTimeoutOption(
                    preVoteSecondBase: 1,
                    preCommitSecondBase: 1));

            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer2Priv);
            var roundOneStepChangedToPreVote = new AsyncAutoResetEvent();
            context.StateChanged += (_, eventArgs) =>
            {
                if (eventArgs.Round == 1 && eventArgs.Step == Step.PreVote)
                {
                    roundOneStepChangedToPreVote.Set();
                }
            };

            // Push round 0 and round 1 proposes.
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block1, TestUtils.Peer1Priv, round: 0));
            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block2, TestUtils.Peer2Priv, round: 1));

            // Two additional votes should be enough to trigger prevote timeout timer.
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.PreVote)));

            // Two additional votes should be enough to trigger precommit timeout timer.
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.PreCommit)));

            context.Start();

            // Round 0 Propose -> Round 0 PreVote (due to Round 0 Propose message) ->
            // PreVote timeout start (due to PreVote messages) ->
            // PreVote timeout end -> Round 0 PreCommit ->
            // PreCommit timeout start (due to state mutation check and PreCommit messages) ->
            // PreCommit timeout end -> Round 1 Propose ->
            // Round 1 PreVote (due to state mutation check and Round 1 Propose message)
            await roundOneStepChangedToPreVote.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreVote()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                contextTimeoutOptions: new ContextTimeoutOption(preVoteSecondBase: 1));

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var timeoutProcessed = new AsyncAutoResetEvent();
            context.TimeoutProcessed += (_, __) => timeoutProcessed.Set();
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.PreVote)));
            context.ProduceMessage(
                new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.PreVote)));

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async Task TimeoutPreCommit()
        {
            var (_, blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.Peer0Priv,
                contextTimeoutOptions: new ContextTimeoutOption(preCommitSecondBase: 1));

            var block = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var timeoutProcessed = new AsyncAutoResetEvent();
            context.TimeoutProcessed += (_, __) => timeoutProcessed.Set();
            context.Start();

            context.ProduceMessage(
                TestUtils.CreateConsensusPropose(
                    block, TestUtils.Peer1Priv, round: 0));

            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer1Priv, 1, 0, hash: block.Hash, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv, 1, 0, hash: null, flag: VoteFlag.PreCommit)));
            context.ProduceMessage(
                new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 1, 0, hash: null, flag: VoteFlag.PreCommit)));

            // Wait for timeout.
            await timeoutProcessed.WaitAsync();
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
        }
    }
}
