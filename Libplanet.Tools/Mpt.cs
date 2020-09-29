#nullable enable
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Cocona;
using Libplanet.RocksDBStore;
using Libplanet.Store.Trie;

namespace Libplanet.Tools
{
    public class Mpt
    {
        [Command(Description = "Compare two ")]
        public void Diff(
            [Argument(Name = "KEY-VALUE-STORE-PATH")]
            string keyValueStorePath,
            [Argument(Name = "STATE-ROOT-HASH")]
            string stateRootHashHex,
            [Argument(Name = "OTHER-STATE-ROOT-HASH")]
            string otherStateRootHashHex,
            [Option]
            string keyValueStoreType,
            [Option]
            bool secure = false)
        {
            IKeyValueStore keyValueStore = LoadKeyValueStore(keyValueStorePath, keyValueStoreType);
            var trie = new MerkleTrie(
                keyValueStore,
                HashDigest<SHA256>.FromString(stateRootHashHex),
                secure);
            var otherTrie = new MerkleTrie(
                keyValueStore,
                HashDigest<SHA256>.FromString(otherStateRootHashHex),
                secure);

            foreach (var group in trie.DifferentNodes(otherTrie))
            {
                Console.Error.Write("Path: ");
                Console.WriteLine(Encoding.UTF8.GetString(ByteUtil.ParseHex(group.Key)));
                var values = group.ToArray();
                foreach (var pair in values)
                {
                    Console.Error.Write("At ");
                    Console.WriteLine(ByteUtil.Hex(pair.Root.ToByteArray()));
                    Console.WriteLine(pair.Value.Inspection);
                }

                Console.WriteLine();
            }
        }

        [PrimaryCommand]
        public Task Help() =>
            /* FIXME: I believe there is a better way... */
            Program.Main(new[] { "mpt", "--help" });

        private IKeyValueStore LoadKeyValueStore(string keyValueStorePath, string keyValueStoreType)
        {
            switch (keyValueStoreType)
            {
                case "rocksdb":
                    return new RocksDBKeyValueStore(keyValueStorePath);
                case "default":
                    return new RocksDBKeyValueStore(keyValueStorePath);
                default:
                    throw new CommandExitedException(
                        $"The given {nameof(keyValueStoreType)}," +
                        $" {keyValueStorePath} is not supported.",
                        -1);
            }
        }
    }
}
