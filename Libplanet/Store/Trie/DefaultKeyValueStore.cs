using System.IO;
using LruCacheNet;
using Zio;
using Zio.FileSystems;

namespace Libplanet.Store.Trie
{
    public class DefaultKeyValueStore : IKeyValueStore
    {
        private readonly IFileSystem _root;
        private readonly LruCache<byte[], byte[]> _cache;

        public DefaultKeyValueStore(
            string path,
            int cacheSize = 100
        )
        {
            if (path is null)
            {
                _root = new MemoryFileSystem();
            }
            else
            {
                path = Path.GetFullPath(path);

                var pfs = new PhysicalFileSystem();
                _root = new SubFileSystem(
                    pfs,
                    pfs.ConvertPathFromInternal(path),
                    owned: true
                );
            }

            _cache = new LruCache<byte[], byte[]>(cacheSize);
        }

        public byte[] Get(byte[] key)
        {
            var path = DataPath(key);
            if (_root.FileExists(path))
            {
                return _root.ReadAllBytes(path);
            }
            else
            {
                return null;
            }
        }

        public void Set(byte[] key, byte[] value)
        {
            var path = DataPath(key);
            _root.WriteAllBytes(path, value);
        }

        public void Delete(byte[] key)
        {
            var path = DataPath(key);
            if (_root.FileExists(path))
            {
                _root.DeleteFile(path);
            }
        }

        public bool Exists(byte[] key)
            => _root.FileExists(DataPath(key));

        private UPath DataPath(byte[] key)
        {
            return UPath.Root / ByteUtil.Hex(key);
        }
    }
}
