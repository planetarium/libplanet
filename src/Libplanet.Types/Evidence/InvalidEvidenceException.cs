using System;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// Serves as the base class for exceptions related <see cref="DuplicateVoteEvidence"/>s'
    /// integrity and validity.
    /// </summary>
    public class InvalidEvidenceException : Exception
    {
        /// <inheritdoc cref="Exception(string)"/>
        public InvalidEvidenceException(string message)
            : base(message)
        {
        }
    }
}
