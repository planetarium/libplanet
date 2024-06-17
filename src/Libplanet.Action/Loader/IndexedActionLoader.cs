using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action.Sys;

namespace Libplanet.Action.Loader
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation for dispatching
    /// multiple <see cref="IActionLoader"/>s.
    /// </summary>
    public class IndexedActionLoader : IActionLoader
    {
        private ImmutableArray<(long StartIndex, IActionLoader Loader)> _loaders;

        /// <summary>
        /// Creates an <see cref="IndexedActionLoader"/> instance.
        /// </summary>
        /// <param name="loaders">A list of inner <see cref="IActionLoader"/>s to use.</param>
        /// <exception cref="ArgumentException">Thrown for any of the following reasons:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="loaders"/> is empty.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="loaders"/>'s first starting index is not zero.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="loaders"/>'s starting indices are not strictly increasing.
        ///     </description></item>
        /// </list>
        /// </exception>
        public IndexedActionLoader(IReadOnlyList<(long StartIndex, IActionLoader Loader)> loaders)
        {
            if (loaders.Count == 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(loaders)} cannot be empty.", nameof(loaders));
            }
            else if (loaders.First().StartIndex != 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(loaders)} must start with zero starting index: {loaders[0]}",
                    nameof(loaders));
            }
            else if (
                loaders
                    .Zip(loaders.Skip(1), (prev, next) => (prev, next))
                    .Any(pair => pair.prev.StartIndex >= pair.next.StartIndex))
            {
                throw new ArgumentException(
                    $"Given {nameof(loaders)}'s starting indices must be strictly increasing.",
                    nameof(loaders));
            }

            _loaders = loaders.ToImmutableArray();
        }

        /// <inheritdoc cref="IActionLoader.LoadAction"/>
        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                var loaderIndex = _loaders.Count(pair => pair.StartIndex <= index);
                var loader = _loaders[loaderIndex - 1].Loader;
                return loader.LoadAction(index, value);
            }
            catch (Exception e)
            {
                throw new InvalidActionException(
                    $"Failed to instantiate an action from {value} for index {index}",
                    value,
                    e);
            }
        }
    }
}
