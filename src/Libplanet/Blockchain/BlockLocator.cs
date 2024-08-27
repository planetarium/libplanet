using System;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class that thinly wraps a <see cref="BlockHash"/> for the purpose of syncing blocks.
    /// </summary>
    public class BlockLocator : IEquatable<BlockLocator>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="BlockLocator"/> from <paramref name="hash"/>.
        /// </summary>
        /// <param name="hash">The <see cref="BlockHash"/> value to hold.</param>
        public BlockLocator(BlockHash hash)
        {
            Hash = hash;
        }

        public BlockHash Hash { get; }

        /// <inheritdoc/>
        public bool Equals(BlockLocator? other) =>
            other is { } locator && Hash.Equals(locator.Hash);

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is BlockLocator other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode() => Hash.GetHashCode();
    }
}
