using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Tests.Store;
using NetMQ;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class GossipConsensusMessageCommunicatorTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private readonly ILogger _logger;

        public GossipConsensusMessageCommunicatorTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<GossipConsensusMessageCommunicatorTest>();

            _logger = Log.ForContext<GossipConsensusMessageCommunicatorTest>();
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup();
        }

        [Fact(Timeout = Timeout)]
        public async void SendHigherMessage()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            int nPreVoteReceived = 0;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedPreVotes = new AsyncAutoResetEvent();
            var receivedPreCommitFrom3 = new AsyncAutoResetEvent();
            var communicator1 = CreateGossipConesnsusMessageCommunicator(
                content => { },
                key1,
                6001,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", 6002)) });
            var communicator2 = CreateGossipConesnsusMessageCommunicator(
                content =>
                {
                    if (content is ConsensusPreVoteMsg preVote)
                    {
                        nPreVoteReceived++;
                        receivedPreVotes.Set();
                    }
                },
                key2,
                6002,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", 6001)) });

            try
            {
                _ = communicator1.Gossip.StartAsync(default);
                _ = communicator2.Gossip.StartAsync(default);
                await communicator1.Gossip.WaitForRunningAsync();
                await communicator2.Gossip.WaitForRunningAsync();

                communicator1.OnStartHeight(1);
                communicator2.OnStartHeight(1);
                communicator1.OnStartRound(2);
                communicator2.OnStartRound(4);

                // Add message of higher round to communicator1
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreVote)));

                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 3, fx.Hash1, VoteFlag.PreVote)));

                await receivedPreVotes.WaitAsync();
                await Task.Delay(1500);

                Assert.Equal(1, nPreVoteReceived);
            }
            finally
            {
                await communicator1.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await communicator2.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                communicator1.Gossip.Dispose();
                communicator2.Gossip.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ReceiveHigherMessage()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            int nHigherPreVoteReceived = 0;
            int nValidPreVoteReceived = 0;
            int nPreCommitReceived = 0;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var key3 = new PrivateKey();
            var receivedTwoHigherPreVotes = new AsyncAutoResetEvent();
            var receivedPreCommitFrom3 = new AsyncAutoResetEvent();
            var communicator1 = CreateGossipConesnsusMessageCommunicator(
                content => { },
                key1,
                6001,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", 6002)) });
            var communicator2 = CreateGossipConesnsusMessageCommunicator(
                content =>
                {
                    if (content is ConsensusPreVoteMsg preVote)
                    {
                        if (preVote.Round > 2)
                        {
                            nHigherPreVoteReceived++;
                        }
                        else
                        {
                            nValidPreVoteReceived++;
                        }

                        if (nHigherPreVoteReceived >= 2)
                        {
                            receivedTwoHigherPreVotes.Set();
                        }
                    }

                    if (content is ConsensusPreCommitMsg preCommit)
                    {
                        nPreCommitReceived++;

                        if (preCommit.Round == 2)
                        {
                            receivedPreCommitFrom3.Set();
                        }
                    }
                },
                key2,
                6002,
                new[]
                {
                    new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", 6001)),
                    new BoundPeer(key3.PublicKey, new DnsEndPoint("127.0.0.1", 6003)),
                });
            var communicator3 = CreateGossipConesnsusMessageCommunicator(
                content => { },
                key3,
                6003,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", 6002)) });

            try
            {
                _ = communicator1.Gossip.StartAsync(default);
                _ = communicator2.Gossip.StartAsync(default);
                _ = communicator3.Gossip.StartAsync(default);
                await communicator1.Gossip.WaitForRunningAsync();
                await communicator2.Gossip.WaitForRunningAsync();
                await communicator3.Gossip.WaitForRunningAsync();

                communicator1.OnStartHeight(1);
                communicator2.OnStartHeight(1);
                communicator3.OnStartHeight(1);
                communicator1.OnStartRound(4);
                communicator2.OnStartRound(2);
                communicator3.OnStartRound(2);

                // Add message of higher round to communicator1
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreVote)));

                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 3, fx.Hash1, VoteFlag.PreVote)));

                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 4, fx.Hash1, VoteFlag.PreVote)));

                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 5, fx.Hash1, VoteFlag.PreVote)));

                await receivedTwoHigherPreVotes.WaitAsync();
                await Task.Delay(1500);

                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreVote)));

                communicator1.Gossip.AddMessage(
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(
                            new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreCommit)));

                communicator3.Gossip.AddMessage(
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(
                            new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreCommit)));

                await receivedPreCommitFrom3.WaitAsync();
                await Task.Delay(1500);

                Assert.Equal(1, nValidPreVoteReceived);
                Assert.Equal(2, nHigherPreVoteReceived);
                Assert.Equal(1, nPreCommitReceived);
            }
            finally
            {
                await communicator1.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await communicator2.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await communicator3.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                communicator1.Gossip.Dispose();
                communicator2.Gossip.Dispose();
                communicator3.Gossip.Dispose();
            }
        }

        private NetMQTransport CreateTransport(
            PrivateKey? privateKey = null,
            int? port = null)
        {
            var apvOptions = new AppProtocolVersionOptions
            { AppProtocolVersion = TestUtils.AppProtocolVersion };
            HostOptions hostOptions;
            if (port is { } p)
            {
                hostOptions = new HostOptions("127.0.0.1", Array.Empty<IceServer>(), p);
            }
            else
            {
                hostOptions = new HostOptions("127.0.0.1", Array.Empty<IceServer>());
            }

            return NetMQTransport.Create(
                privateKey ?? new PrivateKey(),
                apvOptions,
                hostOptions).ConfigureAwait(false).GetAwaiter().GetResult();
        }

        private GossipConsensusMessageCommunicator CreateGossipConesnsusMessageCommunicator(
            Action<MessageContent> processMessage,
            PrivateKey? privateKey = null,
            int? port = null,
            IEnumerable<BoundPeer>? peers = null,
            IEnumerable<BoundPeer>? seeds = null)
        {
            var transport = CreateTransport(privateKey, port);

            return new GossipConsensusMessageCommunicator(
                transport,
                peers?.ToImmutableArray() ?? ImmutableArray<BoundPeer>.Empty,
                seeds?.ToImmutableArray() ?? ImmutableArray<BoundPeer>.Empty,
                processMessage);
        }
    }
}
