using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextTest
    {
        private const int Timeout = 60_000;
        private readonly StoreFixture _fx;
        private readonly ILogger _logger;

        public ConsensusContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextTest>();

            _logger = Log.ForContext<ConsensusContextTest>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
        }

        [Fact(Timeout = Timeout)]
        public void Ctor()
        {
            var privateKey = new PrivateKey();
            var blockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using var transport = TestUtils.CreateNetMQTransport(
                privateKey,
                "localhost",
                17192);
            using var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    TimeSpan.FromSeconds(1),
                    port: 17192,
                    privateKey: privateKey);

            Assert.Equal(Step.Null, consensusContext.Step);
            Assert.Equal("No context", consensusContext.ToString());
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightIncreasing()
        {
            // NewHeight also covers Commit() due to calling the method from Context<T>
            var privateKey = new PrivateKey();
            var blockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using var transport = TestUtils.CreateNetMQTransport(
                privateKey,
                "localhost",
                17192);
            using var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    TimeSpan.FromSeconds(1),
                    port: 17192,
                    privateKey: privateKey);
            var waitingCommit = new AutoResetEvent(false);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            Assert.Throws<InvalidHeightIncreasingException>(
                () => consensusContext.NewHeight(blockChain.Tip.Index));
            Assert.Throws<InvalidHeightIncreasingException>(
                () => consensusContext.NewHeight(blockChain.Tip.Index + 2));

            blockChain.TipChanged += (sender, tuple) => waitingCommit.Set();
            consensusContext.NewHeight(blockChain.Tip.Index + 1);

            waitingCommit.WaitOne();

            Assert.Equal(1, blockChain.Tip.Index);
            // Next NewHeight is not called yet.
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            TimeSpan newHeightDelay = TimeSpan.FromSeconds(1);
            using var context = new ConsensusContext<DumbAction>(
                _ => { },
                blockChain,
                blockChain.Tip.Index,
                new PrivateKey(),
                new List<PublicKey> { new PrivateKey().PublicKey, new PrivateKey().PublicKey },
                newHeightDelay);
            Assert.Equal(0, context.Height);
            await blockChain.MineBlock(new PrivateKey(), append: true);
            Assert.Equal(0, context.Height);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(blockChain.Tip.Index + 1, context.Height);
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWithLastCommit()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            List<PrivateKey> validators = new List<PrivateKey>
                { new PrivateKey(), new PrivateKey(), new PrivateKey(), new PrivateKey() };
            List<BoundPeer> validatorPeers = validators.Select(
                v => new BoundPeer(v.PublicKey, new DnsEndPoint("localhost", 1000))).ToList();
            AsyncAutoResetEvent tipChanged = new AsyncAutoResetEvent();
            AsyncAutoResetEvent proposed = new AsyncAutoResetEvent();
            ConsensusPropose? propose = null;
            var codec = new Codec();
            blockChain.TipChanged += (sender, tuple) =>
            {
                tipChanged.Set();
            };

            var context = new ConsensusContext<DumbAction>(
                message =>
                {
                    if (message is ConsensusPropose proposeMessage)
                    {
                        propose = proposeMessage;
                        proposed.Set();
                    }
                },
                blockChain,
                blockChain.Tip.Index,
                validators[2],
                validators.Select(pk => pk.PublicKey).ToList(),
                TimeSpan.MaxValue);
            context.NewHeight(1);
            var block1 = await blockChain.MineBlock(validators[1], append: false);
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    0,
                    block1.Hash,
                    codec.Encode(block1.MarshalBlock()),
                    -1) { Remote = validatorPeers[1], });
            var expectedVotes = new Vote[4];
            for (int i = 0; i < 4; i++)
            {
                expectedVotes[i] = new Vote(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    validators[i].PublicKey,
                    VoteFlag.Absent,
                    null).Sign(validators[i]);
                context.HandleMessage(
                    new ConsensusVote(expectedVotes[i]) { Remote = validatorPeers[i], });
            }

            for (int i = 0; i < 4; i++)
            {
                if (i == 2)
                {
                    continue;
                }

                expectedVotes[i] = new Vote(
                    1,
                    0,
                    block1.Hash,
                    DateTimeOffset.UtcNow,
                    validators[i].PublicKey,
                    VoteFlag.Commit,
                    null).Sign(validators[i]);
                context.HandleMessage(
                    new ConsensusCommit(expectedVotes[i]) { Remote = validatorPeers[i], });
            }

            await tipChanged.WaitAsync();
            context.NewHeight(2);
            await proposed.WaitAsync();
            if (propose is null)
            {
                throw new NotNullException();
            }

            Block<DumbAction> proposedBlock =
                BlockMarshaler.UnmarshalBlock<DumbAction>(
                    blockChain.Policy.GetHashAlgorithm,
                    (Dictionary)codec.Decode(propose.Payload));
            if (proposedBlock.LastCommit?.Votes is null)
            {
                throw new NotNullException();
            }

            ImmutableArray<Vote> votes = proposedBlock.LastCommit.Value.Votes.Value;
            foreach (Vote vote in votes)
            {
                Assert.True(vote.BlockHash.Equals(blockChain[1].Hash));
                Assert.Equal(
                    vote.Validator.Equals(validators[2].PublicKey)
                        ? VoteFlag.Absent
                        : VoteFlag.Commit,
                    vote.Flag);
            }
        }

        [Fact(Timeout = Timeout)]
        public void IgnoreMessagesFromLowerHeight()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            TimeSpan newHeightDelay = TimeSpan.FromSeconds(1);
            using var context = new ConsensusContext<DumbAction>(
                _ => { },
                blockChain,
                blockChain.Tip.Index + 1,
                new PrivateKey(),
                new List<PublicKey> { new PrivateKey().PublicKey, new PrivateKey().PublicKey },
                newHeightDelay);

            Assert.True(context.Height > 0);
            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusPropose(0, 0, _fx.Block1.Hash, new byte[] { }, -1)));
        }

        [Fact(Timeout = Timeout)]
        public async void HandleProposeMessageFromHigherHeight()
        {
            BlockChain<DumbAction> blockChain1 =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            BlockChain<DumbAction> blockChain2 =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            TimeSpan newHeightDelay = TimeSpan.FromSeconds(1);
            var privateKey = new PrivateKey();
            var codec = new Codec();
            using var context = new ConsensusContext<DumbAction>(
                _ => { },
                blockChain1,
                blockChain1.Tip.Index + 1,
                new PrivateKey(),
                new List<PublicKey> { privateKey.PublicKey },
                newHeightDelay);
            var block1 = await blockChain2.MineBlock(privateKey, append: true);
            var block2 = await blockChain2.MineBlock(privateKey, append: true);
            var validatorPeer = new BoundPeer(
                privateKey.PublicKey,
                new DnsEndPoint("localhost", 12345));

            // Message from higher height
            context.HandleMessage(
                new ConsensusPropose(
                    2,
                    0,
                    block2.Hash,
                    codec.Encode(block2.MarshalBlock()),
                    -1)
                {
                    Remote = validatorPeer,
                });

            context.NewHeight(blockChain1.Tip.Index + 1);
            Assert.Equal(1, context.Height);
            var stepChanged = new AsyncAutoResetEvent();
            context.Contexts[1].StepChanged += (sender, tuple) =>
            {
                stepChanged.Set();
            };
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    0,
                    block1.Hash,
                    codec.Encode(block1.MarshalBlock()),
                    -1)
                {
                    Remote = validatorPeer,
                });
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);

            context.HandleMessage(
                new ConsensusVote(
                    new Vote(
                        1,
                        0,
                        block1.Hash,
                        DateTimeOffset.UtcNow,
                        privateKey.PublicKey,
                        VoteFlag.Absent,
                        null).Sign(privateKey))
                {
                    Remote = validatorPeer,
                });
            await stepChanged.WaitAsync();
            Assert.Equal(Step.PreCommit, context.Step);

            context.HandleMessage(
                new ConsensusCommit(
                    new Vote(
                        1,
                        0,
                        block1.Hash,
                        DateTimeOffset.UtcNow,
                        privateKey.PublicKey,
                        VoteFlag.Commit,
                        null).Sign(privateKey))
                {
                    Remote = validatorPeer,
                });
            await stepChanged.WaitAsync();
            Assert.Equal(Step.EndCommit, context.Step);
            await Task.Delay(newHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(2, context.Height);

            // Already received propose message for height 2, skip to PreVote step not Propose step.
            Assert.Equal(Step.PreVote, context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void IncreaseRoundWhenTimeout()
        {
            var blockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using var transport = TestUtils.CreateNetMQTransport(
                TestUtils.Peer1Priv,
                "localhost",
                17193);
            using var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    TimeSpan.FromSeconds(1),
                    port: 17193,
                    privateKey: TestUtils.Peer1Priv,
                    validators: TestUtils.Validators);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            consensusContext.NewHeight(blockChain.Tip.Index + 1);
            // Wait for block to be proposed.
            await Task.Delay(1000);
            Assert.Equal(1, consensusContext.Height);
            Assert.Equal(0, consensusContext.Round);

            // Triggers timeout +2/3 with NIL and Block
            consensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer2,
                });

            consensusContext.HandleMessage(
                new ConsensusVote(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peer3,
                });

            await Task.Delay(Context<DumbAction>.TimeoutPreVote(0));

            consensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer2Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer2,
                });

            consensusContext.HandleMessage(
                new ConsensusCommit(
                    vote: TestUtils.CreateVote(
                        TestUtils.Peer3Priv,
                        1,
                        hash: null,
                        flag: VoteFlag.Commit))
                {
                    Remote = TestUtils.Peer3,
                });

            await Task.Delay(Context<DumbAction>.TimeoutPreCommit(0));

            Assert.Equal(1, consensusContext.Height);
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => consensusContext.Round == 1,
                5_000,
                conditionLabel: "Round does not changed.");
        }
    }
}
