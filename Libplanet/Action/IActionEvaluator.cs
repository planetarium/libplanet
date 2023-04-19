using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    public interface IActionEvaluator
    {
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
        /// evaluation of the <see cref="IBlockPolicy{T}.BlockAction"/> held by the instance at
        /// the end.</para>
        /// </remarks>
        [Pure]
        IReadOnlyList<ActionEvaluation> Evaluate(IPreEvaluationBlock block);
    }
}
