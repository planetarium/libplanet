using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
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
        [InlineData(4096)]
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
    }
}
