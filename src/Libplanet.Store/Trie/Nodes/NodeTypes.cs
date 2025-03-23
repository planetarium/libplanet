using System;

namespace Libplanet.Store.Trie.Nodes;

[Flags]
public enum NodeTypes : short
{
    /// <summary>
    /// A null node represented as <see langword="null"/>.
    /// </summary>
    Null = 1,

    /// <summary>
    /// A <see cref=ValueNode"/>.
    /// </summary>
    Value = 2,

    /// <summary>
    /// A <see cref="ShortNode"/>.
    /// </summary>
    Short = 4,

    /// <summary>
    /// A <see cref="FullNode"/>.
    /// </summary>
    Full = 8,

    /// <summary>
    /// A <see cref="HashNode"/>.
    /// </summary>
    Hash = 16,
}
