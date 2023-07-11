using Bencodex.Types;

namespace Libplanet.Action.Loader
{
    /// <summary>
    /// An interface to load actions branched by block index.
    /// </summary>
    public interface IActionLoader
    {
        /// <summary>
        /// Loads a concrete <see cref="IAction"/> from <paramref name="value"/>
        /// given <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index of a block to use as context for deserializing
        /// <paramref name="value"/>.</param>
        /// <param name="value">The <see cref="IValue"/> to deserialize to
        /// an <see cref="IAction"/>.</param>
        /// <exception cref="InvalidActionException">Thrown when an <see cref="IAction"/> cannot be
        /// instantiated with given <paramref name="index"/> and <paramref name="value"/>.
        /// </exception>
        /// <returns>An <see cref="IAction"/> instantiated with <paramref name="value"/>.</returns>
        public IAction LoadAction(long index, IValue value);
    }
}
