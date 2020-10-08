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
            string jsonConfigurationRoot)
        {
            if (!Directory.Exists(jsonConfigurationRoot))
            {
                Directory.CreateDirectory(jsonConfigurationRoot);
            }

            var pfs = new PhysicalFileSystem();
            var fileSystem = new SubFileSystem(
                pfs,
                pfs.ConvertPathFromInternal(jsonConfigurationRoot),
                owned: true);
            services.AddTransient<IConfigurationService<ToolConfiguration>>(
                _ => new JsonConfigurationService(fileSystem));
        }
    }
}
