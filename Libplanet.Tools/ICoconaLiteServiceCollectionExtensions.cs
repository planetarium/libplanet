using System;
using System.IO;
using Cocona.Lite;
using Zio.FileSystems;

namespace Libplanet.Tools
{
    public static class ICoconaLiteServiceCollectionExtensions
    {
        public static void AddFileConfigurationService(
            this ICoconaLiteServiceCollection services,
            string fileConfigurationServiceRoot)
        {
            if (!Directory.Exists(fileConfigurationServiceRoot))
            {
                Directory.CreateDirectory(fileConfigurationServiceRoot);
            }

            var pfs = new PhysicalFileSystem();
            var fileSystem = new SubFileSystem(
                pfs,
                pfs.ConvertPathFromInternal(fileConfigurationServiceRoot),
                owned: true);
            Console.WriteLine(fileConfigurationServiceRoot);
            services.AddTransient<IConfigurationService<string, string>>(
                _ => new FileConfigurationService(fileSystem));
        }
    }
}
