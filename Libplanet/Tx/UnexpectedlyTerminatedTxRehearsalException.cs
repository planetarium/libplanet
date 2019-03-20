using System;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// The exception that is thrown during a <see cref="Transaction{T}"/>
    /// is being created when one of <see cref="Transaction{T}.Actions"/>
    /// throws some exception during rehearsal mode.
    /// <para>The actual exception that the <see cref="Action"/> threw
    /// is stored in the <see cref="Exception.InnerException"/> property.</para>
    /// </summary>
    [Serializable]
    public sealed class UnexpectedlyTerminatedTxRehearsalException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="UnexpectedlyTerminatedTxRehearsalException"
        /// /> object with an <paramref name="innerException"/>.
        /// </summary>
        /// <param name="action">The <see cref="IAction"/> object which threw
        /// an exception.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.
        /// </param>
        /// <param name="innerException">The actual exception that
        /// the <see cref="Action"/> threw.</param>
        public UnexpectedlyTerminatedTxRehearsalException(
            IAction action,
            string message,
            Exception innerException
        )
            : base(message, innerException)
        {
            Action = action;
        }

        /// <summary>
        /// The <see cref="IAction"/> object which threw an exception.
        /// </summary>
        public IAction Action { get; }
    }
}
