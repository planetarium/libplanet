using System;
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
    /// <para><see cref="DefaultStore"/> and <see cref="DefaultKeyValueStore"/>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>default+file:</c> scheme
    /// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
    /// <list type="bullet">
    /// <item><description><c>default+file:///var/data/planet/</c></description></item>
    /// <item><description><c>default+file:///c:/Users/john/AppData/Local/planet/</c></description>
    /// </item>
    /// <item><description><c>default+file:///var/data/planet/?secure=true</c>
    /// (trie keys are hashed)</description></item>
    /// </list>
    /// <para>The following query string parameters are supported:</para>
    /// <list type="table">
    /// <item>
    /// <term><c>journal</c></term>
    /// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>journal</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>index-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>indexCacheSize</c> parameter.  50000 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>block-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>blockCacheSize</c> parameter.  512 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-cache</c></term>
    /// <description>Corresponds to <see cref="DefaultStore(string,bool,int,int,int,bool,bool)"/>'s
    /// <c>txCacheSize</c> parameter.  1024 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>flush</c></term>
    /// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>flush</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>readonly</c></term>
    /// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
    /// <see cref="DefaultStore(string, bool, int, int, int, bool, bool)"/>'s <c>readOnly</c>
    /// parameter.</description>
    /// </item>
    /// <item>
    /// <term><c>states-dir</c></term>
    /// <description>Corresponds to <see cref="DefaultKeyValueStore(string)"/>'s <c>path</c>
    /// parameter.  It is relative to the URI path, and defaults to <c>states</c>.</description>
    /// </item>
    /// <item>
    /// <term><c>secure</c></term>
    /// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
    /// <see cref="TrieStateStore(IKeyValueStore, bool)"/>'s <c>secure</c> parameter.</description>
    /// </item>
    /// </list>
    /// </summary>
    public class DefaultKeyValueStore : IKeyValueStore
    {
        private readonly IFileSystem _root;

        /// <summary>
        /// Creates a new <see cref="DefaultKeyValueStore"/>.
        /// </summary>
        /// <param name="path">The path of the directory where the storage files will be saved.
        /// If the path is <see langword="null"/>, the database is created in memory.</param>
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

        /// <inheritdoc cref="IKeyValueStore.Delete(IEnumerable{KeyBytes})"/>
        public void Delete(IEnumerable<KeyBytes> keys)
        {
            foreach (KeyBytes key in keys)
            {
                Delete(key);
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
