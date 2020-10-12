using System.IO;
using Cocona.Lite;
using Libplanet.Tools.Configuration;
using Zio.FileSystems;

namespace Libplanet.Tools
{
    public static class ICoconaLiteServiceCollectionExtensions
    {
        public static void AddJsonConfigurationService(
            this ICoconaLiteServiceCollection services,
            string jsonConfigurationPath)
        {
            string jsonConfigurationDirectory = Directory.GetParent(jsonConfigurationPath).FullName;
            if (!Directory.Exists(jsonConfigurationDirectory))
            {
                Directory.CreateDirectory(jsonConfigurationDirectory);
            }

            var pfs = new PhysicalFileSystem();
            var fileSystem = new SubFileSystem(
                pfs,
                pfs.ConvertPathFromInternal(jsonConfigurationDirectory),
                owned: true);
            services.AddTransient<IConfigurationService<ToolConfiguration>>(
                _ => new JsonConfigurationService(
                    fileSystem,
                    Path.GetFileName(jsonConfigurationPath)));
        }
    }
}
