using Libplanet.Net.Messages;

namespace Libplanet.Net.Options
{
    public class TaskRegulationOptions
    {
        /// <summary>
        /// Max limit to spawn a task that handles <see cref="GetBlocksMsg"/> message.
        /// If 0 is given, task spawning is not limited.
        /// Set to 0 by default.
        /// </summary>
        public int MaxTransferBlocksTaskCount { get; set; } = 0;

        /// <summary>
        /// Max limit to spawn a task that handles <see cref="GetTxsMsg"/> message.
        /// If 0 is given, task spawning is not limited.
        /// Set to 0 by default.
        /// </summary>
        public int MaxTransferTxsTaskCount { get; set; } = 0;
    }
}
