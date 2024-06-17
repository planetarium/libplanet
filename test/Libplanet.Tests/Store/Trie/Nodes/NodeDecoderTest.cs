using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes
{
    public class NodeDecoderTest
    {
        [Fact]
        public void DecodeValidFullNode()
        {
            var hashA = HashDigest<SHA256>.DeriveFrom(TestUtils.GetRandomBytes(128));
            var hashB = HashDigest<SHA256>.DeriveFrom(TestUtils.GetRandomBytes(128));
            var list = new List(new IValue[]
            {
                (Binary)hashA.ToByteArray(),
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                Null.Value,
                (Binary)hashB.ToByteArray(),
            });
            Assert.Equal(17, list.Count);

            INode node = NodeDecoder.Decode(list, NodeDecoder.NodeType.Full);
            Assert.IsType<FullNode>(node);
            var fullNode = (FullNode)node;
            Assert.Equal(new HashNode(hashB), fullNode.Value);
            Assert.Equal(new HashNode(hashA), fullNode.Children[0]);
            for (int i = 1; i < 16; ++i)
            {
                Assert.Null(fullNode.Children[i]);
            }
        }

        [Theory]
        [InlineData(1)]
        [InlineData(18)]
        public void DecodeInvalidFullNodeThrowsException(int listCount)
        {
            var list = new List(Enumerable.Repeat((IValue)Null.Value, listCount));
            Assert.Throws<InvalidTrieNodeException>(
                () => NodeDecoder.Decode(list, NodeDecoder.NodeType.Full));
        }

        [Fact]
        public void DecodeValidValueNode()
        {
            var list = List.Empty
                .Add(new Binary(Nibbles.FromHex("beef").ByteArray))
                .Add(new List(new IValue[] { Null.Value, (Text)"beef", }));

            INode node = NodeDecoder.Decode(list, NodeDecoder.NodeType.Short);
            Assert.IsType<ShortNode>(node);
            var shortNode = (ShortNode)node;
            Assert.IsType<ValueNode>(shortNode.Value);
            Assert.Equal(Nibbles.FromHex("beef"), shortNode.Key);
            Assert.Equal(new ValueNode((Text)"beef"), shortNode.Value);
        }

        [Fact]
        public void DecodeValidExtensionNode()
        {
            var list = List.Empty
                .Add(new Binary(Nibbles.FromHex("beef").ByteArray))
                .Add(default(HashDigest<SHA256>).ByteArray);

            INode node = NodeDecoder.Decode(list, NodeDecoder.NodeType.Short);
            Assert.IsType<ShortNode>(node);
            var shortNode = (ShortNode)node;
            Assert.IsType<HashNode>(shortNode.Value);
            Assert.Equal(new HashNode(default), shortNode.Value);
        }

        [Fact]
        public void OnlyDecodeAllowedNodeType()
        {
            IValue valueNodeEncoded = new ValueNode(new Text("foo")).ToBencodex();
            IValue shortNodeEncoded = new ShortNode(
                Nibbles.FromHex("b4"),
                new ValueNode(new Text("bar"))).ToBencodex();
            IValue fullNodeEncoded = FullNode.Empty
                .SetChild(4, new ValueNode(new Text("4")))
                .SetChild(10, new ValueNode(new Text("c")))
                .ToBencodex();
            IValue hashNodeEncoded =
                new HashNode(
                    new HashDigest<SHA256>(
                        TestUtils.GetRandomBytes(HashDigest<SHA256>.Size))).ToBencodex();

            Assert.Null(NodeDecoder.Decode(Null.Value, NodeDecoder.AnyNodeType));
            Assert.IsType<ValueNode>(
                NodeDecoder.Decode(valueNodeEncoded, NodeDecoder.AnyNodeType));
            Assert.IsType<ShortNode>(
                NodeDecoder.Decode(shortNodeEncoded, NodeDecoder.AnyNodeType));
            Assert.IsType<FullNode>(
                NodeDecoder.Decode(fullNodeEncoded, NodeDecoder.AnyNodeType));
            Assert.IsType<FullNode>(
                NodeDecoder.Decode(fullNodeEncoded, NodeDecoder.AnyNodeType));
            Assert.Throws<InvalidTrieNodeException>(() =>
                NodeDecoder.Decode(Null.Value, NodeDecoder.NodeType.Value));
            Assert.Throws<InvalidTrieNodeException>(() =>
                NodeDecoder.Decode(valueNodeEncoded, NodeDecoder.NodeType.Short));
            Assert.Throws<InvalidTrieNodeException>(() =>
                NodeDecoder.Decode(shortNodeEncoded, NodeDecoder.NodeType.Full));
            Assert.Throws<InvalidTrieNodeException>(() =>
                NodeDecoder.Decode(fullNodeEncoded, NodeDecoder.NodeType.Null));
        }
    }
}
