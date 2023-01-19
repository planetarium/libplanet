namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using Bencodex;
using Bencodex.Types;
using global::Cocona;
using global::Cocona.Help;
using Libplanet.Extensions.Cocona.Configuration;
using Libplanet.Extensions.Cocona.Services;
using Libplanet.RocksDBStore;
using Libplanet.Store;
using Libplanet.Store.Trie;

internal enum SchemeType
{
    // This is set to 0 for `default` value.
    File = 0,
}

public class MptCommand
{
    private const string KVStoreURIExample =
        "<kv-store-type>://<kv-store-path> (e.g., rocksdb:///path/to/kv-store)";

    private const string KVStoreArgumentDescription =
        "The alias name registered through `planet mpt add' command or the URI included " +
        "the type of " + nameof(IKeyValueStore) + " implementation and the path where " +
        "it was used at. " + KVStoreURIExample;

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
            Name = "KV-STORE",
            Description = KVStoreArgumentDescription)]
        string kvStoreUri,
        [Argument(
            Name = "STATE-ROOT-HASH",
            Description = "The state root hash to compare.")]
        string stateRootHashHex,
        [Argument(
            Name = "OTHER-KV-STORE",
            Description = KVStoreArgumentDescription)]
        string otherKvStoreUri,
        [Argument(
            Name = "OTHER-STATE-ROOT-HASH",
            Description = "Another state root hash to compare.")]
        string otherStateRootHashHex,
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        ToolConfiguration toolConfiguration = configurationService.Load();
        kvStoreUri = ConvertKVStoreUri(kvStoreUri, toolConfiguration);
        otherKvStoreUri = ConvertKVStoreUri(otherKvStoreUri, toolConfiguration);

        IKeyValueStore keyValueStore = LoadKVStoreFromURI(kvStoreUri);
        IKeyValueStore otherKeyValueStore = LoadKVStoreFromURI(otherKvStoreUri);
        var trie = new MerkleTrie(
            keyValueStore,
            HashDigest<SHA256>.FromString(stateRootHashHex));
        var otherTrie = new MerkleTrie(
            otherKeyValueStore,
            HashDigest<SHA256>.FromString(otherStateRootHashHex));

        var codec = new Codec();
        HashDigest<SHA256> originRootHash = trie.Hash;
        HashDigest<SHA256> otherRootHash = otherTrie.Hash;

        string originRootHashHex = ByteUtil.Hex(originRootHash.ByteArray);
        string otherRootHashHex = ByteUtil.Hex(otherRootHash.ByteArray);
        foreach (var (key, originValue, otherValue) in trie.DifferentNodes(otherTrie))
        {
            var data = new DiffData(ByteUtil.Hex(key.ByteArray), new Dictionary<string, string>
            {
                [originRootHashHex] = ByteUtil.Hex(codec.Encode(originValue)),
                [otherRootHashHex] = otherValue is null
                    ? "null"
                    : ByteUtil.Hex(codec.Encode(otherValue)),
            });

            Console.WriteLine(JsonSerializer.Serialize(data));
        }
    }

    [Command(Description = "Export all states of the state root hash as JSON.")]
    public void Export(
        [Argument(
            Name = "KV-STORE",
            Description = KVStoreArgumentDescription)]
        string kvStoreUri,
        [Argument(
            Name = "STATE-ROOT-HASH",
            Description = "The state root hash to compare.")]
        string stateRootHashHex,
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        ToolConfiguration toolConfiguration = configurationService.Load();
        kvStoreUri = ConvertKVStoreUri(kvStoreUri, toolConfiguration);

        IKeyValueStore keyValueStore = LoadKVStoreFromURI(kvStoreUri);
        var trie = new MerkleTrie(
            keyValueStore,
            HashDigest<SHA256>.FromString(stateRootHashHex));
        var codec = new Codec();
        ImmutableDictionary<string, byte[]> decoratedStates = trie.ListAllStates()
            .ToImmutableDictionary(
                pair => StateStoreExtensions.DecodeKey(pair.Key),
                pair => codec.Encode(pair.Value));

        Console.WriteLine(JsonSerializer.Serialize(decoratedStates));
    }

    // FIXME: Now, it works like `set` not `add`. It allows override.
    [Command(Description="Register an alias name to refer to a key-value store.")]
    public void Add(
        [Argument(
            Name = "ALIAS",
            Description = "The alias to refer to the fully qualified key-value store URI.")]
        string alias,
        [Argument(
            Name = "KV-STORE-URI",
            Description = KVStoreURIExample)]
        string uri,
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        if (Uri.IsWellFormedUriString(alias, UriKind.Absolute))
        {
            throw new CommandExitedException(
                "The alias should not look like a URI to prevent it" +
                "from being ambiguous. Please try to use other alias name.",
                -1);
        }

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

    [Command(Description="Deregister an alias to a key-value store.")]
    public void Remove(
        [Argument(
            Name = "ALIAS",
            Description = "The alias name to deregister.")]
        string alias,
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        var configuration = configurationService.Load();
        configuration.Mpt.Aliases.Remove(alias);
        configurationService.Store(configuration);
    }

    [Command(Description="List all aliases stored.")]
    public void List(
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        ToolConfiguration configuration = configurationService.Load();
        Dictionary<string, string> aliases = configuration.Mpt.Aliases;

        int maxAliasLength = aliases.Keys.Max(alias => alias.Length),
            maxPathLength = aliases.Values.Max(alias => alias.Length);
        Console.Error.WriteLine(
            $"{{0,-{maxAliasLength}}} | {{1,-{maxPathLength}}}",
            "ALIAS",
            "PATH");
        Console.Error.WriteLine(new string('-', 3 + maxAliasLength + maxPathLength));
        Console.Error.Flush();
        foreach (KeyValuePair<string, string> pair in aliases)
        {
            Console.Write($"{{0,-{maxAliasLength}}} ", pair.Key);
            Console.Out.Flush();
            Console.Error.Write("| ");
            Console.Error.Flush();
            Console.WriteLine($"{{0,-{maxPathLength}}}", pair.Value);
            Console.Out.Flush();
        }
    }

    [Command(
        Description = "Query a state of the state key at the state root hash.  It will " +
            "print the state as hexadecimal bytes string into stdout.  " +
            "If it doesn't exist, it will not print anything.")]
    public void Query(
        [Argument(
            Name = "KV-STORE",
            Description = KVStoreArgumentDescription)]
        string kvStoreUri,
        [Argument(
            Name = "STATE-ROOT-HASH",
            Description = "The state root hash to compare.")]
        string stateRootHashHex,
        [Argument(
            Name = "STATE-KEY",
            Description = "The key of the state to query.")]
        string stateKey,
        [FromService] IConfigurationService<ToolConfiguration> configurationService)
    {
        ToolConfiguration toolConfiguration = configurationService.Load();
        kvStoreUri = ConvertKVStoreUri(kvStoreUri, toolConfiguration);
        IKeyValueStore keyValueStore = LoadKVStoreFromURI(kvStoreUri);
        var trie = new MerkleTrie(
            keyValueStore,
            HashDigest<SHA256>.FromString(stateRootHashHex));
        KeyBytes stateKeyBytes = StateStoreExtensions.EncodeKey(stateKey);
        IReadOnlyList<IValue?> values = trie.Get(new[] { stateKeyBytes });
        if (values.Count > 0 && values[0] is { } value)
        {
            var codec = new Codec();
            Console.WriteLine(ByteUtil.Hex(codec.Encode(value)));
        }
        else
        {
            Console.Error.WriteLine(
                $"The state corresponded to {stateKey} at the state root hash " +
                $"\"{stateRootHashHex}\" in the KV store \"{kvStoreUri}\" seems not existed.");
        }
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
        var splitScheme = scheme.Split('+');
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

    private string ConvertKVStoreUri(string kvStoreUri, ToolConfiguration toolConfiguration)
    {
        // If it is not Uri format,
        // try to get uri from configuration service by using it as alias.
        if (!Uri.IsWellFormedUriString(kvStoreUri, UriKind.Absolute))
        {
            try
            {
                kvStoreUri = toolConfiguration.Mpt.Aliases[kvStoreUri];
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

        return kvStoreUri;
    }

    private sealed class DiffData
    {
        public DiffData(string key, Dictionary<string, string> stateRootHashToValue)
        {
            Key = key;
            StateRootHashToValue = stateRootHashToValue;
        }

        public string Key { get; }

        public Dictionary<string, string> StateRootHashToValue { get; }
    }
}
