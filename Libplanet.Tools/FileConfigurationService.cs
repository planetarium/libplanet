using System.Collections.Generic;
using Zio;

namespace Libplanet.Tools
{
    public class FileConfigurationService : IConfigurationService<string, string>
    {
        private readonly IFileSystem _fileSystem;

        public FileConfigurationService(IFileSystem fileSystem)
        {
            _fileSystem = fileSystem;
        }

        public string Get(string key)
        {
            if (!_fileSystem.FileExists(KeyPath(key)))
            {
                throw new KeyNotFoundException($"The given key, '{key}' does not exist.");
            }

            return _fileSystem.ReadAllText(KeyPath(key));
        }

        public void Set(string key, string value)
        {
            _fileSystem.WriteAllText(KeyPath(key), value);
        }

        public void Delete(string key)
        {
            if (!_fileSystem.FileExists(KeyPath(key)))
            {
                throw new KeyNotFoundException($"The given key, '{key}' does not exist.");
            }

            _fileSystem.DeleteFile(KeyPath(key));
        }

        private UPath KeyPath(string key) => UPath.Root / key;
    }
}
