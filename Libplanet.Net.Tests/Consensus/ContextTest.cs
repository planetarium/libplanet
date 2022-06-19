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
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ContextTest
    {
        private const int Timeout = 60_000;
        private const int Port = 17192;
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
        public async void Start()
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var privateKey = new PrivateKey();
            var proposeSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsProposeSent(ConsensusMessage message)
            {
                proposeSent = message is ConsensusPropose;
                messageReceived.Set();
            }

            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    1,
                    port: Port + 7,
                    privateKey: privateKey,
                    validators: new List<PublicKey>()
                    {
                        privateKey.PublicKey,
                    },
                    interceptConsensusMessage: IsProposeSent);

            using (transport)
            {
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

                context.Start();
                messageReceived.Wait();

                Assert.Equal(Step.Propose, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.Throws<KeyNotFoundException>(() => context.VoteSet(0));
                Assert.True(proposeSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ProposeBlockToPreVote()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                messageReceived.Set();
            }

            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 5,
                    privateKey: privateKeys[0],
                    validators: validators,
                    interceptConsensusMessage: IsPreVoteSent);

            using (transport)
            {
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

                messageReceived.Wait();
                Assert.Equal(Step.PreVote, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidProposer()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
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
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowNILPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
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
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowLowerRoundVotes()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    0,
                    blockChain.Tip.Index + 1,
                    privateKeys[0],
                    validators,
                    Step.PreVote,
                    1);
                var block = await blockChain.MineBlock(privateKeys[1], append: false);

                context.HandleMessage(
                    new ConsensusPropose(
                        2,
                        1,
                        1,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                Assert.Throws<InvalidRoundMessageException>(
                    () => context.HandleMessage(
                        new ConsensusVote(
                            TestUtils.CreateVote(
                                privateKeys[1], 2, 1, 0, block.Hash, VoteFlag.Absent))
                        {
                            Remote = new Peer(privateKeys[1].PublicKey),
                        }));
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowDifferentHeight()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    1,
                    port: Port,
                    privateKey: privateKeys[1],
                    validators: validators);

            using (transport)
            {
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
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteNILToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var voteSent = false;
            var messageReceived = new ManualResetEventSlim();
            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                messageReceived.Set();
            }

            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 4,
                    privateKey: privateKeys[0],
                    validators: validators,
                    interceptConsensusMessage: IsPreCommitSent);

            using (transport)
            {
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
        }

        [Fact(Timeout = Timeout)]
        public async void PreCommitNILToTimeoutToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();

            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 2,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
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
        }

        [Fact(Timeout = Timeout)]
        public async void ProposeTimeoutToPreVote()
        {
            var (validators, privateKeys) = GetRandomValidators();

            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                messageReceived.Set();
            }

            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 6,
                    privateKey: privateKeys[0],
                    validators: validators,
                    interceptConsensusMessage: IsPreVoteSent);

            using (transport)
            {
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
                messageReceived.Wait();

                Assert.Equal(Step.PreVote, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteBlockToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                messageReceived.Set();
            }

            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 3,
                    privateKey: privateKeys[0],
                    validators: validators,
                    interceptConsensusMessage: IsPreCommitSent);

            using (transport)
            {
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
                Assert.NotNull(context.VoteSet(0));

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
        }

        [Fact(Timeout = Timeout)]
        public async void PreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port + 1,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
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
