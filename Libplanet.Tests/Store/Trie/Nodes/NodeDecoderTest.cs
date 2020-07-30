using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
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
            var list = new List(new IValue[]
            {
                (Binary)default(HashDigest<SHA256>).ToByteArray(),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                default(Null),
                (Text)"foo",
            });
            Assert.Equal(17, list.Count);

            INode node = NodeDecoder.Decode(list);
            Assert.IsType<FullNode>(node);
            var fullNode = (FullNode)node;
            Assert.Equal(new ValueNode((Text)"foo"), fullNode.Value);
            Assert.Equal(new HashNode(default), fullNode.Children[0]);
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
            var list = new List(Enumerable.Repeat((IValue)default(Null), listCount));
            Assert.Throws<InvalidTrieNodeException>(() => NodeDecoder.Decode(list));
        }

        [Fact]
        public void DecodeValidValueNode()
        {
            var list = new List(new IValue[]
            {
                (Binary)ByteUtil.ParseHex("beef").Append<byte>(0x10).ToArray(),
                (Text)"beef",
            });

            INode node = NodeDecoder.Decode(list);
            Assert.IsType<ShortNode>(node);
            var shortNode = (ShortNode)node;
            Assert.IsType<ValueNode>(shortNode.Value);
            Assert.Equal(ByteUtil.ParseHex("beef"), shortNode.Key);
            Assert.Equal(new ValueNode((Text)"beef"), shortNode.Value);
        }

        [Fact]
        public void DecodeValidExtensionNode()
        {
            var list = new List(new IValue[]
            {
                (Binary)ByteUtil.ParseHex("beef").ToArray(),
                (Binary)default(HashDigest<SHA256>).ToByteArray(),
            });

            INode node = NodeDecoder.Decode(list);
            Assert.IsType<ShortNode>(node);
            var shortNode = (ShortNode)node;
            Assert.IsType<HashNode>(shortNode.Value);
            Assert.Equal(new HashNode(default), shortNode.Value);
        }
    }
}
