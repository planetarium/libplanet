using System.Threading.Tasks;
using Cocona;

namespace Libplanet.Tools
{
    [HasSubCommands(typeof(Keys), Description = "Manage private keys.")]
    public class Program
    {
        public static Task Main(string[] args) =>
            CoconaLiteApp.RunAsync<Program>(args);
    }
}
