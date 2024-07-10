using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Types.Evidence;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// Collects <see cref="EvidenceException"/>s to be occurred during the consensus process.
    /// <para>The collected exceptions are added to the Pending pool using the
    /// <see cref="BlockChain.AddEvidence" /> method after the blockchain's tip changes.</para>
    /// </summary>
    internal sealed class EvidenceExceptionCollector
    {
        private readonly List<EvidenceException> _exceptionList
            = new List<EvidenceException>();

        /// <summary>
        /// Adds an <see cref="EvidenceException"/> to the <see cref="EvidenceExceptionCollector"/>.
        /// </summary>
        /// <param name="exception">Indicates an <see cref="EvidenceException"/> that includes
        /// the infraction information.</param>
        public void Add(EvidenceException exception)
        {
            _exceptionList.Add(exception);
        }

        /// <summary>
        /// Adds multiple <see cref="EvidenceException"/>s to the
        /// <see cref="EvidenceExceptionCollector"/>.
        /// </summary>
        /// <param name="exceptions">Indicates an array of <see cref="EvidenceException"/>s
        /// that include the infraction information.</param>
        public void AddRange(EvidenceException[] exceptions)
        {
            _exceptionList.AddRange(exceptions);
        }

        /// <summary>
        /// Flushes all the collected <see cref="EvidenceException"/>s and returns them.
        /// </summary>
        /// <returns>
        /// A list of <see cref="EvidenceException"/>s that have been collected so far.
        /// </returns>
        public EvidenceException[] Flush()
        {
            var evidenceExceptions = _exceptionList.ToArray();
            _exceptionList.Clear();
            return evidenceExceptions;
        }
    }
}
