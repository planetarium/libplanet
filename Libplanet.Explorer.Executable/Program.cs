using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Libplanet.Explorer.Executable
{
    /// <summary>
    /// The program entry point to run a web server.
    /// </summary>
    public class Program
    {
        public static void Main(string[] args)
        {
            Options options = Options.Parse(args, Console.Error);

            IStore store = new LiteDBStore(options.StorePath, readOnly: true);
            IBlockPolicy<AppAgnosticAction> policy = new BlockPolicy<AppAgnosticAction>(
                null,
                blockIntervalMilliseconds: 5000,
                minimumDifficulty: 1024L,
                difficultyBoundDivisor: 128);
            var blockChain = new BlockChain<AppAgnosticAction>(policy, store);
            Startup.BlockChainSingleton = blockChain;

            WebHost.CreateDefaultBuilder()
                .UseStartup<ExplorerStartup<AppAgnosticAction, Startup>>()
                .UseUrls($"http://{options.Host}:{options.Port}/")
                .Build()
                .Run();
        }

        internal class AppAgnosticAction : IAction
        {
            public IImmutableDictionary<string, object> PlainValue
            {
                get;
                private set;
            }

            public void LoadPlainValue(
                IImmutableDictionary<string, object> plainValue)
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
