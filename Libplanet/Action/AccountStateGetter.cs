namespace Libplanet.Action
{
    /// <summary>
    /// An delegate to provide read-only view of account states.
    /// <para>Gets an account state of the given
    /// <paramref name="address"/>.</para>
    /// <para>If the given <paramref name="address"/> has never been set
    /// its account status, returns <c>null</c> instead of throwing
    /// any exception.</para>
    /// </summary>
    /// <param name="address">An address of the account to read
    /// its state.</param>
    /// <returns>The account state if exists.  Otherwise <c>null</c>.
    /// </returns>
    public delegate object AccountStateGetter(Address address);
}
