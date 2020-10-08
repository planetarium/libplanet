#nullable enable
using System;
using System.Collections.Generic;
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
    internal enum KVStoreType
    {
        RocksDB,
        Default,
    }

    internal enum SchemeType
    {
        // This is set to 0 for `default` value.
        File = 0,
    }

    public class Mpt
    {
        private readonly IImmutableDictionary<KVStoreType, Func<string, IKeyValueStore>>
            _kvStoreConstructors =
                new Dictionary<KVStoreType, Func<string, IKeyValueStore>>
                {
                    [KVStoreType.Default] = kvStorePath => new DefaultKeyValueStore(kvStorePath),
                    [KVStoreType.RocksDB] = kvStorePath => new RocksDBKeyValueStore(kvStorePath),
                }.ToImmutableSortedDictionary();

        [Command(Description = "Compare two trees via root hash.")]
        public void Diff(
            [Argument(
                Name = "KEY-VALUE-STORE",
                Description = "The path where IKeyValueStore implementation was used at.")]
            string kvStoreUri,
            [Argument(
                Name = "STATE-ROOT-HASH",
                Description = "The state root hash to compare.")]
            string stateRootHashHex,
            [Argument(
                Name = "OTHER-STATE-ROOT-HASH",
                Description = "Another state root hash to compare.")]
            string otherStateRootHashHex,
            [FromService] IConfigurationService<string, string> configurationService)
        {
            // If it is not Uri format,
            // try to get uri from configuration service by using it as alias.
            if (!Uri.IsWellFormedUriString(kvStoreUri, UriKind.Absolute))
            {
                try
                {
                    kvStoreUri = configurationService.Get(MPTKVStoreAliasKey(kvStoreUri));
                }
                catch (KeyNotFoundException)
                {
                    var exceptionMessage =
                        $"The alias, '{kvStoreUri}' doesn't exist. " +
                        $"Please pass correct uri or alias.";
                    throw new CommandExitedException(
                        exceptionMessage,
                        -1);
                }
            }

            (KVStoreType kvStoreType, _, string path) =
                ParseKVStoreURI(kvStoreUri);

            IKeyValueStore keyValueStore = LoadKeyValueStore(path, kvStoreType);
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

        // FIXME: Now, it works like `set` not `add`. It allows override.
        [Command(Description="Add a new mpt store alias.")]
        public void Add(
            [Argument] string alias,
            [Argument] string uri,
            [FromService] IConfigurationService<string, string> configurationService)
        {
            try
            {
                // Checks the `uri` is valid.
                ParseKVStoreURI(uri);
            }
            catch (Exception e)
            {
                throw new CommandExitedException(
                    $"It seems the uri is not valid. (exceptionMessage: {e.Message})", -1);
            }

            configurationService.Set(MPTKVStoreAliasKey(alias), uri);
        }

        [Command(Description="Remove the registered mpt store.")]
        public void Remove(
            [Argument] string alias,
            [FromService] IConfigurationService<string, string> configurationService)
        {
            configurationService.Delete(MPTKVStoreAliasKey(alias));
        }

        [PrimaryCommand]
        public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder)
        {
            Console.Error.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());
        }

        private (KVStoreType KVStoreType, SchemeType SchemeType, string Path) ParseKVStoreURI(
            string rawUri)
        {
            var uri = new Uri(rawUri);
            var scheme = uri.Scheme;
            var splitScheme = scheme.Split("+");
            if (splitScheme.Length <= 0 || splitScheme.Length > 2)
            {
                var exceptionMessage = "A key-value store URI must have a scheme, " +
                                       "e.g., default://, rocksdb+file://.";
                throw new ArgumentException(exceptionMessage, nameof(rawUri));
            }

            SchemeType schemeType = SchemeType.File;
            if (!KVStoreType.TryParse(
                splitScheme[0], ignoreCase: true, out KVStoreType kvStoreType))
            {
                throw new NotSupportedException(
                    $"No key-value store backend supports the such scheme: {splitScheme[0]}.");
            }

            if (splitScheme.Length == 2
                && !SchemeType.TryParse(splitScheme[1], ignoreCase: true, out schemeType))
            {
                throw new NotSupportedException(
                    $"No key-value store backend supports the such scheme: {splitScheme[1]}.");
            }

            return (kvStoreType, schemeType, uri.AbsolutePath);
        }

        private string MPTKVStoreAliasKey(string alias) => $"mpt_alias_{alias}";

        private IKeyValueStore LoadKeyValueStore(string kvStorePath, KVStoreType kvStoreType)
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
