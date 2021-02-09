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
        public static string ToExcerptString(this IBlockExcerpt excerpt)
        {
            return
                $"{excerpt.GetType().Name} {{" +
                $" {nameof(excerpt.ProtocolVersion)} = {excerpt.ProtocolVersion}," +
                $" {nameof(excerpt.Index)} = {excerpt.Index}," +
                $" {nameof(excerpt.Hash)} = {excerpt.Hash}," +
                $" {nameof(excerpt.TotalDifficulty)} = {excerpt.TotalDifficulty}" +
                " }";
        }
    }
}
