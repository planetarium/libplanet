using System;
using System.IO;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Cocona;
using Libplanet.Crypto.Secp256k1;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.Extensions.Cocona.Extensions;
using CryptoConfig = Libplanet.Crypto.CryptoConfig;

namespace Libplanet.Tools;

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

    public static Task Main(string[] args)
    {
        try
        {
            CryptoConfig.CryptoBackend = new Secp256k1CryptoBackend<SHA256>();
        }
        catch (Exception)
        {
            // If it fails to load the Secp256k1CryptoBackend<T> for any reason
            // fall back to the DefaultCryptoBackend<T> instead.
        }

        return CoconaLiteApp.CreateHostBuilder()
            .ConfigureServices(services =>
            {
                services.AddJsonConfigurationService(FileConfigurationServiceRoot);
            })
            .RunAsync<Program>(args, options =>
            {
                options.TreatPublicMethodsAsCommands = false;
                options.EnableShellCompletionSupport = true;
            });
    }

    [PrimaryCommand]
    public Task Help() =>
        /* FIXME: I believe there is a better way... */
        Main(new[] { "--help" });
}
