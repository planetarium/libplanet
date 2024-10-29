using System;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown during an <see cref="IAction"/> is being evaluated.
    /// <para>The actual exception that the <see cref="Action"/> threw
    /// is stored in the <see cref="Exception.InnerException"/> property.</para>
    /// </summary>
    [Serializable]
    public sealed class UnexpectedlyTerminatedActionException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="UnexpectedlyTerminatedActionException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="preEvaluationHash">The <see cref="Block.PreEvaluationHash"/> of the
        /// <see cref="Block"/> that <paramref name="action"/> belongs to.</param>
        /// <param name="blockIndex">The <see cref="Block.Index"/> of the <see cref="Block"/>
        /// that <paramref name="action"/> belongs to.</param>
        /// <param name="txid">The <see cref="Transaction.Id"/> of
        /// the <see cref="Transaction"/> that <paramref name="action"/> belongs to.
        /// This can be <see langword="null"/> if <paramref name="action"/> is
        /// a <see cref="IBlockPolicy.BlockAction"/>.
        /// </param>
        /// <param name="action">The <see cref="IAction"/> object which threw an exception.</param>
        /// <param name="previousStateRootHash">The <see cref="ITrie.Hash"/> of states until
        /// previous action execution.  This can be <see langword="null"/> if the chain which
        /// executed the action, was not using <see cref="TrieStateStore"/>.</param>
        /// <param name="innerException">The actual exception that the <see cref="Action"/> threw.
        /// </param>
        public UnexpectedlyTerminatedActionException(
            string message,
            HashDigest<SHA256> preEvaluationHash,
            long blockIndex,
            TxId? txid,
            HashDigest<SHA256>? previousStateRootHash,
            IAction action,
            Exception innerException
        )
            : base(message, innerException)
        {
            PreEvaluationHash = preEvaluationHash;
            BlockIndex = blockIndex;
            TxId = txid;
            PreviousStateRootHash = previousStateRootHash;
            Action = action;
        }

        /// <summary>
        /// The <see cref="Block.PreEvaluationHash"/> of the <see cref="Block"/> that
        /// <see cref="Action"/> belongs to.
        /// </summary>
        public HashDigest<SHA256> PreEvaluationHash { get; }

        /// <summary>
        /// The <see cref="Block.Index"/> of the <see cref="Block"/> that <see cref="Action"/>
        /// belongs to.
        /// </summary>
        public long BlockIndex { get; }

        /// <summary>
        /// The <see cref="Transaction.Id"/> of the <see cref="Transaction"/> that
        /// <see cref="Action"/> belongs to.
        /// This can be <see langword="null"/>
        /// if <see cref="Action"/> is a <see cref="IBlockPolicy.BlockAction"/>.
        /// </summary>
        public TxId? TxId { get; }

        /// <summary>
        /// The <see cref="IAction"/> object which threw an exception.
        /// </summary>
        public IAction Action { get; }

        public HashDigest<SHA256>? PreviousStateRootHash { get; }
    }
}
