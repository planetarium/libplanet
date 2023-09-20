using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction"/> with any exception-throwing
    /// actions.
    /// </summary>
    public sealed class TxFailure : TxExecution
    {
        /// <summary>
        /// Creates a <see cref="TxFailure"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
        /// <param name="inputState">The state root hash of the state before the
        /// execution of a <see cref="Transaction"/>.</param>
        /// <param name="outputState">The state root hash of the state after the
        /// execution of a <see cref="Transaction"/>.</param>
        /// <param name="exceptionNames">The list of excetions thrown while
        /// executing the actions.</param>
        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            HashDigest<SHA256> inputState,
            HashDigest<SHA256> outputState,
            List<string> exceptionNames)
            : base(blockHash, txId)
        {
            InputState = inputState;
            OutputState = outputState;
            ExceptionNames = exceptionNames;
        }

        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            HashDigest<SHA256> inputState,
            HashDigest<SHA256> outputState,
            List<Exception?> exceptions)
            : this(
                blockHash,
                txId,
                inputState,
                outputState,
                exceptions
                    .Select(exception => exception is { } e
                        ? e.GetType().FullName
                        : string.Empty)
                    .ToList())
        {
        }

        public HashDigest<SHA256> InputState { get; }

        public HashDigest<SHA256> OutputState { get; }

        public List<string> ExceptionNames { get; }
    }
}
