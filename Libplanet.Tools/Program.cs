using System;
using System.IO;
using System.Threading.Tasks;
using Cocona;

namespace Libplanet.Tools
{
    [HasSubCommands(typeof(Apv), Description = "App protocol version utilities.")]
    [HasSubCommands(typeof(Key), Description = "Manage private keys.")]
    [HasSubCommands(typeof(Mpt), Description = "Merkle Patricia Trie utilities.")]
    public class Program
    {
        private static readonly string FileConfigurationServiceRoot = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData),
            "planetarium",
            "cli.json");

        public static Task Main(string[] args) =>
            CoconaLiteApp.Create()
                .ConfigureServices(services =>
                {
                    services.AddJsonConfigurationService(FileConfigurationServiceRoot);
                })
                .RunAsync<Program>(args, options =>
                {
                    options.TreatPublicMethodsAsCommands = false;
                });

        [PrimaryCommand]
        public Task Help() =>
            /* FIXME: I believe there is a better way... */
            Main(new[] { "--help" });
    }
}
