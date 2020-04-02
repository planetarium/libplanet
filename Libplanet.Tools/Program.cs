using System.Threading.Tasks;
using Cocona;

namespace Libplanet.Tools
{
    [HasSubCommands(typeof(Apv), Description = "App protocol version utilities.")]
    [HasSubCommands(typeof(Key), Description = "Manage private keys.")]
    public class Program
    {
        public static Task Main(string[] args) =>
            CoconaLiteApp.RunAsync<Program>(args, options =>
            {
                options.TreatPublicMethodsAsCommands = false;
            });

        [PrimaryCommand]
        public Task Help() =>
            /* FIXME: I believe there is a better way... */
            Main(new[] { "--help" });
    }
}
