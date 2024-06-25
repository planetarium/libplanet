using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction"/>.
    /// <para>Note that <see cref="Transaction"/>s cannot be executed without belonging to
    /// a <see cref="Block"/>, and even if it's the same <see cref="Transaction"/> its
    /// result can vary depending on <see cref="Block"/> that it is executed within.</para>
    /// </summary>
    public sealed class TxExecution
    {
        internal static readonly Text FailKey = new Text("fail");

        internal static readonly Text InputStateKey = new Text("i");

        internal static readonly Text OutputStateKey = new Text("o");

        internal static readonly Text ExceptionNamesKey = new Text("e");

        public TxExecution(
            BlockHash blockHash,
            TxId txId,
            bool fail,
            HashDigest<SHA256> inputState,
            HashDigest<SHA256> outputState,
            List<Exception?> exceptions)
            : this(
                blockHash,
                txId,
                fail,
                inputState,
                outputState,
                exceptions
                    .Select(exception => exception is { } e
                        ? e.GetType().FullName
                        : null)
                    .ToList())
        {
        }

        public TxExecution(
            BlockHash blockHash,
            TxId txId,
            bool fail,
            HashDigest<SHA256> inputState,
            HashDigest<SHA256> outputState,
            List<string?> exceptionNames)
        {
            BlockHash = blockHash;
            TxId = txId;
            Fail = fail;
            InputState = inputState;
            OutputState = outputState;
            ExceptionNames = exceptionNames;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines.
        public TxExecution(
            BlockHash blockHash,
            TxId txId,
            IValue bencoded)
            : this(
                blockHash,
                txId,
                bencoded is Dictionary dict
                    ? dict
                    : throw new ArgumentException(
                        $"Given {nameof(bencoded)} must be of type " +
                        $"{typeof(Bencodex.Types.Dictionary)}: {bencoded.GetType()}",
                        nameof(bencoded)))
#pragma warning restore SA1118
        {
        }

        private TxExecution(
            BlockHash blockHash,
            TxId txId,
            Dictionary bencoded)
        {
            BlockHash = blockHash;
            TxId = txId;

            if (!bencoded.TryGetValue(FailKey, out IValue fail))
            {
                throw new ArgumentException(
                    $"Given {nameof(bencoded)} is missing fail value",
                    nameof(bencoded));
            }
            else if (!(fail is Bencodex.Types.Boolean failBoolean))
            {
                throw new ArgumentException(
                    $"Given {nameof(bencoded)} has an invalid fail value: {fail}",
                    nameof(bencoded));
            }
            else
            {
                Fail = failBoolean.Value;
            }

            if (bencoded.TryGetValue(InputStateKey, out IValue input) &&
                input is Binary inputBinary)
            {
                InputState = new HashDigest<SHA256>(inputBinary.ByteArray);
            }
            else
            {
                InputState = null;
            }

            if (bencoded.TryGetValue(OutputStateKey, out IValue output) &&
                output is Binary outputBinary)
            {
                OutputState = new HashDigest<SHA256>(outputBinary.ByteArray);
            }
            else
            {
                OutputState = null;
            }

            if (bencoded.TryGetValue(ExceptionNamesKey, out IValue exceptions) &&
                exceptions is List exceptionsList)
            {
                ExceptionNames = exceptionsList
                    .Select(value => value is Text t
                        ? (string?)t.Value
                        : value is Null
                            ? (string?)null
                            : throw new ArgumentException(
                                $"Expected either {nameof(Text)} or {nameof(Null)} " +
                                $"but got {value.GetType()}"))
                    .ToList();
            }
            else
            {
                ExceptionNames = null;
            }
        }

        /// <summary>
        /// The <see cref="Block.Hash"/> of the <see cref="Block"/> that
        /// the <see cref="Transaction"/> is executed within.
        /// </summary>
        [Pure]
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The executed <see cref="Transaction"/>'s <see cref="Transaction.Id"/>.
        /// </summary>
        [Pure]
        public TxId TxId { get; }

        /// <summary>
        /// Whether <em>every</em> action in the <see cref="Transaction"/> was
        /// executed without throwing and <see cref="Exception"/>.
        /// </summary>
        public bool Fail { get; }

        /// <summary>
        /// The state before the execution of the <see cref="Transaction"/>.
        /// </summary>
        /// <remarks>
        /// This is marked <see langword="null"/>-able for backward compatibility.
        /// </remarks>
        public HashDigest<SHA256>? InputState { get; }

        /// <summary>
        /// The state after the execution of the <see cref="Transaction"/>.
        /// </summary>
        /// <remarks>
        /// This is marked <see langword="null"/>-able for backward compatibility.
        /// </remarks>
        public HashDigest<SHA256>? OutputState { get; }

        /// <summary>
        /// The list of <see cref="Exception"/> names thrown by actions
        /// in the <see cref="Transaction"/>.  A value of <see langword="null"/>
        /// as an element represents no <see cref="Exception"/> being thrown for
        /// the action of the same index.
        /// </summary>
        /// <remarks>
        /// This is marked <see langword="null"/>-able for backward compatibility.
        /// </remarks>
        public List<string?>? ExceptionNames { get; }

        public IValue ToBencodex()
        {
            Dictionary dict = Dictionary.Empty
                .Add(FailKey, Fail);

            if (InputState is { } inputState)
            {
                dict = dict.Add(InputStateKey, inputState.Bencoded);
            }

            if (OutputState is { } outputState)
            {
                dict = dict.Add(OutputStateKey, outputState.Bencoded);
            }

            if (ExceptionNames is { } exceptionNames)
            {
                dict = dict.Add(
                    ExceptionNamesKey,
                    new List(exceptionNames
                        .Select(exceptionName => exceptionName is { } name
                            ? (IValue)new Text(exceptionName)
                            : (IValue)Null.Value)));
            }

            return dict;
        }
    }
}
