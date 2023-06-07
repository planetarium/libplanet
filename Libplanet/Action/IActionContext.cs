using System.Diagnostics.Contracts;
using Libplanet.Blocks;
using Libplanet.State;
using Libplanet.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// Contextual data determined by a transaction and a block.
    /// Passed to <see cref="IAction.Execute(IActionContext)"/> method.
    /// </summary>
    public interface IActionContext
    {
        /// <summary>
        /// <see cref="Address"/> of an account who made and signed
        /// a transaction that an executed <see cref="IAction"/> belongs to.
        /// </summary>
        [Pure]
        Address Signer { get; }

        /// <summary>
        /// <see cref="Transaction.Id"/> of a transaction that an executed <see cref="IAction"/>
        /// belongs to.  This is <see langword="null"/>
        /// iff <see cref="BlockAction"/> is <see langword="true"/>.
        /// </summary>
        [Pure]
        TxId? TxId { get; }

        /// <summary>
        /// <see cref="Address"/> of a block miner account.
        /// </summary>
        [Pure]
        Address Miner { get; }

        /// <summary>
        /// <see cref="Block"/>.<see cref="Block.Index"/> of a transaction that an executed
        /// <see cref="IAction"/> belongs to.
        /// </summary>
        [Pure]
        long BlockIndex { get; }

        /// <summary>
        /// Whether an <see cref="IAction"/> is being executed during
        /// &#x201c;rehearsal mode&#x201d;, that there is nothing
        /// in <see cref="PreviousStates"/>.
        /// </summary>
        [Pure]
        bool Rehearsal { get; }

        /// <summary>
        /// A null delta of states, which means it represents the states
        /// before <see cref="IAction"/> executes.
        /// <para>Although a <see cref="IAccountStateDelta"/> instance is
        /// immutable, it has several manipulative methods that returns
        /// new <see cref="IAccountStateDelta"/> instances with some "dirty"
        /// states.  These kinds of dirty <see cref="IAccountStateDelta"/>
        /// instances can be returned by <see
        /// cref="IAction.Execute(IActionContext)"/> method.</para>
        /// </summary>
        [Pure]
        IAccountStateDelta PreviousStates { get; }

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
        /// Record a log in <see cref="TxExecution"/>.
        /// </summary>
        /// <param name="log">A log to record in <see cref="TxExecution"/>.</param>
        void PutLog(string log);

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
