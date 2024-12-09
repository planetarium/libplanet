using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Numerics;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Nito.AsyncEx;
using Xunit;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task DuplicateVote_Test()
        {
            var policy = new NullBlockPolicy();
            var genesisBlock = new MemoryStoreFixture(policy.PolicyActionsRegistry).GenesisBlock;
            var genesisProposer = Libplanet.Tests.TestUtils.GenesisProposer;
            var privateKeys = Libplanet.Tests.TestUtils.ValidatorPrivateKeys.ToArray();
            var count = privateKeys.Length;
            var consensusPeers = Enumerable.Range(0, count).Select(i =>
                new BoundPeer(
                    privateKeys[i].PublicKey,
                    new DnsEndPoint("127.0.0.1", 6000 + i))).ToImmutableList();
            var reactorOptions = Enumerable.Range(0, count).Select(i =>
                new ConsensusReactorOption
                {
                    ConsensusPeers = consensusPeers,
                    ConsensusPort = 6000 + i,
                    ConsensusPrivateKey = privateKeys[i],
                    ConsensusWorkers = 100,
                    TargetBlockInterval = TimeSpan.FromSeconds(4),
                    ContextOption = new ContextOption(),
                }).ToList();

            var swarmTasks = privateKeys.Select(
                (item, index) => CreateSwarm(
                    privateKey: item,
                    policy: policy,
                    genesis: genesisBlock,
                    consensusReactorOption: reactorOptions[index]));
            var swarms = await Task.WhenAll(swarmTasks);
            var blockChains = swarms.Select(item => item.BlockChain).ToArray();

            try
            {
                var startTasks = swarms.Select(item => StartAsync(item));
                await Task.WhenAll(startTasks);
                var addPeerTasks = swarms.Select(
                    (swarm, index) => swarm.AddPeersAsync(
                        swarms.Where((_, i) => i != index).Select(item => item.AsPeer),
                        null));
                await Task.WhenAll(addPeerTasks);

                var consensusContext = swarms[0].ConsensusReactor.ConsensusContext;
                var round = 0;
                var height = 1L;
                var context = consensusContext.CurrentContext;
                var bindingFlags = BindingFlags.Instance | BindingFlags.NonPublic;
                var methodName = "PublishMessage";
                var methodInfo = context.GetType().GetMethod(methodName, bindingFlags);

                Assert.NotNull(methodInfo);

                var vote = MakeRandomVote(privateKeys[0], height, round, VoteFlag.PreVote);
                var args = new object[] { new ConsensusPreVoteMsg(vote) };

                await WaitUntilStepAsync(consensusContext, ConsensusStep.PreVote, default);
                methodInfo.Invoke(context, args);

                var i = 2;
                for (; i < 10; i++)
                {
                    var waitTasks1 = blockChains.Select(item => WaitUntilBlockIndexAsync(item, i));
                    await Task.WhenAll(waitTasks1);
                    Array.ForEach(blockChains, item => Assert.Equal(i + 1, item.Count));
                    if (blockChains.Any(item => item[i].Evidence.Count > 0))
                    {
                        break;
                    }
                }

                Assert.NotEqual(10, i);

                var waitTasks2 = blockChains.Select(item => WaitUntilBlockIndexAsync(item, i));
                await Task.WhenAll(waitTasks2);
                foreach (BlockChain blockChain in blockChains)
                {
                    Assert.Equal(i + 1, blockChain.Count);
                }
            }
            finally
            {
                var cleanTasks = swarms.Select(StopAsync);
                await Task.WhenAll(cleanTasks);
            }
        }

        private static Vote MakeRandomVote(
            PrivateKey privateKey, long height, int round, VoteFlag flag)
        {
            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    $"{nameof(flag)} must be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}" +
                    $"to create a valid signed vote.");
            }

            var hash = new BlockHash(GetRandomBytes(BlockHash.Size));
            var voteMetadata = new VoteMetadata(
                height,
                round,
                hash,
                DateTimeOffset.UtcNow,
                privateKey.PublicKey,
                validatorPower: BigInteger.One,
                flag);

            return voteMetadata.Sign(privateKey);

            static byte[] GetRandomBytes(int size)
            {
                var bytes = new byte[size];
                var random = new System.Random();
                random.NextBytes(bytes);

                return bytes;
            }
        }

        private static async Task WaitUntilBlockIndexAsync(
            BlockChain blockChain,
            long index)
        {
            if (blockChain.Tip.Index < index)
            {
                var manualResetEvent = new ManualResetEvent(false);
                var cancellationTokenSource = new CancellationTokenSource(Timeout);
                blockChain.TipChanged += BlockChain_TipChanged;
                try
                {
                    await Task.Run(WaitAction, cancellationTokenSource.Token);
                }
                finally
                {
                    blockChain.TipChanged -= BlockChain_TipChanged;
                }

                void WaitAction()
                {
                    manualResetEvent.WaitOne(Timeout);
                }

                void BlockChain_TipChanged(object? sender, (Block OldTip, Block NewTip) e)
                {
                    if (e.NewTip.Index >= index)
                    {
                        manualResetEvent.Set();
                    }
                }
            }
        }

        private static async Task WaitUntilStepAsync(
            ConsensusContext consensusContext,
            ConsensusStep consensusStep,
            CancellationToken cancellationToken)
        {
            var asyncAutoResetEvent = new AsyncAutoResetEvent();
            consensusContext.StateChanged += ConsensusContext_StateChanged;
            try
            {
                if (consensusContext.Step != consensusStep)
                {
                    await asyncAutoResetEvent.WaitAsync(cancellationToken);
                }
            }
            finally
            {
                consensusContext.StateChanged -= ConsensusContext_StateChanged;
            }

            void ConsensusContext_StateChanged(object? sender, Context.ContextState e)
            {
                if (e.Step == consensusStep)
                {
                    asyncAutoResetEvent.Set();
                }
            }
        }
    }
}
