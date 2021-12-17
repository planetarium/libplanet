#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using Zio;
using Zio.FileSystems;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// The default built-in <see cref="IKeyValueStore"/> implementation. This stores data in
    /// the file system or in memory.
    /// </summary>
    public class DefaultKeyValueStore : IKeyValueStore
    {
        private readonly IFileSystem _root;

        /// <summary>
        /// Creates a new <see cref="DefaultKeyValueStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// If the path is <c>null</c>, the database is created in memory.</param>
        public DefaultKeyValueStore(string? path)
        {
            if (path is null)
            {
                _root = new MemoryFileSystem();
            }
            else
            {
                path = Path.GetFullPath(path);
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var pfs = new PhysicalFileSystem();
                _root = new SubFileSystem(
                    pfs,
                    pfs.ConvertPathFromInternal(path),
                    owned: true
                );
            }
        }

        /// <inheritdoc/>
        public byte[] Get(in KeyBytes key)
        {
            var path = DataPath(key);
            return _root.FileExists(path)
                ? _root.ReadAllBytes(path)
                : throw new KeyNotFoundException($"No such key: {key}.");
        }

        /// <inheritdoc cref="IKeyValueStore.Get(IEnumerable{KeyBytes})"/>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys)
        {
            // We don't optimize this method because it is not used in production.
            var dictBuilder = ImmutableDictionary.CreateBuilder<KeyBytes, byte[]>();
            foreach (KeyBytes key in keys)
            {
                var path = DataPath(key);
                if (_root.FileExists(path))
                {
                    dictBuilder[key] = _root.ReadAllBytes(path);
                }
            }

            return dictBuilder.ToImmutable();
        }

        /// <inheritdoc/>
        public void Set(in KeyBytes key, byte[] value)
        {
            var path = DataPath(key);
            _root.WriteAllBytes(path, value);
        }

        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                Set(kv.Key, kv.Value);
            }
        }

        /// <inheritdoc/>
        public void Delete(in KeyBytes key)
        {
            var path = DataPath(key);
            if (_root.FileExists(path))
            {
                _root.DeleteFile(path);
            }
        }

        public void Dispose()
        {
            _root.Dispose();
        }

        /// <inheritdoc/>
        public bool Exists(in KeyBytes key)
            => _root.FileExists(DataPath(key));

        /// <inheritdoc/>
        public IEnumerable<KeyBytes> ListKeys() =>
            _root.EnumerateFiles(UPath.Root)
                .Select(path => KeyBytes.FromHex(path.GetName()));

        private UPath DataPath(in KeyBytes key) =>
            UPath.Root / key.Hex;
    }
}
