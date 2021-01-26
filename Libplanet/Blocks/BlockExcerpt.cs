#nullable enable

namespace Libplanet.Blocks
{
    /// <summary>
    /// The extension methods for <see cref="IBlockExcerpt"/>.
    /// </summary>
    public static class BlockExcerpt
    {
        /// <summary>
        /// Shows <see cref="IBlockExcerpt"/> instance's members as a string.
        /// </summary>
        /// <param name="excerpt">An excerpt object to show.</param>
        /// <returns>Extracted members as a string.</returns>
        public static string ToExcerptString(this IBlockExcerpt excerpt) =>
            $"{excerpt.GetType().Name} {{" +
            $" {nameof(IBlockExcerpt.ProtocolVersion)} = {excerpt.ProtocolVersion}," +
            $" {nameof(IBlockExcerpt.Index)} = {excerpt.Index}," +
            $" {nameof(IBlockExcerpt.Hash)} = {excerpt.Hash}," +
            $" {nameof(IBlockExcerpt.TotalDifficulty)} = {excerpt.TotalDifficulty}" +
            " }";
    }
}
