using System.Diagnostics.Contracts;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// Contextual data determined by a transaction and a block.
    /// Passed to <see cref="IAction.Execute(IActionContext)"/> method.
    /// </summary>
    public interface IActionContext
    {
        /// <summary>
        /// The <see cref="Transaction.Signer"/> of the <see cref="Transaction"/> that contains
        /// the <see cref="IAction"/> to be executed.  If the <see cref="IAction"/> is
        /// not part of a <see cref="Transaction"/>, e.g. <see cref="IBlockPolicy.BlockAction"/>,
        /// this is set to <see cref="Block.Miner"/> instead.
        /// </summary>
        [Pure]
        Address Signer { get; }

        /// <summary>
        /// The <see cref="Transaction.Id"/> of the <see cref="Transaction"/> that contains
        /// the <see cref="IAction"/>.  If the <see cref="IAction"/> is not part of
        /// a <see cref="Transaction"/>, e.g. <see cref="IBlockPolicy.BlockAction"/>,
        /// this is set to <see langword="null"/>.
        /// </summary>
        [Pure]
        TxId? TxId { get; }

        /// <summary>
        /// The <see cref="Block.Miner"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        Address Miner { get; }

        /// <summary>
        /// The <see cref="Block.Index"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        long BlockIndex { get; }

        /// <summary>
        /// The <see cref="Block.ProtocolVersion"/> of the <see cref="Block"/> that contains
        /// the <see cref="IAction"/>.
        /// </summary>
        [Pure]
        int BlockProtocolVersion { get; }

        /// <summary>
        /// Whether an <see cref="IAction"/> is being executed during
        /// &#x201c;rehearsal mode&#x201d;, that there is nothing
        /// in <see cref="PreviousState"/>.
        /// </summary>
        [Pure]
        bool Rehearsal { get; }

        /// <summary>
        /// A null delta of states, which means it represents the states
        /// before <see cref="IAction"/> executes.
        /// <para>Although a <see cref="IAccount"/> instance is
        /// immutable, it has several manipulative methods that returns
        /// new <see cref="IAccount"/> instances with some "dirty"
        /// states.  These kinds of dirty <see cref="IAccount"/>
        /// instances can be returned by <see
        /// cref="IAction.Execute(IActionContext)"/> method.</para>
        /// </summary>
        [Pure]
        IAccount PreviousState { get; }

        /// <summary>
        /// An initialized pseudorandom number generator.  Its seed (state)
        /// is determined by a block and a transaction, which is
        /// deterministic so that every node can replay the same action and
        /// then reproduce the same result, while neither a single block miner
        /// nor a single transaction signer can predict the result and cheat.
        /// </summary>
        /// <returns>A random object that shares interface mostly equivalent
        /// to <see cref="System.Random"/>.</returns>
        IRandom Random { get; }

        /// <summary>
        /// Whether this action is executed as a block action.
        /// <see langword="false"/> if it belongs to a transaction.
        /// </summary>
        [Pure]
        bool BlockAction { get; }

        /// <summary>
        /// Consumes the specified amount of gas.
        /// </summary>
        /// <param name="gas">
        /// The amount of gas to consume.
        /// </param>
        void UseGas(long gas);

        /// <summary>
        /// Returns a clone of this context, except that its <see cref="Random"/> has the unconsumed
        /// state (with the same seed).  The clone and its original are a distinct instance
        /// each other, in other words, one's state transfer must not affect the other one
        /// (i.e., consuming <see cref="Random"/> source should be local to a context instance).
        /// </summary>
        /// <returns>A clone instance, which is distinct from its original.  Its internal state
        /// is entirely equivalent to the original's unconsumed initial state.</returns>
        [Pure]
        IActionContext GetUnconsumedContext();

        /// <summary>
        /// Returns the total gas used by the current action.
        /// </summary>
        /// <returns>The total gas used by the current action.</returns>
        [Pure]
        long GasUsed();

        /// <summary>
        /// Returns the limit gas of the current action.
        /// </summary>
        /// <returns>
        /// The limit gas of the current action.
        /// </returns>
        [Pure]
        long GasLimit();
    }
}
