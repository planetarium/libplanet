using System;
using System.IO;
using System.Text.Json;
using Libplanet.Tools.Configuration;
using Zio;

namespace Libplanet.Tools
{
    public class JsonConfigurationService : IConfigurationService<ToolConfiguration>
    {
        private const string ConfigurationFileName = "config.json";

        private readonly IFileSystem _fileSystem;

        public JsonConfigurationService(IFileSystem fileSystem)
        {
            _fileSystem = fileSystem;
        }

        public ToolConfiguration Load()
        {
            if (!File.Exists(ConfigurationFileName))
            {
                return new ToolConfiguration();
            }

            return JsonSerializer.Deserialize<ToolConfiguration>(
                _fileSystem.ReadAllText(UPath.Root / ConfigurationFileName));
        }

        public void Store(ToolConfiguration configuration)
        {
            Console.WriteLine(JsonSerializer.Serialize(configuration));
            _fileSystem.WriteAllText(
                UPath.Root / ConfigurationFileName,
                JsonSerializer.Serialize(configuration));
        }
    }
}
