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
        Address Signer { get; }

        /// <summary>
        /// Block index of a transaction that an executed <see cref="IAction"/>
        /// belongs to.
        /// </summary>
        long BlockIndex { get; }

        /// <summary>
        /// Whether an <see cref="IAction"/> is being executed during
        /// &#x201c;rehearsal mode&#x201d;, that there is nothing
        /// in <see cref="PreviousStates"/>.
        /// </summary>
        /// <seealso cref="Libplanet.Tx.Transaction{T}.Create"/>
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
    }
}
