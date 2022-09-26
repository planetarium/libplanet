using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ConsensusReactorTestBase : IDisposable, IAsyncLifetime
    {
        protected const int Count = 4;
        protected const int PropagationDelay = 30_000;

        protected readonly ConsensusReactor<DumbAction>[] ConsensusReactors;
        protected readonly BlockChain<DumbAction>[] BlockChains;
        protected readonly CancellationTokenSource CancellationTokenSource;
        protected readonly List<BoundPeer> ValidatorPeers;

        private const int Port = 6100;
        private readonly StoreFixture _fx;
        private readonly PrivateKey[] _privateKey;
        private readonly IStore[] _stores;

        private ILogger _logger;

        protected ConsensusReactorTestBase(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusReactorTestBase>();

            _logger = Log.ForContext<ConsensusReactorTestBase>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);

            CancellationTokenSource = new CancellationTokenSource();

            _privateKey = new PrivateKey[Count];
            ConsensusReactors = new ConsensusReactor<DumbAction>[Count];
            ValidatorPeers = new List<BoundPeer>();
            _stores = new IStore[Count];
            BlockChains = new BlockChain<DumbAction>[Count];

            for (var i = 0; i < Count; i++)
            {
                _privateKey[i] = new PrivateKey();
                ValidatorPeers.Add(
                    new BoundPeer(
                        _privateKey[i].PublicKey,
                        new DnsEndPoint("localhost", Port + i)));
                _stores[i] = new MemoryStore();
                BlockChains[i] = new BlockChain<DumbAction>(
                    TestUtils.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    _stores[i],
                    new TrieStateStore(new MemoryKeyValueStore()),
                    _fx.GenesisBlock);
            }

            for (var i = 0; i < Count; i++)
            {
                ConsensusReactors[i] = (ConsensusReactor<DumbAction>)CreateReactor(
                    blockChain: BlockChains[i],
                    key: _privateKey[i],
                    consensusPort: Port + i,
                    validatorPeers: ValidatorPeers,
                    newHeightDelayMilliseconds: PropagationDelay * 2);
            }
        }

        public void Dispose()
        {
            CancellationTokenSource.Cancel();
            foreach (var reactor in ConsensusReactors)
            {
                reactor.Dispose();
            }

            NetMQConfig.Cleanup(false);
        }

        public Task InitializeAsync() => Task.Delay(TimeSpan.Zero);

        public Task DisposeAsync() => DisposeConsensusReactors();

        private IReactor CreateReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            string host = "localhost",
            int consensusPort = 5101,
            List<BoundPeer> validatorPeers = null!,
            int newHeightDelayMilliseconds = 10_000)
        {
            key ??= new PrivateKey();

            var consensusTransport = NetMQTransport.Create(
                key,
                TestUtils.AppProtocolVersion,
                null,
                8,
                host,
                consensusPort,
                Array.Empty<IceServer>(),
                null).ConfigureAwait(false).GetAwaiter().GetResult();

            return new ConsensusReactor<DumbAction>(
                consensusTransport,
                blockChain,
                key,
                validatorPeers.ToImmutableList(),
                new List<BoundPeer>().ToImmutableList(),
                TimeSpan.FromMilliseconds(newHeightDelayMilliseconds));
        }

        private Task DisposeConsensusReactors()
        {
            return Task.WhenAll((
                from reactor in ConsensusReactors
                where reactor.Running
                select reactor.StopAsync(CancellationTokenSource.Token)).ToArray());
        }
    }
}
