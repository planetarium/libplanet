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
                        : string.Empty)
                    .ToList())
        {
        }

        public TxExecution(
            BlockHash blockHash,
            TxId txId,
            bool fail,
            HashDigest<SHA256> inputState,
            HashDigest<SHA256> outputState,
            List<string> exceptionNames)
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
            IValue encoded)
            : this(
                blockHash,
                txId,
                encoded is Dictionary dict
                    ? dict
                    : throw new ArgumentException())
#pragma warning restore SA1118
        {
        }

        private TxExecution(
            BlockHash blockHash,
            TxId txId,
            Dictionary encoded)
        {
            BlockHash = blockHash;
            TxId = txId;

            if (!encoded.TryGetValue(FailKey, out IValue fail) ||
                !(fail is Bencodex.Types.Boolean failBoolean) ||
                (failBoolean.Value == false))
            {
                throw new ArgumentException($"Invalid fail key value: {fail}");
            }

            if (encoded.TryGetValue(InputStateKey, out IValue input) &&
                input is Binary inputBinary)
            {
                InputState = HashDigest<SHA256>.DeriveFrom(inputBinary.ByteArray);
            }
            else
            {
                InputState = null;
            }

            if (encoded.TryGetValue(OutputStateKey, out IValue output) &&
                input is Binary outputBinary)
            {
                InputState = HashDigest<SHA256>.DeriveFrom(outputBinary.ByteArray);
            }
            else
            {
                OutputState = null;
            }

            if (encoded.TryGetValue(ExceptionNamesKey, out IValue exceptions) &&
                exceptions is List exceptionsList)
            {
                ExceptionNames = exceptionsList
                    .Select(value => value is Text t
                        ? t.Value
                        : throw new ArgumentException())
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

        public bool Fail { get; }

        public HashDigest<SHA256>? InputState { get; }

        public HashDigest<SHA256>? OutputState { get; }

        public List<string>? ExceptionNames { get; }

        public IValue ToBencodex()
        {
            Dictionary dict = Dictionary.Empty
                .Add(FailKey, Fail);

            if (InputState is { } inputState)
            {
                dict = dict.Add(InputStateKey, inputState.ByteArray);
            }

            if (OutputState is { } outputState)
            {
                dict = dict.Add(OutputStateKey, outputState.ByteArray);
            }

            if (ExceptionNames is { } exceptionNames)
            {
                dict = dict.Add(
                    ExceptionNamesKey,
                    new List(exceptionNames.Select(exceptionName => new Text(exceptionName))));
            }

            return dict;
        }
    }
}
