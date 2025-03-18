using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;

namespace Libplanet.Tests.Store.Trie.Nodes;

public class NodeDecoderTest
{
    [Fact]
    public void DecodeValidFullNode()
    {
        var hashA = HashDigest<SHA256>.DeriveFrom(TestUtils.GetRandomBytes(128));
        var hashB = HashDigest<SHA256>.DeriveFrom(TestUtils.GetRandomBytes(128));
        IValue[] values =
        [
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
        ];
        var list = new List(values);
        Assert.Equal(17, list.Count);

        INode node = NodeDecoder.Decode(list, NodeTypes.Full);
        Assert.IsType<FullNode>(node);
        var fullNode = (FullNode)node;
        Assert.Equal(new HashNode(hashB), fullNode.Value);
        Assert.Equal(new HashNode(hashA), fullNode.Children[0]);
        Assert.Single(fullNode.Children);
    }

    [Theory]
    [InlineData(1)]
    [InlineData(18)]
    public void DecodeInvalidFullNodeThrowsException(int listCount)
    {
        var list = new List(Enumerable.Repeat((IValue)Null.Value, listCount));
        Assert.Throws<InvalidTrieNodeException>(
            () => NodeDecoder.Decode(list, NodeTypes.Full));
    }

    [Fact]
    public void DecodeValidValueNode()
    {
        var list = List.Empty
            .Add(new Binary(Nibbles.Parse("beef").ByteArray))
            .Add(new List(new IValue[] { Null.Value, (Text)"beef", }));

        INode node = NodeDecoder.Decode(list, NodeTypes.Short);
        Assert.IsType<ShortNode>(node);
        var shortNode = (ShortNode)node;
        Assert.IsType<ValueNode>(shortNode.Value);
        Assert.Equal(Nibbles.Parse("beef"), shortNode.Key);
        Assert.Equal(new ValueNode((Text)"beef"), shortNode.Value);
    }

    [Fact]
    public void DecodeValidExtensionNode()
    {
        var list = List.Empty
            .Add(new Binary(Nibbles.Parse("beef").ByteArray))
            .Add(default(HashDigest<SHA256>).ByteArray);

        INode node = NodeDecoder.Decode(list, NodeTypes.Short);
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
            Nibbles.Parse("b4"),
            new ValueNode(new Text("bar"))).ToBencodex();
        IValue fullNodeEncoded = FullNode.Empty
            .SetChild(4, new ValueNode(new Text("4")))
            .SetChild(10, new ValueNode(new Text("c")))
            .ToBencodex();
        IValue hashNodeEncoded =
            new HashNode(
                new HashDigest<SHA256>(
                    TestUtils.GetRandomBytes(HashDigest<SHA256>.Size))).ToBencodex();

        Assert.Null(NodeDecoder.Decode(Null.Value, NodeDecoder.AnyNodeTypes));
        Assert.IsType<ValueNode>(
            NodeDecoder.Decode(valueNodeEncoded, NodeDecoder.AnyNodeTypes));
        Assert.IsType<ShortNode>(
            NodeDecoder.Decode(shortNodeEncoded, NodeDecoder.AnyNodeTypes));
        Assert.IsType<FullNode>(
            NodeDecoder.Decode(fullNodeEncoded, NodeDecoder.AnyNodeTypes));
        Assert.IsType<FullNode>(
            NodeDecoder.Decode(fullNodeEncoded, NodeDecoder.AnyNodeTypes));
        Assert.Throws<InvalidTrieNodeException>(() =>
            NodeDecoder.Decode(Null.Value, NodeTypes.Value));
        Assert.Throws<InvalidTrieNodeException>(() =>
            NodeDecoder.Decode(valueNodeEncoded, NodeTypes.Short));
        Assert.Throws<InvalidTrieNodeException>(() =>
            NodeDecoder.Decode(shortNodeEncoded, NodeTypes.Full));
        Assert.Throws<InvalidTrieNodeException>(() =>
            NodeDecoder.Decode(fullNodeEncoded, NodeTypes.Null));
    }
}
