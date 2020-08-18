using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
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
            ITrie trie = new Libplanet.Store.Trie.Trie(new MemoryKeyValueStore());

            var addresses = Enumerable
                .Range(0, addressCount)
                .Select(_ => new PrivateKey().ToAddress())
                .ToImmutableArray();
            var states = new Dictionary<Address, IValue>();

            void CheckAddressStates()
            {
                foreach (var address in addresses)
                {
                    Assert.Equal(
                        states.ContainsKey(address),
                        trie.TryGet(address.ToByteArray(), out IValue state));
                    IValue expectedState = states.ContainsKey(address) ? states[address] : null;
                    Assert.Equal(expectedState, state);
                }
            }

            foreach (var address in addresses)
            {
                states[address] = (Text)address.ToHex();
                trie.Set(address.ToByteArray(), states[address]);
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
            var codec = new Codec();

            ITrie trieA = new Libplanet.Store.Trie.Trie(keyValueStore);

            var addresses = new Address[addressCount];
            var states = new IValue[addressCount];
            for (int i = 0; i < addressCount; ++i)
            {
                addresses[i] = new PrivateKey().ToAddress();
                states[i] = (Binary)TestUtils.GetRandomBytes(128);

                trieA.Set(addresses[i].ToByteArray(), states[i]);
            }

            byte[] path = TestUtils.GetRandomBytes(32);
            trieA.Set(path, (Text)"foo");
            HashDigest<SHA256> rootHash = Hashcash.Hash(codec.Encode(trieA.Root.ToBencodex()));
            Assert.True(trieA.TryGet(path, out IValue stateA));
            Assert.Equal((Text)"foo", stateA);

            ITrie trieB = trieA.Commit();

            Assert.True(trieB.TryGet(path, out IValue stateB));
            Assert.Equal((Text)"foo", stateB);

            trieB.Set(path, (Text)"bar");

            Assert.True(trieA.TryGet(path, out stateA));
            Assert.Equal((Text)"foo", stateA);
            Assert.True(trieB.TryGet(path, out stateB));
            Assert.Equal((Text)"bar", stateB);

            ITrie trieC = trieB.Commit();
            ITrie trieD = trieC.Commit();

            Assert.NotEqual(trieA.Root.Hash(), trieB.Root.Hash());
            Assert.NotEqual(trieA.Root.Hash(), trieC.Root.Hash());
            Assert.NotEqual(trieB.Root.Hash(), trieC.Root.Hash());
            Assert.Equal(trieC.Root.Hash(), trieD.Root.Hash());
        }
    }
}
