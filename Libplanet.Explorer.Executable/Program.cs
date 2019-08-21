using System;
using System.Collections.Immutable;
using CommandLine;
using Libplanet.Action;
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

            Startup.StoreState = new LiteDBStore(options.StorePath, readOnly: true);
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

        internal class Startup : IBlockchainStore
        {
            public IStore Store => StoreState;

            internal static IStore StoreState { get; set; }
        }
    }
}
