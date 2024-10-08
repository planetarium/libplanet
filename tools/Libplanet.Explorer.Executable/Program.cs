using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Cocona;
using GraphQL.Server;
using GraphQL.Utilities;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.Executable.Exceptions;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Schemas;
using Libplanet.Net;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using NetMQ;
using Serilog;
using Serilog.Events;

namespace Libplanet.Explorer.Executable
{
    /// <summary>
    /// The program entry point to run a web server.
    /// </summary>
    public class Program : CoconaLiteConsoleAppBase
    {
        public static async Task Main(string[] args)
        {
            if (args.Length > 0 && !new string[]
            {
                "serve",
                "schema",
            }.Contains(args[0]))
            {
                Console.Error.WriteLine(
                    "NOTICE: the root primary command has been deprecated and moved " +
                    "to the `serve` command. Currently the root primary command forwards " +
                    "to the `serve` command but it'll be obsoleted in the 0.47.0 release.");
            }

            await CoconaLiteApp.RunAsync<Program>(args);
        }

        [Command(Description = "Show GraphQL schema")]
        public void Schema()
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddGraphQL()
                .AddGraphTypes(typeof(LibplanetExplorerSchema));

            serviceCollection.AddSingleton<IBlockChainContext, Startup>();
            serviceCollection.AddSingleton<IStore, MemoryStore>();

            IServiceProvider serviceProvider = serviceCollection.BuildServiceProvider();
            var schema = new LibplanetExplorerSchema(serviceProvider);
            var printer = new SchemaPrinter(schema);

            Console.WriteLine(printer.Print());
        }

        // This command has been deprecated. The `serve` command should be used instead.
        // FIXME: Obsolete this command in 0.47.0 release.
        [CommandMethodForwardedTo(typeof(Program), nameof(Serve))]
        [PrimaryCommand]
        public void Run()
            => throw new NotSupportedException();

