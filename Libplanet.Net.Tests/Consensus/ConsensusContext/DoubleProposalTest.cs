using System;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class DoubleProposalTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public DoubleProposalTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<DoubleProposalTest>();

            _logger = Log.ForContext<DoubleProposalTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalAllBlock()
        {
            // Received all quorum of the first block from network, and received no quorum
            // of the second block.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var endCommit = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv, lastCommit: null);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer1Priv, lastCommit: null);

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Step == Step.EndCommit)
                {
                    endCommit.Set();
                }
            };

            consensusContext.MessageBroadcasted += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Equal(block1.Hash, sentPreVoteMsg!.PreVote.BlockHash);

            // Situation: Other nodes response with block1.
            HandlePreVoteAllOf(
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Equal(block1.Hash, sentPreCommitMsg!.PreCommit.BlockHash);

            HandlePreCommitAllOf(
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await endCommit.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(block1, blockChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalTwoThridNullBlock()
        {
            // Received two third quorum of the first block from network, and received
            // one third of quorum which is for second block. Both blocks are invalid block,
            // the one thirds are faulty nodes.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var propose = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv,
                contextTimeoutOptions: new ContextTimeoutOption(1, 1, 1));

            // Invalid lastCommit blocks.
            var block1 = blockChain.ProposeBlock(
                TestUtils.Peer1Priv,
                lastCommit: TestUtils.CreateLastCommit(blockChain.Tip.Hash, 0, 0));
            var block2 = blockChain.ProposeBlock(
                TestUtils.Peer1Priv,
                lastCommit: TestUtils.CreateLastCommit(blockChain.Tip.Hash, 0, 0));

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Round == 1 && eventArgs.Step == Step.Propose)
                {
                    propose.Set();
                }
            };

            consensusContext.MessageConsumed += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Null(sentPreVoteMsg!.PreVote.BlockHash);

            // Situation: Block is invalid, nodes vote NIL. one node is byzantine.
            HandlePreVoteHalfOf(
                null,
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Null(sentPreCommitMsg!.PreCommit.BlockHash);

            HandlePreCommitHalfOf(
                null,
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await propose.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(1, consensusContext.Round);
            Assert.NotEqual(block1, blockChain.Tip);
            Assert.NotEqual(block2, blockChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalHalfBlock()
        {
            // Received half quorum of the first block from network, and received half quorum of
            // second block. No block has received two third quorum, so the no block is committed
            // and the consensus will be moved to the next round.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var propose = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv,
                contextTimeoutOptions: new ContextTimeoutOption(1, 1, 1));

            // Invalid lastCommit blocks.
            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer1Priv);

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Round == 1 && eventArgs.Step == Step.Propose)
                {
                    propose.Set();
                }
            };

            consensusContext.MessageBroadcasted += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Equal(block1.Hash, sentPreVoteMsg!.PreVote.BlockHash);

            // Situation: Votes are equal, 2 block1, 2 block2.
            HandlePreVoteHalfOf(
                block2,
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Null(sentPreCommitMsg!.PreCommit.BlockHash);

            HandlePreCommitAllOf(
                null,
                TestUtils.Peer2Priv,
                consensusContext);

            await propose.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(1, consensusContext.Round);
            Assert.NotEqual(block1, blockChain.Tip);
            Assert.NotEqual(block2, blockChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalTwoThridLockedBlock()
        {
            // Received two third quorum of the first block from network, and received
            // one third quorum of the second block from network.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var endCommit = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer1Priv);

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Round == 0 &&
                    eventArgs.Step == Step.EndCommit)
                {
                    endCommit.Set();
                }
            };

            consensusContext.MessageConsumed += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Equal(block1.Hash, sentPreVoteMsg!.PreVote.BlockHash);

            // Situation: 2 nodes response with block1.
            HandlePreVoteHalfOf(
                block1,
                block2,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Equal(block1.Hash, sentPreCommitMsg!.PreCommit.BlockHash);

            HandlePreCommitAllOf(
                block1,
                TestUtils.Peer2Priv,
                consensusContext);

            await endCommit.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);
            Assert.Equal(block1, blockChain.Tip);
        }

        [Fact(Timeout = Timeout, Skip = "Multiple proposals are not stored.")]
        public async void DoubleProposalTwoThridNotLockedBlock()
        {
            // Received two third quorum of the second block from network, and received
            // one third quorum of the first block from network.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var endCommit = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv);

            var block1 = blockChain.ProposeBlock(TestUtils.Peer1Priv);
            var block2 = blockChain.ProposeBlock(TestUtils.Peer1Priv);

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Round == 0 &&
                    eventArgs.Step == Step.EndCommit)
                {
                    endCommit.Set();
                }
            };

            consensusContext.MessageConsumed += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Equal(block1.Hash, sentPreVoteMsg!.PreVote.BlockHash);

            // Situation: other nodes response with block2.
            HandlePreVoteAllOf(
                block2,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Equal(block2.Hash, sentPreCommitMsg!.PreCommit.BlockHash);

            // FIXME: Does a node should store every propose for committing the block? another valid
            // proposed block could be majority. Assumption of consistency and liveness.
            // (i.e., eventually appends a block, and every node should have same history.)
            HandlePreCommitAllOf(
                block2,
                TestUtils.Peer2Priv,
                consensusContext);

            await endCommit.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);
            Assert.Equal(block2, blockChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalAllNullBlock()
        {
            // Received all quorum of a null block from network, and received votes neither
            // first nor second block. The consensus will be moved to the next round.
            ConsensusPreCommitMsg? sentPreCommitMsg = null;
            ConsensusPreVoteMsg? sentPreVoteMsg = null;
            var preVoteSent = new AsyncAutoResetEvent();
            var preCommitSent = new AsyncAutoResetEvent();
            var propose = new AsyncAutoResetEvent();
            var (_, blockChain, consensusContext) = TestUtils.CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                TestUtils.Policy,
                TestUtils.Peer2Priv,
                contextTimeoutOptions: new ContextTimeoutOption(1, 1, 1));

            // Invalid lastCommit blocks.
            var genesis = blockChain.Tip;
            var block1 = blockChain.ProposeBlock(
                TestUtils.Peer1Priv,
                lastCommit: TestUtils.CreateLastCommit(blockChain.Tip.Hash, 0, 0));
            var block2 = blockChain.ProposeBlock(
                TestUtils.Peer1Priv,
                lastCommit: TestUtils.CreateLastCommit(blockChain.Tip.Hash, 0, 0));

            consensusContext.StateChanged += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 && eventArgs.Round == 1 && eventArgs.Step == Step.Propose)
                {
                    propose.Set();
                }
            };

            consensusContext.MessageBroadcasted += (sender, eventArgs) =>
            {
                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreVoteMsg preVoteMsg)
                {
                    sentPreVoteMsg = preVoteMsg;
                    preVoteSent.Set();
                }

                if (eventArgs.Height == 1 &&
                    eventArgs.Message is ConsensusPreCommitMsg preCommitMsg)
                {
                    sentPreCommitMsg = preCommitMsg;
                    preCommitSent.Set();
                }
            };

            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            HandleDoublePropose(
                block1,
                block2,
                TestUtils.Peer1Priv,
                consensusContext);

            await preVoteSent.WaitAsync();
            Assert.Equal(1, sentPreVoteMsg!.PreVote.Height);
            Assert.Equal(0, sentPreVoteMsg!.PreVote.Round);
            Assert.Null(sentPreVoteMsg!.PreVote.BlockHash);
            Assert.Equal(Step.PreVote, consensusContext.Step);

            HandlePreVoteAllOf(
                null,
                TestUtils.Peer2Priv,
                consensusContext);

            await preCommitSent.WaitAsync();
            Assert.Equal(1, sentPreCommitMsg!.PreCommit.Height);
            Assert.Equal(0, sentPreCommitMsg!.PreCommit.Round);
            Assert.Null(sentPreCommitMsg!.PreCommit.BlockHash);
            Assert.Equal(Step.PreCommit, consensusContext.Step);

            HandlePreCommitAllOf(
                null,
                TestUtils.Peer2Priv,
                consensusContext);

            await propose.WaitAsync();
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(1, consensusContext.Round);
            Assert.Equal(Step.Propose, consensusContext.Step);
            Assert.NotEqual(block1, blockChain.Tip);
            Assert.NotEqual(block2, blockChain.Tip);
        }

        private void HandleDoublePropose(
            Block<DumbAction> lockedBlock,
            Block<DumbAction> conflictingBlock,
            PrivateKey proposerPrivateKey,
            ConsensusContext<DumbAction> consensusContext,
            long height = 1,
            int round = 0,
            int validRound = -1)
        {
            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    lockedBlock,
                    proposerPrivateKey,
                    height,
                    round,
                    validRound));

            consensusContext.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    conflictingBlock,
                    proposerPrivateKey,
                    height,
                    round,
                    validRound));
        }

        private void HandlePreVoteAllOf(
            Block<DumbAction>? lockedBlock,
            PrivateKey nodePrivateKey,
            ConsensusContext<DumbAction> consensusContext,
            long height = 1,
            int round = 0)
        {
            var otherValidators = TestUtils.PrivateKeys.Except(new[] { nodePrivateKey }).ToList();

            otherValidators
                .Select(x => new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        lockedBlock?.Hash,
                        VoteFlag.PreVote)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);
        }

        private void HandlePreCommitAllOf(
            Block<DumbAction>? lockedBlock,
            PrivateKey nodePrivateKey,
            ConsensusContext<DumbAction> consensusContext,
            long height = 1,
            int round = 0)
        {
            var otherValidators = TestUtils.PrivateKeys.Except(new[] { nodePrivateKey }).ToList();

            otherValidators
                .Select(x => new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        lockedBlock?.Hash,
                        VoteFlag.PreCommit)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);
        }

        private void HandlePreVoteHalfOf(
            Block<DumbAction>? majorityBlock,
            Block<DumbAction> conflictingBlock,
            PrivateKey nodePrivateKey,
            ConsensusContext<DumbAction> consensusContext,
            long height = 1,
            int round = 0)
        {
            var otherValidators = TestUtils.PrivateKeys.Except(new[] { nodePrivateKey }).ToList();

            otherValidators
                .Take(2)
                .Select(x => new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        majorityBlock?.Hash,
                        VoteFlag.PreVote)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);

            otherValidators
                .Skip(2)
                .Take(1)
                .Select(x => new ConsensusPreVoteMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        conflictingBlock.Hash,
                        VoteFlag.PreVote)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);
        }

        private void HandlePreCommitHalfOf(
            Block<DumbAction>? majorityBlock,
            Block<DumbAction>? conflictingBlock,
            PrivateKey nodePrivateKey,
            ConsensusContext<DumbAction> consensusContext,
            long height = 1,
            int round = 0)
        {
            var otherValidators = TestUtils.PrivateKeys.Except(new[] { nodePrivateKey }).ToList();

            otherValidators
                .Take(2)
                .Select(x => new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        majorityBlock?.Hash,
                        VoteFlag.PreCommit)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);

            otherValidators
                .Skip(2)
                .Take(1)
                .Select(x => new ConsensusPreCommitMsg(
                    TestUtils.CreateVote(
                        x,
                        height,
                        round,
                        conflictingBlock?.Hash,
                        VoteFlag.PreCommit)))
                .ToList()
                .ForEach(consensusContext.HandleMessage);
        }
    }
}
