#nullable enable
using System;
using System.Collections.Generic;
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
    public class DefaultKeyValueStore : IKeyValueStore, IDisposable
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
        public byte[] Get(byte[] key)
        {
            var path = DataPath(key);
            return _root.FileExists(path)
                ? _root.ReadAllBytes(path)
                : throw new KeyNotFoundException("There were no elements that correspond to the" +
                                                 $" key (hex: {ByteUtil.Hex(key)}).");
        }

        /// <inheritdoc/>
        public void Set(byte[] key, byte[] value)
        {
            var path = DataPath(key);
            _root.WriteAllBytes(path, value);
        }

        /// <inheritdoc/>
        public void Delete(byte[] key)
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
        public bool Exists(byte[] key)
            => _root.FileExists(DataPath(key));

        /// <inheritdoc/>
        public IEnumerable<byte[]> ListKeys() =>
            _root.EnumerateFiles(UPath.Root)
                .Select(path => ByteUtil.ParseHex(path.GetName()));

        private UPath DataPath(byte[] key)
        {
            return UPath.Root / ByteUtil.Hex(key);
        }
    }
}
