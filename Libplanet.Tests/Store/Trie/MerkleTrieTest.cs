using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;
using static System.Linq.Enumerable;
using static Libplanet.Common.HashDigest<System.Security.Cryptography.SHA256>;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieTest
    {
        [Fact]
        public void ConstructWithHashDigest()
        {
            var hashDigest = new HashDigest<SHA256>(GetRandomBytes(Size));
            var merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), hashDigest);
            Assert.Equal(hashDigest, merkleTrie.Hash);

            // See https://github.com/planetarium/libplanet/pull/1091
            merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), MerkleTrie.EmptyRootHash);
            Assert.Null(merkleTrie.Root);
        }

        [Fact]
        public void ConstructWithRootNode()
        {
            var hashDigest = new HashDigest<SHA256>(GetRandomBytes(Size));
            INode rootNode = new HashNode(hashDigest);
            var merkleTrie = new MerkleTrie(new MemoryKeyValueStore(), rootNode);
            Assert.Equal(hashDigest, merkleTrie.Hash);
        }

        [Fact]
        public void IterateValues()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie trie = stateStore.GetStateRoot(null);

            trie = trie
                .Set(new KeyBytes(0x01), Null.Value)
                .Set(new KeyBytes(0x02), Null.Value)
                .Set(new KeyBytes(0x03), Null.Value)
                .Set(new KeyBytes(0x04), Null.Value)
                .Set(new KeyBytes(0xbe, 0xef), Dictionary.Empty);

            Dictionary<KeyBytes, IValue> states = trie
                .IterateValues()
                .ToDictionary(pair => pair.Path, pair => pair.Value);
            Assert.Equal(5, states.Count);
            Assert.Equal(Null.Value, states[new KeyBytes(0x01)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x02)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x03)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x04)]);
            Assert.Equal(Dictionary.Empty, states[new KeyBytes(0xbe, 0xef)]);

            trie = stateStore.Commit(trie);
            states = trie.IterateValues().ToDictionary(pair => pair.Path, pair => pair.Value);
            Assert.Equal(5, states.Count);
            Assert.Equal(Null.Value, states[new KeyBytes(0x01)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x02)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x03)]);
            Assert.Equal(Null.Value, states[new KeyBytes(0x04)]);
            Assert.Equal(Dictionary.Empty, states[new KeyBytes(0xbe, 0xef)]);
        }

        [Fact]
        public void IterateNodes()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            MerkleTrie merkleTrie = (MerkleTrie)stateStore.GetStateRoot(null);
            // There is nothing.
            Assert.Empty(merkleTrie.IterateNodes());

            merkleTrie = (MerkleTrie)merkleTrie.Set(
                new KeyBytes(0xbe, 0xef),
                Dictionary.Empty.Add(GetRandomBytes(32), Null.Value));
            // There are (ShortNode, ValueNode)
            Assert.Equal(2, merkleTrie.IterateNodes().Count());

            merkleTrie = (MerkleTrie)stateStore.Commit(merkleTrie);
            // There are (HashNode, ShortNode, HashNode, ValueNode)
            Assert.Equal(4, merkleTrie.IterateNodes().Count());
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void Set(bool commit)
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);
            AssertBytesEqual(
                FromString("1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9"),
                trie.Hash
            );
            Assert.Null(trie.Get(new KeyBytes(0xbe, 0xef)));
            Assert.Null(trie.Get(new KeyBytes(0x11, 0x22)));
            Assert.Null(trie.Get(new KeyBytes(0xaa, 0xbb)));
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            trie = trie.Set(new KeyBytes(0xbe, 0xef), Null.Value);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString("16fc25f43edd0c2d2cb6e3cc3827576e57f4b9e04f8dc3a062c7fe59041f77bd"),
                trie.Hash
            );
            AssertBencodexEqual(Null.Value, trie.Get(new KeyBytes(0xbe, 0xef)));
            Assert.Null(trie.Get(new KeyBytes(0x11, 0x22)));
            Assert.Null(trie.Get(new KeyBytes(0xaa, 0xbb)));
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            trie = trie.Set(new KeyBytes(0xbe, 0xef), new Boolean(true));
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString("4458796f4092b5ebfc1ffb3989e72edee228501e438080a12dea45591dc66d58"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            Assert.Null(trie.Get(new KeyBytes(0x11, 0x22)));
            Assert.Null(trie.Get(new KeyBytes(0xaa, 0xbb)));
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            trie = trie.Set(new KeyBytes(0x11, 0x22), List.Empty);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString("ab1359a2497453110a9c658dd3db45f282404fe68d8c8aca30856f395572284c"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(List.Empty, trie.Get(new KeyBytes(0x11, 0x22)));
            Assert.Null(trie.Get(new KeyBytes(0xaa, 0xbb)));
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            trie = trie.Set(new KeyBytes(0xaa, 0xbb), new Text("hello world"));
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString("abb5759141f7af1c40f1b0993ba60073cf4227900617be9641373e5a097eaa3c"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(List.Empty, trie.Get(new KeyBytes(0x11, 0x22)));
            AssertBencodexEqual(
                new Text("hello world"),
                trie.Get(new KeyBytes(0xaa, 0xbb))
            );
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            // Once node encoding length exceeds certain length,
            // uncommitted and committed hash diverge
            var longText = new Text(string.Join("\n", Range(0, 1000).Select(i => $"long str {i}")));
            trie = trie.Set(new KeyBytes(0xaa, 0xbb), longText);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString(commit
                    ? "56e5a39a726acba1f7631a6520ae92e20bb93ca3992a7b7d3542c6daee68e56d"
                    : "ad9fb53a8f643bd308d7afea57a5d1796d6031b1df95bdd415fa69b44177d155"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(List.Empty, trie.Get(new KeyBytes(0x11, 0x22)));
            AssertBencodexEqual(longText, trie.Get(new KeyBytes(0xaa, 0xbb)));
            Assert.Null(trie.Get(new KeyBytes(0x12, 0x34)));

            trie = trie.Set(new KeyBytes(0x12, 0x34), Dictionary.Empty);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString(commit
                    ? "88d6375097fd03e6c30a129eb0030d938caeaa796643971ca938fbd27ff5e057"
                    : "77d13e9d97033400ad31fcb0441819285b9165f6ea6ae599d85e7d7e24428feb"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(List.Empty, trie.Get(new KeyBytes(0x11, 0x22)));
            AssertBencodexEqual(longText, trie.Get(new KeyBytes(0xaa, 0xbb)));
            AssertBencodexEqual(Dictionary.Empty, trie.Get(new KeyBytes(0x12, 0x34)));

            List complexList = List.Empty
                .Add("Hello world")
                .Add(Dictionary.Empty
                    .Add("foo", 1)
                    .Add("bar", 2)
                    .Add(
                        "lst",
                        new List(Range(0, 1000).Select(i => new Text($"long str {i}")))))
                .Add(new List(Range(0, 1000).Select(i => new Text($"long str {i}"))));
            trie = trie.Set(new KeyBytes(0x11, 0x22), complexList);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString(commit
                    ? "f29820df65c1d1a66b69a59b9fe3e21911bbd2d97a9f298853c529804bf84a26"
                    : "586ba0ba5dfe07433b01fbf7611f95832bde07b8dc5669540ef8866f465bbb85"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(complexList, trie.Get(new KeyBytes(0x11, 0x22)));
            AssertBencodexEqual(longText, trie.Get(new KeyBytes(0xaa, 0xbb)));
            AssertBencodexEqual(Dictionary.Empty, trie.Get(new KeyBytes(0x12, 0x34)));

            Dictionary complexDict = Dictionary.Empty
                .Add("foo", 123)
                .Add("bar", 456)
                .Add("lst", new List(Range(0, 1000).Select(i => new Text($"long str {i}"))))
                .Add("cls", complexList)
                .Add(
                    "dct",
                    Dictionary.Empty
                        .Add("abcd", Null.Value)
                        .Add("efgh", false)
                        .Add("ijkl", true)
                        .Add("mnop", new Binary("hello world", Encoding.ASCII))
                        .Add("qrst", complexList)
                        .Add("uvwx", Dictionary.Empty));
            trie = trie.Set(new KeyBytes(0x12, 0x34), complexDict);
            trie = commit ? stateStore.Commit(trie) : trie;
            AssertBytesEqual(
                FromString(commit
                    ? "1dabec2c0fea02af0182e9fee6c7ce7ad1a9d9bcfaa2cd80c2971bbce5272655"
                    : "4783d18dfc8a2d4d98f722a935e45bd7fc1d0197fb4d33e62f734bfde968af39"),
                trie.Hash
            );
            AssertBencodexEqual(
                new Boolean(true),
                trie.Get(new KeyBytes(0xbe, 0xef))
            );
            AssertBencodexEqual(complexList, trie.Get(new KeyBytes(0x11, 0x22)));
            AssertBencodexEqual(longText, trie.Get(new KeyBytes(0xaa, 0xbb)));
            AssertBencodexEqual(complexDict, trie.Get(new KeyBytes(0x12, 0x34)));
        }

        [Fact]
        public void GetNode()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);

            KeyBytes key00 = new KeyBytes(new byte[] { 0x00 });
            IValue value00 = new Text("00");
            KeyBytes key0000 = new KeyBytes(new byte[] { 0x00, 0x00 });
            IValue value0000 = new Text("0000");
            KeyBytes key0010 = new KeyBytes(new byte[] { 0x00, 0x10 });
            IValue value0010 = new Text("00000000000000000000000000000000_0010");

            trie = trie.Set(key00, value00);
            trie = trie.Set(key0000, value0000);
            trie = trie.Set(key0010, value0010);

            Assert.IsType<ShortNode>(trie.GetNode(Nibbles.FromHex(string.Empty)));
            Assert.IsType<FullNode>(trie.GetNode(Nibbles.FromHex("00")));
            Assert.Null(trie.GetNode(Nibbles.FromHex("01")));
            Assert.IsType<ShortNode>(trie.GetNode(Nibbles.FromHex("000")));
            Assert.IsType<ShortNode>(trie.GetNode(Nibbles.FromHex("001")));
            Assert.IsType<ValueNode>(trie.GetNode(Nibbles.FromHex("0000")));
            Assert.IsType<ValueNode>(trie.GetNode(Nibbles.FromHex("0010")));

            trie = stateStore.Commit(trie);
            Assert.IsType<HashNode>(trie.GetNode(Nibbles.FromHex(string.Empty)));
            Assert.IsType<HashNode>(trie.GetNode(Nibbles.FromHex("00")));
            Assert.Null(trie.GetNode(Nibbles.FromHex("01")));
            Assert.IsType<ShortNode>(trie.GetNode(Nibbles.FromHex("000")));
            Assert.IsType<HashNode>(trie.GetNode(Nibbles.FromHex("001")));
            Assert.IsType<ValueNode>(trie.GetNode(Nibbles.FromHex("0000")));
            Assert.IsType<HashNode>(trie.GetNode(Nibbles.FromHex("0010")));
        }

        [Fact]
        public void ResolveToValueAtTheEndOfShortNode()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);

            KeyBytes key00 = new KeyBytes(new byte[] { 0x00 });
            IValue value00 = new Text("00");
            KeyBytes key0000 = new KeyBytes(new byte[] { 0x00, 0x00 });

            trie = trie.Set(key00, value00);
            trie = stateStore.Commit(trie);

            Assert.Null(trie.Get(key0000));
        }

        [Fact]
        public void SetValueToExtendedKey()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);
            KeyBytes key00 = new KeyBytes(new byte[] { 0x00 });
            IValue value00 = new Text("00");
            KeyBytes key0000 = new KeyBytes(new byte[] { 0x00, 0x00 });
            IValue value0000 = new Text("0000");

            trie = trie.Set(key00, value00);
            trie = trie.Set(key0000, value0000);
            trie = stateStore.Commit(trie);

            Assert.Equal(2, trie.IterateValues().Count());
            Assert.Equal(value00, trie.Get(key00));
            Assert.Equal(value0000, trie.Get(key0000));
        }

        [Fact]
        public void SetValueToFullNode()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);
            KeyBytes key00 = new KeyBytes(new byte[] { 0x00 });
            IValue value00 = new Text("00");
            KeyBytes key0000 = new KeyBytes(new byte[] { 0x00, 0x00 });
            IValue value0000 = new Text("0000");
            KeyBytes key0010 = new KeyBytes(new byte[] { 0x00, 0x10 });
            IValue value0010 = new Text("0010");

            trie = trie.Set(key0000, value0000);
            trie = trie.Set(key0010, value0010);
            trie = trie.Set(key00, value00);
            trie = stateStore.Commit(trie);

            Assert.Equal(3, trie.IterateValues().Count());
            Assert.Equal(value00, trie.Get(key00));
            Assert.Equal(value0000, trie.Get(key0000));
            Assert.Equal(value0010, trie.Get(key0010));
        }
    }
}
