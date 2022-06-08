using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// Agent.
    /// </summary>
    /// <typeparam name="T">The type.</typeparam>
    public interface IMineListener<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Agent.
        /// </summary>
        /// <param name="block">Av.</param>
        void Success(Block<T> block);

        /// <summary>
        /// Agent.
        /// </summary>
        /// <param name="mineTask">A.</param>
        void Failure(Task mineTask);
    }
}