        [Command(Description = "Run libplanet-explorer with options.")]
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "MEN003",
            Justification = "Many lines are required for running the method.")]
        public async Task Serve(
            [Option(
                "store-path",
                new[] { 'P' },
                Description = @"The path of the blockchain store. If omitted (default)
in memory version is used.")]
            string storePath,
            [Option(
                "store-type",
                new[] { 'T' },
                Description = @"The type of the blockchain store. If omitted (default)
in DefaultStore is used.")]
            string storeType,
            [Option(
                "genesis-block",
                new[] { 'G' },
                Description = "The path of the genesis block. It should be absolute or http url.")]
            string genesisBlockPath,
            [Option("debug", new[] { 'd' }, Description = "Print logs for debugging as well.")]
            bool debug = false,
            [Option("host", new[] { 'H' }, Description = "The host address to listen.")]
            string host = "0.0.0.0",
            [Option("port", new[] { 'p' }, Description = "The port number to listen.")]
            int port = 5000,
            [Option(
                "block-interval",
                new[] { 'i' },
                Description = @"An appropriate interval in milliseconds between
consecutive blocks.")]
            int blockIntervalMilliseconds = 5000,
            [Option(
                "app-protocol-version",
                new[] { 'V' },
                Description = "An app protocol version token.")]
            string appProtocolVersionToken = null,
            [Option(
                "max-transactions-per-block",
                Description = @"The number of maximum transactions able to be included
in a block.")]
            int maxTransactionsPerBlock = 100,
            [Option(
                "max-transactions-bytes",
                Description = @"The number of maximum bytes size of all transactions in a block
except for genesis block.")]
            int maxTransactionsBytes = 100 * 1024,
            [Option(
                "max-genesis-transactions-bytes",
                Description = @"The number of maximum bytes size of all transactions
in the genesis block.")]
            int maxGenesisTransactionsBytes = 1024 * 1024,
            [Option(
                "seed",
                new[] { 's' },
                Description = @"Seed nodes to join to the network as a node. The format of each
seed is a comma-separated triple of a peer's hexadecimal public key, host, and port number.
E.g., `02ed49dbe0f2c34d9dff8335d6dd9097f7a3ef17dfb5f048382eebc7f451a50aa1,example.com,31234'.
If omitted (default) explorer only the local blockchain store.")]
            string[] seedStrings = null,
            [Option(
                "ice-server",
                new[] { 'I' },
                Description = "URL to ICE server (TURN/STUN) to work around NAT.")]
            string iceServerUrl = null
        )
        {
            Options options = new Options(
                debug,
                host,
                port,
                blockIntervalMilliseconds,
                appProtocolVersionToken,
                maxTransactionsPerBlock,
                maxTransactionsBytes,
                maxGenesisTransactionsBytes,
                seedStrings,
                iceServerUrl,
                storePath,
                storeType,
                genesisBlockPath);

            var loggerConfig = new LoggerConfiguration();
            loggerConfig = options.Debug
                ? loggerConfig.MinimumLevel.Debug()
                : loggerConfig.MinimumLevel.Information();
            loggerConfig = loggerConfig
                .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                .WriteTo.Console();
            Log.Logger = loggerConfig.CreateLogger();

            try
            {
                IStore store = LoadStore(options);
                IStateStore stateStore = new NoOpStateStore();

                IBlockPolicy policy =
                    new DumbBlockPolicy(LoadBlockPolicy(options));
                IStagePolicy stagePolicy =
                    new VolatileStagePolicy();
                var blockChainStates = new BlockChainStates(store, stateStore);
                var blockChain =
                    new BlockChain(
                        policy,
                        stagePolicy,
                        store,
                        stateStore,
                        await options.GetGenesisBlockAsync(policy),
                        blockChainStates,
                        new ActionEvaluator(
                            policy.PolicyActionsRegistry,
                            stateStore,
                            new SingleActionLoader(typeof(NullAction))));
                Startup.PreloadedSingleton = false;
                Startup.BlockChainSingleton = blockChain;
                Startup.StoreSingleton = store;

                IWebHost webHost = WebHost.CreateDefaultBuilder()
                    .UseStartup<ExplorerStartup<Startup>>()
                    .UseSerilog()
                    .UseUrls($"http://{options.Host}:{options.Port}/")
                    .Build();

                Swarm swarm = null;
                if (!(options.Seeds is null))
                {
                    string aggregatedSeedStrings =
                        options.SeedStrings.Aggregate(string.Empty, (s, s1) => s + s1);
                    Console.Error.WriteLine(
                        $"Seeds are {aggregatedSeedStrings}");

                    // TODO: Take privateKey as a CLI option
                    // TODO: Take appProtocolVersion as a CLI option
                    // TODO: Take host as a CLI option
                    // TODO: Take listenPort as a CLI option
                    if (options.IceServer is null)
                    {
                        Console.Error.WriteLine(
                            "error: -s/--seed option requires -I/--ice-server as well."
                        );
                        Environment.Exit(1);
                        return;
                    }

                    Console.Error.WriteLine("Creating Swarm.");

                    var privateKey = new PrivateKey();
                    var consensusPrivateKey = new PrivateKey();

                    // FIXME: The appProtocolVersion should be fixed properly.
                    var swarmOptions = new SwarmOptions
                    {
                        BootstrapOptions = new BootstrapOptions
                        {
                            SeedPeers = options.Seeds.ToImmutableList(),
                        },
                        TimeoutOptions = new TimeoutOptions
                        {
                            MaxTimeout = TimeSpan.FromSeconds(10),
                        },
                    };

                    var apvOptions = new AppProtocolVersionOptions()
                    {
                        AppProtocolVersion = options.AppProtocolVersionToken is string t
                            ? AppProtocolVersion.FromToken(t)
                            : default(AppProtocolVersion),
                    };

                    var hostOptions = new HostOptions(null, new[] { options.IceServer });

                    var transport = await NetMQTransport.Create(
                        privateKey,
                        apvOptions,
                        hostOptions,
                        swarmOptions.MessageTimestampBuffer);

                    swarm = new Swarm(
                        blockChain,
                        privateKey,
                        transport,
                        options: swarmOptions);
                }

                Startup.SwarmSingleton = swarm;

                using (var cts = new CancellationTokenSource())
                using (swarm)
                {
                    Console.CancelKeyPress += (sender, eventArgs) =>
                    {
                        eventArgs.Cancel = true;
                        cts.Cancel();
                    };

                    try
                    {
                        await Task.WhenAll(
                            webHost.RunAsync(cts.Token),
                            StartSwarmAsync(swarm, cts.Token)
                        );
                    }
                    catch (OperationCanceledException)
                    {
                        await swarm?.StopAsync(waitFor: TimeSpan.FromSeconds(1))
                            .ContinueWith(_ => NetMQConfig.Cleanup(false));
                    }
                }
            }
            catch (InvalidOptionValueException e)
            {
                string expectedValues = string.Join(", ", e.ExpectedValues);
                Console.Error.WriteLine($"Unexpected value given through '{e.OptionName}'\n"
                          + $"  given value: {e.OptionValue}\n"
                          + $"  expected values: {expectedValues}");
            }
        }

        private static IStore LoadStore(Options options)
        {
            // FIXME: This method basically does the same thing to Libplanet.Extensions.Cocona's
            // Utils.LoadStoreFromUri() method.
            // The duplicate code should be extract to a shared common method.
            // https://github.com/planetarium/libplanet/issues/1573
            bool readOnlyMode = options.Seeds is null;
            switch (options.StoreType)
            {
                case "rocksdb":
                    return new RocksDBStore.RocksDBStore(
                      options.StorePath,
                      maxTotalWalSize: 16 * 1024 * 1024,
                      keepLogFileNum: 1);
                case "default":
                    return new DefaultStore(
                        options.StorePath,
                        flush: false,
                        readOnly: readOnlyMode);
                default:
                    // FIXME: give available store type as argument hint without code duplication.
                    var availableStoreTypes = new[] { "rocksdb", "default" };
                    const string longOptionName = "store-type";
                    throw new InvalidOptionValueException(
                        "--" + longOptionName,
                        options.StoreType,
                        availableStoreTypes);
            }
        }

        private static BlockPolicy LoadBlockPolicy(Options options)
        {
            return new BlockPolicy(
                new PolicyActionsRegistry(),
                blockInterval: TimeSpan.FromMilliseconds(options.BlockIntervalMilliseconds),
                getMaxTransactionsBytes: i => i > 0
                    ? options.MaxTransactionsBytes
                    : options.MaxGenesisTransactionsBytes,
                getMaxTransactionsPerBlock: _ => options.MaxTransactionsPerBlock);
        }

        private static async Task StartSwarmAsync(Swarm swarm, CancellationToken cancellationToken)
        {
            if (swarm is null)
            {
                Startup.PreloadedSingleton = true;
                return;
            }

            try
            {
                Console.Error.WriteLine("Bootstrapping.");
                await swarm.BootstrapAsync(cancellationToken);
            }
            catch (TimeoutException)
            {
                Console.Error.WriteLine("No any neighbors.");
            }

            Console.Error.WriteLine("Starts preloading.");
            await swarm.PreloadAsync(cancellationToken: cancellationToken);
            Console.Error.WriteLine("Finished preloading.");
            Startup.PreloadedSingleton = true;

            await swarm.StartAsync(cancellationToken: cancellationToken);
        }

        internal class DumbBlockPolicy : IBlockPolicy
        {
            private readonly IBlockPolicy _impl;

            public DumbBlockPolicy(BlockPolicy blockPolicy)
            {
                _impl = blockPolicy;
            }

            public IPolicyActionsRegistry PolicyActionsRegistry => _impl.PolicyActionsRegistry;

            public int GetMinTransactionsPerBlock(long index) =>
                _impl.GetMinTransactionsPerBlock(index);

            public int GetMaxTransactionsPerBlock(long index) =>
                _impl.GetMaxTransactionsPerBlock(index);

            public long GetMaxTransactionsBytes(long index) =>
                _impl.GetMaxTransactionsBytes(index);

            public TxPolicyViolationException ValidateNextBlockTx(
                BlockChain blockChain,
                Transaction transaction) =>
                _impl.ValidateNextBlockTx(blockChain, transaction);

            public BlockPolicyViolationException ValidateNextBlock(
                BlockChain blockChain,
                Block nextBlock
            ) => _impl.ValidateNextBlock(blockChain, nextBlock);

            public int GetMaxTransactionsPerSignerPerBlock(long index) =>
                _impl.GetMaxTransactionsPerSignerPerBlock(index);

            public long GetMaxEvidencePendingDuration(long index) =>
                _impl.GetMaxEvidencePendingDuration(index);
        }

        internal class Startup : IBlockChainContext
        {
            public bool Preloaded => PreloadedSingleton;

            public BlockChain BlockChain => BlockChainSingleton;

            public IStore Store => StoreSingleton;

            public Swarm Swarm => SwarmSingleton;

            // XXX workaround for build; we decided to decommission Libplanet.Explorer.Executable
            // project, but it will be removed after we move the schema command. As this project
            // does not work as is, this change is barely enough to allow the build.
            // See also: https://github.com/planetarium/libplanet/discussions/2588
            public IBlockChainIndex Index => null;

            internal static bool PreloadedSingleton { get; set; }

            internal static BlockChain BlockChainSingleton { get; set; }

            internal static IStore StoreSingleton { get; set; }

            internal static Swarm SwarmSingleton { get; set; }
        }

        private class NoOpStateStore : IStateStore
        {
            public ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash) => null;

            public ITrie Commit(ITrie trie) => null;

            public void Dispose()
            {
            }
        }
    }
}
