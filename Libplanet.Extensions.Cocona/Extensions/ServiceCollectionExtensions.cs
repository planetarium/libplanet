using System.IO;
using Libplanet.Extensions.Cocona.Configuration;
using Libplanet.Extensions.Cocona.Services;
using Microsoft.Extensions.DependencyInjection;
using Zio.FileSystems;

namespace Libplanet.Extensions.Cocona.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddJsonConfigurationService(
            this IServiceCollection services,
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
