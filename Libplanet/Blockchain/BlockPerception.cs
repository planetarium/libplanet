using System;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Pair of a block and the time the local node perceived it.
    /// <para>Purposes to be compared when the canonical chain is determined.</para>
    /// </summary>
    public readonly struct BlockPerception
    {
        /// <summary>
        /// Creates a pair.
        /// </summary>
        /// <param name="blockExcerpt">The block perceived by the local node.</param>
        /// <param name="perceivedTime">The time the local node perceived the
        /// <paramref name="blockExcerpt"/>.</param>
        public BlockPerception(IBlockExcerpt blockExcerpt, DateTimeOffset perceivedTime)
        {
            BlockExcerpt = blockExcerpt;
            PerceivedTime = perceivedTime;
        }

        /// <summary>
        /// Creates a pair with setting <see cref="PerceivedTime"/> to the current time.
        /// </summary>
        /// <param name="blockExcerpt">The block perceived by the local node.</param>
        public BlockPerception(IBlockExcerpt blockExcerpt)
            : this(blockExcerpt, DateTimeOffset.UtcNow)
        {
        }

        /// <summary>
        /// The block perceived by the local node.
        /// </summary>
        public IBlockExcerpt BlockExcerpt { get; }

        /// <summary>
        /// The time the local node perceived the <see cref="BlockExcerpt"/>.
        /// </summary>
        public DateTimeOffset PerceivedTime { get; }

        public override string ToString()
        {
            const string F = nameof(BlockExcerpt);
            IBlockExcerpt excerpt = BlockExcerpt;
            return
                $"{nameof(BlockPerception)} {{" +
                $" {F}.{nameof(excerpt.ProtocolVersion)} = {excerpt.ProtocolVersion}," +
                $" {F}.{nameof(excerpt.Index)} = {excerpt.Index}," +
                $" {F}.{nameof(excerpt.Hash)} = {excerpt.Hash}," +
                $" {F}.{nameof(excerpt.TotalDifficulty)} = {excerpt.TotalDifficulty}," +
                $" {nameof(PerceivedTime)} = {PerceivedTime}" +
                " }";
        }
    }
}
