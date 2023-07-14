using System;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// A renderer that invokes its callbacks.
    /// <para>This class is useful when you want an one-use ad-hoc implementation (i.e., Java-style
    /// anonymous class) of <see cref="IRenderer"/> interface.</para>
    /// </summary>
    /// <example>
    /// With object initializers, you can easily make an one-use renderer:
    /// <code>
    /// var renderer = new AnonymousRenderer;
    /// {
    ///     BlockRenderer = (oldTip, newTip) =>
    ///     {
    ///         // Implement RenderBlock() here.
    ///     };
    /// };
    /// </code>
    /// </example>
    public class AnonymousRenderer : IRenderer
    {
        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlock(Block, Block)"/>.
        /// </summary>
        public Action<Block, Block>? BlockRenderer { get; set; }

        /// <inheritdoc cref="IRenderer.RenderBlock(Block, Block)"/>
        public void RenderBlock(Block oldTip, Block newTip) =>
            BlockRenderer?.Invoke(oldTip, newTip);
    }
}
