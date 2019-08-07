using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using Libplanet.Action;
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Mono.Options;

namespace Libplanet.Explorer.Executable
{
    /// <summary>
    /// The program entry point to run a web server.
    /// </summary>
    public class Program
    {
        private const string DefaultHost = "0.0.0.0";
        private const int DefaultPort = 5000;
        private const string DefaultStoreType = "litedb";

        private static OptionSet options = new OptionSet
        {
            {
                "s|store-type=",
                "The storage backend to use.  Available types: " +
                    string.Join(", ", StoreRegistry.List()) + ".",
                v => storeTypeName = v
            },
            {
                "H|host=",
                $"The host address to listen. [{DefaultHost}]",
                v => host = v
            },
            {
                "p|port=",
                $"The port number to listen. [{DefaultPort}]",
                v => portString = v
            },
            {
                "h|help",
                "Show this message and exit.",
                v => showHelp = !(v is null)
            },
        };

        private static bool showHelp;

        private static string storeTypeName;

        private static string host = DefaultHost;

        private static string portString;

        private static int port = DefaultPort;

        public static int Main(string[] args)
        {
            int code = Parse(args);
            if (code != 0)
            {
                return Math.Max(code, 0);
            }

            BuildWebHost().Run();
            return 0;
        }

        public static IWebHost BuildWebHost() =>
            WebHost.CreateDefaultBuilder()
                .UseStartup<ExplorerStartup<AppAgnosticAction, Startup>>()
                .UseUrls($"http://{host}:{port}/")
                .Build();

        internal static int Parse(string[] args)
        {
            string programName = System.IO.Path.GetFileName(
                System.Environment.GetCommandLineArgs()[0]);
            TextWriter stderr = Console.Error;
            List<string> extra;
            try
            {
                extra = options.Parse(args);
            }
            catch (OptionException e)
            {
                stderr.WriteLine("error: {0}", e.Message);
                stderr.WriteLine(
                    "Try `{0} --help' for more information.",
                    programName
                );
                return 1;
            }

            if (showHelp)
            {
                Console.WriteLine(
                    "Usage: {0} [options] STORE_LOCATOR",
                    programName
                );
                Console.WriteLine();
                Console.WriteLine("Options:");
                options.WriteOptionDescriptions(Console.Out);
                return -1;
            }

            if (extra.Count > 1)
            {
                stderr.WriteLine("error: Too many arguments.");
                stderr.WriteLine(
                    "Try `{0} --help' for more information.",
                    programName
                );
                return 1;
            }
            else if (extra.Count < 1)
            {
                stderr.WriteLine("error: Too few arguments.");
                stderr.WriteLine(
                    "Try `{0} --help' for more information.",
                    programName
                );
                return 1;
            }

            IStore store;
            try
            {
                store = StoreRegistry.Get(storeTypeName ?? DefaultStoreType, extra[0]);
            }
            catch (StoreRegistry.StoreNotFoundException e)
            {
                stderr.WriteLine(
                    "error: Invalid -s/--store-type: `{0}'.",
                    e.TypeName
                );
                stderr.WriteLine(
                    "Available types are: {0}.",
                    string.Join(", ", StoreRegistry.List())
                );
                return 1;
            }

            Startup.StoreState = store;

            if (portString is null)
            {
                port = DefaultPort;
            }
            else if (!int.TryParse(portString, out port) || port < 0 || port > 0xffff)
            {
                stderr.WriteLine("error: {0} is not a valid port number.", portString);
                return 1;
            }

            return 0;
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
