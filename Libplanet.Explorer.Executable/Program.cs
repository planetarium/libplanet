using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Store;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using NetMQ;
using Serilog;
using Serilog.Events;

namespace Libplanet.Explorer.Executable
{
    /// <summary>
    /// The program entry point to run a web server.
    /// </summary>
    public class Program
    {
        public static async Task Main(string[] args)
        {
            Options options = Options.Parse(args, Console.Error);

            var loggerConfig = new LoggerConfiguration();
            loggerConfig = options.Debug
                ? loggerConfig.MinimumLevel.Debug()
                : loggerConfig.MinimumLevel.Information();
            loggerConfig = loggerConfig
                .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                .WriteTo.Console();
            Log.Logger = loggerConfig.CreateLogger();

            IStore store = new DefaultStore(
                path: options.StorePath,
                flush: false,
                readOnly: options.Seeds is null
            );
            IBlockPolicy<AppAgnosticAction> policy = new BlockPolicy<AppAgnosticAction>(
                null,
                blockIntervalMilliseconds: options.BlockIntervalMilliseconds,
                minimumDifficulty: options.MinimumDifficulty,
                difficultyBoundDivisor: options.DifficultyBoundDivisor);
            var blockChain = new BlockChain<AppAgnosticAction>(policy, store);
            Startup.BlockChainSingleton = blockChain;

            IWebHost webHost = WebHost.CreateDefaultBuilder()
                .UseStartup<ExplorerStartup<AppAgnosticAction, Startup>>()
                .UseSerilog()
                .UseUrls($"http://{options.Host}:{options.Port}/")
                .Build();

            Swarm<AppAgnosticAction> swarm = null;
            if (!(options.Seeds is null))
            {
                Console.WriteLine(
                    $"Seeds are {options.SeedStrings.Aggregate(string.Empty, (s, s1) => s + s1)}");

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

                swarm = new Swarm<AppAgnosticAction>(
                    blockChain,
                    new PrivateKey(),
                    1,
                    iceServers: new[] { options.IceServer }
                );
            }

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
                        StartSwarmAsync(swarm, options.Seeds, cts.Token)
                    );
                }
                catch (OperationCanceledException)
                {
                    await swarm?.StopAsync(waitFor: TimeSpan.FromSeconds(1))
                        .ContinueWith(_ => NetMQConfig.Cleanup(false));
                }
            }
        }

        private static async Task StartSwarmAsync(
            Swarm<AppAgnosticAction> swarm,
            IEnumerable<Peer> seeds,
            CancellationToken cancellationToken)
        {
            if (swarm is null)
            {
                return;
            }

            try
            {
                await swarm.BootstrapAsync(
                    seeds,
                    5000,
                    5000,
                    cancellationToken: cancellationToken
                );
            }
            catch (TimeoutException)
            {
                Console.Error.WriteLine("No any neighbors.");
            }

            // Since explorer does not require states, turn off trustedPeer option.
            var trustedPeers = ImmutableHashSet<Address>.Empty;
            Console.Error.WriteLine("Starts preloading.");
            await swarm.PreloadAsync(
                dialTimeout: TimeSpan.FromSeconds(15),
                trustedStateValidators: trustedPeers,
                cancellationToken: cancellationToken
            );
            Console.Error.WriteLine("Finished preloading.");

            await swarm.StartAsync(cancellationToken: cancellationToken);
        }

        internal class AppAgnosticAction : IAction
        {
            public IValue PlainValue
            {
                get;
                private set;
            }

            public void LoadPlainValue(
                IValue plainValue)
            {
                PlainValue = plainValue;
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }

            public void Render(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }

            public void Unrender(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }
        }

        internal class Startup : IBlockChainContext<AppAgnosticAction>
        {
            public BlockChain<AppAgnosticAction> BlockChain => BlockChainSingleton;

            internal static BlockChain<AppAgnosticAction> BlockChainSingleton { get; set; }
        }
    }
}
