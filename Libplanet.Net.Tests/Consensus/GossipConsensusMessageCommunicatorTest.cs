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
using Libplanet.Net.Tests.Transports;
using Libplanet.Net.Transports;
using Libplanet.Tests.Store;
using Libplanet.Types.Consensus;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQTransportCollection")]
    public class GossipConsensusMessageCommunicatorTest
    {
        private const int Timeout = 60 * 1000;
        private readonly NetMQTransportFixture _netMQTransportFixture;
        private readonly ILogger _logger;

        public GossipConsensusMessageCommunicatorTest(
            NetMQTransportFixture netMQTransportFixture, ITestOutputHelper output)
        {
            _netMQTransportFixture = netMQTransportFixture;
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<GossipConsensusMessageCommunicatorTest>();

            _logger = Log.ForContext<GossipConsensusMessageCommunicatorTest>();
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
            var peer1 = new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", 6001));
            var peer2 = new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", 6002));
            var peer3 = new BoundPeer(key3.PublicKey, new DnsEndPoint("127.0.0.1", 6003));
            var receivedTwoHigherPreVotes = new AsyncAutoResetEvent();
            var receivedPreCommitFrom3 = new AsyncAutoResetEvent();
            var communicator1 = CreateGossipConesnsusMessageCommunicator(
                content => { },
                key1,
                6001,
                new[] { peer2 });
            var communicator2 = CreateGossipConesnsusMessageCommunicator(
                content =>
                {
                    if (content is ConsensusPreVoteMsg preVote)
                    {
                        if (preVote.Round > 2)
                        {
                            // If received message of higher round, counts.
                            nHigherPreVoteReceived++;
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
                key2,
                6002,
                new[] { peer1, peer3 });
            var communicator3 = CreateGossipConesnsusMessageCommunicator(
                content => { },
                key3,
                6003,
                new[] { peer2 });

            async Task CheckDeniedAsync()
            {
                bool isPeer1Denied = false;
                while (!isPeer1Denied)
                {
                    isPeer1Denied = communicator2!.Gossip.DeniedPeers.Contains(peer1);
                    await Task.Delay(200);
                }
            }

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

                // This message will be accepted, since its round is valid.
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreVote)));

                // Higher round messages. These will trigger spam filter,
                // and only two will be received.
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 3, fx.Hash1, VoteFlag.PreVote)));
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 4, fx.Hash1, VoteFlag.PreVote)));
                // Higher round message. This will trigger spam filter, if encounter three times.
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 5, fx.Hash1, VoteFlag.PreVote)));

                // Wait for third higher round message encounter.
                await receivedTwoHigherPreVotes.WaitAsync();
                await CheckDeniedAsync();

                // These messages will be rejected, since spam filter logic has been activated
                // to communicator1, and gossip denies messages from it.
                communicator1.Gossip.AddMessage(
                    new ConsensusPreVoteMsg(
                        TestUtils.CreateVote(new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreVote)));
                communicator1.Gossip.AddMessage(
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(
                            new PrivateKey(), 1, 1, fx.Hash1, VoteFlag.PreCommit)));

                // Since communicator3 wasn't denied, this message will be received without block.
                communicator3.Gossip.AddMessage(
                    new ConsensusPreCommitMsg(
                        TestUtils.CreateVote(
                            new PrivateKey(), 1, 2, fx.Hash1, VoteFlag.PreCommit)));

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
                await communicator2.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await communicator3.Gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
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

            var transport = NetMQTransport.Create(
                privateKey ?? new PrivateKey(),
                apvOptions,
                hostOptions).ConfigureAwait(false).GetAwaiter().GetResult();
            _netMQTransportFixture.Track(transport);

            return transport;
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
