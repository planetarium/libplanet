using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// An delegate to provide read-only view of account balances.
    /// <para>Gets <paramref name="address"/>' balance of the given <paramref name="currency"/>.
    /// </para>
    /// </summary>
    /// <param name="address">An address of the account to query its balance of
    /// the <paramref name="currency"/>.</param>
    /// <param name="currency">The currency type to query <paramref name="address"/>' balance.
    /// </param>
    /// <returns>
    /// The <paramref name="address"/>'s balance of the <paramref name="currency"/>.
    /// </returns>
    public delegate FungibleAssetValue AccountBalanceGetter(Address address, Currency currency);
}
