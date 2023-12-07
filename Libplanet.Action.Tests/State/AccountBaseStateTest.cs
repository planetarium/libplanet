using Libplanet.Action.State;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Action.Tests.State
{
    public class AccountBaseStateTest
    {
        private readonly IKeyValueStore _kvStore;

        public AccountBaseStateTest()
        {
            _kvStore = new MemoryKeyValueStore();
        }

        [Fact]
        public void Constructor()
        {
            ITrie trie = new MerkleTrie(_kvStore);
            trie = trie.SetMetadata(new TrieMetadata(
                BlockMetadata.CurrentProtocolVersion,
                TrieType.World));
            Assert.Throws<ArgumentException>(() => new AccountBaseState(trie));
        }
    }
}
