using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Action.Loader;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    public interface IActionEvaluator
    {
        /// <summary>
        /// The <see cref="IActionLoader"/> used by this <see cref="IActionEvaluator"/>
        /// when evaluating <see cref="Block"/>s.
        /// </summary>
        [Pure]
        IActionLoader ActionLoader { get; }

        /// <summary>
        /// The main entry point for evaluating a <see cref="IPreEvaluationBlock"/>.
        /// </summary>
        /// <param name="block">The block to evaluate.</param>
        /// <param name="baseStateRootHash">The base state to use when evaluating
        /// <paramref name="block"/>.</param>
        /// <returns> The result of evaluating every <see cref="IAction"/> related to
        /// <paramref name="block"/> as an <see cref="IReadOnlyList{T}"/> of
        /// <see cref="ICommittedActionEvaluation"/>s.</returns>
        /// <remarks>
        /// <para>
        /// This has a side-effect of writing data to internally held <see cref="IStateStore"/>.
        /// </para>
        /// <para>
        /// First evaluates all <see cref="IAction"/>s in
        /// <see cref="IBlockContent.Transactions"/> of <paramref name="block"/> and appends the
        /// evaluation of the <see cref="IBlockPolicy.BlockAction"/> held by the instance at
        /// the end.
        /// </para>
        /// </remarks>
        /// <exception cref="BlockProtocolVersionNotSupportedException">Thrown when
        /// <paramref name="block"/> has a <see cref="IPreEvaluationBlock.ProtocolVersion"/>
        /// that is not supported by an implementation of <see cref="IActionEvaluator"/>.
        /// </exception>
        [Pure]
        IReadOnlyList<ICommittedActionEvaluation> Evaluate(
            IPreEvaluationBlock block,
            HashDigest<SHA256> baseStateRootHash);
    }
}
