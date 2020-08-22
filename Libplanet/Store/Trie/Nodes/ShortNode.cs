#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal sealed class ShortNode : BaseNode, IEquatable<ShortNode>
    {
        public ShortNode(byte[] key, INode? value)
            : this(key.ToImmutableArray(), value)
        {
        }

        public ShortNode(ImmutableArray<byte> key, INode? value)
            : base(value)
        {
            Key = key;
        }

        public ImmutableArray<byte> Key { get; }

        bool IEquatable<ShortNode>.Equals(ShortNode? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Key.Equals(other.Key);
        }

        public override bool Equals(object? obj)
        {
            return ReferenceEquals(this, obj) || (obj is ShortNode other && Equals(other));
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (Key.GetHashCode() * 397) ^ Value!.GetHashCode();
            }
        }

        public override IValue ToBencodex()
        {
            var list = new List<IValue>
            {
                (Bencodex.Types.Binary)Key.ToArray(),
                Value!.ToBencodex(),
            };

            return new Bencodex.Types.List(list);
        }
    }
}
