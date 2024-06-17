using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Tests.Store;
using Libplanet.Types.Consensus;
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
                        TestUtils.CreateVote(new PrivateKey(), 1, 3, fx.Hash1, VoteFlag.PreVote)));

                // Add message of same round to communicator1
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreVote)));

                await receivedPreVotes.WaitAsync();
                await Task.Delay(1500);

                // Only message of same round has been transmitted,
                // message of higher round has been rejected to be sent.
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
                content =>
                {
                    if (content is ConsensusPreVoteMsg preVote)
                    {
                        if (preVote.Round > 2)
                        {
                            // If received message of higher round, counts.
                            nHigherPreVoteReceived++;
                            _logger.Debug($"PreVote round({preVote.Round}) > 2 received, " +
                                $" total: {nHigherPreVoteReceived}");
                        }
                        else
                        {
                            // If received message of same or lower round, counts,
                            nValidPreVoteReceived++;
                        }

                        if (nHigherPreVoteReceived >= 2)
                        {
                            // If received two higher round messages,
                            // Spam filter logic will be activated on third
                            // higher round message encounter.
                            receivedTwoHigherPreVotes.Set();
                        }
                    }

                    if (content is ConsensusPreCommitMsg preCommit)
                    {
                        nPreCommitReceived++;

                        if (preCommit.Round == 2)
                        {
                            // Check if received message from communicator3.
                            receivedPreCommitFrom3.Set();
                        }
                    }
                },
                key1,
                6001);

            var transport2 = CreateTransport(key2, 6002);
            var transport3 = CreateTransport(key3, 6003);

            async Task CheckDeniedAsync()
            {
                bool isPeer1Denied = false;
                while (!isPeer1Denied)
                {
                    isPeer1Denied = communicator1.Gossip.DeniedPeers.Contains(transport2.AsPeer);
                    await Task.Delay(200);
                }
            }

            try
            {
                _ = communicator1.Gossip.StartAsync(default);
                _ = transport2.StartAsync();
                _ = transport3.StartAsync();
                await communicator1.Gossip.WaitForRunningAsync();

                communicator1.OnStartHeight(1);
                communicator1.OnStartRound(2);

                var peer1 = new BoundPeer[] { communicator1.Gossip.AsPeer };

                // This message will be accepted, since its round is valid.
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreVote)));

                // Higher round messages. These will trigger spam filter,
                // and only two will be received.
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 3, fx.Hash1, VoteFlag.PreVote)));
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 4, fx.Hash1, VoteFlag.PreVote)));
                // Higher round message. This will trigger spam filter, if encounter three times.
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 5, fx.Hash1, VoteFlag.PreVote)));

                // Wait for third higher round message encounter.
                await receivedTwoHigherPreVotes.WaitAsync();
                await CheckDeniedAsync();

                // These messages will be rejected, since spam filter logic has been activated
                // to communicator1, and gossip denies messages from it.
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreVote)));
                transport2.BroadcastMessage(
                    peer1,
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreCommit))
                    );

                // Since communicator3 wasn't denied, this message will be received without block.
                transport3.BroadcastMessage(
                    peer1,
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreCommit))
                    );

                // Wait for message from communicator1's precommit encounter,
                // but this message will be rejected by spam filter logic.
                await receivedPreCommitFrom3.WaitAsync();
                await Task.Delay(1500);

                // Accepted 1, Rejected 1
                Assert.Equal(1, nValidPreVoteReceived);

                // Accepted 2, Rejected 1
                Assert.Equal(2, nHigherPreVoteReceived);

                // Accepted 1, Rejected 1
                Assert.Equal(1, nPreCommitReceived);
            }
            finally
            {
                await communicator1.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await transport2.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await transport3.StopAsync(TimeSpan.FromMilliseconds(100), default);
                communicator1.Gossip.Dispose();
                transport2.Dispose();
                transport3.Dispose();
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
