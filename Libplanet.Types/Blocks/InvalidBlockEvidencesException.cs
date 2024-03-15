using System;
using Libplanet.Types.Blocks;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when the <see cref="Consensus.Evidence"/> on the
    /// <see cref="Block.Evidences"/> is invalid.
    /// </summary>
    [Serializable]
    public class InvalidBlockEvidencesException : InvalidBlockException
    {
        public InvalidBlockEvidencesException(string message)
            : base(message)
        {
        }
    }
}
