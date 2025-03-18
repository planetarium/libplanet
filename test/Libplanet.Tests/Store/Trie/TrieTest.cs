#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie;

public class TrieTest
{
    [Theory]
    [InlineData(2)]
    [InlineData(4)]
    [InlineData(8)]
    [InlineData(16)]
    [InlineData(128)]
    [InlineData(1024)]
    public void GetAndSet(int addressCount)
    {
        ITrie trie = new MerkleTrie(new MemoryKeyValueStore());

        var addresses = Enumerable
            .Range(0, addressCount)
            .Select(_ => new PrivateKey().Address)
            .ToImmutableArray();
        var states = new Dictionary<Address, IValue>();

        void CheckAddressStates()
        {
            foreach (var address in addresses)
            {
                IValue v = trie.GetMany(new[] { new KeyBytes(address.ByteArray) })[0];
                IValue expectedState = states.ContainsKey(address) ? states[address] : null;
                Assert.Equal(expectedState, v);
            }
        }

        foreach (var address in addresses)
        {
            states[address] = (Text)address.ToHex();
            trie = trie.Set(new KeyBytes(address.ByteArray), states[address]);
            CheckAddressStates();
        }
    }

    [Theory]
    [InlineData(2)]
    [InlineData(4)]
    [InlineData(8)]
    [InlineData(16)]
    [InlineData(128)]
    [InlineData(1024)]
    public void Commit(int addressCount)
    {
        IKeyValueStore keyValueStore = new MemoryKeyValueStore();
        IStateStore stateStore = new TrieStateStore(keyValueStore);
        ITrie trieA = stateStore.GetStateRoot(default);

        var addresses = new Address[addressCount];
        var states = new IValue[addressCount];
        for (int i = 0; i < addressCount; ++i)
        {
            addresses[i] = new PrivateKey().Address;
            states[i] = (Binary)TestUtils.GetRandomBytes(128);

            trieA = trieA.Set(new KeyBytes(addresses[i].ByteArray), states[i]);
        }

        KeyBytes path = KeyBytes.Create(TestUtils.GetRandomBytes(32));
        trieA = trieA.Set(path, (Text)"foo");
        Assert.Equal((Text)"foo", trieA.GetMany(new[] { path })[0]);

        ITrie trieB = stateStore.Commit(trieA);
        Assert.Equal((Text)"foo", trieB.GetMany(new[] { path })[0]);

        trieB = trieB.Set(path, (Text)"bar");
        Assert.Equal((Text)"foo", trieA.GetMany(new[] { path })[0]);
        Assert.Equal((Text)"bar", trieB.GetMany(new[] { path })[0]);

        ITrie trieC = stateStore.Commit(trieB);
        ITrie trieD = stateStore.Commit(trieC);

        Assert.NotEqual(trieA.Hash, trieB.Hash);
        Assert.NotEqual(trieA.Hash, trieC.Hash);
        Assert.NotEqual(trieB.Hash, trieC.Hash);
        Assert.Equal(trieC.Hash, trieD.Hash);
    }

    [Fact]
    public void EmptyRootHash()
    {
        IKeyValueStore keyValueStore = new MemoryKeyValueStore();
        IStateStore stateStore = new TrieStateStore(keyValueStore);
        ITrie trie = stateStore.GetStateRoot(default);
        Assert.Equal(default, trie.Hash);

        var committedTrie = stateStore.Commit(trie);
        Assert.Equal(default, committedTrie.Hash);

        trie = trie.Set(new KeyBytes(default(Address).ByteArray), Dictionary.Empty);
        committedTrie = stateStore.Commit(trie);
        Assert.NotEqual(default, committedTrie.Hash);
    }
}
