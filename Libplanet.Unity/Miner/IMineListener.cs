using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Unity.Miner
{
    /// <summary>
    /// IMineListener is to check whether 'mine' of <see cref="BaseMiner{T}"/> is successful.
    /// </summary>
    /// <typeparam name="T"><see cref="BaseMiner{T}"/>'s chain Action Type.</typeparam>
    public interface IMineListener<T>
        where T : IAction, new()
    {
        /// <summary>
        /// If <c>Mine</c> is success, this method is called
        /// </summary>
        /// <param name="block">Mined <see cref="Block{T}"/>.</param>
        void Success(Block<T> block);

        /// <summary>
        /// If <c>Mine</c> is failure, this method is called.
        /// </summary>
        /// <param name="mineTask">Completed Mine Task.</param>
        void Failure(Task mineTask);
    }
}
