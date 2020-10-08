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
using Libplanet.Tools.Configuration;

namespace Libplanet.Tools
{
    internal enum SchemeType
    {
        // This is set to 0 for `default` value.
        File = 0,
    }

    public class Mpt
    {
        private readonly IImmutableDictionary<string, Func<string, IKeyValueStore>>
            _kvStoreConstructors =
                new Dictionary<string, Func<string, IKeyValueStore>>
                {
                    ["default"] = kvStorePath => new DefaultKeyValueStore(kvStorePath),
                    ["rocksdb"] = kvStorePath => new RocksDBKeyValueStore(kvStorePath),
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
            [FromService] IConfigurationService<ToolConfiguration> configurationService)
        {
            // If it is not Uri format,
            // try to get uri from configuration service by using it as alias.
            if (!Uri.IsWellFormedUriString(kvStoreUri, UriKind.Absolute))
            {
                try
                {
                    var configuration = configurationService.Load();
                    kvStoreUri = configuration.Mpt.Aliases[kvStoreUri];
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

            IKeyValueStore keyValueStore = LoadKVStoreFromURI(kvStoreUri);
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
            [FromService] IConfigurationService<ToolConfiguration> configurationService)
        {
            try
            {
                // Checks the `uri` is valid.
                LoadKVStoreFromURI(uri);
            }
            catch (Exception e)
            {
                throw new CommandExitedException(
                    $"It seems the uri is not valid. (exceptionMessage: {e.Message})", -1);
            }

            var configuration = configurationService.Load();
            configuration.Mpt.Aliases.Add(alias, uri);
            configurationService.Store(configuration);
        }

        [Command(Description="Remove the registered mpt store.")]
        public void Remove(
            [Argument] string alias,
            [FromService] IConfigurationService<ToolConfiguration> configurationService)
        {
            var configuration = configurationService.Load();
            configuration.Mpt.Aliases.Remove(alias);
            configurationService.Store(configuration);
        }

        [PrimaryCommand]
        public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder)
        {
            Console.Error.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());
        }

        private IKeyValueStore LoadKVStoreFromURI(string rawUri)
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

            if (!_kvStoreConstructors.TryGetValue(
                splitScheme[0],
                out Func<string, IKeyValueStore>? constructor))
            {
                throw new NotSupportedException(
                    $"No key-value store backend supports the such scheme: {splitScheme[0]}.");
            }

            // NOTE: Actually, there is only File scheme support and it will work to check only.
            if (splitScheme.Length == 2
                && !SchemeType.TryParse(splitScheme[1], ignoreCase: true, out SchemeType _))
            {
                throw new NotSupportedException(
                    $"No key-value store backend supports the such scheme: {splitScheme[1]}.");
            }

            return constructor(uri.AbsolutePath);
        }
    }
}
