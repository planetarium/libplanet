using System;
using System.Collections.Immutable;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Serialization;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;

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
        /// <param name="preEvaluationHash">The <see cref="Block{T}.PreEvaluationHash"/> of the
        /// <see cref="Block{T}"/> that <paramref name="action"/> belongs to.
        /// This can be <see langword="null"/> on rehearsal mode.</param>
        /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/>
        /// that <paramref name="action"/> belongs to.
        /// This can be <see langword="null"/> on rehearsal mode.
        /// </param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of
        /// the <see cref="Transaction{T}"/> that <paramref name="action"/> belongs to.
        /// This can be <see langword="null"/> on rehearsal mode or if <paramref name="action"/> is
        /// a <see cref="IBlockPolicy{T}.BlockAction"/>.
        /// </param>
        /// <param name="action">The <see cref="IAction"/> object which threw an exception.</param>
        /// <param name="previousStateRootHash">The <see cref="ITrie.Hash"/> of states until
        /// previous action execution.  This can be null on rehearsal mode or if the chain which
        /// executed the action, was not using <see cref="TrieStateStore"/>.</param>
        /// <param name="innerException">The actual exception that the <see cref="Action"/> threw.
        /// </param>
        public UnexpectedlyTerminatedActionException(
            string message,
            ImmutableArray<byte>? preEvaluationHash,
            long? blockIndex,
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

        private UnexpectedlyTerminatedActionException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            if (info.TryGetValue(nameof(PreEvaluationHash), out byte[] blockHash))
            {
                PreEvaluationHash = blockHash.ToImmutableArray();
            }

            if (info.TryGetValue(nameof(BlockIndex), out long blockIndex))
            {
                BlockIndex = blockIndex;
            }

            if (info.TryGetValue(nameof(TxId), out byte[] txId))
            {
                TxId = new TxId(txId);
            }

            if (info.TryGetValue(nameof(PreviousStateRootHash), out byte[] previousStateRootHash))
            {
                PreviousStateRootHash = new HashDigest<SHA256>(previousStateRootHash);
            }

            string actionKey = $"{nameof(Action)}_type";
            if (info.TryGetValue(actionKey, out string actionType))
            {
                string valuesKey = $"{nameof(Action)}_values";
                if (!(info.GetValue<byte[]>(valuesKey) is byte[] valuesBytes))
                {
                    throw new SerializationException($"Missing the {valuesKey} field.");
                }

                if (!(new Codec().Decode(valuesBytes) is Dictionary values))
                {
                    throw new SerializationException(
                        $"{valuesKey} field must be a Bencodex dictionary."
                    );
                }

                Type type = Type.GetType(actionType, true, true)
                    ?? throw new SerializationException($"Failed to find the type: {actionType}.");
                if (Activator.CreateInstance(type) is IAction action)
                {
                    Action = action;
                    Action.LoadPlainValue(values);
                }
                else
                {
                    throw new SerializationException(
                        $"Failed to instantiate the action: {actionType}."
                    );
                }
            }
            else
            {
                throw new SerializationException($"Missing the {actionKey} field.");
            }
        }

        /// <summary>
        /// The <see cref="Block{T}.PreEvaluationHash"/> of the <see cref="Block{T}"/> that
        /// <see cref="Action"/> belongs to.  This can be <see langword="null"/> on rehearsal mode.
        /// </summary>
        public ImmutableArray<byte>? PreEvaluationHash { get; }

        /// <summary>
        /// The <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/> that <see cref="Action"/>
        /// belongs to.  This can be <see langword="null"/> on rehearsal mode.
        /// </summary>
        public long? BlockIndex { get; }

        /// <summary>
        /// The <see cref="Transaction{T}.Id"/> of the <see cref="Transaction{T}"/> that
        /// <see cref="Action"/> belongs to.
        /// This can be <see langword="null"/> on rehearsal mode or
        /// if <see cref="Action"/> is a <see cref="IBlockPolicy{T}.BlockAction"/>.
        /// </summary>
        public TxId? TxId { get; }

        /// <summary>
        /// The <see cref="IAction"/> object which threw an exception.
        /// </summary>
        public IAction Action { get; }

        public HashDigest<SHA256>? PreviousStateRootHash { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            if (PreEvaluationHash is { } preEvaluationHash)
            {
                info.AddValue(nameof(PreEvaluationHash), preEvaluationHash.ToBuilder().ToArray());
            }

            if (BlockIndex is long blockIndex)
            {
                info.AddValue(nameof(BlockIndex), blockIndex);
            }

            if (TxId is TxId txId)
            {
                info.AddValue(nameof(TxId), txId.ToByteArray());
            }

            if (PreviousStateRootHash is HashDigest<SHA256> previousStateRootHash)
            {
                info.AddValue(nameof(PreviousStateRootHash), previousStateRootHash.ToByteArray());
            }

            if (!(Action is null))
            {
                info.AddValue($"{nameof(Action)}_type", Action.GetType().AssemblyQualifiedName);
                info.AddValue($"{nameof(Action)}_values", new Codec().Encode(Action.PlainValue));
            }
        }
    }
}
