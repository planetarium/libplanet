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
    /// <see cref="FungibleAssetValue"/>, or null if there were no former total supply value.
    /// </returns>
    /// <remarks>Note that you must not return the value of <paramref name="currency"/> * 0 if
    /// <see cref="Currency.TotalSupplyTrackable"/> is <c>true</c> and there is no former
    /// total supply value, as this will stop <see cref="IAccountStateDelta"/> from initializing
    /// the total supply of the <paramref name="currency"/>.</remarks>
    public delegate FungibleAssetValue? TotalSupplyGetter(Currency currency);
}
