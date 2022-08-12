using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class ConsensusContextTest : ConsensusContextTestBase
    {
        private static readonly PrivateKey PrivateKeyPeer1 = TestUtils.Peer1Priv;
        private static readonly List<PublicKey> Validators = new List<PublicKey>()
            { TestUtils.Peer0Priv.PublicKey, PrivateKeyPeer1.PublicKey, };

        private readonly ILogger _logger;

        public ConsensusContextTest(ITestOutputHelper output)
            : base(output, PrivateKeyPeer1, Validators)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusContextTest>();

            _logger = Log.ForContext<ConsensusContextTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightIncreasing()
        {
            AsyncAutoResetEvent stepChangedToEndCommit = new AsyncAutoResetEvent();

            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index));
            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index + 2));

            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StateChanged += (sender, state) =>
            {
                if (state.Step == Step.EndCommit)
                {
                    stepChangedToEndCommit.Set();
                }
            };

            // FIXME: StartAsync inside NewHeight makes it unreliable to try to await for
            // early events.
            BlockHash blockHash;
            while (true)
            {
                try
                {
                    var voteSet = ConsensusContext.Contexts[BlockChain.Tip.Index + 1].VoteSet(0);
                    if (voteSet.Votes[0].BlockHash is BlockHash hash)
                    {
                        blockHash = hash;
                        break;
                    }
                }
                catch (Exception)
                {
                }

                await Task.Delay(100);
            }

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            // Waiting for commit.
            await stepChangedToEndCommit.WaitAsync();
            Assert.Equal(1, BlockChain.Tip.Index);
            // Next NewHeight is not called yet.
            Assert.Equal(1, ConsensusContext.Height);
            Assert.Equal(0, ConsensusContext.Round);
        }

        [Fact(Timeout = Timeout)]
        public void Ctor()
        {
            Assert.Equal(Step.Null, ConsensusContext.Step);
            Assert.Equal("No context", ConsensusContext.ToString());
        }

        [Fact(Timeout = Timeout)]
        public async void NewHeightWhenTipChanged()
        {
            Assert.Equal(1, ConsensusContext.Height);
            BlockChain.Append(BlockChain.ProposeBlock(new PrivateKey()));
            Assert.Equal(1, ConsensusContext.Height);
            await Task.Delay(NewHeightDelay + TimeSpan.FromSeconds(1));
            Assert.Equal(2, ConsensusContext.Height);
        }

        [Fact(Timeout = Timeout)]
        public void IgnoreMessagesFromLowerHeight()
        {
            Assert.True(ConsensusContext.Height > 0);
            Assert.Throws<InvalidHeightMessageException>(
                () => ConsensusContext.HandleMessage(
                    new ConsensusPropose(
                        new PrivateKey().PublicKey,
                        0,
                        0,
                        Fx.Block1.Hash,
                        new byte[] { },
                        -1)));
        }
    }
}
