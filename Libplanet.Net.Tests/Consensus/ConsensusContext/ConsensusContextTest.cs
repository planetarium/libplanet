using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.ConsensusContext
{
    public class ConsensusContextTest : ConsensusContextTestBase
    {
        private const int Timeout = 60_000;

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
            // NewHeight also covers Commit() due to calling the method from Context<T>
            AutoResetEvent waitingCommit = new AutoResetEvent(false);
            AutoResetEvent stepChanged = new AutoResetEvent(false);
            AutoResetEvent messageProcessed = new AutoResetEvent(false);

            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index));
            Assert.Throws<InvalidHeightIncreasingException>(
                () => ConsensusContext.NewHeight(BlockChain.Tip.Index + 2));

            void CheckPreVote(object? sender, Step e)
            {
                if (e == Step.PreVote)
                {
                    stepChanged.Set();
                }
            }

            void CheckPreCommit(object? sender, Step e)
            {
                if (e == Step.PreCommit)
                {
                    stepChanged.Set();
                }
            }

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            BlockChain.TipChanged += (sender, tuple) => waitingCommit.Set();
            ConsensusContext.NewHeight(BlockChain.Tip.Index + 1);
            // PreVote is sent and handled due to node is the proposer.
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StepChanged += CheckPreVote;
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].MessageProcessed +=
                    (sender, message) => messageProcessed.Set();

            messageProcessed.WaitOne();
            VoteSet voteSet = ConsensusContext.Contexts[BlockChain.Tip.Index + 1].VoteSet(0);
            BlockHash blockHash = voteSet.Votes[0].BlockHash!.Value;

            ConsensusContext.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            stepChanged.WaitOne();
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StepChanged -= CheckPreVote;
            ConsensusContext.Contexts[BlockChain.Tip.Index + 1].StepChanged += CheckPreCommit;

            ConsensusContext.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.Peer0Priv, 1, hash: blockHash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            // Waiting for PreCommit message.
            stepChanged.WaitOne();
            waitingCommit.WaitOne();

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
            await BlockChain.MineBlock(new PrivateKey(), append: true);
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
                    new ConsensusPropose(0, 0, Fx.Block1.Hash, new byte[] { }, -1)));
        }
    }
}
