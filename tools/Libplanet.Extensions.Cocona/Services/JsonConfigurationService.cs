namespace Libplanet.Extensions.Cocona.Services;

using System;
using System.Collections.Generic;
using System.Text.Json;
using Libplanet.Extensions.Cocona.Configuration;
using Zio;

public class JsonConfigurationService : IConfigurationService<ToolConfiguration>
{
    private readonly IFileSystem _fileSystem;
    private readonly string _configurationFileName;

    public JsonConfigurationService(IFileSystem fileSystem, string configurationFileName)
    {
        _fileSystem = fileSystem;
        _configurationFileName = configurationFileName;
    }

    public ToolConfiguration Load()
    {
        if (!_fileSystem.FileExists(UPath.Root / _configurationFileName))
        {
            return new ToolConfiguration(
                new MptConfiguration(new Dictionary<string, string>()));
        }

        return JsonSerializer.Deserialize<ToolConfiguration>(
            _fileSystem.ReadAllText(UPath.Root / _configurationFileName));
    }

    public void Store(ToolConfiguration configuration)
    {
        Console.WriteLine(JsonSerializer.Serialize(configuration));
        _fileSystem.WriteAllText(
            UPath.Root / _configurationFileName,
            JsonSerializer.Serialize(configuration));
    }
}
