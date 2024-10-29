using System;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// Serves as the base class for exceptions related <see cref="EvidenceBase"/>s'
    /// integrity and validity.
    /// </summary>
    public abstract class EvidenceException : Exception
    {
        /// <inheritdoc cref="Exception(string)"/>
        protected EvidenceException(string message)
            : base(message)
        {
        }

        /// <inheritdoc cref="Exception(string, Exception)"/>
        protected EvidenceException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        /// <summary>
        /// Gets the height of the block that occurred the infraction.
        /// </summary>
        public abstract long Height { get; }

        /// <summary>
        /// Creates an instance of evidence.
        /// </summary>
        /// <param name="evidenceContext">
        /// An instance of <see cref="IEvidenceContext"/> to create the evidence.
        /// </param>
        /// <returns>
        /// An instance of <see cref="EvidenceBase"/> from the <see cref="EvidenceException"/>.
        /// </returns>
        public EvidenceBase CreateEvidence(IEvidenceContext evidenceContext)
        {
            var evidence = OnCreateEvidence(evidenceContext);
            if (evidence is null)
            {
                var message = $"{nameof(OnCreateEvidence)} must return a non-null " +
                              $"instance of {nameof(EvidenceBase)}.";
                throw new InvalidOperationException(message);
            }

            return evidence;
        }

        /// <summary>
        /// Creates an instance of evidence.
        /// </summary>
        /// <param name="evidenceContext">
        /// An instance of <see cref="IEvidenceContext"/> to create the evidence.
        /// </param>
        /// <returns>
        /// An instance of <see cref="EvidenceBase"/> from the <see cref="EvidenceException"/>.
        /// </returns>
        protected abstract EvidenceBase OnCreateEvidence(IEvidenceContext evidenceContext);
    }
}
