using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieProofTest
    {
        public readonly IStateStore StateStore;

        // "1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9"
        public readonly ITrie EmptyTrie;

        // Note that * denotes an existence of a value and L denotes the encoded length.
        // Structure:
        // [HashNode:L35]
        // |
        // |
        // [ShortNode:L24]
        // |
        // | 0
        // [FullNode:L19]
        // |
        // |___________________
        // | 0                 | 1
        // [ValueNode:*:L08]   [ValueNode:*:L08]
        public readonly ITrie HalfTrie;

        public readonly HashDigest<SHA256> HalfTrieHash = new HashDigest<SHA256>(
            ByteUtil.ParseHex("6cc5c2ca1b7b146268f0d930c58c7e5441b807e72cf16d56f52c869a594b17bf"));

        // An uncommitted instance of FullTrie.
        public readonly ITrie UncommittedTrie;

        // Note that * denotes an existence of a value and L denotes the encoded length.
        // Structure:
        // [HashNode:L35]
        // |
        // |
        // [ShortNode:L40]
        // |
        // | 0
        // [HashNode:35]-------[FullNode:L60]
        //                     |
        // ____________________|___________________
        // | 0                                    | 1
        // [HashNode:L35]------[FullNode:*:L74]   [ValueNode:*:L08]
        // ____________________|
        // | 0                 | 1
        // [ShortNode:L15]     [HashNode:L35]-----[ShortNode:L40]
        // |                                      |
        // | 0                                    | 0
        // [ValueNode:*:L10]                      [HashNode:L35]-----[ValueNode:*:L39]
        public readonly ITrie FullTrie;

        public readonly HashDigest<SHA256> FullTrieHash = new HashDigest<SHA256>(
            ByteUtil.ParseHex("979a00921d42d2ca63e98c1c2ac07f0eacbb99e363b8f2f7f8e4d19c854b6c20"));

        public readonly KeyBytes K00 = KeyBytes.FromHex("00");
        public readonly KeyBytes K01 = KeyBytes.FromHex("01");
        public readonly KeyBytes K0000 = KeyBytes.FromHex("0000");
        public readonly KeyBytes K0010 = KeyBytes.FromHex("0010");

        public readonly IValue V00 = new Text("00");
        public readonly IValue V01 = new Text("01");
        public readonly IValue V0000 = new Text("0000");
        public readonly IValue V0010 = new Text("00000000000000000000000000000010");

        public readonly IReadOnlyList<INode> P00;
        public readonly IReadOnlyList<INode> P01;
        public readonly IReadOnlyList<INode> P0000;
        public readonly IReadOnlyList<INode> P0010;

        private static readonly Codec _codec = new Codec();

        public MerkleTrieProofTest()
        {
            StateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = StateStore.GetStateRoot(null);
            EmptyTrie = trie;

            trie = trie.Set(K00, V00);
            trie = trie.Set(K01, V01);
            trie = StateStore.Commit(trie);
            HalfTrie = trie;

            trie = trie.Set(K0000, V0000);
            trie = trie.Set(K0010, V0010);
            UncommittedTrie = trie;
            trie = StateStore.Commit(trie);
            FullTrie = trie;

            ImmutableArray<INode> emptyChildren = Enumerable
                .Range(0, FullNode.ChildrenCount)
                .Select(_ => (INode)null)
                .ToImmutableArray();
            Nibbles n0 = new Nibbles(new byte[] { 0 }.ToImmutableArray());
            Nibbles n1 = new Nibbles(new byte[] { 1 }.ToImmutableArray());

            INode proofNode0010 = new ValueNode(V0010);
            INode proofNode001 = new ShortNode(n0, ToHashNode(proofNode0010));
            INode proofNode00 = new FullNode(emptyChildren)
                .SetChild(0, new ShortNode(n0, new ValueNode(V0000)))
                .SetChild(1, ToHashNode(proofNode001))
                .SetChild(FullNode.ChildrenCount - 1, new ValueNode(V00));
            INode proofNode0 = new FullNode(emptyChildren)
                .SetChild(0, ToHashNode(proofNode00))
                .SetChild(1, new ValueNode(V01));
            INode proofRoot = new ShortNode(n0, ToHashNode(proofNode0));
            P00 = new List<INode>() { proofRoot, proofNode0, proofNode00 };
            P01 = new List<INode>() { proofRoot, proofNode0 };
            P0000 = new List<INode>() { proofRoot, proofNode0, proofNode00 };
            P0010 = new List<INode>()
                { proofRoot, proofNode0, proofNode00, proofNode001, proofNode0010 };
        }

        [Fact]
        public void CheckFixtures()
        {
            Assert.Equal(HalfTrieHash, HalfTrie.Hash);
            Assert.Equal(FullTrieHash, FullTrie.Hash);
        }

        [Fact]
        public void GetProof()
        {
            var proof = ((MerkleTrie)FullTrie).GetProof(K00, V00);
            Assert.Equal(P00, proof);

            proof = ((MerkleTrie)FullTrie).GetProof(K01, V01);
            Assert.Equal(P01, proof);

            proof = ((MerkleTrie)FullTrie).GetProof(K0000, V0000);
            Assert.Equal(P0000, proof);

            proof = ((MerkleTrie)FullTrie).GetProof(K0010, V0010);
            Assert.Equal(P0010, proof);

            KeyBytes k = KeyBytes.FromHex(string.Empty);
            IValue v = new Text(string.Empty);
            var trie = StateStore.Commit(EmptyTrie.Set(k, v));
            proof = ((MerkleTrie)trie).GetProof(k, v);
            Assert.Equal(v, Assert.IsType<ValueNode>(Assert.Single(proof)).Value);

            trie = StateStore.Commit(FullTrie.Set(k, v));
            proof = ((MerkleTrie)trie).GetProof(k, v);
            Assert.Equal(
                v,
                Assert.IsType<ValueNode>(
                    Assert.IsType<FullNode>(
                        Assert.Single(proof)).Value).Value);
        }

        [Fact]
        public void DifferentRootsProduceDifferentProofs()
        {
            var proof1 = ((MerkleTrie)FullTrie).GetProof(K00, V00);
            var proof2 = ((MerkleTrie)HalfTrie).GetProof(K00, V00);
            Assert.NotEqual(proof1.Count, proof2.Count);

            Assert.True(
                MerkleTrie.IsValidProof(FullTrieHash, proof1, K00, V00));
            Assert.False(
                MerkleTrie.IsValidProof(FullTrieHash, proof2, K00, V00));
            Assert.False(
                MerkleTrie.IsValidProof(HalfTrieHash, proof1, K00, V00));
            Assert.True(
                MerkleTrie.IsValidProof(HalfTrieHash, proof2, K00, V00));
        }

        [Fact]
        public void InvalidGetProofCalls()
        {
            Assert.Contains(
                "recorded",
                Assert.Throws<InvalidOperationException>(
                    () => ((MerkleTrie)UncommittedTrie).GetProof(K00, V00)).Message);
            Assert.Contains(
                "non-null",
                Assert.Throws<InvalidOperationException>(
                    () => ((MerkleTrie)EmptyTrie).GetProof(K00, V00)).Message);
            Assert.Contains(
                "does not match",
                Assert.Throws<ArgumentException>(
                    () => ((MerkleTrie)FullTrie).GetProof(K00, V01)).Message);
            Assert.Contains(
                "could not be fully resolved",
                Assert.Throws<ArgumentException>(
                    () => ((MerkleTrie)FullTrie).GetProof(
                        KeyBytes.FromHex("000000"), V0000)).Message);
            Assert.Contains(
                "could not be properly resolved",
                Assert.Throws<ArgumentException>(
                    () => ((MerkleTrie)FullTrie).GetProof(
                        KeyBytes.FromHex("0020"), V0000)).Message);
        }

        [Fact]
        public void ValidateProof()
        {
            Assert.True(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K00, V00),
                K00,
                V00));
            Assert.True(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K01, V01),
                K01,
                V01));
            Assert.True(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K0000, V0000),
                K0000,
                V0000));
            Assert.True(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K0010, V0010),
                K0010,
                V0010));

            Assert.False(MerkleTrie.IsValidProof(
                HalfTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K00, V00),
                K00,
                V00));  // Wrong hash
            Assert.False(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K00, V00),
                K00,
                V01));  // Wrong value
            Assert.False(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K00, V00),
                K01,
                V00));  // Wrong key
            Assert.False(MerkleTrie.IsValidProof(
                FullTrieHash,
                ((MerkleTrie)FullTrie).GetProof(K00, V00),
                K01,
                V01));  // Wrong proof
        }

        private HashNode ToHashNode(INode node) =>
            new HashNode(HashDigest<SHA256>.DeriveFrom(_codec.Encode(node.ToBencodex())));
   }
}