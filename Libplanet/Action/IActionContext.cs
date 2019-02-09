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
        Address From { get; }

        /// <summary>
        /// <see cref="Address"/> of an account who receives a transaction that
        /// an executed <see cref="IAction"/> belongs to.
        /// </summary>
        Address To { get; }

        /// <summary>
        /// The state of accounts related to query before <see cref="IAction"/>
        /// executes.  Those addresses are determined by
        /// <see cref="IAction.RequestStates(Address, Address)"/> method.
        /// </summary>
        /// <seealso cref="IAction.RequestStates(Address, Address)"/>
        AddressStateMap PreviousStates { get; }

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
