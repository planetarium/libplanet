using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Action.Loader;
using Libplanet.Blockchain.Policies;
using Libplanet.Common.Types.Blocks;

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
        /// <returns> The result of evaluating every <see cref="IAction"/> related to
        /// <paramref name="block"/> as an <see cref="IReadOnlyList{T}"/> of
        /// <see cref="ActionEvaluation"/>s.</returns>
        /// <remarks>
        /// <para>Publicly exposed for benchmarking.</para>
        /// <para>First evaluates all <see cref="IAction"/>s in
        /// <see cref="IBlockContent.Transactions"/> of <paramref name="block"/> and appends the
        /// evaluation of the <see cref="IBlockPolicy.BlockAction"/> held by the instance at
        /// the end.</para>
        /// </remarks>
        [Pure]
        IReadOnlyList<IActionEvaluation> Evaluate(IPreEvaluationBlock block);
    }
}
