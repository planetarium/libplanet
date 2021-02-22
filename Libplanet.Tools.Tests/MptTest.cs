using System;
using System.Collections.Immutable;
using System.IO;
using Bencodex.Types;
using Libplanet.RocksDBStore;
using Libplanet.Store.Trie;
using Libplanet.Tools.Configuration;
using Xunit;

namespace Libplanet.Tools.Tests
{
    public class MptTest : IDisposable
    {
        private readonly Mpt _command;
        private readonly string _pathA;
        private readonly string _pathB;
        private readonly ITrie _trieA;
        private readonly ITrie _trieB;

        public MptTest()
        {
            _command = new Mpt();

            _pathA = NewTempPath();
            _pathB = NewTempPath();
            using var stateKeyValueStoreA = new RocksDBKeyValueStore(_pathA);
            using var stateKeyValueStoreB = new RocksDBKeyValueStore(_pathB);
            _trieA = new MerkleTrie(stateKeyValueStoreA).Set(
                ImmutableDictionary<string, IValue>.Empty
                    .Add("deleted", default(Null))
                    .Add("common", (Text)"before")).Commit();
            _trieB = new MerkleTrie(stateKeyValueStoreB).Set(
                ImmutableDictionary<string, IValue>.Empty
                    .Add("created", default(Null))
                    .Add("common", (Text)"after")).Commit();
        }

        [SkippableFact]
        public void Diff_PrintsAsJson()
        {
            using StringWriter stringWriter = new StringWriter {NewLine = "\n"};
            var originalOutWriter = Console.Out;
            try
            {
                Console.SetOut(stringWriter);
                var kvStoreUri = $"rocksdb://{_pathA}";
                var otherKvStoreUri = $"rocksdb://{_pathB}";
                var configuration = new ToolConfiguration();
                string stateRootHashHex = ByteUtil.Hex(_trieA.Hash.ByteArray);
                string otherStateRootHashHex = ByteUtil.Hex(_trieB.Hash.ByteArray);

                _command.Diff(
                    kvStoreUri,
                    stateRootHashHex,
                    otherKvStoreUri,
                    otherStateRootHashHex,
                    new TestToolConfigurationService(configuration));

                Assert.Equal(
                    $@"{{""636f6d6d6f6e"":{{""{stateRootHashHex}"":""75363a6265666f7265"",""{otherStateRootHashHex}"":""75353a6166746572""}},""64656c65746564"":{{""{stateRootHashHex}"":""6e""}},""63726561746564"":{{""{otherStateRootHashHex}"":""6e""}}}}",
                    stringWriter.ToString());
            }
            finally
            {
                Console.SetOut(originalOutWriter);
            }
        }

        private static string NewTempPath() => Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString());

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
    }
}
