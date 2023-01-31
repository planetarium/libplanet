#nullable disable
namespace Libplanet.Tools.Tests;

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using Bencodex.Types;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.Extensions.Cocona.Configuration;
using Libplanet.Store.Trie;
using Libplanet.Tools.Tests.Services;
using Xunit;

public class MptCommandTest : IDisposable
{
    private readonly MptCommand _command;
    private readonly string _pathA;
    private readonly string _pathB;
    private readonly ITrie _trieA;
    private readonly ITrie _trieB;

    public MptCommandTest()
    {
        _command = new MptCommand();

        _pathA = NewTempPath();
        _pathB = NewTempPath();
        using var stateKeyValueStoreA = new DefaultKeyValueStore(_pathA);
        using var stateKeyValueStoreB = new DefaultKeyValueStore(_pathB);
        _trieA = new MerkleTrie(stateKeyValueStoreA).Set(
            ImmutableDictionary<string, IValue>.Empty
                .Add("deleted", Null.Value)
                .Add("common", (Text)"before")).Commit();
        _trieB = new MerkleTrie(stateKeyValueStoreB).Set(
            ImmutableDictionary<string, IValue>.Empty
                .Add("created", Null.Value)
                .Add("common", (Text)"after")).Commit();
    }

    [Fact]
    public void Diff_PrintsAsJson()
    {
        using StringWriter stringWriter = new StringWriter { NewLine = "\n" };
        var originalOutWriter = Console.Out;
        try
        {
            Console.SetOut(stringWriter);
            var kvStoreUri = $"default://{_pathA}";
            var otherKvStoreUri = $"default://{_pathB}";
            var configuration =
                new ToolConfiguration(new MptConfiguration(new Dictionary<string, string>()));
            string stateRootHashHex = ByteUtil.Hex(_trieA.Hash.ByteArray);
            string otherStateRootHashHex = ByteUtil.Hex(_trieB.Hash.ByteArray);

            _command.Diff(
                kvStoreUri,
                stateRootHashHex,
                otherKvStoreUri,
                otherStateRootHashHex,
                new TestToolConfigurationService(configuration));

            string expected = string.Format(
                @"{{""Key"":""636f6d6d6f6e"",""StateRootHashToValue"":" +
                @"{{""{0}"":""75363a6265666f7265"",""{1}"":""75353a6166746572""}}}}" + "\n" +
                @"{{""Key"":""64656c65746564""," +
                @"""StateRootHashToValue"":{{""{0}"":""6e"",""{1}"":""null""}}}}" + "\n",
                stateRootHashHex,
                otherStateRootHashHex);
            Assert.Equal(
                expected,
                stringWriter.ToString());
        }
        finally
        {
            Console.SetOut(originalOutWriter);
        }
    }

    public void Dispose()
    {
        if (Directory.Exists(_pathA))
        {
            Directory.Delete(_pathA, true);
        }

        if (Directory.Exists(_pathB))
        {
            Directory.Delete(_pathB, true);
        }
    }

    private static string NewTempPath() =>
        Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString())
            .Replace("\\", "/")
            .Replace("C:", string.Empty);
}
