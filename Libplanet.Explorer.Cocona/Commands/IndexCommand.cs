using System;
using System.Threading.Tasks;
using Cocona;
using Cocona.Help;
using Libplanet.Explorer.Indexing;
using Libplanet.Extensions.Cocona;
using Libplanet.Store;
using Serilog;

namespace Libplanet.Explorer.Cocona.Commands
{
    /// <summary>
    /// A class that provides <see cref="Cocona"/> commands related to
    /// <see cref="IBlockChainIndex"/>.
    /// </summary>
    public class IndexCommand : CoconaLiteConsoleAppBase
    {
        private const string StoreArgumentDescription =
            "The URI that represents the backend of an " + nameof(IStore) + " object."
            + " <store-type>://<store-path> (e.g., rocksdb+file:///path/to/store)";

        private const string IndexArgumentDescription =
            "The URI that represents the backend of an " + nameof(IBlockChainIndex) + " object."
            + " <index-type>://<index-path (e.g., sqlite+file:///path/to/store)";

        public IndexCommand()
        {
            Log.Logger = new LoggerConfiguration()
                .WriteTo.Console()
                .CreateLogger();
        }

        [Command(
            Description =
                "Synchronizes an index database for use with libplanet explorer services.")]
        public async Task Sync(
            [Argument("STORE", Description = StoreArgumentDescription)]
            string storeUri,
            [Argument("INDEX", Description = IndexArgumentDescription)]
            string indexUri
        )
        {
            try
            {
                await LoadIndexFromUri(indexUri).SynchronizeAsync(
                        Utils.LoadStoreFromUri(storeUri), Context.CancellationToken)
                    .ConfigureAwait(false);
            }
            catch (OperationCanceledException)
            {
            }
        }

        [PrimaryCommand]
        public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder) =>
            Console.Error.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());

        internal static IBlockChainIndex LoadIndexFromUri(string uriString)
        {
            // Adapted from Libplanet.Extensions.Cocona.Utils.LoadStoreFromUri().
            // TODO: Cocona supports .NET's TypeConverter protocol for instantiating objects
            // from CLI options/arguments.  We'd better to implement it for IStore, and simply
            // use IStore as the option/argument types rather than taking them as strings.
            var uri = new Uri(uriString);

            var protocol = uri.Scheme.Split('+')[0];
            var transport = string.Join('+', uri.Scheme.Split('+')[1..]);

            if (string.IsNullOrWhiteSpace(transport))
            {
                throw new ArgumentException(
                    $"The index URI scheme must contain a transport (e.g. sqlite+file://).",
                    nameof(uriString)
                );
            }

            if (protocol is "rocksdb" && transport is "file")
            {
                return new RocksDbBlockChainIndex(uri.LocalPath);
            }

            throw new ArgumentException(
                $"The index URI scheme {uri.Scheme}:// is not supported.",
                nameof(uriString)
            );
        }
    }
}
