using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ByzantineTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public ByzantineTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ByzantineTest>();

            _logger = Log.ForContext<ByzantineTest>();
        }

        [Fact(Timeout = Timeout)]
        public async Task DoubleVote()
        {
            // If a byzantine node sends two different votes in a round, by the MessageLog
            // specification, one of the vote is ignored and keep the total quorum remains the same.

            // Due to giving a BroadcastMessage delegation, here Context<T> is created in
            // first and defined null. The initialization will be done in later.
            const int validatorCount = 4;
            var validatorKeys = TestUtils.PrivateKeys.Take(validatorCount).ToArray();

            var peerList = validatorKeys
                .Select((key, index) =>
                    new BoundPeer(
                        key.PublicKey,
                        new DnsEndPoint("localhost", 6000 + index)))
                .ToArray();

            (BlockChain<DumbAction> BlockChain, Context<DumbAction> Context)[]? validators = null;
            var gossips = validatorKeys
                .Select((key, index) => TestUtils.CreateGossip(
                    content =>
                    {
                        if (content is ConsensusMsg consensusMsg)
                        {
                            // ReSharper disable once AccessToModifiedClosure
                            validators![index].Context.ProduceMessage(consensusMsg);
                        }
                    },
                    privateKey: key,
                    port: 6000 + index,
                    peers: validatorKeys.Select((k, i) => new BoundPeer(
                        k.PublicKey, new DnsEndPoint("localhost", 6000 + i))).ToArray()))
                .ToArray();

            validators = validatorKeys
                .Select((key, index) =>
                    TestUtils.CreateDummyContext(
                        1,
                        privateKey: key,
                        broadcastMessage: gossips[index].AddMessage,
                        newHeightDelay: TimeSpan.Zero))
                .ToArray();

            try
            {
                // Setup next height listener.
                var newHeightStarted = new AsyncAutoResetEvent[validatorCount];
                var messageExceptionOccured = new AsyncAutoResetEvent[validatorCount];
                foreach (var item in validators.Select((validator, index) => (validator, index)))
                {
                    newHeightStarted[item.index] = new AsyncAutoResetEvent();
                    messageExceptionOccured[item.index] = new AsyncAutoResetEvent();
                    item.validator.Context.StateChanged += (sender, mrs) =>
                    {
                        if (mrs.Step == Step.EndCommit)
                        {
                            newHeightStarted[item.index].Set();
                        }
                    };

                    item.validator.Context.ExceptionOccurred += (sender, e) =>
                    {
                        if (e is InvalidConsensusMessageException)
                        {
                            messageExceptionOccured[item.index].Set();
                        }
                    };
                }

                var proposalCreated = new AsyncAutoResetEvent();
                ConsensusProposalMsg? proposalMsg = null;
                validators[1].Context.MessageBroadcasted += (sender, msg) =>
                {
                    if (msg is ConsensusProposalMsg proposal)
                    {
                        proposalMsg = proposal;
                        proposalCreated.Set();
                    }
                };

                foreach (var gossip in gossips)
                {
                    _ = gossip.StartAsync(default);
                    await gossip.WaitForRunningAsync();
                }

                validators[1].Context.Start();

                await proposalCreated.WaitAsync();
                var proposalAPreVoteNil = TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    1,
                    0,
                    proposalMsg!.BlockHash,
                    VoteFlag.PreVote);

                // Messages will be delivered in this order:
                // proposal, preVote1Val, preVote0NIL, preVote(0|2|3)Val
                validators[1].Context.ProduceMessage(new ConsensusPreVoteMsg(proposalAPreVoteNil));
                validators[2].Context.ProduceMessage(new ConsensusPreVoteMsg(proposalAPreVoteNil));
                validators[3].Context.ProduceMessage(new ConsensusPreVoteMsg(proposalAPreVoteNil));

                validators[0].Context.Start();
                validators[2].Context.Start();
                validators[3].Context.Start();

                await Task.WhenAll(newHeightStarted.Select(x => x.WaitAsync()));

                foreach (var item in messageExceptionOccured.Select((e, i) => (e, i)))
                {
                    if (item.i == 0)
                    {
                        Assert.False(item.e.IsSet);
                    }
                    else
                    {
                        Assert.True(item.e.IsSet);
                    }
                }

                // TODO: Check the evidence is collected properly after the double vote incident.
            }
            finally
            {
                foreach (var gossip in gossips)
                {
                    await gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                    gossip.Dispose();
                }

                foreach (var validator in validators)
                {
                    validator.Context.Dispose();
                }
            }
        }
    }
}
