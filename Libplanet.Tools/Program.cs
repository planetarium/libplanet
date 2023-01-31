namespace Libplanet.Tools;

using System;
using System.IO;
using System.Threading.Tasks;
using Cocona;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.Extensions.Cocona.Extensions;

[HasSubCommands(typeof(ApvCommand), "apv", Description = "App protocol version utilities.")]
[HasSubCommands(typeof(KeyCommand), "key", Description = "Manage private keys.")]
[HasSubCommands(typeof(MptCommand), "mpt", Description = "Merkle Patricia Trie utilities.")]
[HasSubCommands(typeof(StoreCommand), "store", Description = "Store utilities.")]
[HasSubCommands(typeof(StatsCommand), "stats", Description = "Stats utilities.")]
[HasSubCommands(typeof(TxCommand), "tx", Description = "Transaction utilities.")]
[HasSubCommands(typeof(BlockCommand), "block", Description = "Block utilities.")]
public class Program
{
    private static readonly string FileConfigurationServiceRoot = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData),
        "planetarium",
        "cli.json");

    // Workaround for linking with Libplanet.RocksDBStore.
    private static readonly Type _rocksdb = typeof(Libplanet.RocksDBStore.RocksDBStore);

    public static Task Main(string[] args) =>
        CoconaLiteApp.CreateHostBuilder()
            .ConfigureServices(services =>
            {
                services.AddJsonConfigurationService(FileConfigurationServiceRoot);
            })
            .RunAsync<Program>(args, options =>
            {
                options.TreatPublicMethodsAsCommands = false;
                options.EnableShellCompletionSupport = true;
            });

    [PrimaryCommand]
    public Task Help() =>
        /* FIXME: I believe there is a better way... */
        Main(new[] { "--help" });
}
