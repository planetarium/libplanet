#pragma warning disable SA1200
using Cocona.Lite;
#pragma warning restore SA1200

namespace Libplanet.Extensions.Cocona.Extensions
{
    using System.IO;
    using Libplanet.Extensions.Cocona.Configuration;
    using Libplanet.Extensions.Cocona.Services;
    using Zio.FileSystems;

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
