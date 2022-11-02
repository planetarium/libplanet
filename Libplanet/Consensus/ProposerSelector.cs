using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public static class ProposerSelector
    {
        /// <summary>
        /// Gets the proposer for a given context.
        /// </summary>
        /// <param name="validators">The list of <see cref="PublicKey"/>s to choose from.</param>
        /// <param name="height">The height of the context under consideration.</param>
        /// <param name="round">The round of the context under consideration.</param>
        /// <returns>A <see cref="PublicKey"/> deterministically chosen from
        /// <paramref name="validators"/>, <paramref name="height"/>, and <paramref name="round"/>.
        /// </returns>
        [Pure]
        public static PublicKey GetProposer(
            List<PublicKey> validators, long height, int round)
        {
            return validators[(int)((height + round) % validators.Count)];
        }
    }
}
