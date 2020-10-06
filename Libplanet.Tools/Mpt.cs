#nullable enable
using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Cocona;
using Cocona.Help;
using Libplanet.RocksDBStore;
using Libplanet.Store.Trie;

namespace Libplanet.Tools
{
    public class Mpt
    {
        private readonly IImmutableDictionary<string, Func<string, IKeyValueStore>>
            _kvStoreConstructors =
                ImmutableSortedDictionary<string, Func<string, IKeyValueStore>>.Empty
                    .Add("default", kvStorePath => new DefaultKeyValueStore(kvStorePath))
                    .Add("rocksdb", kvStorePath => new RocksDBKeyValueStore(kvStorePath));

        [Command(Description = "Compare two trees via root hash.")]
        public void Diff(
            [Argument(
                Name = "KEY-VALUE-STORE-PATH",
                Description = "The path where IKeyValueStore implementation was used at.")]
            string kvStorePath,
            [Argument(
                Name = "STATE-ROOT-HASH",
                Description = "The state root hash to compare.")]
            string stateRootHashHex,
            [Argument(
                Name = "OTHER-STATE-ROOT-HASH",
                Description = "Another state root hash to compare.")]
            string otherStateRootHashHex,
            [Option(
                't',
                Description = "The type of the key-value store stored" +
                              " at the given KEY-VALUE-STORE-PATH argument. " +
                              "It should be among in 'default' or 'rocksdb'.")]
            string kvStoreType)
        {
            IKeyValueStore keyValueStore = LoadKeyValueStore(kvStorePath, kvStoreType);
            var trie = new MerkleTrie(
                keyValueStore,
                HashDigest<SHA256>.FromString(stateRootHashHex));
            var otherTrie = new MerkleTrie(
                keyValueStore,
                HashDigest<SHA256>.FromString(otherStateRootHashHex));

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
        public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder)
        {
            Console.Error.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());
        }

        private IKeyValueStore LoadKeyValueStore(string kvStorePath, string kvStoreType)
        {
            if (_kvStoreConstructors.TryGetValue(
                kvStoreType,
                out Func<string, IKeyValueStore>? constructor))
            {
                return constructor(kvStorePath);
            }

            throw new CommandExitedException(
                $"There is no such type for -t/--kv-store-type: {kvStoreType}.  " +
                $"Available options are: {string.Join(", ", _kvStoreConstructors.Keys)}.",
                -1);
        }
    }
}
