using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ContextTest
    {
        private const int Timeout = 60_000;
        private const int Port = 19192;
        private readonly TimeSpan newHeightDelay = TimeSpan.FromSeconds(4);
        private readonly StoreFixture _fx;
        private readonly ILogger _logger;

        public ContextTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ContextTest>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
        }

        [Fact(Timeout = Timeout)]
        public async void StartDefaultToPropose()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var privateKey = new PrivateKey();
            bool proposeSent = false;
            var messageReceived = new AsyncManualResetEvent();
            var roundStarted = new AsyncManualResetEvent();
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKey, port: Port + 1);

            void IsProposeSent(ConsensusMessage message)
            {
                proposeSent = message is ConsensusPropose;
                if (proposeSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    1,
                    blockChain.Tip.Index + 1,
                    port: Port + 1,
                    privateKey: privateKey,
                    validators: new List<PublicKey>()
                    {
                        privateKey.PublicKey,
                    },
                    watchConsensusMessage: IsProposeSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                1,
                blockChain.Tip.Index + 1,
                privateKey,
                new List<PublicKey>()
                {
                    privateKey.PublicKey,
                });
            context.RoundStarted += (sender, i) => roundStarted.Set();

            context.Start();
            await roundStarted.WaitAsync();
            await messageReceived.WaitAsync();

            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Throws<KeyNotFoundException>(() => context.VoteSet(0));
            Assert.True(proposeSent);
        }

        [Fact(Timeout = Timeout)]
        public async void ProposeBlockToPreVote()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 2);
            bool voteSent = false;
            var messageReceived = new AsyncManualResetEvent();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 2,
                    privateKey: privateKeys[0],
                    validators: validators,
                    watchConsensusMessage: IsPreVoteSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.True(voteSent);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidProposer()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 3);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    port: Port + 3,
                    privateKey: privateKeys[0],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.Start();
            Assert.Throws<InvalidBlockProposeMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusPropose(
                            0,
                            1,
                            0,
                            default,
                            codec.Encode(block.MarshalBlock()),
                            -1)
                        {
                            Remote = new Peer(privateKeys[1].PublicKey),
                        }));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowNILPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 4);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    port: Port + 4,
                    privateKey: privateKeys[0],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.Start();
            Assert.Throws<InvalidProposerProposeMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusPropose(
                            0,
                            1,
                            0,
                            default,
                            codec.Encode(block.MarshalBlock()),
                            -1)
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidValidatorVote()
        {
            var (validators, privateKeys) = GetRandomValidators();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 5);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    port: Port + 5,
                    privateKey: privateKeys[0],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.Start();
            // Vote's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusVote(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[1],
                                VoteFlag.Absent,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusVote(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[0],
                                VoteFlag.Absent,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Commit's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusCommit(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[1],
                                VoteFlag.Commit,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusCommit(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[0],
                                VoteFlag.Commit,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowDifferentHeight()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[1], port: Port + 6);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    1,
                    port: Port + 6,
                    privateKey: privateKeys[1],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                1,
                blockChain.Tip.Index + 1,
                privateKeys[1],
                validators);
            var block = await blockChain.MineBlock(privateKeys[1], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusPropose(
                        2,
                        2,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    }));

            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            privateKeys[2], 2, 2, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    }));

            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            privateKeys[2], 2, 2, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    }));
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteNilToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 7);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();
            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 7,
                    privateKey: privateKeys[0],
                    validators: validators,
                    watchConsensusMessage: IsPreCommitSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators,
                Step.PreVote);

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            var roundVoteSet = context.VoteSet(0);
            Assert.False(roundVoteSet.HasTwoThirdPrevote());

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });
            messageReceived.Wait();
            roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdPrevote());
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.True(voteSent);

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommitNilToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 8);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 8,
                    privateKey: privateKeys[0],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators,
                Step.PreCommit);
            var timeoutOccurred = new AsyncManualResetEvent();
            context.TimeoutOccurred += (sender, tuple) =>
            {
                if (tuple.Item1 == Step.PreCommit)
                {
                    timeoutOccurred.Set();
                }
            };

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            await timeoutOccurred.WaitAsync();

            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.Propose, context.Step);
            Assert.NotNull(context.VoteSet(0));

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutProposeToPreVote()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 9);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new AsyncManualResetEvent();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 9,
                    privateKey: privateKeys[0],
                    validators: validators,
                    watchConsensusMessage: IsPreVoteSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var timeoutOccurred = new AsyncManualResetEvent();
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
            var enterPreVote = new AsyncManualResetEvent();
            context.StepChanged += (sender, tuple) =>
            {
                if (tuple == Step.PreVote)
                {
                    enterPreVote.Set();
                }
            };

            context.Start();
            await timeoutOccurred.WaitAsync();
            await enterPreVote.WaitAsync();
            await messageReceived.WaitAsync();

            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.True(voteSent);
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteBlockToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 10);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 10,
                    privateKey: privateKeys[0],
                    validators: validators,
                    watchConsensusMessage: IsPreCommitSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            messageReceived.Wait();
            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdPrevote());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.True(voteSent);

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipTimeoutProposeToPreCommitNilToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 11);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    3,
                    blockChain.Tip.Index + 1,
                    port: Port + 11,
                    privateKey: privateKeys[3],
                    validators: validators);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);
            var timeoutOccurred = new AsyncManualResetEvent();
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            await timeoutOccurred.WaitAsync();
            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(2, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 12);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    3,
                    blockChain.Tip.Index + 1,
                    port: Port + 12,
                    privateKey: privateKeys[3],
                    validators: validators);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreVoteBlockToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 13);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    3,
                    blockChain.Tip.Index + 1,
                    port: Port + 13,
                    privateKey: privateKeys[3],
                    validators: validators,
                    watchConsensusMessage: IsPreCommitSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            messageReceived.Wait();
            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdPrevote());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.True(voteSent);

            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreVoteNilToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 14);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    13,
                    blockChain.Tip.Index + 1,
                    port: Port + 14,
                    privateKey: privateKeys[3],
                    validators: validators,
                    watchConsensusMessage: IsPreCommitSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            messageReceived.Wait();
            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdPrevote());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.True(voteSent);

            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreVoteBlockNilCompetingToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 15);
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            bool voteSent = false;
            var messageReceived = new AsyncManualResetEvent();
            var timeoutOccurred = new AsyncManualResetEvent();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 15,
                    privateKey: privateKeys[0],
                    validators: validators,
                    watchConsensusMessage: IsPreCommitSent);

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            context.Start();
            context.HandleMessage(
                new ConsensusPropose(
                    0,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Absent))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            await timeoutOccurred.WaitAsync();
            await messageReceived.WaitAsync();
            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdPrevote());
            Assert.Equal(Step.PreCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.True(voteSent);

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void PreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[0], port: Port + 16);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    0,
                    blockChain.Tip.Index + 1,
                    port: Port + 16,
                    privateKey: privateKeys[0],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                0,
                blockChain.Tip.Index + 1,
                privateKeys[0],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[0], append: false);

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            Assert.True(blockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipPreVoteToPreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 17);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    3,
                    blockChain.Tip.Index + 1,
                    port: Port + 17,
                    privateKey: privateKeys[3],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                3,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
            Assert.True(blockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipPreVoteToPreCommitNilToTimeoutToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[3], port: Port + 18);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var timeoutOccurred = new AsyncManualResetEvent();
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    3,
                    blockChain.Tip.Index + 1,
                    port: Port + 18,
                    privateKey: privateKeys[3],
                    validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                3,
                blockChain.Tip.Index + 1,
                privateKeys[3],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[3], append: false);
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            await timeoutOccurred.WaitAsync();
            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(2, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
            Assert.False(blockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommitBlockNilCompetingToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            using ITransport transport =
                TestUtils.CreateNetMQTransport(privateKeys[2], port: Port + 19);
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    2,
                    blockChain.Tip.Index + 1,
                    port: Port + 19,
                    privateKey: privateKeys[2],
                    validators: validators);
            var timeoutOccurred = new AsyncManualResetEvent();

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                2,
                blockChain.Tip.Index + 1,
                privateKeys[2],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[2], append: false);
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            _ = transport.StartAsync();
            await transport.WaitForRunningAsync();

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            await timeoutOccurred.WaitAsync();
            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
            Assert.False(blockChain.ContainsBlock(block.Hash));
        }

        private static (List<PublicKey>, List<PrivateKey>) GetRandomValidators(
            PrivateKey? node0PrivateKey = null, int n = 4)
        {
            node0PrivateKey ??= new PrivateKey();
            var privateKeys = new List<PrivateKey>()
            {
                node0PrivateKey,
            };
            var validators = new List<PublicKey>()
            {
                node0PrivateKey.PublicKey,
            };

            for (var i = 0; i < n - 1; ++i)
            {
                var tempKey = new PrivateKey();
                privateKeys.Add(tempKey);
                validators.Add(tempKey.PublicKey);
            }

            return (validators, privateKeys);
        }
    }
}
