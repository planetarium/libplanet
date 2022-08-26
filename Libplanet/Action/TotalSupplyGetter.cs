using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// An delegate to provide a view of total supply of a currency.
    /// <para>Gets the total supply of the given <paramref name="currency"/>.
    /// </para>
    /// </summary>
    /// <param name="currency">The currency type to query the total supply.
    /// </param>
    /// <returns>The total supply value of the <paramref name="currency"/> in
    /// <see cref="FungibleAssetValue"/>.
    /// <exception cref="TotalSupplyNotTrackableException">Thrown when the total supply of the
    /// given <paramref name="currency"/> is not trackable.</exception>
    /// </returns>
    public delegate FungibleAssetValue TotalSupplyGetter(Currency currency);
}
